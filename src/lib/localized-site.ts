import type { Metadata } from "next";
import benefitsPl from "../../content/benefits.json";
import costCalculatorPl from "../../content/cost-calculator.json";
import ctaPl from "../../content/cta.json";
import faqPl from "../../content/faq.json";
import featuresPl from "../../content/features.json";
import heroPl from "../../content/hero.json";
import howItWorksPl from "../../content/how-it-works.json";
import industriesPl from "../../content/industries.json";
import pricingPl from "../../content/pricing.json";
import problemPl from "../../content/problem.json";
import sitePl from "../../content/site.json";
import statsPl from "../../content/stats.json";
import testimonialsPl from "../../content/testimonials.json";
import deLocale from "../../content/locales/de.json";
import enLocale from "../../content/locales/en.json";
import plPrivacyLocale from "../../content/locales/pl-privacy.json";

export type LocaleCode = "pl" | "en" | "de";

export interface NavLink {
  href: string;
  label: string;
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export interface SiteContent {
  siteName: string;
  logo: string;
  logoWhite: string;
  navLinks: NavLink[];
  ctaButtonText: string;
  footerDescription: string;
  footerCopyright: string;
  footerUrl: string;
  footerColumns: FooterColumn[];
}

export interface HeroContent {
  badge: string;
  titleWhite: string;
  titleHighlight: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
  card: {
    title: string;
    rows: { label: string; value: string }[];
    bidScore: string;
    pzpCompliance: string;
    docCompleteness: number;
    winChance: number;
    bidScoreLabel: string;
    complianceLabel: string;
    docCompletenessLabel: string;
    winChanceLabel: string;
  };
}

export interface CostCalculatorContent {
  title: string;
  fields: { label: string; key: string; defaultValue: number }[];
  totalLabel: string;
  resetLabel: string;
  localeTag: string;
  currencyCode: string;
  currencySuffix: string;
}

export interface CTAContent {
  title: string;
  titleHighlight: string;
  description: string;
  trustBadges: string[];
  emailButtonText: string;
  emailAddress: string;
  formEndpoint?: string;
  formLabels: {
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    sending: string;
    thankYouTitle: string;
    thankYouMessage: string;
    errorTitle: string;
    errorMessageBeforeEmail: string;
    errorMessageAfterEmail: string;
    backToForm: string;
  };
  bottomNote: string;
}

export interface PrivacyContent {
  badge: string;
  title: string;
  intro: string;
  updatedLabel: string;
  updatedDate: string;
  sourceNote: string;
  adminCardTitle: string;
  adminContactLabel: string;
  sections: {
    title: string;
    paragraphs: string[];
  }[];
}

export interface PageBundle {
  locale: LocaleCode;
  metadata: {
    homeTitle: string;
    homeDescription: string;
    privacyTitle: string;
    privacyDescription: string;
  };
  site: SiteContent;
  hero: HeroContent;
  stats: {
    items: { value: string; label: string }[];
  };
  costCalculator: CostCalculatorContent;
  problem: typeof problemPl;
  howItWorks: typeof howItWorksPl;
  features: typeof featuresPl;
  benefits: typeof benefitsPl;
  industries: typeof industriesPl;
  testimonials: typeof testimonialsPl;
  pricing: typeof pricingPl;
  faq: typeof faqPl;
  cta: CTAContent;
  privacy: PrivacyContent;
}

export interface LanguageLink {
  code: LocaleCode;
  label: string;
  href: string;
  active: boolean;
}

const HOME_PATHS: Record<LocaleCode, string> = {
  pl: "/",
  en: "/en",
  de: "/de",
};

const POLICY_PATHS: Record<LocaleCode, string> = {
  pl: "/polityka-prywatnosci",
  en: "/en/privacy-policy",
  de: "/de/datenschutz",
};

function buildLanguageLinks(
  currentLocale: LocaleCode,
  page: "home" | "privacy"
): LanguageLink[] {
  return (["pl", "en", "de"] as const).map((locale) => ({
    code: locale,
    label: locale.toUpperCase(),
    href: page === "home" ? HOME_PATHS[locale] : POLICY_PATHS[locale],
    active: locale === currentLocale,
  }));
}

function withLegalAnchorPrefix(columns: FooterColumn[], homePath: string) {
  return columns.map((column) => ({
    ...column,
    links: column.links.map((link) => ({
      ...link,
      href: link.href.startsWith("#") ? `${homePath}${link.href}` : link.href,
    })),
  }));
}

const plBundle: PageBundle = {
  locale: "pl",
  metadata: plPrivacyLocale.metadata,
  site: sitePl,
  hero: {
    ...heroPl,
    card: {
      ...heroPl.card,
      bidScoreLabel: "Bid Score™",
      complianceLabel: "Zgodność PZP",
      docCompletenessLabel: "Kompletność dokumentacji",
      winChanceLabel: "Szanse wygranej (ML)",
    },
  },
  stats: statsPl,
  costCalculator: {
    ...costCalculatorPl,
    localeTag: "pl-PL",
    currencyCode: "PLN",
    currencySuffix: "zł",
  },
  problem: problemPl,
  howItWorks: howItWorksPl,
  features: featuresPl,
  benefits: benefitsPl,
  industries: industriesPl,
  testimonials: testimonialsPl,
  pricing: pricingPl,
  faq: faqPl,
  cta: {
    ...ctaPl,
    formLabels: {
      ...ctaPl.formLabels,
      errorTitle: "Nie udało się wysłać wiadomości",
      errorMessageBeforeEmail:
        "Spróbuj ponownie za chwilę albo napisz bezpośrednio na ",
      errorMessageAfterEmail: ".",
      backToForm: "Wróć do formularza",
    },
  },
  privacy: plPrivacyLocale.privacy,
};

const bundles: Record<LocaleCode, PageBundle> = {
  pl: plBundle,
  en: enLocale as PageBundle,
  de: deLocale as PageBundle,
};

export function getPageBundle(locale: LocaleCode): PageBundle {
  return bundles[locale];
}

export function getHomePath(locale: LocaleCode) {
  return HOME_PATHS[locale];
}

export function getPolicyPath(locale: LocaleCode) {
  return POLICY_PATHS[locale];
}

export function getHomeHeaderConfig(locale: LocaleCode) {
  return {
    homeHref: HOME_PATHS[locale],
    ctaHref: "#kontakt",
    languageLinks: buildLanguageLinks(locale, "home"),
  };
}

export function getPrivacyHeaderConfig(locale: LocaleCode) {
  return {
    homeHref: HOME_PATHS[locale],
    ctaHref: `${HOME_PATHS[locale]}#kontakt`,
    navLinks: bundles[locale].site.navLinks.map((link) => ({
      ...link,
      href: `${HOME_PATHS[locale]}${link.href}`,
    })),
    languageLinks: buildLanguageLinks(locale, "privacy"),
  };
}

export function getPrivacyFooterColumns(locale: LocaleCode) {
  return withLegalAnchorPrefix(bundles[locale].site.footerColumns, HOME_PATHS[locale]);
}

export function getMetadata(
  locale: LocaleCode,
  page: "home" | "privacy"
): Metadata {
  const bundle = bundles[locale];
  const title =
    page === "home" ? bundle.metadata.homeTitle : bundle.metadata.privacyTitle;
  const description =
    page === "home"
      ? bundle.metadata.homeDescription
      : bundle.metadata.privacyDescription;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      locale:
        locale === "pl" ? "pl_PL" : locale === "en" ? "en_GB" : "de_DE",
      siteName: "BidSentra",
    },
  };
}
