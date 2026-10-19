"use client";

import { useEffect } from "react";
import type { Lang } from "@/app/dictionaries/header";

export const ROUTE_ATTRIBUTION_STORAGE_KEY = "routeAttribution";
export const ROUTE_ATTRIBUTION_MAX_AGE_MS = 2 * 60 * 60 * 1000;

export type StoredRouteAttribution = {
  landingPage: string;
  locale: Lang;
  route: string;
  originCountry: string;
  destinationCountry: string;
  utm: Partial<Record<"utm_source" | "utm_medium" | "utm_campaign" | "utm_content" | "utm_term" | "gclid", string>>;
  capturedAt: number;
};

const campaignKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid"] as const;

export function readStoredRouteAttribution(): StoredRouteAttribution | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.sessionStorage.getItem(ROUTE_ATTRIBUTION_STORAGE_KEY);
    if (!raw) return null;

    const value = JSON.parse(raw) as Partial<StoredRouteAttribution>;
    if (
      typeof value.landingPage !== "string" ||
      typeof value.locale !== "string" ||
      typeof value.route !== "string" ||
      typeof value.originCountry !== "string" ||
      typeof value.destinationCountry !== "string" ||
      !value.utm ||
      typeof value.utm !== "object" ||
      typeof value.capturedAt !== "number" ||
      Date.now() - value.capturedAt > ROUTE_ATTRIBUTION_MAX_AGE_MS
    ) {
      window.sessionStorage.removeItem(ROUTE_ATTRIBUTION_STORAGE_KEY);
      return null;
    }

    return value as StoredRouteAttribution;
  } catch {
    return null;
  }
}

export default function RouteAttribution({ lang, pagePath }: { lang: Lang; pagePath: string }) {
  useEffect(() => {
    const parts = pagePath.split("/").filter(Boolean);
    if (parts.length !== 3 || parts[0] !== "route") return;

    const currentUrl = new URL(window.location.href);
    const utm: StoredRouteAttribution["utm"] = {};

    for (const key of campaignKeys) {
      const value = currentUrl.searchParams.get(key);
      if (value) utm[key] = value.slice(0, 200);
    }

    const attribution: StoredRouteAttribution = {
      landingPage: `${currentUrl.origin}${currentUrl.pathname}`,
      locale: lang,
      route: pagePath.replace(/^\//, ""),
      originCountry: parts[1],
      destinationCountry: parts[2],
      utm,
      capturedAt: Date.now(),
    };

    try {
      window.sessionStorage.setItem(ROUTE_ATTRIBUTION_STORAGE_KEY, JSON.stringify(attribution));
    } catch {
      // Attribution must never block the application flow.
    }
  }, [lang, pagePath]);

  return null;
}
