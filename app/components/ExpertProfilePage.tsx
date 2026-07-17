import Link from "next/link";
import type { ExpertId } from "@/app/experts/experts";
import { getExpert } from "@/app/experts/experts";
import type { ExpertPageDictionary } from "@/app/dictionaries/experts/sergeyAnatska";
import type { SupportedExpertLocale } from "@/app/experts/experts";
import { keepShortWords } from "@/app/utils/typography";
import OfficialSources from "@/app/components/OfficialSources";
import CaseStudies from "@/app/components/CaseStudies";
import PracticeMetrics from "@/app/components/PracticeMetrics";

export default function ExpertProfilePage({
  expertId,
  lang,
  t,
}: {
  expertId: ExpertId;
  lang: SupportedExpertLocale;
  t: ExpertPageDictionary;
}) {
  const expert = getExpert(expertId);
  const name = expert.localizedNames[lang];

  return (
    <main id="main" className="about-page expert-page">
      <nav aria-label="Breadcrumb" className="route-breadcrumb container">
        <ol className="route-breadcrumb__list">
          <li><Link href={`/${lang}`}>{t.labels.home}</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">{t.breadcrumb}</li>
        </ol>
      </nav>

      <section className="about-hero section">
        <div className="container">
          <div className="about-hero__grid">
            <div className="about-hero__copy">
              <p className="about-hero__eyebrow">SINEDIS</p>
              <h1 className="about-hero__title">{keepShortWords(name)}</h1>
              <p className="about-hero__lead">{keepShortWords(t.shortDescription)}</p>
              <p className="expert-page__updated">{t.labels.lastUpdated}: <time dateTime={expert.lastReviewed}>{expert.lastReviewed}</time></p>
            </div>
            <aside className="about-trust-card" aria-label={t.labels.contentRole}>
              <div className="about-trust-card__item">
                <h2>{t.labels.contentRole}</h2>
                <p>{t.contentRole}</p>
              </div>
              <div className="about-trust-card__item">
                <h2>{expert.organization.name}</h2>
                <p>{t.professionalRoles.join(" · ")}</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="expert-competence-title">
        <div className="container">
          <div className="section__hd"><div><h2 className="section__title" id="expert-competence-title">{t.labels.competence}</h2></div></div>
          <article className="about-disclosure">
            <div className="about-disclosure__grid">
              {t.biography.map((paragraph) => <section className="about-disclosure__item" key={paragraph}><p>{paragraph}</p></section>)}
            </div>
          </article>
        </div>
      </section>

      <section className="section" aria-labelledby="expert-specializations-title">
        <div className="container">
          <div className="section__hd"><div><h2 className="section__title" id="expert-specializations-title">{t.labels.specializations}</h2></div></div>
          <div className="about-card-grid expert-page__chips">
            {t.specializations.map((item, index) => (
              <article className="about-card" key={item}>
                <div className="about-card__index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</div>
                <div className="about-card__body"><h3>{item}</h3></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="expert-profiles-title">
        <div className="container">
          <article className="about-disclosure">
            <div className="about-disclosure__header"><h2 className="section__title" id="expert-profiles-title">{t.labels.relatedProfiles}</h2></div>
            <div className="about-disclosure__grid">
              {expert.externalProfiles.map((profile) => (
                <section className="about-disclosure__item" key={profile.id}>
                  <h3>{t.relatedProfiles[profile.id].label}</h3>
                  <p><a href={profile.url} target="_blank" rel="noopener noreferrer" aria-label={t.relatedProfiles[profile.id].ariaLabel}>{profile.url}</a></p>
                </section>
              ))}
            </div>
          </article>
        </div>
      </section>

      <CaseStudies caseIds={["belarus-poland-border-insurance", "georgia-romania-ferry"]} locale={lang} />

      <PracticeMetrics locale={lang} />

      <OfficialSources lang={lang} />

      <section className="section" aria-labelledby="editorial-policy-title">
        <div className="container">
          <article className="about-disclosure">
            <div className="about-disclosure__header"><h2 className="section__title" id="editorial-policy-title">{t.labels.editorialPolicy}</h2></div>
            <div className="about-disclosure__grid">
              {t.editorialPolicy.map((section) => (
                <section className="about-disclosure__item" key={section.title}>
                  <h3>{section.title}</h3>
                  {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.items ? <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul> : null}
                  {section.ordered ? <ol>{section.ordered.map((item) => <li key={item}>{item}</li>)}</ol> : null}
                </section>
              ))}
            </div>
            <div className="about-disclosure__note"><p><Link href={`/${lang}/contacts`}>{t.labels.contactLink}</Link></p></div>
          </article>
        </div>
      </section>
    </main>
  );
}
