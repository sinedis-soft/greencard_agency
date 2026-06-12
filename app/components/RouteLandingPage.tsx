import Link from "next/link";
import type { Lang } from "@/app/dictionaries/header";
import type { BelarusPolandOcDictionary } from "@/app/dictionaries/seo-landings/belarusPolandOc";
import Calculator from "@/app/components/Calculator";

type RouteLandingPageProps = {
  lang: Lang;
  dictionary: BelarusPolandOcDictionary;
};

const homeCrumbByLang: Record<Lang, string> = {
  ru: "Главная",
  pl: "Strona główna",
  en: "Home",
  be: "Галоўная",
  uk: "Головна",

  ro: "Acasă",
  sr: "Почетна",
  sq: "Kryefaqja",

  kk: "Басты бет",
  uz: "Bosh sahifa",
  az: "Ana səhifə",

  tr: "Ana Sayfa",

  hy: "Գլխավոր",
  ka: "მთავარი",

  fa: "صفحه اصلی",

  ckb: "سەرەکی",
  kmr: "Rûpela Sereke",

  ar: "الرئيسية",

  he: "דף הבית",

  mn: "Нүүр хуудас",
};

export default function RouteLandingPage({ lang, dictionary: t }: RouteLandingPageProps) {
  const topSignals = [t.what.title, t.price.title, t.validity.title];
  const supportSignals = t.who.items.slice(0, 3);


  return (
    <>
      <nav aria-label="Breadcrumb" className="route-breadcrumb container">
        <ol className="route-breadcrumb__list">
          <li>
            <Link href={`/${lang}`}>{homeCrumbByLang[lang]}</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">{t.breadcrumbTitle}</li>
        </ol>
      </nav>

      <section className="route-hero">
        <div className="container">
          <div className="route-hero__grid">
            <div className="route-hero__content">
              <p className="kicker">
                <span className="badge">{t.hero.kicker}</span>
              </p>
              <h1 className="h1 route-hero__title">{t.hero.title}</h1>
              <p className="lead route-hero__lead">{t.hero.lead}</p>
              <div className="route-hero__actions">
                <a className="btn btn--primary" href={`/${lang}#buy`}>
                  {t.hero.cta}
                </a>
                <a className="btn btn--soft route-hero__secondary" href="#faq">
                  {t.faq.title}
                </a>
              </div>
              <ul className="route-hero__signals" aria-label={t.breadcrumbTitle}>
                {topSignals.map((signal) => (
                  <li key={signal}>{signal}</li>
                ))}
              </ul>
            </div>


            <div className="route-hero__calculator">
              <div className="route-hero__calculator-glow" aria-hidden="true" />
              <Calculator lang={lang} />
            </div>

          </div>
        </div>
      </section>

      <section className="route-overview section">
        <div className="container route-overview__grid">
          <article className="route-card route-card--featured">
            <h2 className="section__title">{t.what.title}</h2>
            <p>{t.what.text}</p>
          </article>
          <article className="route-card route-card--compact">
            <h2 className="section__title">{t.who.title}</h2>
            <ul className="route-checklist">
              {t.who.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="route-steps section">
        <div className="container">
          <div className="route-section-head">
            <div>
              <h2 className="section__title">{t.how.title}</h2>
            </div>
            <div className="route-section-head__line" aria-hidden="true" />
          </div>
          <ol className="route-step-grid">
            {t.how.steps.map((step, index) => (
              <li className="route-step" key={step}>
                <span className="route-step__number">{String(index + 1).padStart(2, "0")}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="route-details section">
        <div className="container route-details__grid">
          <article className="route-card route-card--detail">
            <h2 className="section__title">{t.price.title}</h2>
            <p>{t.price.text}</p>
          </article>
          <article className="route-card route-card--detail">
            <h2 className="section__title">{t.validity.title}</h2>
            <p>{t.validity.text}</p>
          </article>
        </div>
      </section>

      <section className="route-cta section">
        <div className="container">
          <div className="route-cta__panel">
            <div>
              <h2 className="section__title">{t.form.title}</h2>
              <p>{t.form.desc}</p>
            </div>
            <a className="btn btn--primary" href={`/${lang}#buy`}>
              {t.hero.cta}
            </a>
          </div>
          <ul className="route-support-list" aria-label={t.who.title}>
            {supportSignals.map((signal) => (
              <li key={signal}>{signal}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="route-faq section" id="faq">
        <div className="container route-faq__grid">
          <div className="route-faq__intro">
            <h2 className="section__title">{t.faq.title}</h2>
          </div>
          <div className="faq route-faq__list">
            {t.faq.items.map((f) => (
              <details key={f.q} className="faq__item">
                <summary className="faq__summary">
                  <span>{f.q}</span>
                  <span className="muted">+</span>
                </summary>
                <div className="details__body">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
