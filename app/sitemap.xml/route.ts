import {
  SITEMAP_ALL_ROUTES,
  buildUrlSitemapXml,
  xmlResponse,
} from "@/app/sitemapUtils";

export const dynamic = "force-dynamic";


export function GET() {
  return xmlResponse(buildUrlSitemapXml(SITEMAP_ALL_ROUTES));
}
