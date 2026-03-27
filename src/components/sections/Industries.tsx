"use client";

import { Building2, Monitor, Zap, Target } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Monitor,
  Zap,
  Target,
};

interface IndustriesProps {
  sectionLabel: string;
  title: string;
  subtitle: string;
  items: { icon: string; title: string; desc: string }[];
  quoteText: string;
  quoteAuthor: string;
}

export function Industries({
  sectionLabel,
  title,
  subtitle,
  items,
  quoteText,
  quoteAuthor,
}: IndustriesProps) {
  return (
    <section className="bg-off-white py-20 md:py-28" id="sektory">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.12em] uppercase text-mid-teal mb-3">
              {sectionLabel}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-5">
              {title}
            </h2>
            <p className="text-base text-text-mid max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((ind, i) => {
            const Icon = iconMap[ind.icon] || Building2;
            return (
              <FadeIn key={ind.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-7 border border-light-gray hover:border-dark-teal hover:-translate-y-1 hover:shadow-lg transition-all text-center h-full">
                  <div className="w-14 h-14 rounded-2xl bg-mid-teal/10 flex items-center justify-center mx-auto mb-4">
                    <Icon size={26} className="text-mid-teal" />
                  </div>
                  <h3 className="font-bold text-base mb-2">{ind.title}</h3>
                  <p className="text-sm text-text-mid leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Quote */}
        <FadeIn>
          <div className="mt-16 bg-dark-teal rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute left-[-100px] top-[-100px] w-[400px] h-[400px] bg-lime/6 rounded-full" />
            <div className="relative z-10">
              <div className="text-5xl text-lime font-serif leading-none mb-4">
                &ldquo;
              </div>
              <p className="text-lg text-white/85 leading-relaxed max-w-3xl mx-auto font-light italic">
                {quoteText}
              </p>
              <p className="mt-6 text-sm text-mid-teal font-semibold">
                {quoteAuthor}
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
