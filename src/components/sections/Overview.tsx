"use client";

import { CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

interface OverviewCard {
  eyebrow: string;
  title: string;
  points: string[];
}

interface OverviewProps {
  sectionLabel: string;
  title: string;
  intro: string;
  cards: OverviewCard[];
  bottomLine: string;
}

export function Overview({
  sectionLabel,
  title,
  intro,
  cards,
  bottomLine,
}: OverviewProps) {
  return (
    <section className="bg-white py-16 md:py-20" id="o-bidsentra">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <FadeIn>
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-[0.12em] uppercase text-mid-teal mb-3">
              {sectionLabel}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-5">
              {title}
            </h2>
            <p className="text-base md:text-lg text-text-mid leading-relaxed">
              {intro}
            </p>
          </div>
        </FadeIn>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cards.map((card, index) => (
            <FadeIn key={card.title} delay={index * 0.08}>
              <article className="h-full rounded-2xl border border-light-gray bg-off-white p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-mid-teal mb-3">
                  {card.eyebrow}
                </p>
                <h3 className="text-lg font-bold text-text-dark leading-snug mb-4">
                  {card.title}
                </h3>
                <ul className="space-y-3">
                  {card.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className="shrink-0 text-mid-teal mt-0.5"
                      />
                      <span className="text-sm leading-relaxed text-text-mid">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-8 rounded-2xl bg-dark-teal px-6 py-5 text-white/85">
            <p className="text-sm md:text-base leading-relaxed">{bottomLine}</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
