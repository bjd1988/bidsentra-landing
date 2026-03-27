import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { CostCalculator } from "@/components/sections/CostCalculator";
import { Problem } from "@/components/sections/Problem";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { Benefits } from "@/components/sections/Benefits";
import { Industries } from "@/components/sections/Industries";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { CTA } from "@/components/sections/CTA";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/layout/Footer";
import { loadContent } from "@/lib/content";

export default async function Home() {
  const [
    site,
    hero,
    stats,
    costCalc,
    problem,
    howItWorks,
    features,
    benefits,
    industries,
    testimonials,
    pricing,
    faq,
    cta,
  ] = await Promise.all([
    loadContent("site"),
    loadContent("hero"),
    loadContent("stats"),
    loadContent("cost-calculator"),
    loadContent("problem"),
    loadContent("how-it-works"),
    loadContent("features"),
    loadContent("benefits"),
    loadContent("industries"),
    loadContent("testimonials"),
    loadContent("pricing"),
    loadContent("faq"),
    loadContent("cta"),
  ]);

  const siteContent = site as Record<string, unknown>;
  const headerLogo = (siteContent.logo as string) || "/images/logo-inverse.png";
  const footerLogo =
    (siteContent.logoWhite as string) ||
    (siteContent.logo as string) ||
    "/images/logo-inverse.png";

  return (
    <>
      <Header
        logo={headerLogo}
        navLinks={siteContent.navLinks as { href: string; label: string }[]}
        ctaButtonText={siteContent.ctaButtonText as string}
      />
      <main>
        <Hero {...(hero as any)} />
        <Stats items={stats.items as any} />
        <CostCalculator {...(costCalc as any)} />
        <Problem {...(problem as any)} />
        <HowItWorks {...(howItWorks as any)} />
        <Features {...(features as any)} />
        <Benefits {...(benefits as any)} />
        <Industries {...(industries as any)} />
        <Testimonials {...(testimonials as any)} />
        <Pricing {...(pricing as any)} />
        <FAQ {...(faq as any)} />
        <CTA {...(cta as any)} />
      </main>
      <Footer
        logoWhite={footerLogo}
        footerDescription={siteContent.footerDescription as string}
        footerCopyright={siteContent.footerCopyright as string}
        footerUrl={siteContent.footerUrl as string}
        footerColumns={siteContent.footerColumns as any}
      />
    </>
  );
}
