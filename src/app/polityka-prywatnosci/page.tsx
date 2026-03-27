import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { loadContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Polityka prywatności | BidSentra",
  description:
    "Informacje o przetwarzaniu danych osobowych i zasadach korzystania z formularza kontaktowego w serwisie BidSentra.",
};

const policySections = [
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
] as const;

export default async function PrivacyPolicyPage() {
  const site = (await loadContent("site")) as Record<string, unknown>;
  const headerLogo = (site.logo as string) || "/images/logo-inverse.png";
  const footerLogo =
    (site.logoWhite as string) || (site.logo as string) || "/images/logo-inverse.png";

  const legalNavLinks = [
    { href: "/#jak-dziala", label: "Jak to działa" },
    { href: "/#korzysci", label: "Co zyskujesz" },
    { href: "/#cennik", label: "Cennik" },
    { href: "/#faq", label: "FAQ" },
  ];
  const legalFooterColumns = (
    (site.footerColumns as {
      title: string;
      links: { label: string; href: string }[];
    }[]) || []
  ).map((column) => ({
    ...column,
    links: column.links.map((link) => ({
      ...link,
      href: link.href.startsWith("#") ? `/${link.href}` : link.href,
    })),
  }));

  return (
    <>
      <Header
        logo={headerLogo}
        navLinks={legalNavLinks}
        ctaButtonText={site.ctaButtonText as string}
      />
      <main className="min-h-screen bg-slate-50 text-slate-900">
        <section className="bg-dark-teal pt-36 pb-16 px-5 md:px-8">
          <div className="max-w-5xl mx-auto">
            <span className="inline-flex rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-lime">
              Ochrona danych
            </span>
            <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
              Polityka prywatności BidSentra
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/72 md:text-lg">
              Poniżej znajdziesz informacje o tym, jak przetwarzamy dane osobowe
              w związku z korzystaniem z serwisu BidSentra i formularza kontaktowego.
            </p>
            <div className="mt-8 rounded-2xl border border-white/12 bg-white/8 p-6 text-sm leading-relaxed text-white/72 backdrop-blur-sm">
              <p>
                Aktualizacja: <strong className="text-white">27 marca 2026 r.</strong>
              </p>
              <p className="mt-2">
                Dane administratora opracowano na podstawie załączonego odpisu
                aktualnego z KRS nr 0001221405 oraz aktualnej konfiguracji serwisu.
              </p>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 md:px-8 md:py-20">
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
            <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-dark-teal/70">
                Administrator
              </p>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
                <p>
                  <strong>UP TO YOU sp. z o.o.</strong>
                  <br />
                  ul. Gospodarcza 26
                  <br />
                  20-213 Lublin
                </p>
                <p>
                  KRS: 0001221405
                  <br />
                  NIP: 9462763547
                  <br />
                  REGON: 543872521
                </p>
                <p>
                  Kontakt w sprawach danych:
                  <br />
                  <a
                    href="mailto:info@bidsentra.pl"
                    className="font-semibold text-dark-teal hover:text-mid-teal transition-colors"
                  >
                    info@bidsentra.pl
                  </a>
                </p>
              </div>
            </aside>

            <article className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-10">
              <div className="space-y-10">
                {policySections.map((section) => (
                  <section key={section.title}>
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                      {section.title}
                    </h2>
                    <div className="mt-4 space-y-4 text-[15px] leading-7 text-slate-700">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer
        logoWhite={footerLogo}
        footerDescription={site.footerDescription as string}
        footerCopyright={site.footerCopyright as string}
        footerUrl={site.footerUrl as string}
        footerColumns={legalFooterColumns}
      />
    </>
  );
}
