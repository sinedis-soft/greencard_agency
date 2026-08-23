import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import Module from "node:module";
import ts from "typescript";

const source = readFileSync(new URL("../app/routeRegistryCore.ts", import.meta.url), "utf8");
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;
const compiledModule = new Module("routeRegistryCore");
compiledModule._compile(compiled, "routeRegistryCore.js");
const { selectRelatedRouteCandidates } = compiledModule.exports;

const current = { origin: "a", destination: "x", href: "/en/route/a/x" };
const candidates = [
  current,
  { origin: "b", destination: "x", priority: 99, href: "/en/route/b/x" },
  { origin: "a", destination: "y", priority: 1, href: "/en/route/a/y" },
  { origin: "c", destination: "z", priority: 90, href: "/en/route/c/z" },
  { origin: "a", destination: "y", priority: 1, href: "/en/route/a/y" },
  { origin: "a", destination: "q", href: "/en/route/a/q" },
  { origin: "d", destination: "x", href: "/en/route/d/x" },
  { origin: "e", destination: "x", href: "/en/route/e/x" },
  { origin: "f", destination: "x", href: "/en/route/f/x" },
];

const first = selectRelatedRouteCandidates(current, candidates);
const second = selectRelatedRouteCandidates(current, [...candidates]);
assert.equal(first.length, 5, "results are limited to five");
assert(!first.some((route) => route.href === current.href), "current route is excluded");
assert.equal(new Set(first.map((route) => route.href)).size, first.length, "duplicates are removed");
assert(first.every((route) => route.href.startsWith("/en/")), "only supplied locale candidates are returned");
assert.equal(first[0].href, "/en/route/a/y", "same origin has first priority");
assert(first.some((route) => route.href === "/en/route/b/x"), "same destination is included");
assert(
  first.findIndex((route) => route.href === "/en/route/a/q") < first.findIndex((route) => route.href === "/en/route/b/x"),
  "same origin ranks above same destination",
);
assert(!first.some((route) => route.href === "/en/route/c/z"), "unrelated routes are excluded");
assert.deepEqual(first.map((route) => route.href), second.map((route) => route.href), "order is stable");

const short = selectRelatedRouteCandidates(current, [
  { origin: "a", destination: "q", href: "/en/route/a/q" },
  { origin: "c", destination: "z", href: "/en/route/c/z" },
]);
assert.equal(short.length, 1, "fewer than three related routes are allowed");
assert.deepEqual(
  selectRelatedRouteCandidates(current, [{ origin: "c", destination: "z", href: "/en/route/c/z" }]),
  [],
  "no related routes returns an empty array",
);

console.log("ok related route selection");
