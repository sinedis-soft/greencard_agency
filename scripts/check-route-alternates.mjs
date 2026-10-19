import { spawn } from "node:child_process";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const root = process.cwd();
const siteUrl = "https://greencard.agency";
const localUrl = "http://127.0.0.1:3199";
const reportFlag = process.argv.indexOf("--report");
const reportPath = reportFlag === -1 ? undefined : process.argv[reportFlag + 1];

const localeToHreflang = {
  ru: "ru",
  en: "en",
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
  ckb: "ku-IQ",
  kmr: "ku-TR",
  ar: "ar",
  he: "he-IL",
  ro: "ro-RO",
  sr: "sr-RS",
  sq: "sq-AL",
  mn: "mn-MN",
};

const hreflangOverrides = {
  "uae/bulgaria": { ar: "ar-AE" },
  "uae/greece": { ar: "ar-AE" },
  "algeria/france": { ar: "ar-DZ" },
};

function parseLocales() {
  const source = readFileSync(join(root, "app", "dictionaries", "header.ts"), "utf8");
  const block = source.match(/export const LOCALES\s*=\s*\[([\s\S]*?)\]\s*as const/)?.[1] ?? "";
  return [...block.matchAll(/"([a-z]+)"/g)].map((match) => match[1]);
}

function parseRoutes() {
  const source = readFileSync(join(root, "app", "routeRegistry.ts"), "utf8");
  return [...source.matchAll(/defineRoute\("([^"]+)", "([^"]+)", \[([^\]]+)\]/g)].map((match) => ({
    route: `${match[1]}/${match[2]}`,
    locales: [...match[3].matchAll(/"([a-z]+)"/g)].map((locale) => locale[1]),
  }));
}

function decodeHtml(value) {
  return value
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&#([0-9]+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&apos;", "'");
}

function parseHead(html) {
  const canonical = decodeHtml(html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i)?.[1] ?? "");
  const htmlLang = decodeHtml(html.match(/<html[^>]+lang="([^"]+)"/i)?.[1] ?? "");
  const alternates = new Map();
  for (const match of html.matchAll(/<link\s+rel="alternate"\s+hrefLang="([^"]+)"\s+href="([^"]+)"/gi)) {
    alternates.set(decodeHtml(match[1]), decodeHtml(match[2]));
  }
  return { canonical, htmlLang, alternates };
}

function hreflangFor(route, locale) {
  return hreflangOverrides[route]?.[locale] ?? localeToHreflang[locale];
}

function expectedUrl(locale, route) {
  return `${siteUrl}/${locale}/route/${route}`;
}

async function waitForServer(process) {
  for (let attempt = 0; attempt < 60; attempt += 1) {
    if (process.exitCode !== null) throw new Error(`Next.js exited with code ${process.exitCode}`);
    try {
      const response = await fetch(`${localUrl}/en`);
      if (response.status > 0) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error("Next.js did not start within 15 seconds");
}

async function fetchPage(path) {
  const response = await fetch(`${localUrl}${path}`, { redirect: "manual" });
  return { status: response.status, html: await response.text() };
}

const locales = parseLocales();
const routes = parseRoutes();
const server = spawn(
  process.platform === "win32" ? "node_modules\\.bin\\next.cmd" : "node_modules/.bin/next",
  ["start", "--hostname", "127.0.0.1", "--port", "3199"],
  { cwd: root, env: { ...process.env, NODE_ENV: "production" }, stdio: ["ignore", "pipe", "pipe"] },
);
let serverOutput = "";
server.stdout.on("data", (chunk) => { serverOutput += chunk; });
server.stderr.on("data", (chunk) => { serverOutput += chunk; });

const rows = [];
const pageByUrl = new Map();

try {
  await waitForServer(server);

  for (const definition of routes) {
    const defaultLocale = definition.locales.includes("en") ? "en" : definition.locales[0];
    const expectedAlternates = new Map(
      definition.locales.map((locale) => [hreflangFor(definition.route, locale), expectedUrl(locale, definition.route)]),
    );
    expectedAlternates.set("x-default", expectedUrl(defaultLocale, definition.route));

    for (const locale of definition.locales) {
      const path = `/${locale}/route/${definition.route}`;
      const expectedCanonical = expectedUrl(locale, definition.route);
      const response = await fetchPage(path);
      const head = parseHead(response.html);
      const errors = [];

      if (response.status !== 200) errors.push(`HTTP ${response.status}`);
      if (head.canonical !== expectedCanonical) errors.push(`canonical: ${head.canonical || "отсутствует"}`);
      if (head.htmlLang !== locale) errors.push(`html lang: ${head.htmlLang || "отсутствует"}`);
      if (head.alternates.size !== expectedAlternates.size) {
        errors.push(`hreflang: ожидалось ${expectedAlternates.size}, найдено ${head.alternates.size}`);
      }
      for (const [hreflang, url] of expectedAlternates) {
        if (head.alternates.get(hreflang) !== url) {
          errors.push(`${hreflang}: ${head.alternates.get(hreflang) || "отсутствует"}`);
        }
      }
      for (const [hreflang, url] of head.alternates) {
        if (expectedAlternates.get(hreflang) !== url) errors.push(`лишний hreflang ${hreflang}: ${url}`);
      }

      const selfHreflang = hreflangFor(definition.route, locale);
      if (head.alternates.get(selfHreflang) !== expectedCanonical) errors.push("нет ссылки hreflang на себя");
      if (head.alternates.get("x-default") !== expectedUrl(defaultLocale, definition.route)) {
        errors.push(`x-default должен вести на ${defaultLocale}`);
      }

      const row = {
        path,
        locale,
        status: response.status,
        canonical: head.canonical === expectedCanonical,
        self: head.alternates.get(selfHreflang) === expectedCanonical,
        alternates: head.alternates,
        errors,
      };
      rows.push(row);
      pageByUrl.set(expectedCanonical, row);
    }

    const missingLocales = locales.filter((locale) => !definition.locales.includes(locale));
    for (const locale of missingLocales) {
      const path = `/${locale}/route/${definition.route}`;
      const response = await fetchPage(path);
      if (response.status !== 404) {
        rows.push({
          path,
          locale,
          status: response.status,
          canonical: false,
          self: false,
          alternates: new Map(),
          errors: [`отсутствующая локаль должна возвращать 404, получено ${response.status}`],
          nonIndexable: true,
        });
      }
    }
  }

  for (const row of rows.filter((item) => !item.nonIndexable)) {
    for (const [hreflang, url] of row.alternates) {
      if (hreflang === "x-default") continue;
      const target = pageByUrl.get(url);
      if (!target) {
        row.errors.push(`hreflang ведёт на несуществующую страницу: ${url}`);
        continue;
      }
      const sourceUrl = `${siteUrl}${row.path}`;
      if (![...target.alternates.values()].includes(sourceUrl)) {
        row.errors.push(`нет обратной ссылки с ${url}`);
      }
    }
  }
} finally {
  server.kill("SIGTERM");
}

if (rows.length === 0) {
  console.error(`No route pages checked. Server output:\n${serverOutput}`);
  process.exit(1);
}

const failed = rows.filter((row) => row.errors.length > 0);
const indexableRows = rows.filter((row) => !row.nonIndexable);
const reportLines = [
  "# Отчёт canonical и hreflang",
  "",
  `Сформирован: ${new Date().toISOString()}`,
  "",
  "Правило x-default: английская версия, если она существует; иначе первая разрешённая локаль маршрута.",
  "",
  "| URL | HTTP | canonical на себя | hreflang на себя | Взаимность | Результат |",
  "|---|---:|---:|---:|---:|---|",
  ...indexableRows.map((row) => {
    const reciprocal = row.errors.some((error) => error.includes("обратной ссылки")) ? "нет" : "да";
    return `| \`${row.path}\` | ${row.status} | ${row.canonical ? "да" : "нет"} | ${row.self ? "да" : "нет"} | ${reciprocal} | ${row.errors.length ? "ОШИБКА" : "OK"} |`;
  }),
];

if (failed.length > 0) {
  reportLines.push("", "## Ошибки", "");
  for (const row of failed) reportLines.push(`- \`${row.path}\`: ${row.errors.join("; ")}`);
}

const canonicalErrors = indexableRows.filter((row) => !row.canonical).length;
const nonexistentAlternates = indexableRows.reduce(
  (count, row) => count + row.errors.filter((error) => error.includes("несуществующую страницу")).length,
  0,
);
const nonReciprocal = indexableRows.reduce(
  (count, row) => count + row.errors.filter((error) => error.includes("обратной ссылки")).length,
  0,
);
const languageErrors = indexableRows.filter((row) => row.errors.some((error) => error.startsWith("html lang"))).length;

reportLines.push(
  "",
  "## Итог",
  "",
  `- Проверено индексируемых URL: ${indexableRows.length}.`,
  `- Ошибочные canonical: ${canonicalErrors}.`,
  `- Несуществующие URL в hreflang: ${nonexistentAlternates}.`,
  `- Невзаимные hreflang: ${nonReciprocal}.`,
  `- Страницы с неправильным языком HTML: ${languageErrors}.`,
  `- Ошибочно созданные отсутствующие локали: ${rows.filter((row) => row.nonIndexable).length}.`,
);

const report = `${reportLines.join("\n")}\n`;
console.log(report);
if (reportPath) {
  const absolutePath = join(root, reportPath);
  mkdirSync(dirname(absolutePath), { recursive: true });
  writeFileSync(absolutePath, report, "utf8");
}

console.log(`Checked ${indexableRows.length} indexable URLs; errors: ${failed.length}`);
if (failed.length > 0) process.exit(1);
