import Link from "next/link";
import { getExpert, localizedExpertPagePath } from "@/app/experts/experts";
import type { CaseStudyId, CaseStudyLocale } from "@/app/practiceContent";
import { getPublishedCaseStudies, practiceUi } from "@/app/practiceContent";

export default function CaseStudies({ caseIds, locale }: { caseIds: readonly CaseStudyId[]; locale: CaseStudyLocale }) {
  const cases = getPublishedCaseStudies(caseIds);
  const ui = practiceUi[locale];

  if (cases.length === 0) return null;

  return (
    <section className="section" aria-labelledby="case-studies-title">
      <div className="container">
        <div className="section__hd"><div><h2 className="section__title" id="case-studies-title">{ui.casesTitle}</h2></div></div>
        <div className="about-disclosure__grid">
          {cases.map((caseStudy) => {
            const content = caseStudy.content[locale];
            const expert = getExpert(caseStudy.verifiedBy);
            return (
              <article className="about-disclosure__item" key={caseStudy.id}>
                <h3>{content.title}</h3>
                <p><strong>{ui.situation}:</strong> {content.situation}</p>
                <p><strong>{ui.solution}:</strong> {content.solution}</p>
                <p><strong>{ui.result}:</strong> {content.result}</p>
                <p><strong>{ui.disclaimer}:</strong> {content.disclaimer}</p>
                <p>
                  {ui.verifiedBy}: <Link href={localizedExpertPagePath(expert, locale)}>{expert.localizedNames[locale]}</Link>
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
