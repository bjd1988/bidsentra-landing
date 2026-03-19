import Image from "next/image";

const footerCols = [
  {
    title: "PRODUKT",
    links: [
      { label: "Jak to działa", href: "#jak-dziala" },
      { label: "Co zyskujesz", href: "#korzysci" },
      { label: "Cennik", href: "#cennik" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "SEKTORY",
    links: [
      { label: "Budownictwo i inżynieria", href: "#sektory" },
      { label: "Technologie IT", href: "#sektory" },
      { label: "Energetyka i OZE", href: "#sektory" },
      { label: "Doradztwo przetargowe", href: "#sektory" },
    ],
  },
  {
    title: "FIRMA",
    links: [
      { label: "Kontakt", href: "#kontakt" },
      { label: "Polityka prywatności", href: "#" },
      { label: "Regulamin", href: "#" },
      { label: "Publikacje", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-footer-bg pt-16 pb-10 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo-white.png"
              alt="BidSentra"
              width={140}
              height={36}
              className="h-8 w-auto mb-4"
            />
            <p className="text-sm text-white/45 leading-relaxed max-w-[280px]">
              Your central hub for smarter bidding. AI-powered B2B procurement
              automation dla polskiego rynku.
            </p>
          </div>

          {/* Nav columns */}
          {footerCols.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 hover:text-lime transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/7 pt-7 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            &copy; 2026 BidSentra · Up To You Sp. z o.o.
          </p>
          <a
            href="https://bidsentra.pl"
            className="text-xs text-white/40 hover:text-lime transition-colors"
          >
            bidsentra.pl
          </a>
        </div>
      </div>
    </footer>
  );
}
