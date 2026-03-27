"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

interface HeroProps {
  badge: string;
  titleWhite: string;
  titleHighlight: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
  card: {
    title: string;
    rows: { label: string; value: string }[];
    bidScore: string;
    pzpCompliance: string;
    docCompleteness: number;
    winChance: number;
    bidScoreLabel: string;
    complianceLabel: string;
    docCompletenessLabel: string;
    winChanceLabel: string;
  };
}

export function Hero({
  badge,
  titleWhite,
  titleHighlight,
  description,
  ctaPrimary,
  ctaSecondary,
  card,
}: HeroProps) {
  return (
    <section className="relative min-h-screen bg-dark-teal flex items-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute right-[-120px] top-[-120px] w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(91,184,200,0.15)_0%,transparent_70%)] rounded-full" />
      <div className="absolute right-[10%] bottom-[-60px] w-[300px] h-[300px] bg-lime/8 rounded-full animate-pulse" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-8 pt-28 pb-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 bg-mid-teal/15 border border-mid-teal/35 text-mid-teal px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-7">
            <Shield size={14} />
            {badge}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-white leading-[1.08] mb-6">
            {titleWhite}{" "}
            <span className="text-lime">{titleHighlight}</span>
          </h1>

          <p className="text-lg text-white/70 leading-relaxed max-w-xl mb-10">
            {description}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#kontakt"
              className="bg-lime text-text-dark px-8 py-4 rounded-lg font-bold text-base hover:bg-lime-dark hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(200,212,74,0.35)] transition-all inline-flex items-center gap-2"
            >
              {ctaPrimary}
              <span aria-hidden>→</span>
            </a>
            <a
              href="#jak-dziala"
              className="bg-transparent text-white px-8 py-4 rounded-lg font-semibold text-base border border-white/30 hover:border-mid-teal hover:text-mid-teal transition-all inline-flex items-center gap-2"
            >
              <span aria-hidden>▷</span>
              {ctaSecondary}
            </a>
          </div>
        </motion.div>

        {/* Right: Floating card */}
        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="bg-white/6 border border-mid-teal/20 rounded-2xl p-7 backdrop-blur-sm animate-[float_5s_ease-in-out_infinite]">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-lime" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="ml-2 text-white/40 text-xs">
                {card.title}
              </span>
            </div>

            {card.rows.map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between py-3 border-b border-white/7 text-sm"
              >
                <span className="text-white/55">{row.label}</span>
                <span className="text-white font-semibold">{row.value}</span>
              </div>
            ))}

            <div className="flex items-center justify-between py-3 border-b border-white/7 text-sm">
              <span className="text-white/55">{card.bidScoreLabel}:</span>
              <span className="bg-lime text-text-dark px-3 py-0.5 rounded-xl text-xs font-bold">
                {card.bidScore}
              </span>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-white/7 text-sm">
              <span className="text-white/55">{card.complianceLabel}:</span>
              <span className="bg-mid-teal/20 text-mid-teal px-3 py-0.5 rounded-xl text-xs font-semibold">
                {card.pzpCompliance}
              </span>
            </div>

            <div className="pt-4">
              <div className="text-xs text-white/40 mb-2">{card.docCompletenessLabel}</div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-mid-teal to-lime"
                  style={{ width: `${card.docCompleteness}%` }}
                />
              </div>
              <div className="text-xs text-white/50 text-right mt-1">{card.docCompleteness}%</div>
            </div>

            <div className="pt-2">
              <div className="text-xs text-white/40 mb-2">{card.winChanceLabel}</div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-mid-teal to-lime"
                  style={{ width: `${card.winChance}%` }}
                />
              </div>
              <div className="text-xs text-white/50 text-right mt-1">{card.winChance}%</div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }
      `}</style>
    </section>
  );
}
