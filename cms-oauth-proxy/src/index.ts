import { OAuthClient } from "./oauth";

interface Env {
  GITHUB_OAUTH_ID: string;
  GITHUB_OAUTH_SECRET: string;
  GITHUB_REPO_PRIVATE?: string;
}

function randomHex(bytes: number) {
  const buf = new Uint8Array(bytes);
  crypto.getRandomValues(buf);

  return Array.from(buf)
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function createOAuth(env: Env) {
  return new OAuthClient({
    id: env.GITHUB_OAUTH_ID,
    secret: env.GITHUB_OAUTH_SECRET,
    target: {
      tokenHost: "https://github.com",
      tokenPath: "/login/oauth/access_token",
      authorizePath: "/login/oauth/authorize",
    },
  });
}

function callbackScriptResponse(status: string, token: string) {
  return new Response(
    `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>BidSentra CMS Auth</title>
    <script>
      const receiveMessage = () => {
        window.opener.postMessage(
          "authorization:github:${status}:${JSON.stringify({ token })}",
          "*"
        );
        window.removeEventListener("message", receiveMessage, false);
      };
      window.addEventListener("message", receiveMessage, false);
      window.opener.postMessage("authorizing:github", "*");
    </script>
  </head>
  <body>
    <p>Authorizing Decap CMS...</p>
  </body>
</html>`,
    {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
      },
    }
  );
}

async function handleAuth(url: URL, env: Env) {
  if (url.searchParams.get("provider") !== "github") {
    return new Response("Invalid provider", { status: 400 });
  }

  const repoIsPrivate =
    env.GITHUB_REPO_PRIVATE !== undefined && env.GITHUB_REPO_PRIVATE !== "0";
  const scope = repoIsPrivate ? "repo,user" : "public_repo,user";
  const oauth = createOAuth(env);
  const redirectUri = `${url.origin}/callback?provider=github`;

  return Response.redirect(
    oauth.authorizeURL({
      redirect_uri: redirectUri,
      scope,
      state: randomHex(8),
    }),
    302
  );
}

async function handleCallback(url: URL, env: Env) {
  if (url.searchParams.get("provider") !== "github") {
    return new Response("Invalid provider", { status: 400 });
  }

  const code = url.searchParams.get("code");

  if (!code) {
    return new Response("Missing code", { status: 400 });
  }

  const oauth = createOAuth(env);
  const redirectUri = `${url.origin}/callback?provider=github`;
  const token = await oauth.getToken({
    code,
    redirect_uri: redirectUri,
  });

  return callbackScriptResponse("success", token);
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/auth") {
      return handleAuth(url, env);
    }

    if (url.pathname === "/callback") {
      return handleCallback(url, env);
    }

    return new Response("BidSentra Decap OAuth Proxy is running.");
  },
};
