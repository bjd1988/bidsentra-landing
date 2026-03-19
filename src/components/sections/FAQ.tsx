"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const faqs = [
  {
    q: "Jakie formaty dokumentów obsługuje AI Bid Optimizer?",
    a: "BidSentra obecnie obsługuje PDF, DOCX oraz popularne formaty arkuszy kalkulacyjnych (XLSX, CSV). Stale rozszerzamy wsparcie formatów w oparciu o potrzeby użytkowników. Wszystkie dokumenty są przetwarzane bezpiecznie i nigdy nie są udostępniane stronom trzecim.",
  },
  {
    q: "Co jest zawarte w pakiecie podstawowym?",
    a: "Pakiet Starter zawiera analizę dokumentacji AI/NLP, AI Draft Generator (do 10 ofert miesięcznie), Bid Score™ do oceny atrakcyjności przetargów, integrację z BZP i TED oraz wsparcie e-mail.",
  },
  {
    q: "Czy BidSentra zastępuje mój zespół ofertowy?",
    a: "Nie. BidSentra to narzędzie wspomagające pracę Twojego zespołu ofertowego — automatyzuje żmudne, powtarzalne zadania i pozwala ekspertom skupić się na strategii i jakości oferty. System przyspiesza proces, ale decyzje podejmuje człowiek.",
  },
  {
    q: "Czy moje dane przetargowe są bezpieczne?",
    a: "Tak. Wszystkie dane są szyfrowane w tranzycie i w spoczynku. Stosujemy najwyższe standardy bezpieczeństwa zgodne z RODO. Twoje dane nigdy nie są udostępniane stronom trzecim ani wykorzystywane do trenowania modeli AI.",
  },
  {
    q: "Co dzieje się po zakończeniu okresu próbnego?",
    a: "Po 14-dniowym bezpłatnym trialu możesz wybrać jeden z naszych planów subskrypcyjnych lub zakończyć korzystanie z platformy. Twoje dane pozostaną dostępne do pobrania przez 30 dni po zakończeniu trialu.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 bg-off-white" id="faq">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.12em] uppercase text-mid-teal mb-3">
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-5">
              Często zadawane pytania
            </h2>
            <p className="text-base text-text-mid leading-relaxed">
              Wszystko co musisz wiedzieć o BidSentra.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="bg-white rounded-xl border border-light-gray overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span className="font-semibold text-sm pr-4">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-text-mid transition-transform ${
                      open === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {open === i && (
                  <div className="px-5 pb-5 -mt-1">
                    <p className="text-sm text-text-mid leading-relaxed">
                      {faq.a}
                    </p>
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
