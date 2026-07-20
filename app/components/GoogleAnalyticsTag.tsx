"use client";

import { useEffect } from "react";
import type { CookieCategoryKey } from "@/app/dictionaries/cookies";

type ConsentState = Record<CookieCategoryKey, boolean>;

const COOKIE_NAME = "deda_cookie_consent_v2";
const GOOGLE_TAG_ID = "G-1E20TZWGPG";
const GOOGLE_TAG_SRC = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`;
const GOOGLE_TAG_SCRIPT_ID = "google-analytics-tag";
const GOOGLE_TAG_CONFIG_SCRIPT_ID = "google-analytics-config";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function readCookieValue(name: string): string | null {
  if (typeof document === "undefined") return null;

  const found = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`));

  return found ? found.slice(name.length + 1) : null;
}

function hasAnalyticsConsent(): boolean {
  const raw = readCookieValue(COOKIE_NAME);

  if (!raw) return false;

  try {
    const parsed = JSON.parse(decodeURIComponent(raw)) as Partial<ConsentState>;
    return Boolean(parsed.marketing);
  } catch {
    return false;
  }
}

function updateGoogleConsent(analyticsGranted: boolean) {
  window.gtag?.("consent", "update", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: analyticsGranted ? "granted" : "denied",
  });
}

function ensureGoogleTag() {
  if (document.getElementById(GOOGLE_TAG_SCRIPT_ID)) {
    updateGoogleConsent(true);
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };

  window.gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "granted",
  });
  window.gtag("js", new Date());
  window.gtag("config", GOOGLE_TAG_ID, { anonymize_ip: true });

  const configScript = document.createElement("script");
  configScript.id = GOOGLE_TAG_CONFIG_SCRIPT_ID;
  configScript.text = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('consent', 'default', {'ad_storage':'denied','ad_user_data':'denied','ad_personalization':'denied','analytics_storage':'granted'}); gtag('js', new Date()); gtag('config', '${GOOGLE_TAG_ID}', {'anonymize_ip': true});`;
  document.head.appendChild(configScript);

  const tagScript = document.createElement("script");
  tagScript.id = GOOGLE_TAG_SCRIPT_ID;
  tagScript.async = true;
  tagScript.src = GOOGLE_TAG_SRC;
  document.head.appendChild(tagScript);
}

export default function GoogleAnalyticsTag() {
  useEffect(() => {
    function syncGoogleTag() {
      const analyticsConsent = hasAnalyticsConsent();

      if (analyticsConsent) {
        ensureGoogleTag();
      } else {
        updateGoogleConsent(false);
      }
    }

    syncGoogleTag();

    window.addEventListener("cookie-consent-changed", syncGoogleTag);

    return () => {
      window.removeEventListener("cookie-consent-changed", syncGoogleTag);
    };
  }, []);

  return null;
}
