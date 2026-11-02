import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

function pageText(path) {
  const html = readFileSync(new URL(`../.next/server/app/${path}.html`, import.meta.url), "utf8");
  return html
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;|&#160;|\u00a0/g, " ")
    .replace(/\s+/g, " ");
}

const cases = [
  ["belarus/lithuania", "Ситуации при поездке из Беларуси в Литву", "Белорусская регистрация"],
  ["georgia/romania", "Ситуации при поездке из Грузии в Румынию", "Грузинская регистрация"],
  ["georgia/bulgaria", "Ситуации при поездке из Грузии в Болгарию", "Грузинская регистрация"],
  ["kazakhstan/poland", "Ситуации при поездке на казахстанском автомобиле в Польшу", "Казахстанская регистрация"],
];

for (const [route, title, registration] of cases) {
  const text = pageText(`ru/route/${route}`);
  assert(text.includes(title), `${route}: route-specific scenarios are rendered`);
  assert(text.includes(registration), `${route}: registration matches the origin`);
  assert(!text.includes("Польша используется как транзит"), `${route}: no inherited Polish scenario`);
  assert(!text.includes("Едете в Польшу на личном автомобиле"), `${route}: no inherited Polish travel example`);
  assert(!text.includes("белорусской и российской регистрацией"), `${route}: no inherited BY/RU ownership warning`);
  assert(!text.includes("Для белорусских и российских номеров"), `${route}: no inherited BY/RU ownership instructions`);
  assert(text.includes("Какие данные нужны для оформления"), `${route}: shared document guidance is preserved`);
}

const poland = pageText("ru/route/belarus/poland");
assert(poland.includes("Польша используется как транзит"), "Belarus–Poland keeps its Polish scenarios");
assert(poland.includes("Проверьте собственника автомобиля"), "Belarus–Poland keeps its ownership guidance");

const greece = pageText("ru/route/georgia/greece");
assert(!greece.includes("Типовые ситуации клиентов"), "explicitly disabled enhancements remain disabled");
assert(!greece.includes("Ситуации при поездке из Грузии в Болгарию"), "Greece does not inherit Bulgarian scenarios");

for (const lang of ["en", "be", "pl"]) {
  const text = pageText(`${lang}/route/belarus/poland`);
  assert(!text.includes("Типовые ситуации клиентов"), `${lang}: no Russian enhancement fallback`);
}

console.log("ok route-specific enhancements: 9 rendered pages checked");
