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
import { Overview } from "@/components/sections/Overview";
import { Pricing } from "@/components/sections/Pricing";
import { Problem } from "@/components/sections/Problem";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import {
  type LocaleCode,
  ORGANIZATION_LOGO_IMAGE,
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
        "@id": `${SITE_URL}#organization`,
        name: "BidSentra",
        url: SITE_URL,
        logo: getAbsoluteUrl(ORGANIZATION_LOGO_IMAGE),
        email: bundle.cta.emailAddress,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}#website`,
        name: "BidSentra",
        url: SITE_URL,
        inLanguage: locale,
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: bundle.metadata.homeTitle,
        description: bundle.metadata.homeDescription,
        inLanguage: locale,
        isPartOf: {
          "@id": `${SITE_URL}#website`,
        },
        about: [
          { "@type": "Thing", name: "AI do przetargów" },
          { "@type": "Thing", name: "analiza SWZ" },
          { "@type": "Thing", name: "zamówienia publiczne" },
        ],
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${pageUrl}#software`,
        name: "BidSentra",
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "Public procurement and tender management software",
        operatingSystem: "Web",
        url: pageUrl,
        inLanguage: locale,
        description: bundle.hero.description,
        provider: {
          "@id": `${SITE_URL}#organization`,
        },
        featureList: [
          ...bundle.overview.cards.flatMap((card) => card.points),
          ...bundle.features.items.map((item) => item.title),
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
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
        <Overview {...bundle.overview} />
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
