import { readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const source = readFileSync(join(root, "app/practiceContent.ts"), "utf8");
function assert(condition, message) { if (!condition) throw new Error(message); }

const forbiddenPhrases = [
  "гарантированно", "гарантия въезда", "гарантированное пересечение границы", "полис за 4 минуты", "оформление за 10 минут", "среднее время 6 минут", "официальная статистика", "точность 99,9%", "99,9% без ошибок", "0,1% ошибок", "лучший эксперт", "ведущий эксперт", "любой автомобиль", "любой маршрут", "действует во всех странах ЕС",
  "gwarancja wjazdu", "gwarantowane przekroczenie granicy", "polisa w 4 minuty", "średni czas 6 minut", "oficjalne statystyki", "najlepszy ekspert", "każdy samochód", "każda trasa", "działa we wszystkich krajach UE",
  "guaranteed entry", "guaranteed border crossing", "policy in 4 minutes", "average time 6 minutes", "official statistics", "99.9% accuracy", "best expert", "leading expert", "any vehicle", "any route", "valid in all EU countries",
  "гарантыя ўезду", "гарантаванае перасячэнне мяжы", "поліс за 4 хвіліны", "сярэдні час 6 хвілін", "афіцыйная статыстыка", "лепшы эксперт", "вядучы эксперт", "любы аўтамабіль", "любы маршрут", "дзейнічае ва ўсіх краінах ЕС"
];
for (const phrase of forbiddenPhrases) assert(!source.toLocaleLowerCase().includes(phrase.toLocaleLowerCase()), `forbidden promise phrase found: ${phrase}`);

const piiPatterns = [
  /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
  /(?:\+|00)\d[\d\s().-]{8,}\d/,
  /\b\d{17,18}\b/,
  /\b\d{11}\b/,
  /\b[A-HJ-NPR-Z0-9]{17}\b/i,
];
for (const pattern of piiPatterns) assert(!pattern.test(source), `personal-data-like pattern found: ${pattern}`);
assert(!source.includes("ratingValue") && !source.includes("AggregateRating") && !source.includes("Review"), "case content must not use review/rating schema terms");
console.log("ok practice forbidden claims and personal data checks");
