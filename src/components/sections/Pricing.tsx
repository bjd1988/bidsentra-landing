"use client";

import { Check } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const plans = [
  {
    name: "STARTER",
    target: "Dla MŚP",
    featured: false,
    features: [
      "Analiza dokumentacji AI/NLP",
      "AI Draft Generator (do 10 ofert/mies.)",
      "Bid Score™ — ocena przetargów",
      "Integracja z BZP i TED",
      "Wsparcie e-mail",
    ],
    cta: "Dostępne wkrótce",
  },
  {
    name: "PROFESSIONAL",
    target: "Dla aktywnych uczestników przetargów",
    featured: true,
    badge: "Najpopularniejszy",
    features: [
      "Wszystko ze Starter",
      "Nieograniczona liczba ofert",
      "Repozytorium wiedzy organizacyjnej",
      "Integracja ERP / CRM",
      "Walidacja zgodności PZP krok po kroku",
      "Raportowanie i analityka",
      "Priorytetowe wsparcie",
    ],
    cta: "Dostępne wkrótce",
  },
  {
    name: "ENTERPRISE",
    target: "Dla dużych organizacji",
    featured: false,
    features: [
      "Wszystko z Professional",
      "Dedykowany hosting / on-premise",
      "Integracja BIM i systemy specjalistyczne",
      "Custom model AI na Twoich danych",
      "Szkolenia zespołu ofertowego",
      "Dedykowany opiekun klienta",
    ],
    cta: "Dostępne wkrótce",
  },
];

export function Pricing() {
  return (
    <section className="py-20 md:py-28 bg-white" id="cennik">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.12em] uppercase text-mid-teal mb-3">
              Cennik
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-5">
              Dopasowany do Twoich potrzeb
            </h2>
            <p className="text-base text-text-mid max-w-xl mx-auto leading-relaxed">
              Pierwsze 50 firm — cena zamrożona na 24 miesiące
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

                <p
                  className={`text-xs font-bold tracking-widest uppercase mb-3 ${
                    plan.featured ? "text-mid-teal" : "text-mid-teal"
                  }`}
                >
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
