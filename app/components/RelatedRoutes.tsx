import Link from "next/link";
import type { Lang } from "@/app/dictionaries/header";
import { getRoutesDictionary } from "@/app/dictionaries/routes";
import { routesForLocale, selectRelatedRoutes } from "@/app/routeRegistry";
import { selectRelatedRouteCandidates } from "@/app/routeRegistryCore";
import { hasRouteCatalog } from "@/app/routeRegistry";

export default function RelatedRoutes({
  lang,
  currentPath,
  currentOrigin,
}: {
  lang: Lang;
  currentPath?: string;
  currentOrigin?: string;
}) {
  const t = getRoutesDictionary(lang);
  const catalogExists = hasRouteCatalog(lang);
  const routes = currentPath
    ? selectRelatedRoutes(currentPath, lang)
    : selectRelatedRouteCandidates(
        { origin: currentOrigin ?? "", destination: "", href: `/${lang}/route/${currentOrigin}` },
        routesForLocale(lang).map((route) => ({ route, origin: route.origin, destination: route.destination, priority: route.priority, href: route.href[lang]! })),
      ).map(({ route }) => route);

  if (routes.length === 0 && !catalogExists) return null;

  if (routes.length === 0) {
    return (
      <div className="container route-related__catalog-only">
        <Link className="btn btn--soft" href={`/${lang}/routes`}>{t.viewAll}</Link>
      </div>
    );
  }

  return (
    <section className="section route-related" aria-labelledby="related-routes-title">
      <div className="container">
        <div className="section__hd">
          <div>
            <h2 className="section__title" id="related-routes-title">{t.relatedTitle}</h2>
          </div>
          {catalogExists ? <Link className="btn btn--soft" href={`/${lang}/routes`}>{t.viewAll}</Link> : null}
        </div>
        <ul className="route-related__list">
          {routes.map((route) => (
            <li key={route.href[lang]}>
              <Link href={route.href[lang]!}>
                {t.insurancePrefix}{" "}
                <span className="route-direction" dir="ltr">
                  <bdi dir="auto">{t.countries[route.origin]}</bdi>
                  <span aria-hidden="true"> → </span>
                  <bdi dir="auto">{t.countries[route.destination]}</bdi>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
