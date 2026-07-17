import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const root = process.cwd();
const seoSource = readFileSync(join(root, "app", "seo.ts"), "utf8");
const sitemapSource = readFileSync(join(root, "app", "sitemapUtils.ts"), "utf8");

const ROUTE_DICTIONARIES = {
  "belarus/poland": "app/dictionaries/seo-landings/belarusPolandOc.ts",
  "belarus/lithuania": "app/dictionaries/seo-landings/belarusLithuaniaOc.ts",
  "georgia/romania": "app/dictionaries/seo-landings/georgiaRomaniaOc.ts",
  "georgia/bulgaria": "app/dictionaries/seo-landings/georgiaBulgariaOc.ts",
  "kazakhstan/poland": "app/dictionaries/seo-landings/kazakhstanPolandOc.ts",
  uae: "app/dictionaries/seo-landings/uaeOc.ts",
};

const FULL_DICTIONARY_EXCLUSIONS = [
  {
    locale: "kk",
    route: "belarus/poland",
    reason: "Permanent redirect to Russian version",
  },
];

const RUSSIAN_TERMS = [
  "страховка",
  "страхование",
  "автомобиль",
  "документы",
  "оформление",
  "получить",
  "водитель",
  "владелец",
  "граница",
  "пограничный",
  "действует",
  "стоимость",
  "срок",
];

const FORBIDDEN_TERMS = {
  en: ["оформление", "страховка", "автомобиль", "документы", "получить"],
  pl: ["страховка", "оформление", "автомобиль", "документы", "менеджер"],
  be: [],
  kk: RUSSIAN_TERMS,
  uz: RUSSIAN_TERMS,
};

const TERM_EXCEPTIONS = [];
const LONG_LATIN_ALLOWLIST = [
  "OC",
  "Green Card",
  "WARTA",
  "SINEDIS",
  "PDF",
  "VIN",
  "FAQ",
  "WhatsApp",
  "Telegram",
];

const DEFAULT_REQUIRED_LEGAL_FIELDS = [
  "seo.title",
  "seo.description",
  "hero.title",
  "what.text",
  "who.items",
  "how.steps",
  "price.text",
  "validity.text",
  "form.desc",
  "faq.items",
];

const ROUTE_REQUIRED_LEGAL_FIELDS = {
  uae: [
    "seo.title",
    "seo.description",
    "hero.title",
    "hero.notice",
    "suitability.text",
    "coverage.text",
    "documents.text",
    "price.text",
    "timing.text",
    "steps.items",
    "faq.items",
  ],
};

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function objectBody(source, name) {
  const match = source.match(new RegExp(`${name}\\s*=\\s*{([\\s\\S]*?)\\n}\\s+as const`));
  assert(match, `${name} was not found`);
  return match[1];
}

function parseRouteLocales() {
  const body = objectBody(seoSource, "ROUTE_LOCALES");
  const entries = [...body.matchAll(/"?([a-z]+(?:\/[a-z]+){0,2})"?\s*:\s*\[([^\]]+)\]/g)];
  return new Map(entries.map(([, route, values]) => [
    route,
    [...values.matchAll(/"([a-z]+)"/g)].map(([, locale]) => locale),
  ]));
}

function stringValuesFromArray(source, name) {
  const match = source.match(new RegExp(`${name}\\s*=\\s*\\[([\\s\\S]*?)\\]\\s+as const`));
  assert(match, `${name} array was not found`);
  return [...match[1].matchAll(/"([^"]+)"/g)].map(([, value]) => value);
}

function walk(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const path = join(dir, entry);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

function routePageKeys() {
  const routeRoot = join(root, "app", "[lang]", "route");
  return walk(routeRoot)
    .filter((path) => path.endsWith(`${sep}page.tsx`))
    .map((path) => relative(routeRoot, path).split(sep).slice(0, -1).join("/"))
    .sort();
}

function constLocales(source) {
  return new Set([...source.matchAll(/^const\s+([a-z]{2,3})\s*:/gm)].map(([, locale]) => locale));
}

function localeBlock(source, locale) {
  const start = source.search(new RegExp(`^const\\s+${locale}\\s*:`, "m"));
  if (start === -1) return "";
  const rest = source.slice(start);
  const next = rest.slice(1).search(/^const\s+[a-z]{2,3}\s*:/m);
  const exportStart = rest.search(/^export\s+/m);
  const endCandidates = [next === -1 ? -1 : next + 1, exportStart].filter((value) => value > 0);
  const end = endCandidates.length ? Math.min(...endCandidates) : rest.length;
  return rest.slice(0, end);
}

function stringsFromBlock(block) {
  return [...block.matchAll(/"((?:\\.|[^"\\])*)"/g)].map(([, value]) =>
    value.replace(/\\n/g, " ").replace(/\\"/g, '"'),
  );
}

function flattenStrings(locale, route, block) {
  return stringsFromBlock(block)
    .filter((text) => text.trim())
    .map((text, index) => ({ locale, route, path: `string[${index}]`, text }));
}

function isTermException(locale, route, path, term) {
  return TERM_EXCEPTIONS.some((item) => {
    assert(item.reason?.trim(), `Exception ${JSON.stringify(item)} must have a non-empty reason`);
    return item.locale === locale && item.route === route && item.path === path && item.term === term;
  });
}

function wordRegex(term) {
  return new RegExp(`(^|[^\\p{L}])${term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}([^\\p{L}]|$)`, "iu");
}

function checkForbiddenTerms(entries, failures) {
  for (const entry of entries) {
    const terms = FORBIDDEN_TERMS[entry.locale] ?? [];
    for (const term of terms) {
      if (!isTermException(entry.locale, entry.route, entry.path, term) && wordRegex(term).test(entry.text)) {
        failures.push(`${entry.locale} ${entry.route} ${entry.path}: forbidden term "${term}" in "${entry.text}"`);
      }
    }
  }
}

function stripAllowedLatin(text) {
  let cleaned = text
    .replace(/https?:\/\/\S+/gi, " ")
    .replace(/[\w.+-]+@[\w.-]+/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\b[A-HJ-NPR-Z0-9]{8,17}\b/g, " ");
  for (const allowed of LONG_LATIN_ALLOWLIST) {
    cleaned = cleaned.replace(new RegExp(allowed.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi"), " ");
  }
  return cleaned;
}

function checkAlphabetMix(entries, failures) {
  for (const entry of entries) {
    if (["en", "pl"].includes(entry.locale) && /[А-Яа-яЁёІіЎўЄєЇї]/.test(entry.text)) {
      failures.push(`${entry.locale} ${entry.route} ${entry.path}: Cyrillic text found in "${entry.text}"`);
    }

    if (["ar", "fa"].includes(entry.locale)) {
      const cleaned = stripAllowedLatin(entry.text);
      if (/\b[A-Za-z][A-Za-z-]{2,}\s+[A-Za-z][A-Za-z-]{2,}\s+[A-Za-z][A-Za-z-]{2,}\b/.test(cleaned)) {
        failures.push(`${entry.locale} ${entry.route} ${entry.path}: long Latin fragment found in "${entry.text}"`);
      }
    }
  }
}

function checkRequiredFields(route, locale, block, failures) {
  const requiredFields = ROUTE_REQUIRED_LEGAL_FIELDS[route] ?? DEFAULT_REQUIRED_LEGAL_FIELDS;

  for (const field of requiredFields) {
    const parts = field.split(".");
    let pattern;
    if (parts.length === 2) {
      pattern = new RegExp(`${parts[0]}\\s*:\\s*{[\\s\\S]*?${parts[1]}\\s*:`);
    } else {
      pattern = new RegExp(`${field}\\s*:`);
    }
    if (!pattern.test(block)) {
      failures.push(`${locale} ${route}: missing required legal/content field ${field}`);
    }
  }
}

const routeLocales = parseRouteLocales();
const routePages = routePageKeys();
const sitemapRoutes = new Set(stringValuesFromArray(sitemapSource, "SITEMAP_ROUTE_ROUTES").map((route) => route.replace(/^\/route\//, "")));
const failures = [];
const allEntries = [];

for (const item of FULL_DICTIONARY_EXCLUSIONS) {
  assert(item.reason?.trim(), `Full dictionary exclusion ${JSON.stringify(item)} must have a non-empty reason`);
}

for (const route of routePages) {
  assert(routeLocales.has(route), `${route} has page.tsx but is missing from ROUTE_LOCALES`);
  assert(sitemapRoutes.has(route), `${route} has page.tsx but is missing from SITEMAP_ROUTE_ROUTES`);
}

for (const [route, locales] of routeLocales) {
  assert(ROUTE_DICTIONARIES[route], `${route} is in ROUTE_LOCALES but has no dictionary mapping in check:i18n`);
  const source = readFileSync(join(root, ROUTE_DICTIONARIES[route]), "utf8");
  const definedLocales = constLocales(source);

  for (const locale of locales) {
    if (!definedLocales.has(locale)) {
      failures.push(`${route}: locale ${locale} is allowed but has no full dictionary const`);
      continue;
    }

    const block = localeBlock(source, locale);
    checkRequiredFields(route, locale, block, failures);
    allEntries.push(...flattenStrings(locale, route, block));
  }

  for (const locale of definedLocales) {
    const excluded = FULL_DICTIONARY_EXCLUSIONS.some((item) => item.route === route && item.locale === locale);
    if (!locales.includes(locale) && !excluded) {
      failures.push(`${route}: full dictionary const ${locale} exists but locale is not in ROUTE_LOCALES`);
    }
  }
}

checkAlphabetMix(allEntries, failures);
checkForbiddenTerms(allEntries, failures);

assert(!seoSource.includes("disabledLocales"), "Route locale matrix should replace disabledLocales for route pages");
assert(!seoSource.includes("LOCALES.filter"), "routeLocales must not derive route languages by filtering global LOCALES");
assert(!sitemapSource.includes("/kk/route/belarus/poland"), "/kk/route/belarus/poland must not be hard-coded in sitemap output");
const belarusPolandLocales = routeLocales.get("belarus/poland") ?? [];
assert(!belarusPolandLocales.includes("kk"), "kk must not be allowed for belarus/poland");

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`ok i18n route matrix (${routeLocales.size} routes, ${allEntries.length} localized strings checked)`);
