"use client";

import { Upload, Brain, BarChart3, FileOutput, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const steps = [
  {
    num: "01",
    icon: Upload,
    title: "Wgraj dokumentację",
    desc: "Wklej link do przetargu lub załaduj SWZ, OPZ, PFU. BidSentra automatycznie pobiera dokumenty z BZP, TED i e-Zamówień.",
  },
  {
    num: "02",
    icon: Brain,
    title: "AI analizuje wymagania",
    desc: "Silnik NLP/LLM wyodrębnia kluczowe wymagania formalne, techniczne i finansowe. Identyfikuje ryzyka i pułapki.",
  },
  {
    num: "03",
    icon: BarChart3,
    title: "Sprawdź Bid Score™",
    desc: "Moduł ML ocenia atrakcyjność przetargu i szanse na podstawie Twoich danych i parametrów rynkowych.",
  },
  {
    num: "04",
    icon: FileOutput,
    title: "Generuj ofertę",
    desc: "AI Draft Generator tworzy kompletną ofertę zgodną z PZP, czerpiąc z Twojego repozytorium wiedzy (referencje, certyfikaty, szablony).",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-white" id="jak-dziala">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.12em] uppercase text-mid-teal mb-3">
              Jak to działa
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-5">
              Od dokumentacji do oferty w 4 krokach
            </h2>
            <p className="text-base text-text-mid max-w-2xl mx-auto leading-relaxed">
              BidSentra prowadzi Twój zespół przez cały proces ofertowania — od
              analizy SWZ po finalną ofertę gotową do złożenia.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <FadeIn key={step.num} delay={i * 0.1}>
              <div className="relative border border-light-gray rounded-2xl p-6 hover:border-mid-teal hover:-translate-y-1 hover:shadow-lg transition-all group h-full">
                <div className="text-5xl font-black text-light-gray group-hover:text-lime transition-colors leading-none mb-5">
                  {step.num}
                </div>
                <div className="w-10 h-10 rounded-xl bg-mid-teal/10 flex items-center justify-center mb-4">
                  <step.icon size={20} className="text-mid-teal" />
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
          ))}
        </div>
      </div>
    </section>
  );
}
