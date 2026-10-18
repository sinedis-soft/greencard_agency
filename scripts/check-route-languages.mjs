import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join, relative, sep } from "node:path";

const root = process.cwd();
const appRoot = join(root, ".next", "server", "app");
const reportFlag = process.argv.indexOf("--report");
const reportPath = reportFlag === -1 ? undefined : process.argv[reportFlag + 1];

if (!existsSync(appRoot)) {
  console.error("Missing .next build output. Run `npm run build` first.");
  process.exit(2);
}

const profiles = {
  ru: { name: "русский", script: "cyrillic", words: ["страхование", "автомобиль", "документы", "полис", "оформление", "поездка", "проверка", "стоимость"] },
  en: { name: "английский", script: "latin", words: ["insurance", "vehicle", "documents", "policy", "coverage", "travel", "application", "price"] },
  pl: { name: "польский", script: "latin", words: ["ubezpieczenie", "samochód", "pojazd", "dokumenty", "polisa", "podróż", "wniosek", "cena"] },
  be: { name: "белорусский", script: "cyrillic", words: ["страхаванне", "аўтамабіль", "дакументы", "поліс", "афармленне", "паездка", "праверка", "кошт"] },
  kk: { name: "казахский", script: "cyrillic", words: ["сақтандыру", "автокөлік", "көлік", "құжаттар", "полис", "сапар", "тексеру", "құны"] },
  tr: { name: "турецкий", script: "latin", words: ["sigorta", "araç", "belgeler", "poliçe", "seyahat", "başvuru", "kontrol", "fiyat"] },
  ka: { name: "грузинский", script: "georgian", words: ["დაზღვევა", "ავტომობილი", "დოკუმენტები", "პოლისი", "მოგზაურობა", "განაცხადი", "შემოწმება", "ფასი"] },
  hy: { name: "армянский", script: "armenian", words: ["ապահովագրություն", "ավտոմեքենա", "փաստաթղթեր", "պոլիս", "ուղևորություն", "դիմում", "ստուգում", "գին"] },
  fa: { name: "персидский", script: "arabic", words: ["بیمه", "خودرو", "مدارک", "بیمه‌نامه", "سفر", "درخواست", "بررسی", "قیمت"] },
  ar: { name: "арабский", script: "arabic", words: ["التأمين", "السيارة", "المستندات", "الوثيقة", "الرحلة", "الطلب", "التحقق", "السعر"] },
  he: { name: "иврит", script: "hebrew", words: ["ביטוח", "רכב", "מסמכים", "פוליסה", "נסיעה", "בקשה", "בדיקה", "מחיר"] },
  sq: { name: "албанский", script: "latin", words: ["sigurimi", "automjeti", "dokumentet", "polica", "udhëtimi", "kërkesa", "kontrolli", "çmimi"] },
};

const scripts = {
  latin: /\p{Script=Latin}/gu,
  cyrillic: /\p{Script=Cyrillic}/gu,
  arabic: /\p{Script=Arabic}/gu,
  hebrew: /\p{Script=Hebrew}/gu,
  georgian: /\p{Script=Georgian}/gu,
  armenian: /\p{Script=Armenian}/gu,
};

const russianServiceText = [
  "страхование для частных лиц",
  "выберите язык",
  "купить полис",
  "отправить заявку",
  "последняя проверка",
  "об эксперте",
  "редакционная политика",
];

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

function decodeHtml(value) {
  return value
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&#([0-9]+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replaceAll("&nbsp;", " ")
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&apos;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

function textFromHtml(value) {
  return decodeHtml(value)
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function attribute(html, pattern) {
  return decodeHtml(html.match(pattern)?.[1] ?? "").trim();
}

function countMatches(text, regex) {
  return text.match(regex)?.length ?? 0;
}

function wordCount(text, word) {
  const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return countMatches(text.toLocaleLowerCase(), new RegExp(escaped, "gu"));
}

function languageScores(text) {
  const scores = {};
  for (const [locale, profile] of Object.entries(profiles)) {
    scores[locale] = profile.words.reduce((sum, word) => sum + wordCount(text, word), 0);
  }
  return scores;
}

function scriptCounts(text) {
  return Object.fromEntries(Object.entries(scripts).map(([name, regex]) => [name, countMatches(text, regex)]));
}

function detectLanguage(text) {
  const counts = scriptCounts(text);
  const totalLetters = Object.values(counts).reduce((sum, value) => sum + value, 0);
  const dominantScript = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];
  const candidates = Object.entries(profiles).filter(([, profile]) => profile.script === dominantScript?.[0]);
  const scores = languageScores(text);
  const ranked = candidates.sort((a, b) => scores[b[0]] - scores[a[0]]);
  const best = ranked[0]?.[0] ?? "unknown";
  const bestScore = scores[best] ?? 0;
  const secondScore = ranked[1] ? scores[ranked[1][0]] : 0;
  const scriptConfidence = totalLetters ? (dominantScript?.[1] ?? 0) / totalLetters : 0;
  const lexicalConfidence = bestScore ? bestScore / Math.max(1, bestScore + secondScore) : 0;
  return {
    locale: bestScore > 0 || scriptConfidence >= 0.8 ? best : "unknown",
    confidence: Math.max(scriptConfidence, lexicalConfidence),
    scores,
    counts,
    totalLetters,
  };
}

function mismatchShare(text, expected) {
  const detection = detectLanguage(text);
  const expectedScript = profiles[expected].script;
  const foreignScript = Object.entries(detection.counts)
    .filter(([script]) => script !== expectedScript)
    .reduce((sum, [, count]) => sum + count, 0);
  const scriptShare = detection.totalLetters ? foreignScript / detection.totalLetters : 0;
  const expectedScore = detection.scores[expected] ?? 0;
  const competitorScore = Math.max(
    0,
    ...Object.entries(detection.scores)
      .filter(([locale]) => locale !== expected)
      .map(([, score]) => score),
  );
  const lexicalShare = competitorScore / Math.max(1, expectedScore + competitorScore);
  return detection.locale === expected
    ? scriptShare
    : Math.max(scriptShare, competitorScore >= 3 ? lexicalShare : 0);
}

function inspectFragment(label, text, expected, issues) {
  if (!text) {
    issues.push({ severity: "critical", message: `${label}: текст отсутствует` });
    return;
  }
  const detected = detectLanguage(text);
  const mismatch = mismatchShare(text, expected);
  if (detected.locale !== "unknown" && detected.locale !== expected && detected.confidence >= 0.7 && mismatch >= 0.2) {
    const differentScript = profiles[detected.locale]?.script !== profiles[expected].script;
    issues.push({
      severity: differentScript ? "critical" : "review",
      message: `${label}: определён язык ${detected.locale}`,
    });
  } else if (detected.locale !== "unknown" && detected.locale !== expected && mismatch >= 0.08) {
    issues.push({ severity: "review", message: `${label}: возможно, язык ${detected.locale}` });
  }
}

function inspectPage(path) {
  const relativePath = relative(appRoot, path).split(sep).join("/").replace(/\.html$/, "");
  const [locale, routeKeyword, origin, destination] = relativePath.split("/");
  if (routeKeyword !== "route" || !origin || !destination || !profiles[locale]) return undefined;

  const html = readFileSync(path, "utf8");
  const mainHtml = html.match(/<main\b[\s\S]*?<\/main>/i)?.[0] ?? "";
  if (!mainHtml) return undefined;

  const mainText = textFromHtml(mainHtml);
  const title = attribute(html, /<title[^>]*>([\s\S]*?)<\/title>/i);
  const description = attribute(html, /<meta\s+name="description"\s+content="([^"]*)"/i);
  const htmlLang = attribute(html, /<html[^>]+lang="([^"]+)"/i);
  const authorText = textFromHtml(mainHtml.match(/<section[^>]+class="[^"]*content-review[^"]*"[\s\S]*?<\/section>/i)?.[0] ?? "");
  const formText = textFromHtml(mainHtml.match(/<form\b[\s\S]*?<\/form>/i)?.[0] ?? "");
  const buttonText = textFromHtml(
    [...mainHtml.matchAll(/(?:<button\b[^>]*>[\s\S]*?<\/button>|<a\b[^>]*class="[^"]*(?:btn|button)[^"]*"[^>]*>[\s\S]*?<\/a>)/gi)]
      .map((match) => match[0])
      .join(" "),
  );

  const issues = [];
  if (htmlLang !== locale) issues.push({ severity: "critical", message: `html lang=${htmlLang || "пусто"}` });
  inspectFragment("title", title, locale, issues);
  inspectFragment("description", description, locale, issues);
  inspectFragment("основной текст", mainText, locale, issues);
  inspectFragment("блок автора", authorText, locale, issues);
  inspectFragment("кнопки", buttonText, locale, issues);
  if (formText) inspectFragment("форма", formText, locale, issues);

  if (locale !== "ru") {
    const lower = `${mainText} ${title} ${description}`.toLocaleLowerCase();
    const found = russianServiceText.filter((phrase) => lower.includes(phrase));
    if (found.length > 0) issues.push({ severity: "critical", message: `русский служебный текст: ${found.join(", ")}` });
  }

  const mainDetection = detectLanguage(mainText);
  const mismatch = mismatchShare(mainText, locale);
  const critical = issues.some((issue) => issue.severity === "critical");
  const review = issues.some((issue) => issue.severity === "review");
  return {
    url: `/${locale}/route/${origin}/${destination}`,
    expected: locale,
    detected: mainDetection.locale,
    mismatch,
    result: critical ? "КРИТИЧНО" : review || mismatch >= 0.08 ? "ПРОВЕРИТЬ" : "OK",
    issues,
  };
}

const rows = walk(appRoot)
  .filter((path) => path.endsWith(".html"))
  .map(inspectPage)
  .filter(Boolean)
  .sort((a, b) => a.url.localeCompare(b.url));

const lines = [
  "# Отчёт проверки языка маршрутных страниц",
  "",
  `Сформирован: ${new Date().toISOString()}`,
  "",
  "Эвристическая проверка выявляет подозрительные страницы. Окончательное решение принимает человек.",
  "",
  "| URL | Ожидаемый язык | Определённый язык | Доля несоответствия | Результат |",
  "|---|---:|---:|---:|---|",
  ...rows.map((row) => `| \`${row.url}\` | ${row.expected} | ${row.detected} | ${(row.mismatch * 100).toFixed(1)}% | ${row.result} |`),
];

const flagged = rows.filter((row) => row.result !== "OK");
const criticalCount = rows.filter((row) => row.result === "КРИТИЧНО").length;
if (flagged.length > 0) {
  lines.push("", "## Требуют ручной проверки", "");
  for (const row of flagged) {
    lines.push(`- \`${row.url}\`: ${row.issues.map((issue) => issue.message).join("; ") || "повышенная доля несоответствия"}`);
  }
}
lines.push(
  "",
  "## Итог",
  "",
  `- Проверено страниц: ${rows.length}.`,
  `- Критические несоответствия: ${criticalCount}.`,
  `- Требуют ручной проверки: ${flagged.length - criticalCount}.`,
);

const report = `${lines.join("\n")}\n`;
console.log(report);

if (reportPath) {
  const absoluteReportPath = join(root, reportPath);
  mkdirSync(dirname(absoluteReportPath), { recursive: true });
  writeFileSync(absoluteReportPath, report, "utf8");
}

console.log(`Checked ${rows.length} pages; critical: ${criticalCount}; manual review: ${flagged.length - criticalCount}`);
if (criticalCount > 0) process.exit(1);
