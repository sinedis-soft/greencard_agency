import Link from "next/link";
import type { Lang } from "@/app/dictionaries/header";
import type { InsuranceContentReview } from "@/app/seo";
import ContentReview from "@/app/components/ContentReview";
import CaseStudies from "@/app/components/CaseStudies";
import type { CaseStudyId, CaseStudyLocale } from "@/app/practiceContent";
import type { BelarusPolandOcDictionary } from "@/app/dictionaries/seo-landings/belarusPolandOc";
import Calculator from "@/app/components/Calculator";
import { keepTypography } from "@/app/utils/typography";
import styles from "./RouteLandingPage.module.css";

type RouteLandingPageProps = {
  lang: Lang;
  dictionary: BelarusPolandOcDictionary;
  review: InsuranceContentReview;
  caseIds?: readonly CaseStudyId[];
};

type RouteEnhancement = {
  quickFacts: Array<{ label: string; value: string }>;
  border: {
    title: string;
    lead: string;
    items: Array<{ title: string; text: string }>;
    note: string;
  };
  documents: {
    title: string;
    lead: string;
    items: Array<{ title: string; text: string }>;
  };
  scenarios: {
    title: string;
    items: Array<{ title: string; text: string }>;
  };
  verification: {
    title: string;
    text: string;
    steps: string[];
  };
  warning: {
    title: string;
    text: string;
  };
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

const routeEnhancementsByLang: Partial<Record<Lang, RouteEnhancement>> = {
  ru: {
    quickFacts: [
      { label: "Для каких номеров", value: "Регистрация за пределами ЕЭЗ" },
      { label: "Где действует", value: "Польша, ЕЭЗ и Швейцария" },
      { label: "Формат полиса", value: "PDF на email и в мессенджер" },
      { label: "Проверка", value: "Через польскую базу UFG" },
    ],
    border: {
      title: "Что важно знать перед границей страна за пределами ЕЭЗ — Страна ЕЭЗ",
      lead:
        "OC graniczne — это обязательное страхование гражданской ответственности перед третьими лицами. Оно не заменяет КАСКО, не покрывает повреждение вашего автомобиля и не решает таможенные или миграционные вопросы.",
      items: [
        {
          title: "Полис нужен до движения по Польше",
          text:
            "Если действующей «Зелёной карты» нет, автомобиль с регистрацией вне ЕЭЗ должен иметь местное пограничное страхование ответственности.",
        },
        {
          title: "Проверьте собственника автомобиля",
          text:
            "Для белорусских и российских номеров важно заранее проверить, кто указан собственником и будет ли этот человек находиться в автомобиле при пересечении границы.",
        },
        {
          title: "PDF лучше распечатать",
          text:
            "Электронный файл обычно достаточен для пересылки клиенту, но на границе и при дорожной проверке удобнее иметь бумажную копию.",
        },
      ],
      note:
        "Если автомобиль оформлен на юридическое лицо или собственник не едет в машине (касается авто с белорусской и российской регистрацией), лучше заранее уточнить возможность въезда. Это не вопрос страхового тарифа, а риск отказа на границе.",
    },
    documents: {
      title: "Какие данные нужны для оформления",
      lead:
        "Чем точнее данные в заявке, тем меньше риск ошибки в полисе и задержки перед поездкой.",
      items: [
        {
          title: "Техпаспорт / свидетельство о регистрации",
          text:
            "Нужны данные автомобиля: номер, VIN, марка, модель, год, тип транспортного средства и параметры, влияющие на тариф.",
        },
        {
          title: "Данные страхователя или водителя",
          text:
            "ФИО, контактный телефон, email и данные лица, на которое оформляется страхование, если они требуются для выпуска полиса.",
        },
        {
          title: "Дата начала и срок",
          text:
            "Укажите день, с которого автомобиль должен быть застрахован. Минимальный практический срок для такого продукта — 30 дней.",
        },
        {
          title: "Контакт для отправки полиса",
          text:
            "Готовый документ направляется в PDF. Проверьте email и мессенджер до оплаты, чтобы оператор мог быстро отправить полис.",
        },
      ],
    },
    scenarios: {
      title: "Типовые ситуации клиентов",
      items: [
        {
          title: "Едете в Польшу на личном автомобиле",
          text:
            "Нужен полис гражданской ответственности на период поездки, если нет действующей «Зелёной карты». Для короткой поездки обычно выбирают минимальный срок.",
        },
        {
          title: "Польша используется как транзит",
          text:
            "Полис может понадобиться даже если конечная страна не Польша: автомобиль сначала въезжает на территорию Польши и далее движется по ЕС.",
        },
        {
          title: "Нужно срочно перед выездом",
          text:
            "Онлайн-заявка помогает не искать страхового посредника у границы. Но лучше не оставлять оформление на последние минуты: возможны проверки данных и очереди у операторов.",
        },
      ],
    },
    verification: {
      title: "Как убедиться, что полис действует",
      text:
        "После выпуска полиса сохраните PDF и проверьте дату начала. В польской базе UFG информация может появляться не мгновенно, поэтому отсутствие записи сразу после выпуска не всегда означает ошибку.",
      steps: [
        "Сверьте номер автомобиля и марку транспортного средства в PDF.",
        "Проверьте дату начала и окончания страхования.",
        "Сохраните PDF в телефоне и отправьте копию себе на email.",
        "При необходимости проверьте полис через сервис UFG после начала действия.",
      ],
    },
    warning: {
      title: "Чего эта страховка не покрывает",
      text:
        "OC graniczne покрывает ответственность перед третьими лицами. Оно не является КАСКО, не оплачивает ремонт вашего автомобиля после вашей вины, не покрывает поломку, эвакуацию, штрафы, таможенные расходы и отказ во въезде. Для таких рисков нужны отдельные продукты или организационная подготовка поездки.",
    },
  },
};

function isCaseStudyLocale(lang: Lang): lang is CaseStudyLocale {
  return lang === "ru" || lang === "pl" || lang === "en" || lang === "be";
}

export default function RouteLandingPage({ lang, dictionary: t, review, caseIds = [] }: RouteLandingPageProps) {
  const topSignals = [t.what.title, t.price.title, t.validity.title];
  const supportSignals = t.who.items.slice(0, 3);
  const enhancement = routeEnhancementsByLang[lang];

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
              <h1 className="h1 route-hero__title">{keepTypography(t.hero.title)}</h1>
              <p className="lead route-hero__lead">{t.hero.lead}</p>
              <div className="route-hero__actions">
                <a className="btn btn--primary" href={`/${lang}/order`}>
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
              <Calculator lang={lang} mode="order" />
            </div>
          </div>
        </div>
      </section>

      {enhancement ? (
        <section className={`section ${styles.quickFactsSection}`}>
          <div className="container">
            <div className={styles.quickFactsGrid}>
              {enhancement.quickFacts.map((fact) => (
                <article className={styles.quickFact} key={fact.label}>
                  <span>{fact.label}</span>
                  <strong>{fact.value}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="route-overview section">
        <div className="container route-overview__grid">
          <article className="route-card route-card--featured">
            <h2 className="section__title">{keepTypography(t.what.title)}</h2>
            <p>{t.what.text}</p>
          </article>
          <article className="route-card route-card--compact">
            <h2 className="section__title">{keepTypography(t.who.title)}</h2>
            <ul className="route-checklist">
              {t.who.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {enhancement ? (
        <section className={`section ${styles.borderSection}`}>
          <div className={`container ${styles.borderGrid}`}>
            <article className={styles.borderLeadCard}>
              <p className={styles.eyebrow}>Перед поездкой</p>
              <h2>{keepTypography(enhancement.border.title)}</h2>
              <p>{enhancement.border.lead}</p>
              <div className={styles.warningBox}>{enhancement.border.note}</div>
            </article>
            <div className={styles.borderCards}>
              {enhancement.border.items.map((item) => (
                <article className={styles.borderCard} key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="route-steps section">
        <div className="container">
          <div className="route-section-head">
            <div>
              <h2 className="section__title">{keepTypography(t.how.title)}</h2>
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

      {enhancement ? (
        <section className={`section ${styles.documentsSection}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>Данные для выпуска</p>
              <h2>{keepTypography(enhancement.documents.title)}</h2>
              <p>{enhancement.documents.lead}</p>
            </div>
            <div className={styles.documentsGrid}>
              {enhancement.documents.items.map((item, index) => (
                <article className={styles.documentCard} key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="route-details section">
        <div className="container route-details__grid">
          <article className="route-card route-card--detail">
            <h2 className="section__title">{keepTypography(t.price.title)}</h2>
            <p>{t.price.text}</p>
          </article>
          <article className="route-card route-card--detail">
            <h2 className="section__title">{keepTypography(t.validity.title)}</h2>
            <p>{t.validity.text}</p>
          </article>
        </div>
      </section>

      {enhancement ? (
        <section className={`section ${styles.scenariosSection}`}>
          <div className="container">
            <div className={styles.sectionHeaderCompact}>
              <p className={styles.eyebrow}>Практика</p>
              <h2>{keepTypography(enhancement.scenarios.title)}</h2>
            </div>
            <div className={styles.scenariosGrid}>
              {enhancement.scenarios.items.map((item) => (
                <article className={styles.scenarioCard} key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {enhancement ? (
        <section className={`section ${styles.verificationSection}`}>
          <div className={`container ${styles.verificationGrid}`}>
            <article className={styles.verificationCard}>
              <p className={styles.eyebrow}>После выпуска</p>
              <h2>{keepTypography(enhancement.verification.title)}</h2>
              <p>{enhancement.verification.text}</p>
            </article>
            <ol className={styles.verificationSteps}>
              {enhancement.verification.steps.map((step, index) => (
                <li key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      {enhancement ? (
        <section className={`section ${styles.warningSection}`}>
          <div className="container">
            <article className={styles.coverageWarning}>
              <h2>{keepTypography(enhancement.warning.title)}</h2>
              <p>{enhancement.warning.text}</p>
            </article>
          </div>
        </section>
      ) : null}

      <section className="route-cta section">
        <div className="container">
          <div className="route-cta__panel">
            <div>
              <h2 className="section__title">{keepTypography(t.form.title)}</h2>
              <p>{t.form.desc}</p>
            </div>
            <a className="btn btn--primary" href={`/${lang}/order`}>
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

      {caseIds.length > 0 && isCaseStudyLocale(lang) ? <CaseStudies caseIds={caseIds} locale={lang} /> : null}

      <ContentReview lang={lang} review={review} />

      <section className="route-faq section" id="faq">
        <div className="container route-faq__grid">
          <div className="route-faq__intro">
            <h2 className="section__title">{keepTypography(t.faq.title)}</h2>
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
