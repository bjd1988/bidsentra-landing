import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import {
  type LocaleCode,
  getAbsoluteUrl,
  getHomePath,
  getPageBundle,
  getPolicyPath,
  getPrivacyFooterColumns,
  getPrivacyHeaderConfig,
} from "@/lib/localized-site";

interface PrivacyPolicyPageProps {
  locale: LocaleCode;
}

export function PrivacyPolicyPage({ locale }: PrivacyPolicyPageProps) {
  const bundle = getPageBundle(locale);
  const headerConfig = getPrivacyHeaderConfig(locale);
  const privacy = bundle.privacy;
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "BidSentra",
        item: getAbsoluteUrl(getHomePath(locale)),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: privacy.title,
        item: getAbsoluteUrl(getPolicyPath(locale)),
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
        navLinks={headerConfig.navLinks}
        ctaButtonText={bundle.site.ctaButtonText}
        homeHref={headerConfig.homeHref}
        ctaHref={headerConfig.ctaHref}
        languageLinks={headerConfig.languageLinks}
      />
      <main lang={locale} className="min-h-screen bg-slate-50 text-slate-900">
        <section className="bg-dark-teal pt-36 pb-16 px-5 md:px-8">
          <div className="max-w-5xl mx-auto">
            <span className="inline-flex rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-lime">
              {privacy.badge}
            </span>
            <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
              {privacy.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/72 md:text-lg">
              {privacy.intro}
            </p>
            <div className="mt-8 rounded-2xl border border-white/12 bg-white/8 p-6 text-sm leading-relaxed text-white/72 backdrop-blur-sm">
              <p>
                {privacy.updatedLabel}:{" "}
                <strong className="text-white">{privacy.updatedDate}</strong>
              </p>
              <p className="mt-2">{privacy.sourceNote}</p>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 md:px-8 md:py-20">
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
            <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-dark-teal/70">
                {privacy.adminCardTitle}
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
                  {privacy.adminContactLabel}
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

            <article
              lang={locale}
              className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <div className="space-y-10">
                {privacy.sections.map((section) => (
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
        logoWhite={bundle.site.logoWhite}
        footerDescription={bundle.site.footerDescription}
        footerCopyright={bundle.site.footerCopyright}
        footerUrl={bundle.site.footerUrl}
        footerColumns={getPrivacyFooterColumns(locale)}
      />
    </>
  );
}
