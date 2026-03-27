"use client";

import {
  Upload,
  Brain,
  BarChart3,
  FileOutput,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const iconMap: Record<string, LucideIcon> = {
  Upload,
  Brain,
  BarChart3,
  FileOutput,
};

interface HowItWorksProps {
  sectionLabel: string;
  title: string;
  subtitle: string;
  steps: { num: string; icon: string; title: string; desc: string }[];
}

export function HowItWorks({
  sectionLabel,
  title,
  subtitle,
  steps,
}: HowItWorksProps) {
  return (
    <section className="py-20 md:py-28 bg-white" id="jak-dziala">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const Icon = iconMap[step.icon] || Upload;
            return (
              <FadeIn key={step.num} delay={i * 0.1}>
                <div className="relative border border-light-gray rounded-2xl p-6 hover:border-mid-teal hover:-translate-y-1 hover:shadow-lg transition-all group h-full">
                  <div className="text-5xl font-black text-light-gray group-hover:text-lime transition-colors leading-none mb-5">
                    {step.num}
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-mid-teal/10 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-mid-teal" />
                  </div>
                  <h3 className="font-bold text-base mb-2">{step.title}</h3>
                  <p className="text-sm text-text-mid leading-relaxed">
                    {step.desc}
                  </p>

                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute right-[-18px] top-1/2 -translate-y-1/2 text-light-gray z-10">
                      <ArrowRight size={20} />
                    </div>
                  )}
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
