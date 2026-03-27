"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { withBasePath } from "@/lib/base-path";

interface HeaderProps {
  logo: string;
  navLinks: { href: string; label: string }[];
  ctaButtonText: string;
  homeHref?: string;
  ctaHref?: string;
  languageLinks?: { code: string; label: string; href: string; active: boolean }[];
}

export function Header({
  logo,
  navLinks,
  ctaButtonText,
  homeHref = "/",
  ctaHref = "/#kontakt",
  languageLinks = [],
}: HeaderProps) {
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
          href={withBasePath(homeHref)}
          className="flex items-center rounded-2xl bg-white/8 px-2 py-1.5 md:px-2.5 md:py-2 ring-1 ring-white/12 backdrop-blur-sm transition-transform duration-300 hover:scale-[1.01] hover:bg-white/10"
        >
          <div className="w-[190px] h-11 md:w-[340px] md:h-[68px] overflow-hidden rounded-xl">
            <Image
              src={withBasePath(logo)}
              alt="BidSentra"
              width={1684}
              height={1191}
              className="h-full w-full object-cover object-center"
              priority
            />
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={withBasePath(link.href)}
              className="text-white/80 hover:text-lime text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          {languageLinks.length > 0 && (
            <div className="flex items-center rounded-full border border-white/12 bg-white/6 p-1 backdrop-blur-sm">
              {languageLinks.map((link) => (
                <a
                  key={link.code}
                  href={withBasePath(link.href)}
                  className={`rounded-full px-3 py-1.5 text-[11px] font-bold tracking-[0.18em] uppercase transition-colors ${
                    link.active
                      ? "bg-lime text-text-dark"
                      : "text-white/65 hover:text-white"
                  }`}
                  aria-current={link.active ? "page" : undefined}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
          <a
            href={withBasePath(ctaHref)}
            className="bg-lime text-text-dark px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-lime-dark transition-colors"
          >
            {ctaButtonText}
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
          {languageLinks.length > 0 && (
            <div className="flex gap-2 py-4">
              {languageLinks.map((link) => (
                <a
                  key={link.code}
                  href={withBasePath(link.href)}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-full px-3 py-1.5 text-[11px] font-bold tracking-[0.18em] uppercase transition-colors ${
                    link.active
                      ? "bg-lime text-text-dark"
                      : "border border-white/12 text-white/70"
                  }`}
                  aria-current={link.active ? "page" : undefined}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={withBasePath(link.href)}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-white/80 hover:text-lime text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={withBasePath(ctaHref)}
            onClick={() => setMobileOpen(false)}
            className="block mt-3 bg-lime text-text-dark px-5 py-2.5 rounded-lg font-bold text-sm text-center hover:bg-lime-dark transition-colors"
          >
            {ctaButtonText}
          </a>
        </div>
      )}
    </nav>
  );
}
