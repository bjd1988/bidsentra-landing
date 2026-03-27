"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

interface FAQProps {
  sectionLabel: string;
  title: string;
  subtitle: string;
  items: { q: string; a: string }[];
}

export function FAQ({ sectionLabel, title, subtitle, items }: FAQProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 bg-off-white" id="faq">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.12em] uppercase text-mid-teal mb-3">
              {sectionLabel}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-5">
              {title}
            </h2>
            <p className="text-base text-text-mid leading-relaxed">
              {subtitle}
            </p>
          </div>
        </FadeIn>

        <div className="space-y-3">
          {items.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="bg-white rounded-xl border border-light-gray overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span className="font-semibold text-sm pr-4">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-text-mid transition-transform ${
                      open === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {open === i && (
                  <div className="px-5 pb-5 -mt-1">
                    <p className="text-sm text-text-mid leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
