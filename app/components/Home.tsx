// app/components/Home.tsx
import type { Lang } from "@/app/dictionaries/header";
import { getHomeDictionary } from "@/app/dictionaries/home";
import InfoCompare from "@/app/components/InfoCompare";
import Calculator from "@/app/components/Calculator";
import LeadForm from "@/app/components/LeadForm";
import TariffCards from "@/app/components/TariffCards";
import CoverageBlock from "@/app/components/CoverageBlock";
import { keepShortWords } from "@/app/utils/typography";
import { getBelarusPolandOcDictionary } from "@/app/dictionaries/seo-landings/belarusPolandOc";
import { getGeorgiaRomaniaOcDictionary } from "@/app/dictionaries/seo-landings/georgiaRomaniaOc";
import { belarusLithuaniaOcDictionary } from "@/app/dictionaries/seo-landings/belarusLithuaniaOc";
import { getKazakhstanPolandOcDictionary } from "@/app/dictionaries/seo-landings/kazakhstanPolandOc";
import { getGeorgiaBulgariaOcDictionary } from "@/app/dictionaries/seo-landings/georgiaBulgariaOc";
import { getUaeOcDictionary } from "@/app/dictionaries/seo-landings/uaeOc";
import { isRouteLocaleIndexable } from "@/app/seo";
import { BusinessHoursBanner } from "@/app/components/BusinessHoursBanner";

export default function Home({ lang }: { lang: Lang }) {
  const t = getHomeDictionary(lang);
  const landing = getBelarusPolandOcDictionary(lang);
  const georgiaRomania = getGeorgiaRomaniaOcDictionary(lang);
  const belarusLithuania = belarusLithuaniaOcDictionary[lang];
  const kazakhstanPoland = getKazakhstanPolandOcDictionary(lang);
  const georgiaBulgaria = getGeorgiaBulgariaOcDictionary(lang);
  const uaeOc = getUaeOcDictionary(lang);
  const guide = t.insuranceGuide;

  const seoCards = [
    isRouteLocaleIndexable(lang, "/route/belarus/poland")
      ? {
          href: `/${lang}/route/belarus/poland`,
          title: landing.carousel.cardTitle,
          text: landing.carousel.cardText,
          cta: landing.carousel.cta,
        }
      : null,

    isRouteLocaleIndexable(lang, "/route/georgia/romania")
      ? {
          href: `/${lang}/route/georgia/romania`,
          title: georgiaRomania.carousel.cardTitle,
          text: georgiaRomania.carousel.cardText,
          cta: georgiaRomania.carousel.cta,
        }
      : null,

    isRouteLocaleIndexable(lang, "/route/belarus/lithuania")
      ? {
          href: `/${lang}/route/belarus/lithuania`,
          title: belarusLithuania.carousel.cardTitle,
          text: belarusLithuania.carousel.cardText,
          cta: belarusLithuania.carousel.cta,
        }
      : null,

    isRouteLocaleIndexable(lang, "/country/uae")
      ? {
          href: `/${lang}/country/uae`,
          title: uaeOc.carousel.cardTitle,
          text: uaeOc.carousel.cardText,
          cta: uaeOc.carousel.cta,
        }
      : null,

    isRouteLocaleIndexable(lang, "/route/kazakhstan/poland") &&
      kazakhstanPoland
        ? {
            href: `/${lang}/route/kazakhstan/poland`,
            title: kazakhstanPoland.carousel.cardTitle,
            text: kazakhstanPoland.carousel.cardText,
            cta: kazakhstanPoland.carousel.cta,
          }
        : null,

      isRouteLocaleIndexable(lang, "/route/georgia/bulgaria") &&
      georgiaBulgaria
        ? {
            href: `/${lang}/route/georgia/bulgaria`,
            title: georgiaBulgaria.carousel.cardTitle,
            text: georgiaBulgaria.carousel.cardText,
            cta: georgiaBulgaria.carousel.cta,
          }
        : null,
  ].filter(
    (
      card,
    ): card is {
      href: string;
      title: string;
      text: string;
      cta: string;
    } => Boolean(card),
  );

  return (
    <main id="main">
      <section className="hero">
        <div className="container">
          <div className="hero__grid">
            <div>
              <p className="kicker">
                <span className="badge">{t.hero.kicker}</span>
              </p>

              <h1 className="h1">{keepShortWords(t.hero.title)}</h1>
              <p className="lead">{keepShortWords(t.hero.lead)}</p>

              {guide ? <p className="hero__answer">{guide.directAnswer}</p> : null}

              <div className="meta" aria-label="Meta">
                <span>{t.hero.meta[0]}</span>
                <span className="dot" aria-hidden="true" />
                <span>{t.hero.meta[1]}</span>
                <span className="dot" aria-hidden="true" />
                <span>{t.hero.meta[2]}</span>
              </div>
            </div>

            <div id="calc">
              <Calculator lang={lang} />
            </div>
          </div>
        </div>
      </section>

      {guide ? (
        <section
          className="section section--insurance-guide"
          aria-labelledby="insurance-guide-title"
        >
          <div className="container">
            <div className="section__hd">
              <div>
                <h2 className="section__title" id="insurance-guide-title">
                  {keepShortWords(guide.fit.title)}
                </h2>
                <p className="section__desc">{guide.directAnswer}</p>
              </div>
            </div>

            <div className="insurance-guide-grid">
              <article className="card insurance-guide-card">
                <div className="card__body">
                  <h3 className="card__title">
                    {keepShortWords(guide.fit.title)}
                  </h3>

                  <ul className="insurance-list">
                    {guide.fit.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <div className="card__cta">
                    {guide.fit.links.map((link) => (
                      <a
                        className="btn btn--ghost"
                        href={`/${lang}${link.href}`}
                        key={link.href}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </article>

              <article className="card insurance-guide-card insurance-guide-card--warning">
                <div className="card__body">
                  <h3 className="card__title">
                    {keepShortWords(guide.notFit.title)}
                  </h3>

                  <ul className="insurance-list">
                    {guide.notFit.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>
      ) : null}

      <section className="section section--process">
        <div className="container">
          <div className="section__hd">
            <div>
              <h2 className="section__title">
                {keepShortWords(t.process.title)}
              </h2>
              <p className="section__desc">{t.process.desc}</p>
            </div>
          </div>

          <div className="process-flow" aria-label={t.process.title}>
            {t.process.steps.map((step, index) => (
              <article className="process-flow__item" key={index}>
                <span className="process-flow__num" aria-hidden="true">
                  {index + 1}
                </span>

                <h3 className="process-flow__title">
                  {keepShortWords(step.title)}
                </h3>

                <p className="process-flow__text">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <InfoCompare lang={lang} />

      {guide ? (
        <section className="section section--insurance-details">
          <div className="container">
            <div className="insurance-detail-stack">
              <article className="insurance-detail-panel">
                <div>
                  <h2 className="section__title">
                    {keepShortWords(guide.notCovered.title)}
                  </h2>

                  <p className="section__desc">{guide.notCovered.text}</p>
                </div>

                <a
                  className="btn btn--soft"
                  href={guide.notCovered.link.href}
                >
                  {guide.notCovered.link.label}
                </a>
              </article>

              <div className="insurance-detail-grid">
                <article className="card insurance-guide-card">
                  <div className="card__body">
                    <h2 className="card__title">
                      {keepShortWords(guide.documents.title)}
                    </h2>

                    <p className="card__text">{guide.documents.text}</p>

                    <ul className="insurance-list">
                      {guide.documents.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>

                    <div className="card__cta">
                      <a
                        className="btn btn--ghost"
                        href={`/${lang}${guide.documents.link.href}`}
                      >
                        {guide.documents.link.label}
                      </a>
                    </div>
                  </div>
                </article>

                <article className="card insurance-guide-card">
                  <div className="card__body">
                    <h2 className="card__title">
                      {keepShortWords(guide.price.title)}
                    </h2>

                    <p className="card__text">{guide.price.text}</p>

                    <ul className="insurance-list">
                      {guide.price.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </article>

                <article className="card insurance-guide-card">
                  <div className="card__body">
                    <h2 className="card__title">
                      {keepShortWords(guide.timing.title)}
                    </h2>

                    <p className="card__text">{guide.timing.text}</p>
                  </div>
                </article>

                <article className="card insurance-guide-card">
                  <div className="card__body">
                    <h2 className="card__title">
                      {keepShortWords(guide.checkPolicy.title)}
                    </h2>

                    <p className="card__text">{guide.checkPolicy.text}</p>

                    <ul className="insurance-list insurance-list--compact">
                      {guide.checkPolicy.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>

                    <div className="card__cta">
                      <a
                        className="btn btn--ghost"
                        href={guide.checkPolicy.link.href}
                      >
                        {guide.checkPolicy.link.label}
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="section section--why">
        <div className="container">
          <div className="section__hd">
            <div>
              <h2 className="section__title">
                {keepShortWords(t.why.title)}
              </h2>

              <p className="section__desc">{t.why.desc}</p>
            </div>
          </div>

          <div className="grid-4">
            {t.why.items.map((item, index) => (
              <article className="card" key={index}>
                <div className="card__body">
                  <div className="card__top">
                    <h3 className="card__title">
                      {keepShortWords(item.title)}
                    </h3>

                    <span className="tag tag--green" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="card__text">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div id="coverage">
        <CoverageBlock lang={lang} />
      </div>

      {guide ? (
        <section className="section section--service-role">
          <div className="container">
            <article className="insurance-detail-panel insurance-detail-panel--service">
              <div>
                <h2 className="section__title">
                  {keepShortWords(guide.service.title)}
                </h2>

                <p className="section__desc">{guide.service.text}</p>
              </div>

              <ul className="insurance-list insurance-list--columns">
                {guide.service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>
      ) : null}

      <TariffCards lang={lang} />

      <section className="section" id="buy">
        <div className="container">
          <div className="section__hd">
            <div>
              <h2 className="section__title">
                {keepShortWords(t.form.title)}
              </h2>

              <p className="section__desc">{t.form.desc}</p>

              <BusinessHoursBanner dict={t.businessHours} />
            </div>
          </div>

          <div className="lead-form-shell">
            <LeadForm lang={lang} />
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="container">
          <div className="section__hd">
            <div>
              <h2 className="section__title">
                {keepShortWords(t.faq.title)}
              </h2>

              <p className="section__desc">{t.faq.desc}</p>
            </div>
          </div>

          <div className="faq">
            {t.faq.items.map((item, index) => (
              <details key={index} className="faq__item">
                <summary className="faq__summary">
                  <span>{item.q}</span>
                  <span className="muted">+</span>
                </summary>

                <div
                  className="details__body"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--trust" id="verify">
        <div className="container">
          <div className="section__hd">
            <div>
              <h2 className="section__title">
                {keepShortWords(t.verify.title)}
              </h2>

              <p className="section__desc">{t.verify.lead}</p>
            </div>
          </div>

          <div className="grid-3">
            {t.verify.items.map((item) => (
              <article className="card" key={item.code}>
                <div className="card__body">
                  <div className="card__top">
                    <h3 className="card__title">
                      {keepShortWords(`${item.code} — ${item.country}`)}
                    </h3>

                    <span className="tag tag--yellow">{item.code}</span>
                  </div>

                  <p className="card__text" style={{ fontWeight: 800 }}>
                    {item.org}
                  </p>

                  <p className="card__text">{item.desc}</p>

                  <div className="card__cta">
                    <a
                      className="btn btn--ghost"
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.cta}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {seoCards.length > 0 ? (
        <section className="section">
          <div className="container">
            <div className="section__hd">
              <div>
                <h2 className="section__title">
                  {keepShortWords(landing.carousel.title)}
                </h2>
              </div>
            </div>

            <div
              className="seo-carousel"
              aria-label={landing.carousel.title}
            >
              {seoCards.map((card) => (
                <a
                  className="seo-mini-card"
                  href={card.href}
                  key={card.href}
                >
                  <span className="seo-mini-card__eyebrow">
                    Route guide
                  </span>

                  <h3>{keepShortWords(card.title)}</h3>
                  <p>{card.text}</p>

                  <span className="seo-mini-card__cta">
                    {card.cta}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}

