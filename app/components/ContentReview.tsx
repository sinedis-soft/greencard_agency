import Link from "next/link";
import type { Lang } from "@/app/dictionaries/header";
import {
  getExpert,
  getExpertLocalizedName,
  isSupportedExpertLocale,
  localizedExpertPagePath,
} from "@/app/experts/experts";
import type { InsuranceContentReview } from "@/app/seo";
import { getContentReviewDictionary } from "@/app/dictionaries/contentReview";
import { getOfficialSourcesDictionary } from "@/app/dictionaries/officialSources";

const DATE_LOCALES: Record<Lang, string> = {
  ru: "ru-RU",
  en: "en-US",
  pl: "pl-PL",
  be: "be-BY",
  uk: "uk-UA",
  kk: "kk-KZ",
  uz: "uz-UZ",
  az: "az-AZ",
  tr: "tr-TR",
  ka: "ka-GE",
  hy: "hy-AM",
  fa: "fa-IR",
  ckb: "ckb-IQ",
  kmr: "ku-TR",
  ar: "ar",
  he: "he-IL",
  ro: "ro-RO",
  sr: "sr-RS",
  sq: "sq-AL",
  mn: "mn-MN",
};

function formatReviewDate(value: string, lang: Lang): string {
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return new Intl.DateTimeFormat(DATE_LOCALES[lang], {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export default function ContentReview({
  lang,
  review,
}: {
  lang: Lang;
  review: InsuranceContentReview;
}) {
  const t = getContentReviewDictionary(lang);
  const officialSources = getOfficialSourcesDictionary(lang);
  const author = getExpert(review.authorId);
  const reviewer = getExpert(review.reviewerId);
  const isSamePerson = review.authorId === review.reviewerId;
  const label = isSamePerson ? t.preparedAndReviewed : `${t.prepared} / ${t.reviewed}`;
  const primaryExpert = isSamePerson ? author : reviewer;
  const profileHref = isSupportedExpertLocale(lang)
    ? localizedExpertPagePath(primaryExpert, lang)
    : undefined;

  return (
    <section className="content-review section" aria-labelledby="content-review-title">
      <div className="container">
        <article className="content-review__card">
          <div>
            <p className="content-review__label" id="content-review-title">{label}</p>
            <h2 className="content-review__name">{getExpertLocalizedName(primaryExpert, lang)}</h2>
            <p className="content-review__role">{t.roleSummary}</p>
          </div>
          <div className="content-review__meta">
            <p><span>{t.lastReviewed}:</span> <time dateTime={review.reviewedAt}>{formatReviewDate(review.reviewedAt, lang)}</time></p>
            <div className="content-review__links">
              {profileHref ? (
                <Link href={profileHref} aria-label={`${t.aboutExpert}: ${getExpertLocalizedName(primaryExpert, lang)}`}>
                  {t.aboutExpert}
                </Link>
              ) : null}
              {profileHref ? (
                <Link href={`${profileHref}#editorial-policy-title`} aria-label={t.editorialPolicy}>
                  {t.editorialPolicy}
                </Link>
              ) : null}
              <Link href={`/${lang}/about#credentials`} aria-label={officialSources.title}>
                {officialSources.title}
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
