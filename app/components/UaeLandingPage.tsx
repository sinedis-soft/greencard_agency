import Link from "next/link";
import type { Lang } from "@/app/dictionaries/header";
import type { InsuranceContentReview } from "@/app/seo";
import ContentReview from "@/app/components/ContentReview";
import type { UaeOcDictionary } from "@/app/dictionaries/seo-landings/uaeOc";
import { keepTypography } from "@/app/utils/typography";
import styles from "./UaeLandingPage.module.css";

type UaeLandingPageProps = {
  lang: Lang;
  dictionary: UaeOcDictionary;
  review: InsuranceContentReview;
};

const homeCrumbByLang: Record<Lang, string> = {
  ru: "Главная",
  en: "Home",
  pl: "Strona główna",
  be: "Галоўная",
  uk: "Головна",
  kk: "Басты бет",
  uz: "Bosh sahifa",
  az: "Ana səhifə",
  tr: "Ana Sayfa",
  ka: "მთავარი",
  hy: "Գլխավոր",
  fa: "صفحه اصلی",
  ckb: "سەرەکی",
  kmr: "Rûpela Sereke",
  ar: "الرئيسية",
  he: "דף הבית",
  ro: "Acasă",
  sr: "Почетна",
  sq: "Kryefaqja",
  mn: "Нүүр хуудас",
};

function toneClass(tone: UaeOcDictionary["answers"][number]["tone"]) {
  if (tone === "yes") return styles.answerYes;
  if (tone === "warning") return styles.answerWarning;
  return styles.answerNo;
}

export default function UaeLandingPage({ lang, dictionary: t, review }: UaeLandingPageProps) {
  return (
    <div className={styles.uaeLanding}>
      <nav aria-label="Breadcrumb" className={`route-breadcrumb container ${styles.breadcrumb}`}>
        <ol className="route-breadcrumb__list">
          <li>
            <Link href={`/${lang}`}>{homeCrumbByLang[lang]}</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">{t.breadcrumbTitle}</li>
        </ol>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>{t.hero.eyebrow}</p>
          <h1 className={styles.heroTitle}>{keepTypography(t.hero.title)}</h1>
          <p className={styles.heroLead}>{t.hero.lead}</p>

          <div className={styles.heroNotice}>
            <strong>{t.hero.noticeLabel}</strong> {t.hero.notice}
          </div>

          <div className={styles.heroActions}>
            <a className={`${styles.button} ${styles.buttonPrimary}`} href="#buy">
              {t.hero.primaryCta}
            </a>
            <a className={`${styles.button} ${styles.buttonSecondary}`} href="#documents">
              {t.hero.secondaryCta}
            </a>
          </div>
        </div>

        <aside className={styles.heroCard} aria-label={t.hero.cardLabel}>
          {t.hero.facts.map((fact) => (
            <div className={styles.heroCardItem} key={fact.label}>
              <span>{fact.label}</span>
              <strong>{fact.value}</strong>
            </div>
          ))}
        </aside>
      </section>

      <section className={`${styles.section} ${styles.sectionCompact}`}>
        <div className={styles.answerGrid}>
          {t.answers.map((answer) => (
            <article className={`${styles.answer} ${toneClass(answer.tone)}`} key={answer.title}>
              <span className={styles.answerLabel}>{answer.label}</span>
              <h2>{keepTypography(answer.title)}</h2>
              <p>{answer.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>{t.suitability.eyebrow}</p>
          <h2>{keepTypography(t.suitability.title)}</h2>
          <p>{t.suitability.text}</p>
        </div>

        <div className={styles.cards}>
          <article className={styles.card}>
            <h3>{t.suitability.yesTitle}</h3>
            <ul>
              {t.suitability.yesItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className={`${styles.card} ${styles.cardMuted}`}>
            <h3>{t.suitability.noTitle}</h3>
            <ul>
              {t.suitability.noItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className={styles.routeBox}>
        <div>
          <p className={styles.routeBoxEyebrow}>{t.routeWarning.eyebrow}</p>
          <h2>{keepTypography(t.routeWarning.title)}</h2>
          <p>{t.routeWarning.text}</p>
        </div>

        <a className={`${styles.button} ${styles.buttonLight}`} href="#coverage">
          {t.routeWarning.cta}
        </a>
      </section>

      <section className={styles.section} id="coverage">
        <div className={styles.split}>
          <div className={styles.splitMain}>
            <p className={styles.eyebrow}>{t.coverage.eyebrow}</p>
            <h2>{keepTypography(t.coverage.title)}</h2>
            <p>{t.coverage.text}</p>

            <div className={styles.countryList} aria-label={t.coverage.listLabel}>
              {t.coverage.countries.map((country) => (
                <span key={country}>{country}</span>
              ))}
            </div>
          </div>

          <aside className={`${styles.splitSide} ${styles.warningPanel}`}>
            <h3>{t.coverage.warningTitle}</h3>
            <p>{t.coverage.warningText}</p>
            <p>{t.coverage.warningNote}</p>
          </aside>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionSoft}`} id="documents">
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>{t.documents.eyebrow}</p>
          <h2>{keepTypography(t.documents.title)}</h2>
          <p>{t.documents.text}</p>
        </div>

        <div className={styles.checklistGrid}>
          <div className={styles.checklist}>
            <h3>{t.documents.vehicleTitle}</h3>
            <ul>
              {t.documents.vehicleItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.checklist}>
            <h3>{t.documents.policyholderTitle}</h3>
            <ul>
              {t.documents.policyholderItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.twoColumns}>
          <article className={styles.infoPanel}>
            <p className={styles.eyebrow}>{t.price.eyebrow}</p>
            <h2>{keepTypography(t.price.title)}</h2>
            <p>{t.price.text}</p>
            <ul className={styles.ticks}>
              {t.price.factors.map((factor) => (
                <li key={factor}>{factor}</li>
              ))}
            </ul>
          </article>

          <article className={styles.infoPanel}>
            <p className={styles.eyebrow}>{t.timing.eyebrow}</p>
            <h2>{keepTypography(t.timing.title)}</h2>
            <p>{t.timing.text}</p>
            <div className={styles.smallNotice}>{t.timing.notice}</div>
          </article>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>{t.steps.eyebrow}</p>
          <h2>{keepTypography(t.steps.title)}</h2>
        </div>

        <ol className={styles.steps}>
          {t.steps.items.map((step, index) => (
            <li key={step.title}>
              <span>{index + 1}</span>
              <div>
                <h3>{keepTypography(step.title)}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.section}>
        <div className={styles.split}>
          <div className={styles.splitMain}>
            <p className={styles.eyebrow}>{t.beforeTrip.eyebrow}</p>
            <h2>{keepTypography(t.beforeTrip.title)}</h2>
            <p>{t.beforeTrip.text}</p>
          </div>

          <div className={styles.checkCards}>
            {t.beforeTrip.items.map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      <ContentReview lang={lang} review={review} />

      <section className={`${styles.section} ${styles.sectionSoft}`}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>{t.faq.eyebrow}</p>
          <h2>{keepTypography(t.faq.title)}</h2>
        </div>

        <div className={styles.faq}>
          {t.faq.items.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className={styles.finalCta} id="buy">
        <div>
          <p className={styles.finalCtaEyebrow}>{t.finalCta.eyebrow}</p>
          <h2>{keepTypography(t.finalCta.title)}</h2>
          <p>{t.finalCta.text}</p>
        </div>

        <a className={`${styles.button} ${styles.buttonPrimary} ${styles.buttonLarge}`} href={`/${lang}#buy`}>
          {t.finalCta.button}
        </a>
      </section>
    </div>
  );
}
