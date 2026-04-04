import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BidSentra AI - system do przetargów i analizy SWZ",
  description:
    "BidSentra to platforma AI do przetargów i zamówień publicznych. Analizuje SWZ i dokumentację przetargową oraz wspiera przygotowanie ofert przetargowych.",
  icons: {
    icon: [
      {
        url: "/favicon-96.png",
        type: "image/png",
        sizes: "96x96",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  keywords: [
    "BidSentra",
    "BidSentra AI",
    "BidSentra przetargi",
    "BidSentra zamówienia publiczne",
    "system do przetargów",
    "platforma do analizy przetargów",
    "narzędzie do przygotowania ofert przetargowych",
    "AI do przetargów",
    "AI do zamówień publicznych",
    "SaaS do przetargów",
    "oprogramowanie do ofertowania",
    "system do analizy SWZ",
    "narzędzie do analizy dokumentacji przetargowej",
    "platforma dla wykonawców w przetargach",
    "program do przygotowania oferty przetargowej",
    "oferty przetargowe",
    "PZP",
    "zamówienia publiczne",
  ],
  openGraph: {
    title: "BidSentra AI - system do przetargów i analizy SWZ",
    description:
      "Platforma AI do przetargów i zamówień publicznych, analizy SWZ oraz przygotowania ofert przetargowych.",
    type: "website",
    locale: "pl_PL",
    siteName: "BidSentra",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
