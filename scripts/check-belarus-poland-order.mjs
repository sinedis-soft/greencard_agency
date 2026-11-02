import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const registry = readFileSync(new URL("../app/routeRegistry.ts", import.meta.url), "utf8");
const match = registry.match(/defineRoute\("belarus", "poland", (\[[^\]]+\])/);
assert(match, "Belarus–Poland route is registered");
const locales = JSON.parse(match[1]);

function pageHtml(path) {
  return readFileSync(new URL(`../.next/server/app/${path}.html`, import.meta.url), "utf8")
    .replace(/<script\b[\s\S]*?<\/script>/gi, "");
}

for (const lang of locales) {
  const html = pageHtml(`${lang}/route/belarus/poland`);
  assert.equal((html.match(/<form\b/g) || []).length, 1, `${lang}: exactly one application form`);
  assert.equal((html.match(/\bid="buy"/g) || []).length, 1, `${lang}: unique order anchor`);
  assert.equal((html.match(/\bid="calc"/g) || []).length, 1, `${lang}: unique calculator anchor`);
  assert(html.includes('href="#buy"'), `${lang}: hero action targets the form on this page`);
  assert(html.includes(`href="/${lang}/route/belarus/poland#buy"`), `${lang}: header order action stays on this page`);
  assert(html.includes(`href="/${lang}/route/belarus/poland#calc"`), `${lang}: header calculator action stays on this page`);
  assert(!html.includes(`href="/${lang}/order"`), `${lang}: no separate order-page action`);
  assert(html.indexOf('id="faq"') < html.indexOf('id="buy"'), `${lang}: form follows the coverage details and FAQ`);
  assert(html.includes('lead-form-layout--with-summary'), `${lang}: selected tariff summary is present`);
  assert(html.includes('data-form-step="1"'), `${lang}: existing two-step form is reused`);
  assert(html.includes(`name="lang" value="${lang}"`), `${lang}: form retains the page language`);
}

const otherRoute = pageHtml("ru/route/belarus/lithuania");
assert.equal((otherRoute.match(/<form\b/g) || []).length, 0, "other shared landing pages retain their existing order flow");
assert(otherRoute.includes('href="/ru/order"'), "other shared landing pages retain the separate order link");

console.log(`ok Belarus–Poland inline order: ${locales.length} locales and unchanged Lithuania route checked`);
