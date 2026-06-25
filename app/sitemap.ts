import {
  SITEMAP_ALL_ROUTES,
  buildSitemapMetadata,
} from "@/app/sitemapUtils";

export default function sitemap() {
  return buildSitemapMetadata(SITEMAP_ALL_ROUTES);
}
