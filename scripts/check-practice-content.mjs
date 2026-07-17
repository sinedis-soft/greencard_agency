import { readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const source = readFileSync(join(root, "app/practiceContent.ts"), "utf8");
const routeBelarus = readFileSync(join(root, "app/[lang]/route/belarus/poland/page.tsx"), "utf8");
const routeGeorgia = readFileSync(join(root, "app/[lang]/route/georgia/romania/page.tsx"), "utf8");
const routeComponent = readFileSync(join(root, "app/components/RouteLandingPage.tsx"), "utf8");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const publishedIds = [...source.matchAll(/id: "([^"]+)",[\s\S]*?published: true/g)].map((m) => m[1]);
const allowed = ["belarus-poland-border-insurance", "georgia-romania-ferry"];
assert(publishedIds.length === 2, `expected 2 published case studies, got ${publishedIds.length}`);
assert(JSON.stringify(publishedIds.sort()) === JSON.stringify([...allowed].sort()), "published case IDs must match allowed IDs");
for (const id of allowed) {
  const block = source.match(new RegExp(`id: "${id}",[\\s\\S]*?content: \\{([\\s\\S]*?)\\n    \\},\\n  \\}`))?.[0] ?? "";
  assert(block.includes('verifiedBy: "sergey-anatska"'), `${id} must be verified by sergey-anatska`);
  assert(block.includes("disclaimer:"), `${id} must have disclaimer`);
  for (const locale of ["ru", "pl", "en", "be"]) assert(block.includes(`${locale}: {`), `${id} missing ${locale}`);
  for (const key of ["situation", "solution", "result"]) assert(block.includes(`${key}:`), `${id} missing ${key}`);
}
assert(routeBelarus.includes('caseIds={["belarus-poland-border-insurance"]}'), "Belarus case must be shown on Belarus-Poland page");
assert(!routeBelarus.includes('georgia-romania-ferry'), "Georgia case must not be shown on Belarus-Poland page");
assert(routeGeorgia.includes('caseIds={["georgia-romania-ferry"]}'), "Georgia case must be shown on Georgia-Romania page");
assert(!routeGeorgia.includes('belarus-poland-border-insurance'), "Belarus case must not be shown on Georgia-Romania page");
assert(routeComponent.includes("isCaseStudyLocale"), "Route component must avoid locale fallback for case studies");

const forbiddenTopics = [/нестандартн/i, /исправлени[ея] VIN/i, /грузов(ой|ого) автомобил/i, /claim handling/i, /loss settlement/i];
for (const pattern of forbiddenTopics) assert(!pattern.test(source), `forbidden topic found: ${pattern}`);

console.log("ok practice case model and placement checks");
