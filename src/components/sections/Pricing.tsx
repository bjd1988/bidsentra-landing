"use client";

import { Check } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

interface PricingProps {
  sectionLabel: string;
  title: string;
  subtitle: string;
  plans: {
    name: string;
    target: string;
    featured: boolean;
    badge?: string;
    features: string[];
    cta: string;
  }[];
}

export function Pricing({
  sectionLabel,
  title,
  subtitle,
  plans,
}: PricingProps) {
  return (
    <section className="py-20 md:py-28 bg-white" id="cennik">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.12em] uppercase text-mid-teal mb-3">
              {sectionLabel}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-5">
              {title}
            </h2>
            <p className="text-base text-text-mid max-w-xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.1}>
              <div
                className={`relative rounded-2xl p-8 transition-all h-full ${
                  plan.featured
                    ? "bg-dark-teal text-white scale-[1.02] shadow-2xl"
                    : "bg-white border border-light-gray"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-lime text-text-dark text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                    {plan.badge}
                  </div>
                )}

                <p className="text-xs font-bold tracking-widest uppercase mb-3 text-mid-teal">
                  {plan.name}
                </p>
                <h3
                  className={`text-lg font-bold mb-6 ${
                    plan.featured ? "text-white" : "text-text-dark"
                  }`}
                >
                  {plan.target}
                </h3>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feat) => (
                    <li
                      key={feat}
                      className={`flex items-start gap-2.5 text-sm leading-relaxed ${
                        plan.featured ? "text-white/75" : "text-text-mid"
                      }`}
                    >
                      <Check
                        size={16}
                        className={`shrink-0 mt-0.5 ${
                          plan.featured ? "text-lime" : "text-mid-teal"
                        }`}
                      />
                      {feat}
                    </li>
                  ))}
                </ul>

                <a
                  href="#kontakt"
                  className={`block text-center py-3.5 rounded-lg font-bold text-sm transition-all ${
                    plan.featured
                      ? "bg-lime text-text-dark hover:bg-lime-dark"
                      : "border-2 border-dark-teal text-dark-teal hover:bg-dark-teal hover:text-white"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
