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
  metadata: {
    homeTitle: "BidSentra – Wygrywaj więcej przetargów z AI",
    homeDescription:
      "BidSentra to platforma AI, która automatyzuje analizę dokumentacji przetargowej, generuje oferty zgodne z PZP i ocenia szanse wygranej.",
    privacyTitle: "Polityka prywatności | BidSentra",
    privacyDescription:
      "Informacje o przetwarzaniu danych osobowych i zasadach korzystania z formularza kontaktowego w serwisie BidSentra.",
  },
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
  privacy: {
    badge: "Ochrona danych",
    title: "Polityka prywatności BidSentra",
    intro:
      "Poniżej znajdziesz informacje o tym, jak przetwarzamy dane osobowe w związku z korzystaniem z serwisu BidSentra i formularza kontaktowego.",
    updatedLabel: "Aktualizacja",
    updatedDate: "27 marca 2026 r.",
    sourceNote:
      "Dane administratora opracowano na podstawie załączonego odpisu aktualnego z KRS nr 0001221405 oraz aktualnej konfiguracji serwisu.",
    adminCardTitle: "Administrator",
    adminContactLabel: "Kontakt w sprawach danych:",
    sections: [
      {
        title: "1. Administrator danych",
        paragraphs: [
          "Administratorem Twoich danych osobowych jest UP TO YOU spółka z ograniczoną odpowiedzialnością z siedzibą w Lublinie, ul. Gospodarcza 26, 20-213 Lublin, wpisana do Rejestru Przedsiębiorców Krajowego Rejestru Sądowego pod numerem KRS 0001221405, NIP 9462763547, REGON 543872521.",
          "We wszystkich sprawach związanych z ochroną danych osobowych możesz skontaktować się z nami pod adresem e-mail: info@bidsentra.pl.",
        ],
      },
      {
        title: "2. Zakres i źródła danych",
        paragraphs: [
          "Przetwarzamy dane, które podajesz nam dobrowolnie podczas korzystania z formularza kontaktowego lub kontaktu e-mailowego, w szczególności imię i nazwisko, adres e-mail oraz treść wiadomości.",
          "W związku z korzystaniem z serwisu mogą być też przetwarzane podstawowe dane techniczne, takie jak adres IP, data i godzina żądania, dane o przeglądarce i urządzeniu oraz logi niezbędne do zapewnienia bezpieczeństwa i poprawnego działania strony.",
        ],
      },
      {
        title: "3. Cele i podstawy prawne przetwarzania",
        paragraphs: [
          "Dane przetwarzamy w celu udzielenia odpowiedzi na Twoją wiadomość, obsługi zapytania o ofertę, demo lub współpracę oraz prowadzenia dalszej korespondencji związanej z tym kontaktem.",
          "Podstawą prawną przetwarzania jest art. 6 ust. 1 lit. b RODO, jeżeli kontakt zmierza do zawarcia umowy lub podjęcia działań przed jej zawarciem, oraz art. 6 ust. 1 lit. f RODO, czyli nasz prawnie uzasadniony interes polegający na obsłudze korespondencji, zapewnieniu bezpieczeństwa serwisu oraz obronie przed ewentualnymi roszczeniami.",
          "Jeżeli przekazujesz nam w wiadomości dodatkowe dane, robisz to z własnej inicjatywy. Prosimy, aby nie przesyłać danych, których nie potrzebujemy do obsługi kontaktu.",
        ],
      },
      {
        title: "4. Czy podanie danych jest obowiązkowe",
        paragraphs: [
          "Podanie danych w formularzu kontaktowym jest dobrowolne, ale niezbędne do otrzymania odpowiedzi. Brak podania danych może uniemożliwić obsługę Twojego zapytania.",
        ],
      },
      {
        title: "5. Odbiorcy danych",
        paragraphs: [
          "Twoje dane mogą być ujawniane podmiotom, z których korzystamy przy prowadzeniu serwisu i obsłudze kontaktu, w szczególności dostawcy hostingu statycznej strony, dostawcy infrastruktury sieciowej oraz dostawcy usługi wysyłki wiadomości e-mail.",
          "Na dzień publikacji tej polityki korzystamy w tym zakresie w szczególności z usług GitHub Pages, Cloudflare oraz Brevo. Podmioty te przetwarzają dane na nasze zlecenie albo jako odrębni administratorzy w zakresie niezbędnym do realizacji swoich usług.",
        ],
      },
      {
        title: "6. Przekazywanie danych poza EOG",
        paragraphs: [
          "W związku z korzystaniem z niektórych dostawców technologicznych dane mogą być przekazywane poza Europejski Obszar Gospodarczy. W takim przypadku dbamy o to, aby przekazanie odbywało się zgodnie z prawem, w szczególności na podstawie standardowych klauzul umownych, decyzji stwierdzających odpowiedni stopień ochrony lub innych dopuszczalnych mechanizmów.",
        ],
      },
      {
        title: "7. Okres przechowywania danych",
        paragraphs: [
          "Dane z korespondencji przechowujemy przez okres niezbędny do obsługi sprawy, a następnie przez czas potrzebny do wykazania prawidłowości naszej obsługi lub obrony przed roszczeniami, nie dłużej jednak niż do upływu właściwych terminów przedawnienia, chyba że dłuższy okres przechowywania wynika z przepisów prawa.",
          "Dane techniczne i logi serwisowe przechowujemy przez okres potrzebny do zapewnienia bezpieczeństwa, wykrywania nadużyć i utrzymania ciągłości działania usług, zgodnie z konfiguracją oraz politykami naszych dostawców.",
        ],
      },
      {
        title: "8. Twoje prawa",
        paragraphs: [
          "Masz prawo żądać dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, a także prawo do wniesienia sprzeciwu wobec przetwarzania opartego na naszym prawnie uzasadnionym interesie.",
          "W zakresie, w jakim podstawą przetwarzania jest art. 6 ust. 1 lit. b RODO, możesz również żądać przeniesienia danych.",
          "Masz również prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych, jeśli uznasz, że Twoje dane są przetwarzane niezgodnie z prawem.",
        ],
      },
      {
        title: "9. Zautomatyzowane podejmowanie decyzji",
        paragraphs: [
          "Dane przekazywane przez formularz kontaktowy nie są wykorzystywane do podejmowania wobec Ciebie decyzji w sposób zautomatyzowany, w tym do profilowania w rozumieniu RODO.",
        ],
      },
      {
        title: "10. Pliki cookies i podobne technologie",
        paragraphs: [
          "Na dzień publikacji tej polityki serwis nie wykorzystuje własnych plików cookies ani podobnych technologii do celów analitycznych lub marketingowych, które wymagałyby uzyskania Twojej zgody.",
          "Podczas korzystania ze strony Twoja przeglądarka i infrastruktura techniczna mogą jednak przetwarzać dane niezbędne do wyświetlenia strony, zapewnienia bezpieczeństwa transmisji oraz obsługi żądań HTTP. Jeżeli w przyszłości wdrożymy narzędzia analityczne, reklamowe albo inne rozwiązania korzystające z niekoniecznych cookies, przed ich uruchomieniem wdrożymy odpowiedni mechanizm zgód i zaktualizujemy tę politykę.",
        ],
      },
      {
        title: "11. Zmiany polityki prywatności",
        paragraphs: [
          "Polityka prywatności może być aktualizowana, jeżeli zmieni się sposób działania serwisu, zakres przetwarzanych danych albo obowiązujące przepisy prawa. Aktualna wersja jest zawsze publikowana na tej stronie.",
        ],
      },
    ],
  },
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
