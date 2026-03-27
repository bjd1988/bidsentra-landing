"use client";

import {
  Search,
  FileEdit,
  BarChart3,
  Link2,
  BookOpen,
  ShieldCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const iconMap: Record<string, LucideIcon> = {
  Search,
  FileEdit,
  BarChart3,
  Link2,
  BookOpen,
  ShieldCheck,
};

interface FeaturesProps {
  sectionLabel: string;
  title: string;
  subtitle: string;
  items: { icon: string; title: string; desc: string; tag: string }[];
}

export function Features({
  sectionLabel,
  title,
  subtitle,
  items,
}: FeaturesProps) {
  return (
    <section className="bg-dark-teal py-20 md:py-28" id="funkcje">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.12em] uppercase text-mid-teal mb-3">
              {sectionLabel}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              {title}
            </h2>
            <p className="text-base text-white/65 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((feat, i) => {
            const Icon = iconMap[feat.icon] || Search;
            return (
              <FadeIn key={feat.title} delay={i * 0.08}>
                <div className="bg-white/5 border border-mid-teal/15 rounded-2xl p-8 hover:bg-white/8 hover:border-mid-teal/40 hover:-translate-y-1 transition-all h-full flex flex-col">
                  <div className="w-13 h-13 rounded-xl bg-mid-teal/15 flex items-center justify-center mb-5">
                    <Icon size={24} className="text-mid-teal" />
                  </div>
                  <h3 className="font-bold text-base text-white mb-3">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed flex-1">
                    {feat.desc}
                  </p>
                  <span className="inline-block mt-4 bg-lime/15 text-lime px-3 py-1 rounded-md text-xs font-semibold w-fit">
                    {feat.tag}
                  </span>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
