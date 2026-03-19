"use client";

import {
  Clock,
  FileText,
  AlertTriangle,
  RefreshCw,
  CheckCircle,
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const painPoints = [
  {
    icon: FileText,
    title: "Setki stron dokumentacji",
    desc: "SWZ, OPZ, PFU, JEDZ — analiza każdego przetargu wymaga czytania setek stron technicznych zapisów.",
  },
  {
    icon: Clock,
    title: "Tygodnie na jedną ofertę",
    desc: "Przygotowanie oferty do przetargu zajmuje od kilku dni do kilku tygodni, angażując cały dział ofertowania.",
  },
  {
    icon: AlertTriangle,
    title: "Błędy formalne = odrzucenie oferty",
    desc: "Jeden brakujący dokument lub niespełniony wymóg PZP przekreśla całą pracę i kosztuje utratę kontraktu.",
  },
  {
    icon: RefreshCw,
    title: '"Uczymy się na nowo" przy każdym przetargu',
    desc: "Wiedza z poprzednich ofert nie jest wykorzystywana — każdy nowy przetarg zaczyna się od zera.",
  },
];

const solutions = [
  "Lista kluczowych wymagań w kilka minut",
  "Automatyczne sprawdzenie wymaganych kwalifikacji, referencji itp.",
  "Identyfikacja niespójności i braków w specyfikacji",
  "0 błędów formalnych. Pełna zgodność z PZP",
];

export function Problem() {
  return (
    <section className="bg-off-white py-20 md:py-28" id="problem">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.12em] uppercase text-mid-teal mb-3">
              Problem, który rozwiązujemy
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-5">
              Przetargi pochłaniają czas i zasoby
            </h2>
            <p className="text-base text-text-mid max-w-2xl mx-auto leading-relaxed">
              Firmy, które korzystają z BidSentra, składają oferty średnio 4 dni
              szybciej niż konkurencja.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Traditional process */}
          <FadeIn>
            <h3 className="text-lg font-bold text-text-dark mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              Tradycyjny proces
            </h3>
            <div className="space-y-1">
              {painPoints.map((point) => (
                <div
                  key={point.title}
                  className="flex gap-4 py-5 border-b border-light-gray last:border-b-0"
                >
                  <div className="w-11 h-11 rounded-xl bg-dark-teal/6 flex items-center justify-center shrink-0">
                    <point.icon size={20} className="text-dark-teal/70" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">{point.title}</h4>
                    <p className="text-sm text-text-mid leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Right: BidSentra solution */}
          <FadeIn delay={0.15}>
            <h3 className="text-lg font-bold text-text-dark mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-lime" />
              BidSentra
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
                {[
                  { val: "200k+", lbl: "przetargów rocznie w Polsce" },
                  { val: "~60%", lbl: "ofert zawiera błędy formalne" },
                  { val: "3–6 tyg.", lbl: "czas przygotowania oferty" },
                  { val: "PZP", lbl: "pełna zgodność z prawem" },
                ].map((m) => (
                  <div
                    key={m.val}
                    className="bg-white/7 rounded-xl p-4"
                  >
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
