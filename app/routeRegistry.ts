import type { Lang } from "@/app/dictionaries/header";
import { getAlbaniaBulgariaOcDictionary } from "@/app/dictionaries/seo-landings/albaniaBulgariaOc";
import { getAlgeriaFranceOcDictionary } from "@/app/dictionaries/seo-landings/algeriaFranceOc";
import { getbelarusLithuaniaOcDictionary } from "@/app/dictionaries/seo-landings/belarusLithuaniaOc";
import { getBelarusPolandOcDictionary } from "@/app/dictionaries/seo-landings/belarusPolandOc";
import { getGeorgiaBulgariaOcDictionary } from "@/app/dictionaries/seo-landings/georgiaBulgariaOc";
import { getGeorgiaGreeceOcDictionary } from "@/app/dictionaries/seo-landings/georgiaGreeceOc";
import { getGeorgiaRomaniaOcDictionary } from "@/app/dictionaries/seo-landings/georgiaRomaniaOc";
import { getKazakhstanPolandOcDictionary } from "@/app/dictionaries/seo-landings/kazakhstanPolandOc";
import { getUaeBulgariaOcDictionary } from "@/app/dictionaries/seo-landings/uaeBulgariaOc";
import { getUaeGreeceOcDictionary } from "@/app/dictionaries/seo-landings/uaeGreeceOc";
import { selectRelatedRouteCandidates } from "@/app/routeRegistryCore";

export type RouteDefinition = {
  origin: string;
  destination: string;
  locales: readonly Lang[];
  href: Partial<Record<Lang, string>>;
  title: Partial<Record<Lang, string>>;
  shortTitle?: Partial<Record<Lang, string>>;
  priority?: number;
};

type DictionaryGetter = (lang: Lang) => { breadcrumbTitle: string } | undefined;

function defineRoute(
  origin: string,
  destination: string,
  locales: readonly Lang[],
  getDictionary: DictionaryGetter,
  priority: number,
): RouteDefinition {
  const path = `/route/${origin}/${destination}`;
  return {
    origin,
    destination,
    locales,
    href: Object.fromEntries(locales.map((lang) => [lang, `/${lang}${path}`])),
    title: Object.fromEntries(
      locales.map((lang) => [lang, getDictionary(lang)?.breadcrumbTitle]),
    ),
    priority,
  };
}

export const ROUTE_DEFINITIONS = [
  defineRoute("belarus", "poland", ["ru", "pl", "en", "be", "kk", "ka", "tr", "fa", "hy", "ar", "he"], getBelarusPolandOcDictionary, 100),
  defineRoute("belarus", "lithuania", ["ru", "en", "be", "ka", "hy", "ar"], getbelarusLithuaniaOcDictionary, 90),
  defineRoute("georgia", "romania", ["ru", "en", "be", "ka", "kk"], getGeorgiaRomaniaOcDictionary, 80),
  defineRoute("georgia", "bulgaria", ["ru", "en", "ka", "hy", "ar"], getGeorgiaBulgariaOcDictionary, 79),
  defineRoute("georgia", "greece", ["ru", "en", "ka"], getGeorgiaGreeceOcDictionary, 78),
  defineRoute("kazakhstan", "poland", ["ru", "kk", "en", "ar"], getKazakhstanPolandOcDictionary, 70),
  defineRoute("uae", "bulgaria", ["ru", "en", "ar"], getUaeBulgariaOcDictionary, 60),
  defineRoute("uae", "greece", ["ru", "en", "ar"], getUaeGreeceOcDictionary, 59),
  defineRoute("albania", "bulgaria", ["ru", "en", "sq"], getAlbaniaBulgariaOcDictionary, 50),
  defineRoute("algeria", "france", ["ar", "en"], getAlgeriaFranceOcDictionary, 40),
] as const satisfies readonly RouteDefinition[];

export const INDEXABLE_ROUTE_PATHS = ROUTE_DEFINITIONS.map(
  ({ origin, destination }) => `/route/${origin}/${destination}`,
) as Array<`/route/${string}/${string}`>;

export const ROUTE_CATALOG_LOCALES = [...new Set(
  ROUTE_DEFINITIONS.flatMap((route) => route.locales),
)] as Lang[];

export function hasRouteCatalog(lang: Lang): boolean {
  return ROUTE_CATALOG_LOCALES.includes(lang);
}

export function routeDefinitionByPath(path: string) {
  return ROUTE_DEFINITIONS.find(
    ({ origin, destination }) => `/route/${origin}/${destination}` === path,
  );
}

export function routesForLocale(lang: Lang): RouteDefinition[] {
  return ROUTE_DEFINITIONS.filter((route) => route.locales.includes(lang));
}

export function selectRelatedRoutes(path: string, lang: Lang, limit = 5): RouteDefinition[] {
  const current = routeDefinitionByPath(path);
  if (!current || !current.href[lang]) return [];

  return selectRelatedRouteCandidates(
    { origin: current.origin, destination: current.destination, priority: current.priority, href: current.href[lang] },
    routesForLocale(lang).map((route) => ({ route, origin: route.origin, destination: route.destination, priority: route.priority, href: route.href[lang]! })),
    limit,
  ).map(({ route }) => route);
}
