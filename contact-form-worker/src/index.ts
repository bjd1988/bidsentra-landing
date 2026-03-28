interface Env {
  BREVO_API_KEY: string;
  BREVO_SENDER_NAME: string;
  BREVO_SENDER_EMAIL: string;
  BREVO_RECEIVER_EMAIL: string;
  ALLOWED_ORIGINS: string;
  BREVO_AUTOREPLY_TEMPLATE_ID?: string;
}

// Keep a small timing trap for bots, but avoid dropping fast human submissions.
const MIN_SUBMIT_DELAY_MS = 800;
const MAX_NAME_LENGTH = 120;
const MAX_MESSAGE_LENGTH = 5000;
const MIN_MESSAGE_LENGTH = 3;

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function okResponse(origin: string | null, env: Env) {
  return jsonResponse({ status: "ok" }, 200, origin, env);
}

function getAllowedOrigin(origin: string | null, env: Env) {
  if (!origin) return null;

  const allowedOrigins = env.ALLOWED_ORIGINS.split(",").map((item) =>
    item.trim()
  );

  if (allowedOrigins.includes(origin)) {
    return origin;
  }

  try {
    const originUrl = new URL(origin);

    if (
      originUrl.hostname === "bidsentra.pl" ||
      originUrl.hostname === "www.bidsentra.pl"
    ) {
      return origin;
    }
  } catch {
    return null;
  }

  return null;
}

function corsHeaders(origin: string | null, env: Env) {
  const allowedOrigin = getAllowedOrigin(origin, env);

  return {
    "Access-Control-Allow-Origin": allowedOrigin ?? "https://bjd1988.github.io",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    Vary: "Origin",
  };
}

function jsonResponse(
  body: Record<string, string>,
  status: number,
  origin: string | null,
  env: Env
) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders(origin, env),
    },
  });
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

async function sendBrevoEmail(
  env: Env,
  payload: Record<string, unknown>
): Promise<Response> {
  return fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      accept: "application/json",
      "api-key": env.BREVO_API_KEY,
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = request.headers.get("Origin");

    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders(origin, env),
      });
    }

    if (request.method !== "POST") {
      return jsonResponse(
        { error: "Method not allowed" },
        405,
        origin,
        env
      );
    }

    if (!getAllowedOrigin(origin, env) && origin !== null) {
      return jsonResponse({ error: "Origin not allowed" }, 403, origin, env);
    }

    const formData = await request.formData();
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const website = String(formData.get("website") ?? "").trim();
    const startedAt = Number(String(formData.get("startedAt") ?? "").trim());

    if (website) {
      return okResponse(origin, env);
    }

    if (!Number.isFinite(startedAt) || Date.now() - startedAt < MIN_SUBMIT_DELAY_MS) {
      return okResponse(origin, env);
    }

    if (!name || !email || !message) {
      return jsonResponse(
        { error: "Missing required fields" },
        400,
        origin,
        env
      );
    }

    if (
      name.length > MAX_NAME_LENGTH ||
      message.length < MIN_MESSAGE_LENGTH ||
      message.length > MAX_MESSAGE_LENGTH ||
      !isValidEmail(email)
    ) {
      return jsonResponse(
        { error: "Validation failed" },
        400,
        origin,
        env
      );
    }

    const htmlContent = `
      <h2>Nowa wiadomość z formularza BidSentra</h2>
      <p><strong>Imię:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Wiadomość:</strong></p>
      <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
    `;

    const textContent = [
      "Nowa wiadomość z formularza BidSentra",
      "",
      `Imię: ${name}`,
      `Email: ${email}`,
      "",
      "Wiadomość:",
      message,
    ].join("\n");

    const brevoResponse = await sendBrevoEmail(env, {
      sender: {
        name: env.BREVO_SENDER_NAME,
        email: env.BREVO_SENDER_EMAIL,
      },
      to: [{ email: env.BREVO_RECEIVER_EMAIL }],
      replyTo: {
        email,
        name,
      },
      subject: "Nowa wiadomość z formularza BidSentra",
      htmlContent,
      textContent,
    });

    if (!brevoResponse.ok) {
      const errorText = await brevoResponse.text();
      console.error("Brevo error:", errorText);

      return jsonResponse(
        { error: "Email delivery failed" },
        502,
        origin,
        env
      );
    }

    const autoreplyTemplateId = Number(env.BREVO_AUTOREPLY_TEMPLATE_ID ?? "");

    if (Number.isFinite(autoreplyTemplateId) && autoreplyTemplateId > 0) {
      const autoreplyResponse = await sendBrevoEmail(env, {
        sender: {
          name: env.BREVO_SENDER_NAME,
          email: env.BREVO_SENDER_EMAIL,
        },
        to: [{ email, name }],
        replyTo: {
          email: env.BREVO_RECEIVER_EMAIL,
          name: env.BREVO_SENDER_NAME,
        },
        templateId: autoreplyTemplateId,
        params: {
          firstName: name,
          receiverEmail: env.BREVO_RECEIVER_EMAIL,
        },
      });

      if (!autoreplyResponse.ok) {
        const errorText = await autoreplyResponse.text();
        console.error("Brevo autoreply error:", errorText);
      }
    }

    return okResponse(origin, env);
  },
};
