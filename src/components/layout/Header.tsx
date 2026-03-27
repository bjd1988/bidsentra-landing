"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#jak-dziala", label: "Jak to działa" },
  { href: "#korzysci", label: "Co zyskujesz" },
  { href: "#cennik", label: "Cennik" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark-teal/96 backdrop-blur-md shadow-lg"
          : "bg-dark-teal/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center rounded-2xl bg-white/96 px-3 py-2 shadow-sm ring-1 ring-white/70 transition-transform duration-300 hover:scale-[1.01]"
        >
          <Image
            src="/images/logo-header.png"
            alt="BidSentra"
            width={940}
            height={192}
            className="h-11 md:h-14 w-auto"
            priority
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-lime text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="bg-lime text-text-dark px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-lime-dark transition-colors"
          >
            Zamów teraz
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Zamknij menu" : "Otwórz menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-dark-teal border-t border-white/10 px-5 pb-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-white/80 hover:text-lime text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setMobileOpen(false)}
            className="block mt-3 bg-lime text-text-dark px-5 py-2.5 rounded-lg font-bold text-sm text-center hover:bg-lime-dark transition-colors"
          >
            Zamów teraz
          </a>
        </div>
      )}
    </nav>
  );
}
