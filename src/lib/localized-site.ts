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
  stats: typeof statsPl;
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

const enBundle: PageBundle = {
  locale: "en",
  metadata: {
    homeTitle: "BidSentra – Win More Tenders with AI",
    homeDescription:
      "BidSentra is an AI platform that automates tender-document analysis, generates compliant bids and helps assess your chances of winning.",
    privacyTitle: "Privacy Policy | BidSentra",
    privacyDescription:
      "Information on how personal data is processed when using the BidSentra website and contact form.",
  },
  site: {
    ...sitePl,
    navLinks: [
      { href: "#jak-dziala", label: "How it works" },
      { href: "#korzysci", label: "Benefits" },
      { href: "#cennik", label: "Pricing" },
      { href: "#faq", label: "FAQ" },
    ],
    ctaButtonText: "Book a demo",
    footerDescription:
      "Your central hub for smarter bidding. AI-powered B2B procurement automation built for the Polish market.",
    footerColumns: [
      {
        title: "PRODUCT",
        links: [
          { href: "#jak-dziala", label: "How it works" },
          { href: "#korzysci", label: "Benefits" },
          { href: "#cennik", label: "Pricing" },
          { href: "#faq", label: "FAQ" },
        ],
      },
      {
        title: "INDUSTRIES",
        links: [
          { href: "#sektory", label: "Construction and engineering" },
          { href: "#sektory", label: "IT and software" },
          { href: "#sektory", label: "Energy and renewables" },
          { href: "#sektory", label: "Tender advisory" },
        ],
      },
      {
        title: "COMPANY",
        links: [
          { href: "#kontakt", label: "Contact" },
          { href: "/en/privacy-policy", label: "Privacy Policy" },
          { href: "#", label: "Terms" },
          { href: "#", label: "Publications" },
        ],
      },
    ],
  },
  hero: {
    badge: "100% aligned with Polish PPL",
    titleWhite: "Win more tenders",
    titleHighlight: "in half the time.",
    description:
      "BidSentra is an AI platform that automates tender-document analysis, generates bids aligned with Polish public procurement requirements and evaluates your win probability before competitors finish reading the specification.",
    ctaPrimary: "Book a demo",
    ctaSecondary: "How it works",
    card: {
      title: "BidSentra · Tender analysis",
      rows: [
        { label: "Tender:", value: "IT network modernization" },
        { label: "Value:", value: "PLN 2,400,000" },
      ],
      bidScore: "82 / 100",
      pzpCompliance: "High",
      docCompleteness: 87,
      winChance: 73,
      bidScoreLabel: "Bid Score™",
      complianceLabel: "PPL compliance",
      docCompletenessLabel: "Document completeness",
      winChanceLabel: "Win probability (ML)",
    },
  },
  stats: {
    items: [
      { value: "50%", label: "Less time spent on bids" },
      { value: "80%", label: "Fewer formal errors" },
      { value: "+30%", label: "Higher bid success rate" },
    ],
  },
  costCalculator: {
    title: "How much does one lost tender cost you?",
    fields: [
      { label: "Team time", key: "teamTime", defaultValue: 19900 },
      { label: "Labor costs", key: "laborCost", defaultValue: 3100 },
      { label: "Lost margin", key: "lostMargin", defaultValue: 8500 },
    ],
    totalLabel: "Total cost",
    resetLabel: "Reset values",
    localeTag: "en-GB",
    currencyCode: "PLN",
    currencySuffix: "PLN",
  },
  problem: {
    sectionLabel: "The problem we solve",
    title: "Tendering consumes time and resources",
    subtitle:
      "Companies using BidSentra submit bids an average of 4 days faster than their competitors.",
    traditionalLabel: "Traditional process",
    bidsentraLabel: "BidSentra",
    painPoints: [
      {
        icon: "FileText",
        title: "Hundreds of pages to review",
        desc: "Tender specifications, statements of work, technical programs and declarations all have to be reviewed manually for each opportunity.",
      },
      {
        icon: "Clock",
        title: "Weeks for a single bid",
        desc: "Preparing one bid can take from several days to several weeks and usually involves the whole bid team.",
      },
      {
        icon: "AlertTriangle",
        title: "Formal mistakes mean rejection",
        desc: "One missing document or one unmet compliance requirement can waste the entire effort and cost you the contract.",
      },
      {
        icon: "RefreshCw",
        title: "Starting from scratch every time",
        desc: "Knowledge from previous bids is rarely reused, so every new tender begins almost from zero.",
      },
    ],
    solutions: [
      "Key requirements extracted in minutes",
      "Automatic checks of required qualifications, references and supporting documents",
      "Immediate identification of gaps and inconsistencies in the specification",
      "Zero formal mistakes. Full compliance with procurement requirements",
    ],
    marketStats: [
      { val: "200k+", lbl: "tenders published annually in Poland" },
      { val: "~60%", lbl: "bids contain formal errors" },
      { val: "3–6 wks", lbl: "average bid-preparation time" },
      { val: "PPL", lbl: "full legal alignment" },
    ],
  },
  howItWorks: {
    sectionLabel: "How it works",
    title: "From documentation to a ready bid in 4 steps",
    subtitle:
      "BidSentra guides your team through the full process, from tender analysis to a final bid ready for submission.",
    steps: [
      {
        num: "01",
        icon: "Upload",
        title: "Upload the documentation",
        desc: "Paste the tender link or upload the specification. BidSentra can also pull documents from BZP, TED and e-Zamówienia.",
      },
      {
        num: "02",
        icon: "Brain",
        title: "AI analyses the requirements",
        desc: "The NLP/LLM engine extracts key legal, technical and financial requirements, then highlights risks and hidden traps.",
      },
      {
        num: "03",
        icon: "BarChart3",
        title: "Review the Bid Score™",
        desc: "The ML module assesses attractiveness and win probability using your own data and market parameters.",
      },
      {
        num: "04",
        icon: "FileOutput",
        title: "Generate the bid",
        desc: "The AI Draft Generator creates a complete, compliant bid drawing from your knowledge base of references, certificates and templates.",
      },
    ],
  },
  features: {
    sectionLabel: "Core capabilities",
    title: "Technology that changes the rules of the game",
    subtitle:
      "BidSentra combines advanced AI with practical knowledge of the Polish procurement market.",
    items: [
      {
        icon: "Search",
        title: "Semantic document analysis (NLP)",
        desc: "The system understands the context of legal clauses, classifies requirements and automatically identifies risks in tender documentation.",
        tag: "AI / NLP",
      },
      {
        icon: "FileEdit",
        title: "AI Draft Generator",
        desc: "Automatically creates bid structure and compliant content by combining tender data with your references and certificates.",
        tag: "RAG Architecture",
      },
      {
        icon: "BarChart3",
        title: "Bid Score™ scoring",
        desc: "A machine-learning model recommends smarter bidding decisions based on historical and contextual data.",
        tag: "Machine Learning",
      },
      {
        icon: "Link2",
        title: "ERP / CRM / BIM integrations",
        desc: "An open API integrates with existing systems so cost and resource data can feed the bid process automatically.",
        tag: "API First",
      },
      {
        icon: "BookOpen",
        title: "Organizational knowledge repository",
        desc: "The system learns from your bidding history and gradually improves recommendation quality and project-risk predictions.",
        tag: "Self-learning",
      },
      {
        icon: "ShieldCheck",
        title: "Compliance validation",
        desc: "Automatically verifies document completeness and compliance with buyer requirements, eliminating mistakes that lead to rejection.",
        tag: "Compliance",
      },
    ],
  },
  benefits: {
    sectionLabel: "Why BidSentra",
    title: "Measurable benefits for your team",
    items: [
      {
        num: "01",
        title: "Operational efficiency",
        desc: "Cut bid-preparation time by 50% and lower tender-handling costs by 30%. Your team can handle twice as many procedures.",
      },
      {
        num: "02",
        title: "Security and compliance",
        desc: "Automatic formal verification removes procedural mistakes. Every bid leaves the system complete and compliant.",
      },
      {
        num: "03",
        title: "Decision intelligence",
        desc: "Data-driven recommendations help you focus on the most profitable tenders and avoid low-probability opportunities.",
      },
      {
        num: "04",
        title: "Competitive advantage",
        desc: "Move faster than the competition. BidSentra is one of the first tools in Poland combining deep automation with local legal reality.",
      },
    ],
    kpisLabel: "Results achieved by BidSentra clients",
    kpis: [
      { label: "Bid-preparation time reduced", value: "−50%", pct: 50 },
      { label: "Formal errors reduced", value: "−80%", pct: 80 },
      { label: "Tender success rate improved", value: "+30%", pct: 30 },
      { label: "Tender-handling costs reduced", value: "−30%", pct: 30 },
    ],
    quote:
      "Within two years, every serious bid team will be supported by AI. You can gain that advantage today.",
  },
  industries: {
    sectionLabel: "Sectors and industries",
    title: "Built for industries that live on tenders",
    subtitle:
      "BidSentra is tailored to the specifics of public and commercial tendering in key sectors operating in Poland.",
    items: [
      {
        icon: "Building2",
        title: "Construction and engineering",
        desc: "General contractors and design firms preparing dozens of high-value bids every year.",
      },
      {
        icon: "Monitor",
        title: "IT and software",
        desc: "Software houses and system integrators competing for digital-transformation and public-sector IT projects.",
      },
      {
        icon: "Zap",
        title: "Energy and renewables",
        desc: "Companies delivering solar, wind and grid-modernization projects, often in consortium models.",
      },
      {
        icon: "Target",
        title: "Tender advisory",
        desc: "Advisory firms running bid processes for clients and looking to scale quality and throughput.",
      },
    ],
    quoteText:
      "The market still lacks a solution that combines automated document analysis, compliant bid generation and integration with local tender platforms. BidSentra fills that gap.",
    quoteAuthor: "BidSentra Team · Up To You Sp. z o.o.",
  },
  testimonials: {
    sectionLabel: "Testimonials",
    title: "What partners say about us",
    disclaimer: "* Sample data — real testimonials coming soon",
    items: [
      {
        quote:
          "BidSentra transformed our bidding process. Preparing offers now takes half the time.",
        name: "John Smith",
        role: "Head of Bidding",
        company: "Construction Group Ltd.",
      },
      {
        quote:
          "Eliminating formal errors is the key value for us. No bid has been rejected since implementation.",
        name: "Anna Novak",
        role: "Tender Team Manager",
        company: "IT Solutions S.A.",
      },
      {
        quote:
          "Bid Score™ helps us focus on tenders where we truly have a chance to win. Our hit rate increased by 35%.",
        name: "Peter Wisniewski",
        role: "CEO",
        company: "Tender Advisory Plus",
      },
    ],
  },
  pricing: {
    sectionLabel: "Pricing",
    title: "Aligned with your needs",
    subtitle: "First 50 companies get pricing frozen for 24 months",
    plans: [
      {
        name: "STARTER",
        target: "For SMEs",
        featured: false,
        features: [
          "AI / NLP document analysis",
          "AI Draft Generator (up to 10 bids / month)",
          "Bid Score™ opportunity assessment",
          "BZP and TED integration",
          "Email support",
        ],
        cta: "Available soon",
      },
      {
        name: "PROFESSIONAL",
        target: "For active bidders",
        featured: true,
        badge: "Most popular",
        features: [
          "Everything in Starter",
          "Unlimited number of bids",
          "Organizational knowledge repository",
          "ERP / CRM integration",
          "Step-by-step compliance validation",
          "Reporting and analytics",
          "Priority support",
        ],
        cta: "Available soon",
      },
      {
        name: "ENTERPRISE",
        target: "For larger organizations",
        featured: false,
        features: [
          "Everything in Professional",
          "Dedicated hosting / on-premise",
          "BIM and specialist system integration",
          "Custom AI model on your data",
          "Bid team training",
          "Dedicated account lead",
        ],
        cta: "Available soon",
      },
    ],
  },
  faq: {
    sectionLabel: "FAQ",
    title: "Frequently asked questions",
    subtitle: "Everything you need to know about BidSentra.",
    items: [
      {
        q: "Which document formats does BidSentra support?",
        a: "BidSentra currently supports PDF, DOCX and common spreadsheet formats such as XLSX and CSV. We continuously expand format support based on user needs. All documents are processed securely and are never shared with third parties.",
      },
      {
        q: "What is included in the basic package?",
        a: "The Starter package includes AI/NLP document analysis, AI Draft Generator for up to 10 bids per month, Bid Score™ for opportunity assessment, BZP and TED integration and email support.",
      },
      {
        q: "Does BidSentra replace my bid team?",
        a: "No. BidSentra is a tool that supports your team. It automates repetitive work so specialists can focus on strategy and bid quality. The system accelerates the process, but decisions remain with people.",
      },
      {
        q: "Is our tender data secure?",
        a: "Yes. Data is encrypted both in transit and at rest. We follow high security standards aligned with GDPR. Your data is never shared with third parties and is not used to train public AI models.",
      },
      {
        q: "What happens after the trial period ends?",
        a: "After the 14-day free trial you can choose one of our subscription plans or stop using the platform. Your data remains available for export for 30 days after the trial ends.",
      },
    ],
  },
  cta: {
    title: "Ready to win more",
    titleHighlight: "tenders?",
    description:
      "Book a 30-minute demo and see how BidSentra can transform bid preparation in your company.",
    trustBadges: ["NO COMMITMENT", "14-DAY FREE TRIAL", "LOCAL SUPPORT"],
    emailButtonText: "Book a call",
    emailAddress: "info@bidsentra.pl",
    formEndpoint: ctaPl.formEndpoint,
    formLabels: {
      name: "Full name",
      namePlaceholder: "John Smith",
      email: "Email",
      emailPlaceholder: "john@company.com",
      message: "Message",
      messagePlaceholder: "How can we help?",
      submit: "Send",
      sending: "Sending...",
      thankYouTitle: "Thank you!",
      thankYouMessage: "We will get back to you shortly.",
      errorTitle: "We could not send your message",
      errorMessageBeforeEmail:
        "Please try again in a moment or write directly to ",
      errorMessageAfterEmail: ".",
      backToForm: "Back to the form",
    },
    bottomNote: "No commitment · 14-day free trial · Local support",
  },
  privacy: {
    badge: "Data protection",
    title: "BidSentra Privacy Policy",
    intro:
      "Below you will find information on how we process personal data in connection with the BidSentra website and contact form.",
    updatedLabel: "Updated",
    updatedDate: "27 March 2026",
    sourceNote:
      "Controller details were prepared on the basis of the attached current extract from the National Court Register (KRS no. 0001221405) and the current website configuration.",
    adminCardTitle: "Data controller",
    adminContactLabel: "Data-protection contact:",
    sections: [
      {
        title: "1. Data controller",
        paragraphs: [
          "Your personal data is controlled by UP TO YOU spółka z ograniczoną odpowiedzialnością with its registered office in Lublin, ul. Gospodarcza 26, 20-213 Lublin, entered in the Polish National Court Register under KRS no. 0001221405, NIP 9462763547, REGON 543872521.",
          "For all matters relating to personal-data protection, you can contact us at: info@bidsentra.pl.",
        ],
      },
      {
        title: "2. Scope and sources of data",
        paragraphs: [
          "We process data you provide voluntarily when using the contact form or contacting us by email, in particular your name, email address and the content of your message.",
          "When you use the website, basic technical data may also be processed, such as IP address, date and time of the request, browser and device data, and logs necessary to ensure security and proper operation of the website.",
        ],
      },
      {
        title: "3. Purposes and legal bases",
        paragraphs: [
          "We process your data to respond to your message, handle requests for an offer, demo or cooperation, and continue correspondence related to that contact.",
          "The legal basis is Article 6(1)(b) GDPR where the contact is aimed at concluding a contract or taking steps prior to entering into a contract, and Article 6(1)(f) GDPR, namely our legitimate interest in handling correspondence, ensuring website security and defending against potential claims.",
          "If you provide additional data in your message, you do so on your own initiative. Please do not send data we do not need to handle your request.",
        ],
      },
      {
        title: "4. Whether providing data is mandatory",
        paragraphs: [
          "Providing data in the contact form is voluntary, but necessary for us to answer. If you do not provide the data, we may be unable to handle your request.",
        ],
      },
      {
        title: "5. Recipients of data",
        paragraphs: [
          "Your data may be disclosed to entities we use to operate the website and handle contact, in particular providers of static hosting, network infrastructure and email-delivery services.",
          "At the time of publication of this policy, we use in this respect GitHub Pages, Cloudflare and Brevo. These providers process data on our behalf or as separate controllers to the extent necessary for their services.",
        ],
      },
      {
        title: "6. Transfers outside the EEA",
        paragraphs: [
          "Because we use certain technology providers, data may be transferred outside the European Economic Area. In such cases, we ensure that transfers take place lawfully, in particular on the basis of standard contractual clauses, adequacy decisions or other permitted transfer mechanisms.",
        ],
      },
      {
        title: "7. Retention period",
        paragraphs: [
          "We store correspondence data for the period necessary to handle the matter and then for the time needed to demonstrate proper handling or defend against claims, no longer than the applicable limitation periods unless a longer retention period is required by law.",
          "Technical data and service logs are retained for the period necessary to ensure security, detect abuse and maintain continuity of services, in line with our configuration and the policies of our providers.",
        ],
      },
      {
        title: "8. Your rights",
        paragraphs: [
          "You have the right to request access to your data, rectification, erasure, restriction of processing and to object to processing based on our legitimate interest.",
          "Where processing is based on Article 6(1)(b) GDPR, you may also request data portability.",
          "You also have the right to lodge a complaint with the President of the Polish Personal Data Protection Office if you believe your data is processed unlawfully.",
        ],
      },
      {
        title: "9. Automated decision-making",
        paragraphs: [
          "Data submitted through the contact form is not used to make decisions about you by automated means, including profiling within the meaning of GDPR.",
        ],
      },
      {
        title: "10. Cookies and similar technologies",
        paragraphs: [
          "As of the publication date of this policy, the website does not use its own cookies or similar technologies for analytics or marketing purposes that would require your consent.",
          "When using the website, your browser and the technical infrastructure may still process data necessary to display the site, ensure transmission security and serve HTTP requests. If we add analytics, advertising or other non-essential cookie-based tools in the future, we will implement an appropriate consent mechanism before activating them and update this policy.",
        ],
      },
      {
        title: "11. Changes to this privacy policy",
        paragraphs: [
          "This privacy policy may be updated if the operation of the website, the scope of processed data or applicable law changes. The current version is always published on this page.",
        ],
      },
    ],
  },
};

const deBundle: PageBundle = {
  locale: "de",
  metadata: {
    homeTitle: "BidSentra – Mehr Ausschreibungen mit KI gewinnen",
    homeDescription:
      "BidSentra ist eine KI-Plattform, die die Analyse von Ausschreibungsunterlagen automatisiert, konforme Angebote erstellt und die Gewinnwahrscheinlichkeit bewertet.",
    privacyTitle: "Datenschutzerklärung | BidSentra",
    privacyDescription:
      "Informationen zur Verarbeitung personenbezogener Daten bei der Nutzung der BidSentra-Website und des Kontaktformulars.",
  },
  site: {
    ...sitePl,
    navLinks: [
      { href: "#jak-dziala", label: "So funktioniert es" },
      { href: "#korzysci", label: "Vorteile" },
      { href: "#cennik", label: "Preise" },
      { href: "#faq", label: "FAQ" },
    ],
    ctaButtonText: "Demo buchen",
    footerDescription:
      "Ihre zentrale Schaltstelle für smarteres Bieten. KI-gestützte B2B-Ausschreibungsautomatisierung für den polnischen Markt.",
    footerColumns: [
      {
        title: "PRODUKT",
        links: [
          { href: "#jak-dziala", label: "So funktioniert es" },
          { href: "#korzysci", label: "Vorteile" },
          { href: "#cennik", label: "Preise" },
          { href: "#faq", label: "FAQ" },
        ],
      },
      {
        title: "BRANCHEN",
        links: [
          { href: "#sektory", label: "Bau und Ingenieurwesen" },
          { href: "#sektory", label: "IT und Software" },
          { href: "#sektory", label: "Energie und Erneuerbare" },
          { href: "#sektory", label: "Vergabeberatung" },
        ],
      },
      {
        title: "UNTERNEHMEN",
        links: [
          { href: "#kontakt", label: "Kontakt" },
          { href: "/de/datenschutz", label: "Datenschutzerklärung" },
          { href: "#", label: "AGB" },
          { href: "#", label: "Publikationen" },
        ],
      },
    ],
  },
  hero: {
    badge: "100 % konform mit dem polnischen Vergaberecht",
    titleWhite: "Mehr Ausschreibungen gewinnen",
    titleHighlight: "in der halben Zeit.",
    description:
      "BidSentra ist eine KI-Plattform, die die Analyse von Ausschreibungsunterlagen automatisiert, vergaberechtskonforme Angebote erstellt und Ihre Gewinnchance bewertet, bevor der Wettbewerb die Spezifikation zu Ende gelesen hat.",
    ctaPrimary: "Demo buchen",
    ctaSecondary: "So funktioniert es",
    card: {
      title: "BidSentra · Ausschreibungsanalyse",
      rows: [
        { label: "Ausschreibung:", value: "Modernisierung des IT-Netzes" },
        { label: "Wert:", value: "2.400.000 PLN" },
      ],
      bidScore: "82 / 100",
      pzpCompliance: "Hoch",
      docCompleteness: 87,
      winChance: 73,
      bidScoreLabel: "Bid Score™",
      complianceLabel: "Vergaberechtskonformität",
      docCompletenessLabel: "Vollständigkeit der Unterlagen",
      winChanceLabel: "Gewinnchance (ML)",
    },
  },
  stats: {
    items: [
      { value: "50%", label: "Weniger Zeit für Angebote" },
      { value: "80%", label: "Weniger formale Fehler" },
      { value: "+30%", label: "Höhere Erfolgsquote" },
    ],
  },
  costCalculator: {
    title: "Was kostet Sie eine verlorene Ausschreibung?",
    fields: [
      { label: "Teamzeit", key: "teamTime", defaultValue: 19900 },
      { label: "Arbeitskosten", key: "laborCost", defaultValue: 3100 },
      { label: "Verlorene Marge", key: "lostMargin", defaultValue: 8500 },
    ],
    totalLabel: "Gesamtkosten",
    resetLabel: "Werte zurücksetzen",
    localeTag: "de-DE",
    currencyCode: "PLN",
    currencySuffix: "PLN",
  },
  problem: {
    sectionLabel: "Welches Problem wir lösen",
    title: "Ausschreibungen verschlingen Zeit und Ressourcen",
    subtitle:
      "Unternehmen, die BidSentra nutzen, reichen Angebote im Schnitt 4 Tage schneller ein als ihre Wettbewerber.",
    traditionalLabel: "Traditioneller Prozess",
    bidsentraLabel: "BidSentra",
    painPoints: [
      {
        icon: "FileText",
        title: "Hunderte Seiten Unterlagen",
        desc: "Leistungsverzeichnisse, technische Programme, Erklärungen und Anforderungen müssen bei jeder Ausschreibung manuell geprüft werden.",
      },
      {
        icon: "Clock",
        title: "Wochen für ein einziges Angebot",
        desc: "Die Erstellung eines Angebots dauert oft mehrere Tage bis Wochen und bindet das gesamte Angebotsteam.",
      },
      {
        icon: "AlertTriangle",
        title: "Formale Fehler führen zur Ablehnung",
        desc: "Ein fehlendes Dokument oder eine nicht erfüllte Anforderung kann die gesamte Arbeit zunichtemachen und den Auftrag kosten.",
      },
      {
        icon: "RefreshCw",
        title: "Immer wieder von vorne beginnen",
        desc: "Wissen aus früheren Angeboten wird selten systematisch wiederverwendet, daher startet fast jede Ausschreibung bei null.",
      },
    ],
    solutions: [
      "Wesentliche Anforderungen in wenigen Minuten extrahiert",
      "Automatische Prüfung von Qualifikationen, Referenzen und Pflichtunterlagen",
      "Sofortige Erkennung von Lücken und Widersprüchen in der Spezifikation",
      "Keine formalen Fehler. Vollständige Konformität mit den Anforderungen",
    ],
    marketStats: [
      { val: "200k+", lbl: "Ausschreibungen pro Jahr in Polen" },
      { val: "~60%", lbl: "Angebote enthalten formale Fehler" },
      { val: "3–6 Wo.", lbl: "typische Angebotserstellung" },
      { val: "PPL", lbl: "volle Rechtskonformität" },
    ],
  },
  howItWorks: {
    sectionLabel: "So funktioniert es",
    title: "Von den Unterlagen zum fertigen Angebot in 4 Schritten",
    subtitle:
      "BidSentra führt Ihr Team durch den gesamten Prozess, von der Analyse der Ausschreibung bis zum abgabefertigen Angebot.",
    steps: [
      {
        num: "01",
        icon: "Upload",
        title: "Unterlagen hochladen",
        desc: "Fügen Sie den Ausschreibungslink ein oder laden Sie die Unterlagen hoch. BidSentra kann Dokumente auch aus BZP, TED und e-Zamówienia abrufen.",
      },
      {
        num: "02",
        icon: "Brain",
        title: "KI analysiert die Anforderungen",
        desc: "Die NLP/LLM-Engine extrahiert rechtliche, technische und finanzielle Kernanforderungen und markiert Risiken.",
      },
      {
        num: "03",
        icon: "BarChart3",
        title: "Bid Score™ prüfen",
        desc: "Das ML-Modul bewertet Attraktivität und Gewinnchance anhand Ihrer Daten und relevanter Marktparameter.",
      },
      {
        num: "04",
        icon: "FileOutput",
        title: "Angebot generieren",
        desc: "Der AI Draft Generator erstellt ein vollständiges, konformes Angebot auf Basis Ihrer Referenzen, Zertifikate und Vorlagen.",
      },
    ],
  },
  features: {
    sectionLabel: "Kernfunktionen",
    title: "Technologie, die die Spielregeln verändert",
    subtitle:
      "BidSentra verbindet fortschrittliche KI mit praktischem Know-how im polnischen Vergabemarkt.",
    items: [
      {
        icon: "Search",
        title: "Semantische Dokumentenanalyse (NLP)",
        desc: "Das System versteht den Kontext rechtlicher Klauseln, klassifiziert Anforderungen und erkennt Risiken in Ausschreibungsunterlagen automatisch.",
        tag: "AI / NLP",
      },
      {
        icon: "FileEdit",
        title: "AI Draft Generator",
        desc: "Erstellt automatisch Angebotsstruktur und konforme Inhalte, indem Ausschreibungsdaten mit Ihren Referenzen und Zertifikaten verknüpft werden.",
        tag: "RAG-Architektur",
      },
      {
        icon: "BarChart3",
        title: "Bid Score™ Bewertung",
        desc: "Ein Machine-Learning-Modell unterstützt bessere Angebotsentscheidungen auf Basis historischer und kontextbezogener Daten.",
        tag: "Machine Learning",
      },
      {
        icon: "Link2",
        title: "ERP / CRM / BIM Integrationen",
        desc: "Eine offene API verbindet bestehende Systeme, damit Kosten- und Ressourcendaten automatisch in den Angebotsprozess einfließen.",
        tag: "API First",
      },
      {
        icon: "BookOpen",
        title: "Wissensdatenbank des Unternehmens",
        desc: "Das System lernt aus Ihrer Angebotshistorie und verbessert schrittweise Empfehlungen sowie Risikoprognosen.",
        tag: "Selbstlernend",
      },
      {
        icon: "ShieldCheck",
        title: "Compliance-Validierung",
        desc: "Prüft die Vollständigkeit der Unterlagen und die Konformität mit den Anforderungen des Auftraggebers automatisch.",
        tag: "Compliance",
      },
    ],
  },
  benefits: {
    sectionLabel: "Warum BidSentra",
    title: "Messbare Vorteile für Ihr Team",
    items: [
      {
        num: "01",
        title: "Operative Effizienz",
        desc: "Reduzieren Sie die Angebotsvorbereitung um 50 % und senken Sie die Bearbeitungskosten um 30 %. Ihr Team kann doppelt so viele Verfahren abwickeln.",
      },
      {
        num: "02",
        title: "Sicherheit und Konformität",
        desc: "Die automatische formale Prüfung beseitigt Verfahrensfehler. Jedes Angebot verlässt das System vollständig und regelkonform.",
      },
      {
        num: "03",
        title: "Bessere Entscheidungen",
        desc: "Datenbasierte Empfehlungen helfen, die profitabelsten Ausschreibungen zu priorisieren und Chancen mit geringer Erfolgswahrscheinlichkeit zu vermeiden.",
      },
      {
        num: "04",
        title: "Wettbewerbsvorsprung",
        desc: "Seien Sie schneller als der Wettbewerb. BidSentra gehört zu den ersten Lösungen in Polen, die tiefe Automatisierung mit lokaler Rechtspraxis verbinden.",
      },
    ],
    kpisLabel: "Ergebnisse von BidSentra-Kunden",
    kpis: [
      { label: "Weniger Zeit für Angebote", value: "−50%", pct: 50 },
      { label: "Weniger formale Fehler", value: "−80%", pct: 80 },
      { label: "Höhere Erfolgsquote", value: "+30%", pct: 30 },
      { label: "Weniger Bearbeitungskosten", value: "−30%", pct: 30 },
    ],
    quote:
      "In zwei Jahren wird jedes starke Angebotsteam von KI unterstützt. Sie können diesen Vorsprung schon heute nutzen.",
  },
  industries: {
    sectionLabel: "Sektoren und Branchen",
    title: "Entwickelt für Branchen, die von Ausschreibungen leben",
    subtitle:
      "BidSentra ist auf die Besonderheiten öffentlicher und kommerzieller Ausschreibungen in den wichtigsten Branchen in Polen zugeschnitten.",
    items: [
      {
        icon: "Building2",
        title: "Bau und Ingenieurwesen",
        desc: "Generalunternehmer und Planungsbüros, die jedes Jahr Dutzende hochwertiger Angebote vorbereiten.",
      },
      {
        icon: "Monitor",
        title: "IT und Software",
        desc: "Softwarehäuser und Systemintegratoren, die an IT- und Digitalisierungsvergaben teilnehmen.",
      },
      {
        icon: "Zap",
        title: "Energie und Erneuerbare",
        desc: "Unternehmen für Solar-, Wind- und Netzmodernisierungsprojekte, oft in Konsortialmodellen.",
      },
      {
        icon: "Target",
        title: "Vergabeberatung",
        desc: "Beratungen, die Ausschreibungsprozesse für Kunden steuern und Qualität sowie Durchsatz skalieren wollen.",
      },
    ],
    quoteText:
      "Dem Markt fehlt weiterhin eine Lösung, die automatisierte Dokumentenanalyse, regelkonforme Angebotserstellung und Integrationen mit lokalen Vergabeplattformen vereint. BidSentra schließt diese Lücke.",
    quoteAuthor: "BidSentra Team · Up To You Sp. z o.o.",
  },
  testimonials: {
    sectionLabel: "Referenzen",
    title: "Was Partner über uns sagen",
    disclaimer: "* Beispieldaten – echte Referenzen folgen in Kürze",
    items: [
      {
        quote:
          "BidSentra hat unseren Angebotsprozess transformiert. Die Vorbereitung dauert jetzt nur noch halb so lange.",
        name: "Johann Schmidt",
        role: "Leiter Angebotsmanagement",
        company: "Baugruppe GmbH",
      },
      {
        quote:
          "Die Eliminierung formaler Fehler ist für uns entscheidend. Seit der Einführung wurde kein Angebot mehr abgelehnt.",
        name: "Anna Novak",
        role: "Leiterin Vergabeteam",
        company: "IT Solutions S.A.",
      },
      {
        quote:
          "Bid Score™ hilft uns, uns auf Ausschreibungen mit realer Gewinnchance zu konzentrieren. Unsere Erfolgsquote stieg um 35 %.",
        name: "Peter Wiśniewski",
        role: "Geschäftsführer",
        company: "Tender Advisory Plus",
      },
    ],
  },
  pricing: {
    sectionLabel: "Preise",
    title: "Auf Ihre Bedürfnisse zugeschnitten",
    subtitle: "Für die ersten 50 Unternehmen bleibt der Preis 24 Monate fix",
    plans: [
      {
        name: "STARTER",
        target: "Für KMU",
        featured: false,
        features: [
          "AI / NLP Dokumentenanalyse",
          "AI Draft Generator (bis zu 10 Angebote / Monat)",
          "Bid Score™ Chancenbewertung",
          "BZP- und TED-Integration",
          "E-Mail-Support",
        ],
        cta: "Bald verfügbar",
      },
      {
        name: "PROFESSIONAL",
        target: "Für aktive Bieter",
        featured: true,
        badge: "Am beliebtesten",
        features: [
          "Alles aus Starter",
          "Unbegrenzte Anzahl von Angeboten",
          "Wissensdatenbank des Unternehmens",
          "ERP / CRM Integration",
          "Schrittweise Compliance-Prüfung",
          "Reporting und Analytik",
          "Priorisierter Support",
        ],
        cta: "Bald verfügbar",
      },
      {
        name: "ENTERPRISE",
        target: "Für größere Organisationen",
        featured: false,
        features: [
          "Alles aus Professional",
          "Dediziertes Hosting / On-Premise",
          "BIM- und Spezialsystem-Integration",
          "Eigenes KI-Modell auf Ihren Daten",
          "Training für Ihr Angebotsteam",
          "Dedizierter Ansprechpartner",
        ],
        cta: "Bald verfügbar",
      },
    ],
  },
  faq: {
    sectionLabel: "FAQ",
    title: "Häufig gestellte Fragen",
    subtitle: "Alles, was Sie über BidSentra wissen sollten.",
    items: [
      {
        q: "Welche Dokumentformate unterstützt BidSentra?",
        a: "BidSentra unterstützt derzeit PDF, DOCX sowie gängige Tabellenformate wie XLSX und CSV. Wir erweitern die Formatunterstützung laufend anhand der Nutzerbedürfnisse. Alle Dokumente werden sicher verarbeitet und niemals an Dritte weitergegeben.",
      },
      {
        q: "Was ist im Basispaket enthalten?",
        a: "Das Starter-Paket umfasst AI/NLP-Dokumentenanalyse, den AI Draft Generator für bis zu 10 Angebote pro Monat, Bid Score™ zur Chancenbewertung, BZP- und TED-Integration sowie E-Mail-Support.",
      },
      {
        q: "Ersetzt BidSentra mein Angebotsteam?",
        a: "Nein. BidSentra unterstützt Ihr Team, indem es repetitive Aufgaben automatisiert. Dadurch können sich Fachleute stärker auf Strategie und Angebotsqualität konzentrieren. Entscheidungen treffen weiterhin Menschen.",
      },
      {
        q: "Sind unsere Ausschreibungsdaten sicher?",
        a: "Ja. Daten werden bei der Übertragung und im Ruhezustand verschlüsselt. Wir arbeiten nach hohen Sicherheitsstandards im Einklang mit der DSGVO. Ihre Daten werden weder an Dritte weitergegeben noch zum Training öffentlicher KI-Modelle verwendet.",
      },
      {
        q: "Was passiert nach dem Ende der Testphase?",
        a: "Nach der 14-tägigen kostenlosen Testphase können Sie einen unserer Tarife wählen oder die Nutzung beenden. Ihre Daten bleiben danach noch 30 Tage lang für den Export verfügbar.",
      },
    ],
  },
  cta: {
    title: "Bereit, mehr",
    titleHighlight: "Ausschreibungen zu gewinnen?",
    description:
      "Buchen Sie eine 30-minütige Demo und sehen Sie, wie BidSentra die Angebotserstellung in Ihrem Unternehmen transformieren kann.",
    trustBadges: ["OHNE VERPFLICHTUNG", "14 TAGE GRATIS", "LOKALER SUPPORT"],
    emailButtonText: "Gespräch vereinbaren",
    emailAddress: "info@bidsentra.pl",
    formEndpoint: ctaPl.formEndpoint,
    formLabels: {
      name: "Name",
      namePlaceholder: "Max Mustermann",
      email: "E-Mail",
      emailPlaceholder: "max@firma.de",
      message: "Nachricht",
      messagePlaceholder: "Wobei können wir helfen?",
      submit: "Senden",
      sending: "Wird gesendet...",
      thankYouTitle: "Vielen Dank!",
      thankYouMessage: "Wir melden uns in Kürze bei Ihnen.",
      errorTitle: "Ihre Nachricht konnte nicht gesendet werden",
      errorMessageBeforeEmail:
        "Bitte versuchen Sie es in einem Moment erneut oder schreiben Sie direkt an ",
      errorMessageAfterEmail: ".",
      backToForm: "Zurück zum Formular",
    },
    bottomNote: "Ohne Verpflichtung · 14 Tage gratis · Lokaler Support",
  },
  privacy: {
    badge: "Datenschutz",
    title: "Datenschutzerklärung von BidSentra",
    intro:
      "Nachfolgend finden Sie Informationen dazu, wie wir personenbezogene Daten im Zusammenhang mit der Nutzung der BidSentra-Website und des Kontaktformulars verarbeiten.",
    updatedLabel: "Aktualisiert",
    updatedDate: "27. März 2026",
    sourceNote:
      "Die Angaben zum Verantwortlichen wurden auf Grundlage des beigefügten aktuellen Auszugs aus dem polnischen Landesgerichtsregister (KRS Nr. 0001221405) und der aktuellen Konfiguration der Website erstellt.",
    adminCardTitle: "Verantwortlicher",
    adminContactLabel: "Kontakt zum Datenschutz:",
    sections: [
      {
        title: "1. Verantwortlicher",
        paragraphs: [
          "Verantwortlicher für Ihre personenbezogenen Daten ist UP TO YOU spółka z ograniczoną odpowiedzialnością mit Sitz in Lublin, ul. Gospodarcza 26, 20-213 Lublin, eingetragen im polnischen Landesgerichtsregister unter KRS Nr. 0001221405, NIP 9462763547, REGON 543872521.",
          "In allen Fragen zum Schutz personenbezogener Daten erreichen Sie uns unter: info@bidsentra.pl.",
        ],
      },
      {
        title: "2. Umfang und Herkunft der Daten",
        paragraphs: [
          "Wir verarbeiten Daten, die Sie uns freiwillig bei der Nutzung des Kontaktformulars oder im E-Mail-Kontakt mitteilen, insbesondere Ihren Namen, Ihre E-Mail-Adresse und den Inhalt Ihrer Nachricht.",
          "Bei der Nutzung der Website können außerdem grundlegende technische Daten verarbeitet werden, etwa IP-Adresse, Datum und Uhrzeit der Anfrage, Browser- und Gerätedaten sowie Logs, die für Sicherheit und den ordnungsgemäßen Betrieb der Website erforderlich sind.",
        ],
      },
      {
        title: "3. Zwecke und Rechtsgrundlagen",
        paragraphs: [
          "Wir verarbeiten Ihre Daten, um auf Ihre Nachricht zu antworten, Anfragen zu Angebot, Demo oder Zusammenarbeit zu bearbeiten und die dazugehörige Korrespondenz fortzuführen.",
          "Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit der Kontakt auf den Abschluss eines Vertrags oder vorvertragliche Maßnahmen gerichtet ist, sowie Art. 6 Abs. 1 lit. f DSGVO, also unser berechtigtes Interesse an der Bearbeitung von Korrespondenz, der Sicherstellung der Website-Sicherheit und der Abwehr möglicher Ansprüche.",
          "Wenn Sie in Ihrer Nachricht zusätzliche Daten angeben, erfolgt dies aus eigener Initiative. Bitte senden Sie uns keine Daten, die wir für die Bearbeitung Ihrer Anfrage nicht benötigen.",
        ],
      },
      {
        title: "4. Ist die Bereitstellung der Daten verpflichtend?",
        paragraphs: [
          "Die Angabe von Daten im Kontaktformular ist freiwillig, aber erforderlich, damit wir antworten können. Ohne diese Daten können wir Ihre Anfrage möglicherweise nicht bearbeiten.",
        ],
      },
      {
        title: "5. Empfänger der Daten",
        paragraphs: [
          "Ihre Daten können an Dienstleister weitergegeben werden, die wir für den Betrieb der Website und die Bearbeitung von Kontaktanfragen einsetzen, insbesondere Anbieter von statischem Hosting, Netzwerkinfrastruktur und E-Mail-Zustellung.",
          "Zum Zeitpunkt der Veröffentlichung dieser Erklärung nutzen wir dafür insbesondere GitHub Pages, Cloudflare und Brevo. Diese Anbieter verarbeiten Daten in unserem Auftrag oder als eigenständige Verantwortliche, soweit dies für ihre Dienste erforderlich ist.",
        ],
      },
      {
        title: "6. Übermittlungen außerhalb des EWR",
        paragraphs: [
          "Aufgrund des Einsatzes bestimmter Technologieanbieter können Daten außerhalb des Europäischen Wirtschaftsraums übermittelt werden. In solchen Fällen stellen wir sicher, dass die Übermittlung rechtmäßig erfolgt, insbesondere auf Grundlage von Standardvertragsklauseln, Angemessenheitsbeschlüssen oder anderen zulässigen Mechanismen.",
        ],
      },
      {
        title: "7. Speicherdauer",
        paragraphs: [
          "Korrespondenzdaten speichern wir für die Dauer, die zur Bearbeitung der Angelegenheit erforderlich ist, und anschließend so lange, wie wir sie benötigen, um die ordnungsgemäße Bearbeitung nachzuweisen oder uns gegen Ansprüche zu verteidigen, jedoch nicht länger als bis zum Ablauf der einschlägigen Verjährungsfristen, sofern nicht gesetzlich längere Aufbewahrungsfristen vorgeschrieben sind.",
          "Technische Daten und Servicelogs werden so lange gespeichert, wie es zur Gewährleistung von Sicherheit, Missbrauchserkennung und Aufrechterhaltung der Dienste erforderlich ist, entsprechend unserer Konfiguration und den Richtlinien unserer Anbieter.",
        ],
      },
      {
        title: "8. Ihre Rechte",
        paragraphs: [
          "Sie haben das Recht auf Auskunft über Ihre Daten, Berichtigung, Löschung, Einschränkung der Verarbeitung sowie Widerspruch gegen Verarbeitungen, die auf unserem berechtigten Interesse beruhen.",
          "Soweit die Verarbeitung auf Art. 6 Abs. 1 lit. b DSGVO beruht, können Sie außerdem Datenübertragbarkeit verlangen.",
          "Zudem haben Sie das Recht, Beschwerde bei der Präsidentin bzw. dem Präsidenten der polnischen Datenschutzaufsichtsbehörde einzulegen, wenn Sie der Ansicht sind, dass Ihre Daten rechtswidrig verarbeitet werden.",
        ],
      },
      {
        title: "9. Automatisierte Entscheidungen",
        paragraphs: [
          "Daten aus dem Kontaktformular werden nicht verwendet, um Ihnen gegenüber automatisierte Entscheidungen einschließlich Profiling im Sinne der DSGVO zu treffen.",
        ],
      },
      {
        title: "10. Cookies und ähnliche Technologien",
        paragraphs: [
          "Zum Zeitpunkt der Veröffentlichung dieser Erklärung verwendet die Website keine eigenen Cookies oder ähnlichen Technologien zu Analyse- oder Marketingzwecken, die Ihre Einwilligung erfordern würden.",
          "Bei der Nutzung der Website können Ihr Browser und die technische Infrastruktur dennoch Daten verarbeiten, die für die Darstellung der Website, die Sicherheit der Übertragung und die Bearbeitung von HTTP-Anfragen erforderlich sind. Wenn wir künftig Analyse-, Werbe- oder andere nicht notwendige Cookie-basierte Tools einsetzen, werden wir vor deren Aktivierung einen geeigneten Einwilligungsmechanismus einführen und diese Erklärung aktualisieren.",
        ],
      },
      {
        title: "11. Änderungen dieser Datenschutzerklärung",
        paragraphs: [
          "Diese Datenschutzerklärung kann aktualisiert werden, wenn sich der Betrieb der Website, der Umfang der verarbeiteten Daten oder die geltenden Rechtsvorschriften ändern. Die aktuelle Fassung wird stets auf dieser Seite veröffentlicht.",
        ],
      },
    ],
  },
};

const bundles: Record<LocaleCode, PageBundle> = {
  pl: plBundle,
  en: enBundle,
  de: deBundle,
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
