import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LOCALES, type Lang } from "@/app/dictionaries/header";
import { getRoutesDictionary } from "@/app/dictionaries/routes";
import { ROUTE_CATALOG_LOCALES, routesForLocale } from "@/app/routeRegistry";
import { pageAlternates, pageSocialMetadata, routeLastModified, toAbsolute } from "@/app/seo";
import { BreadcrumbListJsonLd } from "@/app/components/StructuredData";

const ROUTES_PATH = "/routes";

export const dynamicParams = false;

export function generateStaticParams() {
  return ROUTE_CATALOG_LOCALES.map((lang) => ({ lang }));
}

function normalizeLang(value: string): Lang {
  return (LOCALES as readonly string[]).includes(value) ? (value as Lang) : "en";
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const lang = normalizeLang((await params).lang);
  if (routesForLocale(lang).length === 0) notFound();
  const t = getRoutesDictionary(lang);
  return {
    title: t.title,
    description: t.description,
    alternates: pageAlternates(lang, ROUTES_PATH),
    ...pageSocialMetadata(lang, ROUTES_PATH, t.title, t.description),
  };
}

export default async function RoutesPage({ params }: { params: Promise<{ lang: string }> }) {
  const lang = normalizeLang((await params).lang);
  const t = getRoutesDictionary(lang);
  const routes = routesForLocale(lang);
  if (routes.length === 0) notFound();
  const groups = routes.reduce((result, route) => {
    const group = result.get(route.origin) ?? [];
    group.push(route);
    result.set(route.origin, group);
    return result;
  }, new Map<string, typeof routes>());
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": toAbsolute(`/${lang}${ROUTES_PATH}#routes`),
    dateModified: routeLastModified(ROUTES_PATH, lang),
    numberOfItems: routes.length,
    itemListElement: routes.map((route, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: route.title[lang],
      url: toAbsolute(route.href[lang]!),
    })),
  };

  return (
    <main id="main">
      <BreadcrumbListJsonLd lang={lang} pageName={t.title} pagePath={ROUTES_PATH} homeName={t.home} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList).replace(/</g, "\\u003c") }} />
      <nav aria-label="Breadcrumb" className="route-breadcrumb container">
        <ol className="route-breadcrumb__list">
          <li><Link href={`/${lang}`}>{t.home}</Link></li><li aria-hidden="true">/</li>
          <li aria-current="page">{t.title}</li>
        </ol>
      </nav>
      <section className="section routes-catalog">
        <div className="container">
          <div className="section__hd"><div><h1 className="h1">{t.title}</h1><p className="section__desc">{t.description}</p></div></div>
          <div className="routes-catalog__groups">
              {[...groups].map(([origin, originRoutes]) => (
                <section className="card routes-catalog__group" key={origin}>
                  <div className="card__body">
                    <h2 className="card__title">{t.groupPrefix} {t.countries[origin]}</h2>
                    <ul className="route-related__list">
                      {originRoutes.map((route) => (
                        <li key={route.href[lang]}>
                          <Link href={route.href[lang]!}>
                            {t.insurancePrefix}{" "}
                            <span className="route-direction" dir="ltr">
                              <bdi dir="auto">{t.countries[origin]}</bdi>
                              <span aria-hidden="true"> → </span>
                              <bdi dir="auto">{t.countries[route.destination]}</bdi>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              ))}
          </div>
          <p className="routes-catalog__home"><Link className="btn btn--soft" href={`/${lang}`}>{t.backHome}</Link></p>
        </div>
      </section>
    </main>
  );
}
