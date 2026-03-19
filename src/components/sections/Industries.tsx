"use client";

import { Building2, Monitor, Zap, Target } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const industries = [
  {
    icon: Building2,
    title: "Budownictwo i inżynieria",
    desc: "Generalni wykonawcy i firmy projektowe przygotowujące kilkadziesiąt ofert rocznie o wysokiej wartości jednostkowej.",
  },
  {
    icon: Monitor,
    title: "Technologie IT",
    desc: "Software house'y i integratorzy systemów uczestniczący w przetargach na wdrożenia IT i cyfryzację administracji.",
  },
  {
    icon: Zap,
    title: "Energetyka i OZE",
    desc: "Firmy realizujące instalacje fotowoltaiczne, farmy wiatrowe i modernizacje sieci, często w modelach konsorcyjnych.",
  },
  {
    icon: Target,
    title: "Doradztwo przetargowe",
    desc: "Biura obsługujące procesy ofertowe dla innych podmiotów — zwiększ skalę i jakość usług przy krótszym czasie realizacji.",
  },
];

export function Industries() {
  return (
    <section className="bg-off-white py-20 md:py-28" id="sektory">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.12em] uppercase text-mid-teal mb-3">
              Sektory i branże
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-5">
              Stworzony dla branż, które żyją z przetargów
            </h2>
            <p className="text-base text-text-mid max-w-2xl mx-auto leading-relaxed">
              BidSentra jest dostosowany do specyfiki polskich zamówień
              publicznych i komercyjnych w kluczowych sektorach.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((ind, i) => (
            <FadeIn key={ind.title} delay={i * 0.08}>
              <div className="bg-white rounded-2xl p-7 border border-light-gray hover:border-dark-teal hover:-translate-y-1 hover:shadow-lg transition-all text-center h-full">
                <div className="w-14 h-14 rounded-2xl bg-mid-teal/10 flex items-center justify-center mx-auto mb-4">
                  <ind.icon size={26} className="text-mid-teal" />
                </div>
                <h3 className="font-bold text-base mb-2">{ind.title}</h3>
                <p className="text-sm text-text-mid leading-relaxed">
                  {ind.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Quote */}
        <FadeIn>
          <div className="mt-16 bg-dark-teal rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute left-[-100px] top-[-100px] w-[400px] h-[400px] bg-lime/6 rounded-full" />
            <div className="relative z-10">
              <div className="text-5xl text-lime font-serif leading-none mb-4">
                &ldquo;
              </div>
              <p className="text-lg text-white/85 leading-relaxed max-w-3xl mx-auto font-light italic">
                Na rynku nie istnieje rozwiązanie oferujące równocześnie
                automatyzację analizy dokumentacji, generowanie zgodnych z PZP
                ofert i integrację z lokalnymi platformami przetargowymi.
                BidSentra wypełnia tę lukę.
              </p>
              <p className="mt-6 text-sm text-mid-teal font-semibold">
                Zespół BidSentra · Up To You Sp. z o.o.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
