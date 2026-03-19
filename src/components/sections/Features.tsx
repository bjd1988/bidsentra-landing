"use client";

import {
  Search,
  FileEdit,
  BarChart3,
  Link2,
  BookOpen,
  ShieldCheck,
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const features = [
  {
    icon: Search,
    title: "Analiza semantyczna dokumentów (NLP)",
    desc: "System rozumie kontekst zapisów prawnych, klasyfikuje wymagania i automatycznie identyfikuje ryzyka w dokumentacji przetargowej.",
    tag: "AI / NLP",
  },
  {
    icon: FileEdit,
    title: "AI Draft Generator",
    desc: "Automatyczne tworzenie struktury i treści ofert zgodnych z PZP. System łączy dane przetargowe z Twoimi referencjami i certyfikatami.",
    tag: "RAG Architecture",
  },
  {
    icon: BarChart3,
    title: "Bid Score™ — scoring ML",
    desc: "Innowacyjny algorytm ML rekomenduje optymalne strategie przetargowe na podstawie danych.",
    tag: "Machine Learning",
  },
  {
    icon: Link2,
    title: "Integracje ERP / CRM / BIM",
    desc: "Otwarte API umożliwia integrację z istniejącymi systemami. Dane o kosztach i zasobach automatycznie zasilają proces ofertowania.",
    tag: "API First",
  },
  {
    icon: BookOpen,
    title: "Repozytorium wiedzy organizacyjnej",
    desc: "System uczy się na historii Twoich ofert, stopniowo poprawiając jakość rekomendacji i przewidywanie ryzyk projektowych.",
    tag: "Self-learning",
  },
  {
    icon: ShieldCheck,
    title: "Walidacja zgodności z PZP",
    desc: "Automatyczna weryfikacja kompletności dokumentów i zgodności z wymogami zamawiającego — eliminuje błędy skutkujące odrzuceniem oferty.",
    tag: "Compliance",
  },
];

export function Features() {
  return (
    <section className="bg-dark-teal py-20 md:py-28" id="funkcje">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.12em] uppercase text-mid-teal mb-3">
              Kluczowe funkcjonalności
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Technologia, która zmienia zasady gry
            </h2>
            <p className="text-base text-white/65 max-w-2xl mx-auto leading-relaxed">
              BidSentra łączy zaawansowane AI z praktyczną znajomością polskiego
              rynku zamówień publicznych.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <FadeIn key={feat.title} delay={i * 0.08}>
              <div className="bg-white/5 border border-mid-teal/15 rounded-2xl p-8 hover:bg-white/8 hover:border-mid-teal/40 hover:-translate-y-1 transition-all h-full flex flex-col">
                <div className="w-13 h-13 rounded-xl bg-mid-teal/15 flex items-center justify-center mb-5">
                  <feat.icon size={24} className="text-mid-teal" />
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
          ))}
        </div>
      </div>
    </section>
  );
}
