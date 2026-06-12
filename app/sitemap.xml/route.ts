import { buildSitemapIndexXml, xmlResponse } from "@/app/sitemapUtils";

export const dynamic = "force-dynamic";

export function GET() {
  return xmlResponse(buildSitemapIndexXml());
}
