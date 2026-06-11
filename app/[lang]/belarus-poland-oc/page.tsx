import type { Lang } from "@/app/dictionaries/header";
import { LOCALES } from "@/app/dictionaries/header";
import { pageAlternates, pageSocialMetadata, toAbsolute } from "@/app/seo";
import { getBelarusPolandOcDictionary } from "@/app/dictionaries/seo-landings/belarusPolandOc";
import { BreadcrumbListJsonLd } from "@/app/components/StructuredData";
import Calculator from "@/app/components/Calculator";

function normalizeLang(value: string): Lang {
  return (LOCALES as readonly string[]).includes(value) ? (value as Lang) : "ru";
}

function FaqJsonLd({ lang }: { lang: Lang }) {
  const t = getBelarusPolandOcDictionary(lang);
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
  const data = {"@context":"https://schema.org","@type":"FAQPage","@id":toAbsolute(`/${lang}/belarus-poland-oc#faq`),mainEntity:t.faq.items.map((item)=>({"@type":"Question",name:item.q,acceptedAnswer:{"@type":"Answer",text:item.a}}))};
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = normalizeLang(rawLang);
  const t = getBelarusPolandOcDictionary(lang);
  return { alternates: pageAlternates(lang, "/belarus-poland-oc"), title: t.seo.title, description: t.seo.description, ...pageSocialMetadata(lang, "/belarus-poland-oc", t.seo.title, t.seo.description) };
}

export default async function BelarusPolandOcPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = normalizeLang(rawLang);
  const t = getBelarusPolandOcDictionary(lang);
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

  return (
    <main id="main">
      <BreadcrumbListJsonLd lang={lang} pageName={t.breadcrumbTitle} pagePath="/belarus-poland-oc" />
      <FaqJsonLd lang={lang} />
      <nav aria-label="Breadcrumb" className="container" style={{ paddingTop: "16px" }}>
        <ol style={{ display: "flex", gap: "8px", listStyle: "none", padding: 0, margin: 0, color: "#4b5563", fontSize: "14px" }}>
          <li><a href={`/${lang}`}>{homeCrumbByLang[lang]}</a></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">{t.breadcrumbTitle}</li>
        </ol>
      </nav>
      <section className="hero">
        <div className="container">
          <div className="hero__grid">
            <div>
              <p className="kicker"><span className="badge">{t.hero.kicker}</span></p>
              <h1 className="h1">{t.hero.title}</h1><p className="lead">{t.hero.lead}</p>
              <a className="btn btn--primary" href={`/${lang}#buy`}>{t.hero.cta}</a>
            </div>
            <div id="calc">
              <Calculator lang={lang} />
            </div>
          </div>
        </div>
          </section>
      <section className="section"><div className="container"><h2 className="section__title">{t.what.title}</h2><p>{t.what.text}</p></div></section>
      <section className="section"><div className="container"><h2 className="section__title">{t.who.title}</h2><ul>{t.who.items.map((i) => <li key={i}>{i}</li>)}</ul></div></section>
      <section className="section"><div className="container"><h2 className="section__title">{t.how.title}</h2><ol>{t.how.steps.map((i) => <li key={i}>{i}</li>)}</ol></div></section>
      <section className="section"><div className="container"><h2 className="section__title">{t.price.title}</h2><p>{t.price.text}</p></div></section>
      <section className="section"><div className="container"><h2 className="section__title">{t.validity.title}</h2><p>{t.validity.text}</p></div></section>
      <section className="section"><div className="container"><h2 className="section__title">{t.form.title}</h2><p>{t.form.desc}</p><a className="btn btn--primary" href={`/${lang}#buy`}>{t.hero.cta}</a></div></section>
      <section className="section" id="faq"><div className="container"><h2 className="section__title">{t.faq.title}</h2><div className="faq">{t.faq.items.map((f) => <details key={f.q} className="faq__item"><summary className="faq__summary"><span>{f.q}</span><span className="muted">+</span></summary><div className="details__body">{f.a}</div></details>)}</div></div></section>
    </main>
  );
}
