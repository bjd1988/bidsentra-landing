"use client";

import { useState } from "react";
import { CheckCircle, Send, Loader2 } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

interface CTAProps {
  title: string;
  titleHighlight: string;
  description: string;
  trustBadges: string[];
  emailButtonText: string;
  emailAddress: string;
  formEndpoint?: string;
  formLabels: {
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    sending: string;
    thankYouTitle: string;
    thankYouMessage: string;
    errorTitle: string;
    errorMessageBeforeEmail: string;
    errorMessageAfterEmail: string;
    backToForm: string;
  };
  bottomNote: string;
}

export function CTA({
  title,
  titleHighlight,
  description,
  trustBadges,
  emailButtonText,
  emailAddress,
  formEndpoint,
  formLabels,
  bottomNote,
}: CTAProps) {
  const [formState, setFormState] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");
  const normalizedEndpoint = formEndpoint?.trim();
  const [formStartedAt, setFormStartedAt] = useState(() => Date.now());

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!normalizedEndpoint) {
      setFormState("error");
      return;
    }

    setFormState("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(normalizedEndpoint, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setFormState("sent");
      form.reset();
      setFormStartedAt(Date.now());
    } catch {
      setFormState("error");
    }
  };

  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      id="kontakt"
      style={{
        background: "linear-gradient(135deg, #003D4D 0%, #005570 100%)",
      }}
    >
      <div className="absolute left-[-100px] top-[-100px] w-[400px] h-[400px] bg-lime/6 rounded-full" />
      <div className="absolute right-[-80px] bottom-[-80px] w-[300px] h-[300px] bg-mid-teal/10 rounded-full" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {title}{" "}
              <span className="text-lime">{titleHighlight}</span>
            </h2>
            <p className="text-base text-white/70 max-w-xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Left: Trust badges */}
          <FadeIn>
            <div className="space-y-5">
              {trustBadges.map((badge) => (
                <div key={badge} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-lime shrink-0" />
                  <span className="text-white/85 font-semibold text-sm tracking-wider">
                    {badge}
                  </span>
                </div>
              ))}

              <div className="pt-6">
                <a
                  href={`mailto:${emailAddress}`}
                  className="inline-flex items-center gap-2 bg-lime text-text-dark px-8 py-4 rounded-lg font-bold text-base hover:bg-lime-dark hover:-translate-y-0.5 transition-all"
                >
                  {emailButtonText}
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Right: Contact form */}
          <FadeIn delay={0.15}>
            <div className="bg-white/10 border border-white/15 rounded-2xl p-7 backdrop-blur-sm">
              {formState === "sent" ? (
                <div className="text-center py-8">
                  <CheckCircle
                    size={48}
                    className="text-lime mx-auto mb-4"
                  />
                  <h3 className="text-white text-lg font-bold mb-2">
                    {formLabels.thankYouTitle}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {formLabels.thankYouMessage}
                  </p>
                </div>
              ) : formState === "error" ? (
                <div className="text-center py-8">
                  <h3 className="text-white text-lg font-bold mb-2">
                    {formLabels.errorTitle}
                  </h3>
                  <p className="text-white/70 text-sm mb-5">
                    {formLabels.errorMessageBeforeEmail}
                    <a
                      href={`mailto:${emailAddress}`}
                      className="text-lime hover:text-lime-dark transition-colors"
                    >
                      {emailAddress}
                    </a>
                    {formLabels.errorMessageAfterEmail}
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormState("idle")}
                    className="inline-flex items-center justify-center rounded-lg bg-lime px-5 py-3 text-sm font-bold text-text-dark transition-colors hover:bg-lime-dark"
                  >
                    {formLabels.backToForm}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="hidden"
                    name="startedAt"
                    value={String(formStartedAt)}
                  />
                  <div className="hidden" aria-hidden="true">
                    <label>
                      Website
                      <input
                        name="website"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        defaultValue=""
                      />
                    </label>
                  </div>
                  <div>
                    <label className="text-xs text-white/60 font-medium block mb-1.5">
                      {formLabels.name}
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-mid-teal/50 focus:border-mid-teal transition-colors"
                      placeholder={formLabels.namePlaceholder}
                    />
                  </div>
                  <div>
                    <label className="text-xs text-white/60 font-medium block mb-1.5">
                      {formLabels.email}
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-mid-teal/50 focus:border-mid-teal transition-colors"
                      placeholder={formLabels.emailPlaceholder}
                    />
                  </div>
                  <div>
                    <label className="text-xs text-white/60 font-medium block mb-1.5">
                      {formLabels.message}
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-mid-teal/50 focus:border-mid-teal transition-colors resize-none"
                      placeholder={formLabels.messagePlaceholder}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={formState === "sending"}
                    className="w-full bg-lime text-text-dark py-3.5 rounded-lg font-bold text-sm hover:bg-lime-dark transition-colors flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
                  >
                    {formState === "sending" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        {formLabels.sending}
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        {formLabels.submit}
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>

        <p className="text-center text-xs text-white/40 mt-10">
          {bottomNote}
        </p>
      </div>
    </section>
  );
}
