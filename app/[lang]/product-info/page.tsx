import CookiesPolicyPage from "@/app/components/CookiesPolicyPage";
import { getProductInfoDictionary } from "@/app/dictionaries/productInfo";
import type { Lang } from "@/app/dictionaries/header";
import { LOCALES } from "@/app/dictionaries/header";
import { pageAlternates, pageSocialMetadata } from "@/app/seo";
import { getSeoDictionary } from "@/app/dictionaries/seo";
import { BreadcrumbListJsonLd } from "@/app/components/StructuredData";
const breadcrumbTitleByLang: Record<Lang, string> = {
  ru: "Информация о продукте",
  pl: "Informacje o produkcie",
  en: "Product info",
  be: "Інфармацыя пра прадукт",
  uz: "Mahsulot haqida",
  ka: "პროდუქტის ინფორმაცია",
  kk: "Өнім туралы ақпарат",
  tr: "Ürün bilgisi",
  fa: "اطلاعات محصول",
  hy: "Ապրանքի մասին",
};

function normalizeLang(value: string): Lang {
  return (LOCALES as readonly string[]).includes(value) ? (value as Lang) : "ru";
}

export const dynamic = "force-static";

type Params = Promise<{ lang: Lang }>;

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = normalizeLang(rawLang);

  const seo = getSeoDictionary(lang);

  return {
    alternates: pageAlternates(lang, "/product-info"),
    title: seo.productInfo.title,
    description: seo.productInfo.description,
    ...pageSocialMetadata(lang, "/product-info", seo.productInfo.title, seo.productInfo.description),
  };
}


export default async function ProductInfoRoute({ params }: { params: Params }) {
  const { lang } = await params;
  const t = getProductInfoDictionary(lang);
  return <>
    <BreadcrumbListJsonLd lang={lang} pageName={breadcrumbTitleByLang[lang]} pagePath="/product-info" />
    <CookiesPolicyPage lang={lang} t={t} />
  </>;
}
