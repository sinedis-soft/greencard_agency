import { request as httpRequest } from "node:http";
import { request as httpsRequest } from "node:https";

const baseUrl = process.env.SITEMAP_BASE_URL ?? "https://greencard.agency";
const sitemapPaths = [
  "/sitemap.xml",
  "/sitemap-main.xml",
  "/sitemap-routes.xml",
];

function fetchText(url) {
  return new Promise((resolve, reject) => {
    const request = url.startsWith("https:") ? httpsRequest : httpRequest;
    const req = request(url, { headers: { Accept: "application/xml,text/xml" } }, (res) => {
      let body = "";

      res.setEncoding("utf8");
      res.on("data", (chunk) => {
        body += chunk;
      });
      res.on("end", () => {
        resolve({
          body,
          contentType: res.headers["content-type"] ?? "",
          statusCode: res.statusCode ?? 0,
        });
      });
    });

    req.on("error", reject);
    req.end();
  });
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function assertXmlDeclaration(path, body) {
  assert(
    body.startsWith('<?xml version="1.0" encoding="UTF-8"?>'),
    `${path} must start with an XML declaration`,
  );
}

function assertSitemapIndex(path, body) {
  assertXmlDeclaration(path, body);
  assert(body.includes("<sitemapindex "), `${path} must include <sitemapindex>`);
  assert(body.includes("<sitemap>"), `${path} must include <sitemap> entries`);
  assert(
    body.includes("<loc>https://greencard.agency/sitemap-main.xml</loc>"),
    `${path} must include sitemap-main.xml`,
  );
  assert(
    body.includes("<loc>https://greencard.agency/sitemap-routes.xml</loc>"),
    `${path} must include sitemap-routes.xml`,
  );
}

function assertUrlSitemap(path, body) {
  assertXmlDeclaration(path, body);
  assert(body.includes("<urlset "), `${path} must include <urlset>`);
  assert(body.includes("<url>"), `${path} must include <url> entries`);
  assert(body.includes("<loc>"), `${path} must include <loc> entries`);
  assert(body.includes("<lastmod>"), `${path} must include <lastmod> entries`);
}

const failures = [];

for (const path of sitemapPaths) {
  const url = new URL(path, baseUrl).toString();

  try {
    const response = await fetchText(url);

    assert(
      response.statusCode >= 200 && response.statusCode < 300,
      `${path} returned HTTP ${response.statusCode}`,
    );
    assert(
      /^application\/xml\b|^text\/xml\b/i.test(response.contentType),
      `${path} returned unexpected Content-Type: ${response.contentType || "(missing)"}`,
    );
    if (path === "/sitemap.xml") {
      assertSitemapIndex(path, response.body);
    } else {
      assertUrlSitemap(path, response.body);
    }

    console.log(`ok ${path}`);
  } catch (error) {
    failures.push(error instanceof Error ? error.message : String(error));
  }
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
}
