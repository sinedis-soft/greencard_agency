import { buildSitemapIndexXml, xmlResponse } from "@/app/sitemapUtils";

export const dynamic = "force-static";

export function GET() {
  return xmlResponse(buildSitemapIndexXml());
}
