import {
  SITEMAP_SECTIONS,
  buildUrlSitemapXml,
  xmlResponse,
} from "@/app/sitemapUtils";

export const dynamic = "force-static";

export function GET() {
  return xmlResponse(buildUrlSitemapXml(SITEMAP_SECTIONS[1].routes));
}
