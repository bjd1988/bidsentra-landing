"use client";

import { Star } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

interface TestimonialsProps {
  sectionLabel: string;
  title: string;
  disclaimer: string;
  items: { quote: string; name: string; role: string; company: string }[];
}

export function Testimonials({
  sectionLabel,
  title,
  disclaimer,
  items,
}: TestimonialsProps) {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.12em] uppercase text-mid-teal mb-3">
              {sectionLabel}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark">
              {title}
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <div className="border border-light-gray rounded-2xl p-7 hover:shadow-lg hover:-translate-y-1 transition-all h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={16}
                      className="text-lime fill-lime"
                    />
                  ))}
                </div>
                <p className="text-sm text-text-mid leading-relaxed flex-1 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 pt-5 border-t border-light-gray">
                  <div className="font-bold text-sm">{t.name}</div>
                  <div className="text-xs text-text-mid mt-0.5">
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <p className="text-center text-xs text-text-mid/50 mt-8">
          {disclaimer}
        </p>
      </div>
    </section>
  );
}
