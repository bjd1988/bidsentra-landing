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
  SITE_URL,
  getAbsoluteUrl,
  getHomeHeaderConfig,
  getHomePath,
  getPageBundle,
} from "@/lib/localized-site";

interface LandingPageProps {
  locale: LocaleCode;
}

export function LandingPage({ locale }: LandingPageProps) {
  const bundle = getPageBundle(locale);
  const headerConfig = getHomeHeaderConfig(locale);
  const pageUrl = getAbsoluteUrl(getHomePath(locale));
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "BidSentra",
        url: SITE_URL,
        logo: getAbsoluteUrl(bundle.site.logo),
        email: bundle.cta.emailAddress,
      },
      {
        "@type": "WebSite",
        name: "BidSentra",
        url: SITE_URL,
        inLanguage: locale,
      },
      {
        "@type": "SoftwareApplication",
        name: "BidSentra",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: pageUrl,
        inLanguage: locale,
        description: bundle.hero.description,
      },
      {
        "@type": "FAQPage",
        inLanguage: locale,
        mainEntity: bundle.faq.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
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
