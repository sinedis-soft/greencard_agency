"use client";

import { useEffect } from "react";

const BITRIX_SITE_BUTTON_BASE_URL =
  "https://cdn.bitrix24.pl/b25731489/crm/site_button/loader_15_cgi7if.js";
const BITRIX_SITE_BUTTON_SCRIPT_ID = "bitrix-site-button-loader";
const BITRIX_SITE_BUTTON_DELAY_MS = 4000;
const BITRIX_INTERACTION_EVENTS = ["scroll", "click", "mousemove", "touchstart", "keydown"] as const;

function appendBitrixSiteButtonScript() {
  if (document.getElementById(BITRIX_SITE_BUTTON_SCRIPT_ID)) {
    return;
  }

  const script = document.createElement("script");
  script.id = BITRIX_SITE_BUTTON_SCRIPT_ID;
  script.async = true;
  script.src = `${BITRIX_SITE_BUTTON_BASE_URL}?${Math.floor(Date.now() / 60000)}`;

  const firstScript = document.getElementsByTagName("script")[0];
  if (firstScript?.parentNode) {
    firstScript.parentNode.insertBefore(script, firstScript);
    return;
  }

  document.body.appendChild(script);
}

export default function BitrixSiteButton() {
  useEffect(() => {
    let isCancelled = false;

    const loadScript = () => {
      if (isCancelled) {
        return;
      }

      appendBitrixSiteButtonScript();
    };

    const removeInteractionListeners = () => {
      BITRIX_INTERACTION_EVENTS.forEach((eventName) => {
        window.removeEventListener(eventName, handleFirstInteraction);
      });
    };

    const handleFirstInteraction = () => {
      removeInteractionListeners();

      if (loadTimeout) {
        window.clearTimeout(loadTimeout);
      }

      loadScript();
    };

    BITRIX_INTERACTION_EVENTS.forEach((eventName) => {
      window.addEventListener(eventName, handleFirstInteraction, { passive: true, once: true });
    });

    const loadTimeout = window.setTimeout(() => {
      removeInteractionListeners();
      loadScript();
    }, BITRIX_SITE_BUTTON_DELAY_MS);

    return () => {
      isCancelled = true;
      removeInteractionListeners();

      if (loadTimeout) {
        window.clearTimeout(loadTimeout);
      }
    };
  }, []);

  return null;
}
