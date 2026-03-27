"use client";

import { CheckCircle } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

interface CTAProps {
  title: string;
  titleHighlight: string;
  description: string;
  trustBadges: string[];
  emailButtonText: string;
  emailAddress: string;
  tallyFormUrl?: string;
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
  tallyFormUrl,
  formLabels,
  bottomNote,
}: CTAProps) {
  const normalizedTallyUrl = tallyFormUrl?.trim();
  const hasTallyEmbed = Boolean(normalizedTallyUrl);
  const tallyEmbedUrl = normalizedTallyUrl
    ? normalizedTallyUrl
        .replace("://tally.so/r/", "://tally.so/embed/")
        .concat(
          normalizedTallyUrl.includes("?")
            ? "&transparentBackground=1&dynamicHeight=1"
            : "?transparentBackground=1&dynamicHeight=1"
        )
    : "";

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
              {hasTallyEmbed ? (
                <div className="overflow-hidden rounded-xl bg-white">
                  <iframe
                    src={tallyEmbedUrl}
                    title="Formularz kontaktowy BidSentra"
                    className="h-[640px] w-full border-0"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="flex min-h-[640px] flex-col items-center justify-center text-center">
                  <CheckCircle size={48} className="mx-auto mb-4 text-lime" />
                  <h3 className="mb-2 text-lg font-bold text-white">
                    Formularz Tally jest gotowy do podpięcia
                  </h3>
                  <p className="max-w-md text-sm text-white/70">
                    Wklej opublikowany link formularza Tally w ustawieniu
                    `tallyFormUrl`, a ta sekcja automatycznie pokaże osadzony
                    formularz.
                  </p>
                  <a
                    href={`mailto:${emailAddress}`}
                    className="mt-6 inline-flex items-center gap-2 rounded-lg bg-lime px-6 py-3 text-sm font-bold text-text-dark transition-colors hover:bg-lime-dark"
                  >
                    Napisz na {emailAddress}
                  </a>
                </div>
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
