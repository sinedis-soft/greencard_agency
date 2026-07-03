import LeadForm from "@/app/components/LeadForm";
import { BusinessHoursBanner } from "@/app/components/BusinessHoursBanner";
import { LOCALES, type Lang } from "@/app/dictionaries/header";
import { getHomeDictionary } from "@/app/dictionaries/home";
import { pageAlternates, pageSocialMetadata } from "@/app/seo";
import { getSeoDictionary } from "@/app/dictionaries/seo";
import { keepShortWords } from "@/app/utils/typography";

function normalizeLang(value: string): Lang {
  return (LOCALES as readonly string[]).includes(value) ? (value as Lang) : "en";
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = normalizeLang(rawLang);
  const seo = getSeoDictionary(lang);
  const home = getHomeDictionary(lang);
  const title = home.form.title;
  const description = home.form.desc;

  return {
    alternates: pageAlternates(lang, "/order"),
    title: `${title} | ${seo.home.title}`,
    description,
    ...pageSocialMetadata(lang, "/order", title, description),
  };
}

export default async function OrderPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = normalizeLang(rawLang);
  const t = getHomeDictionary(lang);

  return (
    <main id="main">
      <section className="section section--order" id="buy">
        <div className="container">
          <div className="section__hd">
            <div>
              <h1 className="section__title">{keepShortWords(t.form.title)}</h1>
              <p className="section__desc">{t.form.desc}</p>
              <BusinessHoursBanner dict={t.businessHours} />
            </div>
          </div>
          <div className="lead-form-shell">
            <LeadForm lang={lang} />
          </div>
        </div>
      </section>
    </main>
  );
}
