"use client";

import { usePathname } from "next/navigation";
import { useMemo, useSyncExternalStore } from "react";
import { LOCALES, LOCALE_META, type Lang } from "@/app/dictionaries/header";

const LANGUAGE_COOKIE_NAME = "deda_language_preference";
const MAX_COOKIE_AGE_SEC = 60 * 60 * 24 * 400;

function readCookieValue(name: string): string | null {
  if (typeof document === "undefined") return null;
  const found = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`));
  return found ? found.slice(name.length + 1) : null;
}

function writeLanguagePreference(lang: Lang) {
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${LANGUAGE_COOKIE_NAME}=${encodeURIComponent(lang)}; Path=/; Max-Age=${MAX_COOKIE_AGE_SEC}; SameSite=Lax${secure}`;
}

function isLang(value: string | null): value is Lang {
  return Boolean(value && (LOCALES as readonly string[]).includes(value));
}

function switchPathLanguage(pathname: string, targetLang: Lang) {
  const segments = pathname.split("/");

  if (isLang(segments[1] ?? null)) {
    segments[1] = targetLang;
    return segments.join("/") || `/${targetLang}`;
  }

  return `/${targetLang}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
}

export default function LanguagePreferenceGate() {
  const pathname = usePathname();
  const needsLanguageChoice = useSyncExternalStore(
    () => () => {},
    () => !isLang(readCookieValue(LANGUAGE_COOKIE_NAME)),
    () => false,
  );

  const languageOptions = useMemo(
    () => LOCALES.map((lang) => ({ lang, label: LOCALE_META[lang].nativeName })),
    [],
  );

  function chooseLanguage(lang: Lang) {
    writeLanguagePreference(lang);
    const nextPath = switchPathLanguage(pathname || `/${lang}`, lang);
    window.location.replace(`${nextPath}${window.location.search}${window.location.hash}`);
  }

  if (!needsLanguageChoice) return null;

  return (
    <div
      className="language-first-choice"
      role="dialog"
      aria-modal="true"
      aria-labelledby="language-first-choice-title"
    >
      <h1 id="language-first-choice-title" className="sr-only">
        Choose language
      </h1>
      <div className="language-first-choice__grid">
        {languageOptions.map(({ lang, label }) => (
          <button
            key={lang}
            type="button"
            className="language-first-choice__button"
            onClick={() => chooseLanguage(lang)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
