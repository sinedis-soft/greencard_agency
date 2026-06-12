import {
  SITEMAP_SECTIONS,
  buildUrlSitemapXml,
  xmlResponse,
} from "@/app/sitemapUtils";


export const dynamic = "force-dynamic";


export function GET() {
  return xmlResponse(buildUrlSitemapXml(SITEMAP_SECTIONS[0].routes));
}
