import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Benefits } from "@/components/sections/Benefits";
import { CostCalculator } from "@/components/sections/CostCalculator";
import { CTA } from "@/components/sections/CTA";
import { FAQ } from "@/components/sections/FAQ";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Industries } from "@/components/sections/Industries";
import { Pricing } from "@/components/sections/Pricing";
import { Problem } from "@/components/sections/Problem";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import {
  type LocaleCode,
  getHomeHeaderConfig,
  getPageBundle,
} from "@/lib/localized-site";

interface LandingPageProps {
  locale: LocaleCode;
}

export function LandingPage({ locale }: LandingPageProps) {
  const bundle = getPageBundle(locale);
  const headerConfig = getHomeHeaderConfig(locale);

  return (
    <>
      <Header
        logo={bundle.site.logo}
        navLinks={bundle.site.navLinks}
        ctaButtonText={bundle.site.ctaButtonText}
        homeHref={headerConfig.homeHref}
        ctaHref={headerConfig.ctaHref}
        languageLinks={headerConfig.languageLinks}
      />
      <main lang={locale}>
        <Hero {...bundle.hero} />
        <Stats items={bundle.stats.items} />
        <CostCalculator {...bundle.costCalculator} />
        <Problem {...bundle.problem} />
        <HowItWorks {...bundle.howItWorks} />
        <Features {...bundle.features} />
        <Benefits {...bundle.benefits} />
        <Industries {...bundle.industries} />
        <Testimonials {...bundle.testimonials} />
        <Pricing {...bundle.pricing} />
        <FAQ {...bundle.faq} />
        <CTA {...bundle.cta} />
      </main>
      <Footer
        logoWhite={bundle.site.logoWhite}
        footerDescription={bundle.site.footerDescription}
        footerCopyright={bundle.site.footerCopyright}
        footerUrl={bundle.site.footerUrl}
        footerColumns={bundle.site.footerColumns}
      />
    </>
  );
}
