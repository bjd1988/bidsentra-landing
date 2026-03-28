import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BidSentra – Wygrywaj więcej przetargów z AI",
  description:
    "BidSentra to platforma AI, która automatyzuje analizę dokumentacji przetargowej, generuje oferty zgodne z PZP i ocenia szanse wygranej.",
  keywords: [
    "przetargi",
    "PZP",
    "AI",
    "automatyzacja",
    "oferty przetargowe",
    "BidSentra",
    "zamówienia publiczne",
  ],
  openGraph: {
    title: "BidSentra – Wygrywaj więcej przetargów z AI",
    description:
      "Platforma AI automatyzująca analizę dokumentacji przetargowej i generowanie ofert zgodnych z PZP.",
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
