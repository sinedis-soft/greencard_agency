import Link from "next/link";
import type { Lang } from "@/app/dictionaries/header";
import type { AboutDictionary } from "@/app/dictionaries/about";
import { keepShortWords } from "@/app/utils/typography";

type LegalSection = {
  title: string;
  lines: string[];
};

function splitLegalSections(lines: string[]): LegalSection[] {
  const sections: string[][] = [];
  let current: string[] = [];

  for (const line of lines) {
    if (!line.trim()) {
      if (current.length > 0) {
        sections.push(current);
        current = [];
      }

      continue;
    }

    current.push(line);
  }

  if (current.length > 0) {
    sections.push(current);
  }

  return sections.map(([title, ...sectionLines]) => ({
    title,
    lines: sectionLines,
  }));
}

export default function AboutPage({
  lang,
  t,
}: {
  lang: Lang;
  t: AboutDictionary;
}) {
  const [legalIntro, ...legalSections] = splitLegalSections(t.company.lines);
  const trustSections = legalSections.slice(0, 3);
  const disclosureLinkLabel = t.cards[1]?.title ?? t.company.title;

  return (
    <main id="main" className="about-page">
      <section className="about-hero section">
        <div className="container">
          <div className="about-hero__grid">
            <div className="about-hero__copy">
              <p className="about-hero__eyebrow">SINEDIS</p>
              <h1 className="about-hero__title">
                {keepShortWords(t.hero.title)}
              </h1>
              <p className="about-hero__lead">
                {keepShortWords(t.hero.subtitle)}
              </p>
              <div className="about-hero__actions" aria-label={t.contact.title}>
                <Link className="btn btn--primary" href={`/${lang}/contacts`}>
                  {t.contact.title}
                </Link>
                <a className="btn btn--soft" href="#about-disclosure">
                  {keepShortWords(disclosureLinkLabel)}
                </a>
              </div>
            </div>

            <aside className="about-trust-card" aria-label={t.company.title}>
              {trustSections.map((section, sectionIndex) => (
                <div
                  className="about-trust-card__item"
                  key={`${section.title}-${sectionIndex}`}
                >
                  <h2>{keepShortWords(section.title)}</h2>
                  {section.lines.slice(0, 2).map((line, lineIndex) => (
                    <p key={`${line}-${lineIndex}`}>{line}</p>
                  ))}
                </div>
              ))}
            </aside>
          </div>
        </div>
      </section>

      <section
        className="section about-principles"
        aria-labelledby="about-principles-title"
      >
        <div className="container">
          <div className="section__hd">
            <div>
              <h2 className="section__title" id="about-principles-title">
                {keepShortWords(t.hero.title)}
              </h2>
              <p className="section__desc">{keepShortWords(t.hero.subtitle)}</p>
            </div>
          </div>

          <div className="about-card-grid">
            {t.cards.map((card, idx) => (
              <article className="about-card" key={card.title}>
                <div className="about-card__index" aria-hidden="true">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <div className="about-card__body">
                  <h3>{keepShortWords(card.title)}</h3>
                  <p>{card.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section"
        id="about-disclosure"
        aria-labelledby="about-disclosure-title"
      >
        <div className="container">
          <article className="about-disclosure">
            <div className="about-disclosure__header">
              <div>
                <h2 className="section__title" id="about-disclosure-title">
                  {keepShortWords(t.company.title)}
                </h2>
                {legalIntro ? (
                  <p className="about-disclosure__intro">{legalIntro.title}</p>
                ) : null}
              </div>
            </div>

            <div className="about-disclosure__grid">
              {legalSections.map((section, sectionIndex) => (
                <section
                  className="about-disclosure__item"
                  key={`${section.title}-${sectionIndex}`}
                >
                  <h3>{keepShortWords(section.title)}</h3>
                  {section.lines.map((line, lineIndex) => (
                    <p key={`${line}-${lineIndex}`}>{line}</p>
                  ))}
                </section>
              ))}
            </div>

            <div className="about-disclosure__note">
              <p>{t.company.note}</p>
            </div>
          </article>
        </div>
      </section>

      <section
        className="section about-contact"
        aria-labelledby="about-contact-title"
      >
        <div className="container">
          <div className="about-contact__panel">
            <div>
              <h2 id="about-contact-title">
                {keepShortWords(t.contact.title)}
              </h2>
              <p>{t.contact.desc}</p>
            </div>
            <Link className="btn btn--primary" href={`/${lang}/contacts`}>
              {t.contact.title}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
