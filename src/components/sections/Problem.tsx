"use client";

import {
  Clock,
  FileText,
  AlertTriangle,
  RefreshCw,
  CheckCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const iconMap: Record<string, LucideIcon> = {
  FileText,
  Clock,
  AlertTriangle,
  RefreshCw,
};

interface ProblemProps {
  sectionLabel: string;
  title: string;
  subtitle: string;
  traditionalLabel: string;
  bidsentraLabel: string;
  painPoints: { icon: string; title: string; desc: string }[];
  solutions: string[];
  marketStats: { val: string; lbl: string }[];
}

export function Problem({
  sectionLabel,
  title,
  subtitle,
  traditionalLabel,
  bidsentraLabel,
  painPoints,
  solutions,
  marketStats,
}: ProblemProps) {
  return (
    <section className="bg-off-white py-20 md:py-28" id="problem">
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

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Traditional process */}
          <FadeIn>
            <h3 className="text-lg font-bold text-text-dark mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              {traditionalLabel}
            </h3>
            <div className="space-y-1">
              {painPoints.map((point) => {
                const Icon = iconMap[point.icon] || FileText;
                return (
                  <div
                    key={point.title}
                    className="flex gap-4 py-5 border-b border-light-gray last:border-b-0"
                  >
                    <div className="w-11 h-11 rounded-xl bg-dark-teal/6 flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-dark-teal/70" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-1">{point.title}</h4>
                      <p className="text-sm text-text-mid leading-relaxed">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeIn>

          {/* Right: BidSentra solution */}
          <FadeIn delay={0.15}>
            <h3 className="text-lg font-bold text-text-dark mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-lime" />
              {bidsentraLabel}
            </h3>
            <div className="bg-dark-teal rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute right-[-40px] bottom-[-40px] w-40 h-40 bg-lime/12 rounded-full" />
              <div className="relative z-10 space-y-5">
                {solutions.map((sol) => (
                  <div key={sol} className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      className="text-lime shrink-0 mt-0.5"
                    />
                    <span className="text-white/85 text-sm leading-relaxed">
                      {sol}
                    </span>
                  </div>
                ))}
              </div>

              <div className="relative z-10 mt-8 grid grid-cols-2 gap-4">
                {marketStats.map((m) => (
                  <div key={m.val} className="bg-white/7 rounded-xl p-4">
                    <div className="text-xl font-extrabold text-mid-teal">
                      {m.val}
                    </div>
                    <div className="text-xs text-white/55 mt-1">{m.lbl}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
