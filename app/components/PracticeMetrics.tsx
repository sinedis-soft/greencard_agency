import { getExpert, localizedExpertPagePath } from "@/app/experts/experts";
import Link from "next/link";
import type { CaseStudyLocale } from "@/app/practiceContent";
import { PRACTICE_METRICS, practiceUi } from "@/app/practiceContent";

export default function PracticeMetrics({ locale }: { locale: CaseStudyLocale }) {
  const ui = practiceUi[locale];
  const aggregates = PRACTICE_METRICS.filter((metric) => metric.evidenceLevel === "verified-aggregate");
  const estimates = PRACTICE_METRICS.filter((metric) => metric.evidenceLevel === "expert-estimate");

  return (
    <section className="section" aria-labelledby="practice-metrics-title">
      <div className="container">
        <div className="section__hd"><div><h2 className="section__title" id="practice-metrics-title">{ui.aggregatesTitle}</h2></div></div>
        <div className="about-card-grid">
          {aggregates.map((metric) => (
            <article className="about-card" key={metric.id}>
              <div className="about-card__body">
                <h3>{metric.period.label[locale]}</h3>
                <p>{ui.issued}: {metric.issuedPolicies}</p>
                <p>{ui.cancelled}: {metric.cancelledPolicies}</p>
                <p>{ui.active}: {metric.activeAfterCancellation}</p>
                <p>{metric.source[locale]}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="section__hd"><div><h2 className="section__title">{ui.estimatesTitle}</h2></div></div>
        <div className="about-disclosure__grid">
          {estimates.map((metric) => {
            const content = metric.content[locale];
            const expert = getExpert(metric.sourceExpertId);
            return (
              <article className="about-disclosure__item" key={metric.id}>
                <h3>{content.label}</h3>
                <p>{content.text}</p>
                <p>{content.disclaimer}</p>
                <p><Link href={localizedExpertPagePath(expert, locale)}>{expert.localizedNames[locale]}</Link></p>
              </article>
            );
          })}
        </div>
        <article className="about-disclosure__note">
          <ul>{ui.warnings.map((warning) => <li key={warning}>{warning}</li>)}</ul>
        </article>
      </div>
    </section>
  );
}
