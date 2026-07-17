import { readFileSync } from "node:fs";
import { join } from "node:path";
const source = readFileSync(join(process.cwd(), "app/practiceContent.ts"), "utf8");
function assert(condition, message) { if (!condition) throw new Error(message); }

assert(source.includes('EvidenceLevel = "verified-aggregate" | "expert-estimate"'), "evidence levels must separate aggregate and expert estimate");
for (const id of ["application-check-time", "policy-issue-time", "correction-frequency", "border-insurance-practice"]) {
  const block = source.match(new RegExp(`id: "${id}",[\\s\\S]*?content:`))?.[0] ?? "";
  assert(block.includes('evidenceLevel: "expert-estimate"'), `${id} must be expert-estimate`);
  assert(block.includes('sourceExpertId: "sergey-anatska"'), `${id} must cite Sergey Anatska`);
}
for (const id of ["policies-2026-01", "policies-2026-02", "policies-2026-05", "policies-2026-06", "policies-2026-07-01-17"]) {
  const block = source.match(new RegExp(`id: "${id}",[\\s\\S]*?source: \\{[\\s\\S]*?\\} \\}`))?.[0] ?? "";
  assert(block.includes('evidenceLevel: "verified-aggregate"'), `${id} must be verified aggregate`);
  assert(block.includes("period:"), `${id} must have period`);
  assert(block.includes("issuedPolicies:") && block.includes("cancelledPolicies:") && block.includes("activeAfterCancellation:"), `${id} must separate issued, cancelled and active policies`);
}
assert(!source.includes("policies-2026-03") && !source.includes("policies-2026-04"), "unconfirmed March/April metrics must not be published");
assert(!source.includes("total") && !source.includes("итог") && !source.includes("clients") && !source.includes("клиентам"), "must not publish totals or call policies clients");
assert(!/99[,.]9%/.test(source), "must not transform correction metric into 99.9%");
assert(!/среднее время|average time|średni czas|сярэдні час/i.test(source), "time must not be called average");
assert(source.includes("не используется для расчёта количества полисов"), "three-year practice must not be extrapolated");
console.log("ok practice metrics checks");
