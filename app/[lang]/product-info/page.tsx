import CookiesPolicyPage from "@/app/components/CookiesPolicyPage";
import { getProductInfoDictionary } from "@/app/dictionaries/productInfo";
import type { Lang } from "@/app/dictionaries/header";
import { LOCALES } from "@/app/dictionaries/header";
import { pageAlternates, pageSocialMetadata } from "@/app/seo";
import { getSeoDictionary } from "@/app/dictionaries/seo";
import { BreadcrumbListJsonLd } from "@/app/components/StructuredData";
import OfficialSources from "@/app/components/OfficialSources";
const breadcrumbTitleByLang: Record<Lang, string> = {
  ru: "Информация о продукте",
  pl: "Informacje o produkcie",
  en: "Product Information",
  be: "Інфармацыя пра прадукт",
  uk: "Інформація про продукт",

  ro: "Informații despre produs",
  sr: "Информације о производу",
  sq: "Informacion mbi produktin",

  kk: "Өнім туралы ақпарат",
  uz: "Mahsulot haqida ma'lumot",
  az: "Məhsul haqqında məlumat",

  tr: "Ürün bilgileri",

  hy: "Ապրանքի մասին տեղեկություն",
  ka: "ინფორმაცია პროდუქტის შესახებ",

  fa: "اطلاعات محصول",

  ckb: "زانیاری دەربارەی بەرهەم",
  kmr: "Agahdariya Derbarê Berhemê",

  ar: "معلومات المنتج",

  he: "מידע על המוצר",

  mn: "Бүтээгдэхүүний мэдээлэл",
};

function normalizeLang(value: string): Lang {
  return (LOCALES as readonly string[]).includes(value)
    ? (value as Lang)
    : "ru";
}

export const dynamic = "force-static";

type Params = Promise<{ lang: Lang }>;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = normalizeLang(rawLang);

  const seo = getSeoDictionary(lang);

  return {
    robots: { index: false, follow: true },
    alternates: pageAlternates(lang, "/product-info"),
    title: seo.productInfo.title,
    description: seo.productInfo.description,
    ...pageSocialMetadata(
      lang,
      "/product-info",
      seo.productInfo.title,
      seo.productInfo.description,
    ),
  };
}

export default async function ProductInfoRoute({ params }: { params: Params }) {
  const { lang } = await params;
  const t = getProductInfoDictionary(lang);
  return (
    <>
      <BreadcrumbListJsonLd
        lang={lang}
        pageName={breadcrumbTitleByLang[lang]}
        pagePath="/product-info"
      />
      <CookiesPolicyPage lang={lang} t={t} />
      <OfficialSources lang={lang} sourceIds={["isap", "product-info", "knf"]} />
    </>
  );
}
