"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";

interface BenefitsProps {
  sectionLabel: string;
  title: string;
  items: { num: string; title: string; desc: string }[];
  kpisLabel: string;
  kpis: { label: string; value: string; pct: number }[];
  quote: string;
}

export function Benefits({
  sectionLabel,
  title,
  items,
  kpisLabel,
  kpis,
  quote,
}: BenefitsProps) {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 md:py-28 bg-white" id="korzysci">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <FadeIn>
          <div className="mb-14">
            <p className="text-xs font-bold tracking-[0.12em] uppercase text-mid-teal mb-3">
              {sectionLabel}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark">
              {title}
            </h2>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Benefit items */}
          <FadeIn>
            <div className="space-y-3">
              {items.map((b, i) => (
                <div
                  key={b.num}
                  className={`flex gap-5 p-5 rounded-xl border transition-all cursor-default ${
                    active === i
                      ? "border-mid-teal bg-mid-teal/5"
                      : "border-transparent hover:border-light-gray hover:bg-off-white"
                  }`}
                  onMouseEnter={() => setActive(i)}
                >
                  <div
                    className={`text-3xl font-black leading-none shrink-0 transition-colors ${
                      active === i ? "text-dark-teal" : "text-light-gray"
                    }`}
                  >
                    {b.num}
                  </div>
                  <div>
                    <h3 className="font-bold text-base mb-1">{b.title}</h3>
                    <p className="text-sm text-text-mid leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Right: KPI visual */}
          <FadeIn delay={0.15}>
            <div className="bg-dark-teal rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute left-[-60px] bottom-[-60px] w-[250px] h-[250px] bg-mid-teal/10 rounded-full" />
              <div className="relative z-10">
                <p className="text-xs text-white/40 uppercase tracking-wider mb-7">
                  {kpisLabel}
                </p>
                <div className="space-y-6">
                  {kpis.map((kpi) => (
                    <div key={kpi.label}>
                      <div className="text-xs text-white/50 mb-2">
                        {kpi.label}
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-mid-teal to-lime transition-all duration-700"
                            style={{ width: `${kpi.pct}%` }}
                          />
                        </div>
                        <div className="text-base font-extrabold text-lime min-w-[50px] text-right">
                          {kpi.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 bg-off-white rounded-2xl p-6 border border-light-gray">
              <p className="text-base text-text-dark font-medium leading-relaxed italic">
                {quote}
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
