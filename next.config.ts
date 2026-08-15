import type { NextConfig } from "next";

const SUPPORTED_LOCALE_PATTERN =
  "ru|en|pl|be|uk|kk|uz|az|tr|ka|hy|fa|ckb|kmr|ar|he|ro|sr|sq|mn";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: `/:lang(${SUPPORTED_LOCALE_PATTERN})/belarus-poland-oc`,
        destination: "/:lang/route/belarus/poland",
        permanent: true,
      },
      {
        source: `/:lang(${SUPPORTED_LOCALE_PATTERN})/georgia-romania-oc`,
        destination: "/:lang/route/georgia/romania",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
