import { spawn } from "node:child_process";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const retiredUrls = JSON.parse(readFileSync(join(root, "scripts", "retired-route-urls.json"), "utf8"));
const port = Number(process.env.RETIRED_ROUTE_CHECK_PORT ?? 3198);
const baseUrl = `http://127.0.0.1:${port}`;

if (!existsSync(join(root, ".next", "BUILD_ID"))) {
  console.error("Missing production build. Run `npm run build` first.");
  process.exit(2);
}

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

function waitForServer(child) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error("Next.js server did not start in time")), 30_000);
    const onData = (chunk) => {
      const text = chunk.toString();
      if (text.includes("Ready") || text.includes("started server")) {
        clearTimeout(timeout);
        resolve();
      }
    };
    child.stdout.on("data", onData);
    child.stderr.on("data", onData);
    child.once("exit", (code) => {
      clearTimeout(timeout);
      reject(new Error(`Next.js server exited with code ${code}`));
    });
  });
}

const server = spawn(process.execPath, [join(root, "node_modules", "next", "dist", "bin", "next"), "start", "-H", "127.0.0.1", "-p", String(port)], {
  cwd: root,
  env: { ...process.env, PORT: String(port) },
  stdio: ["ignore", "pipe", "pipe"],
});

const failures = [];
const absoluteOrigin = "https://greencard.agency";

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function containsExactUrl(text, url) {
  return new RegExp(`${escapeRegExp(url)}(?=[\\"'<])`).test(text);
}

try {
  await waitForServer(server);

  for (const path of retiredUrls) {
    const response = await fetch(`${baseUrl}${path}`, { redirect: "manual" });
    if (![404, 410].includes(response.status)) failures.push(`${path}: HTTP ${response.status}, expected 404 or 410`);
  }

  for (const sitemapPath of ["/sitemap-main.xml", "/sitemap-routes.xml"]) {
    const response = await fetch(`${baseUrl}${sitemapPath}`);
    const body = await response.text();
    for (const path of retiredUrls) {
      if (containsExactUrl(body, `${absoluteOrigin}${path}`)) failures.push(`${path}: found in ${sitemapPath}`);
    }
  }

  const html = walk(join(root, ".next", "server", "app"))
    .filter((path) => path.endsWith(".html"))
    .map((path) => readFileSync(path, "utf8"))
    .join("\n");

  for (const path of retiredUrls) {
    if (containsExactUrl(html, path)) failures.push(`${path}: found in an internal link`);
    if (containsExactUrl(html, `${absoluteOrigin}${path}`)) failures.push(`${path}: found in hreflang or another absolute link`);
  }
} finally {
  server.kill("SIGTERM");
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`ok retired route URLs (${retiredUrls.length} return 404/410; absent from sitemaps, hreflang, and internal links)`);
