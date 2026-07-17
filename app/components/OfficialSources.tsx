import type { Lang } from "@/app/dictionaries/header";
import { getOfficialSourcesDictionary } from "@/app/dictionaries/officialSources";
import {
  COMPANY_DETAILS,
  DEFAULT_OFFICIAL_SOURCE_IDS,
  WARTA_AUTHORIZATION,
  getOfficialSource,
  officialSourceHref,
  type OfficialSourceId,
} from "@/app/officialSources/sources";

const DATE_LOCALES: Record<Lang, string> = {
  ru: "ru-RU", en: "en-US", pl: "pl-PL", be: "be-BY", uk: "uk-UA", kk: "kk-KZ", uz: "uz-UZ", az: "az-AZ", tr: "tr-TR", ka: "ka-GE", hy: "hy-AM", fa: "fa-IR", ckb: "ckb-IQ", kmr: "ku-TR", ar: "ar", he: "he-IL", ro: "ro-RO", sr: "sr-RS", sq: "sq-AL", mn: "mn-MN",
};

function formatDate(value: string, lang: Lang): string {
  const [year, month, day] = value.split("-").map(Number);
  return new Intl.DateTimeFormat(DATE_LOCALES[lang], {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, day)));
}

function Field({ label, value }: { label: string; value: string | readonly string[] }) {
  return (
    <div className="official-sources__field">
      <dt>{label}</dt>
      <dd>{Array.isArray(value) ? value.map((line) => <span key={line}>{line}</span>) : value}</dd>
    </div>
  );
}

export default function OfficialSources({
  lang,
  sourceIds = DEFAULT_OFFICIAL_SOURCE_IDS,
  showCredentials = false,
}: {
  lang: Lang;
  sourceIds?: readonly OfficialSourceId[];
  showCredentials?: boolean;
}) {
  const t = getOfficialSourcesDictionary(lang);

  return (
    <section className="section official-sources" id={showCredentials ? "credentials" : "official-sources"} aria-labelledby={showCredentials ? "credentials-title" : "official-sources-title"}>
      <div className="container">
        <article className="about-disclosure official-sources__panel">
          <div className="about-disclosure__header">
            <h2 className="section__title" id={showCredentials ? "credentials-title" : "official-sources-title"}>
              {showCredentials ? t.credentialsTitle : t.title}
            </h2>
          </div>

          {showCredentials ? (
            <div className="official-sources__credentials">
              <dl className="official-sources__details">
                <Field label={t.fields.legalName} value={COMPANY_DETAILS.legalName} />
                <Field label={t.fields.legalForm} value={COMPANY_DETAILS.legalForm} />
                <Field label={t.fields.krs} value={COMPANY_DETAILS.krs} />
                <Field label={t.fields.nip} value={COMPANY_DETAILS.nip} />
                <Field label={t.fields.regon} value={COMPANY_DETAILS.regon} />
                <Field label={t.fields.address} value={COMPANY_DETAILS.addressLines} />
                <Field label={t.insuranceAgentStatus} value={COMPANY_DETAILS.knfRegisterNumber} />
                <Field label={t.fields.representation} value={t.representationText} />
                <Field label={t.fields.boardMember} value={t.boardMemberText} />
                <Field label={t.fields.pkd} value={t.pkdText} />
                <Field label={t.fields.insurer} value={WARTA_AUTHORIZATION.insurer} />
                <Field label={t.fields.authorizationNumber} value={WARTA_AUTHORIZATION.powerOfAttorneyNumber} />
                <Field label={t.fields.authorizationDate} value={formatDate(WARTA_AUTHORIZATION.issuedAt, lang)} />
                <Field label={t.agencyAgreement} value={WARTA_AUTHORIZATION.agencyAgreementNumber} />
              </dl>
              <div className="official-sources__note">
                <p>{t.authorizationText}</p>
                <p>{t.productInfoText}</p>
                <p>{t.noPublicUrl}</p>
                <h3>{t.fields.scope}</h3>
                <ul>{t.authorizationScope.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            </div>
          ) : null}

          <div className="about-disclosure__grid official-sources__grid">
            {sourceIds.map((sourceId) => {
              const source = getOfficialSource(sourceId);
              const href = officialSourceHref(source, lang);

              return (
                <section className="about-disclosure__item official-sources__item" key={source.id}>
                  <h3>{t.sourceLabels[source.id]}</h3>
                  <p>{t.sourceDescriptions[source.id]}</p>
                  <p><strong>{source.organization}</strong></p>
                  {source.reference ? <p>{source.reference}</p> : null}
                  {source.public && href ? (
                    <p><a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} aria-label={`${t.openSource}: ${t.sourceLabels[source.id]}`}>{source.id === "knf" ? t.verifyKnf : t.openSource}</a></p>
                  ) : <p>{t.documentNotPublished}</p>}
                  <p>{t.lastVerified}: <time dateTime={source.verifiedAt}>{formatDate(source.verifiedAt, lang)}</time></p>
                </section>
              );
            })}
          </div>
        </article>
      </div>
    </section>
  );
}
