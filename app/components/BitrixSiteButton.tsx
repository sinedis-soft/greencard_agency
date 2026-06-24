"use client";

import { useEffect } from "react";

const BITRIX_SITE_BUTTON_BASE_URL =
  "https://cdn.bitrix24.pl/b25731489/crm/site_button/loader_15_cgi7if.js";
const BITRIX_SITE_BUTTON_SCRIPT_ID = "bitrix-site-button-loader";

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
    let loadTimeout: number | undefined;
    let idleCallbackId: number | undefined;
    let isCancelled = false;

    const scheduleScriptLoad = () => {
      if (isCancelled) {
        return;
      }

      if ("requestIdleCallback" in window && window.requestIdleCallback) {
        idleCallbackId = window.requestIdleCallback(() => {
          if (!isCancelled) {
            appendBitrixSiteButtonScript();
          }
        });
        return;
      }

      loadTimeout = window.setTimeout(() => {
        if (!isCancelled) {
          appendBitrixSiteButtonScript();
        }
      }, 1500);
    };

    if (document.readyState === "complete") {
      scheduleScriptLoad();
    } else {
      window.addEventListener("load", scheduleScriptLoad, { once: true });
    }

    return () => {
      isCancelled = true;
      window.removeEventListener("load", scheduleScriptLoad);

      if (loadTimeout) {
        window.clearTimeout(loadTimeout);
      }

      if (idleCallbackId && window.cancelIdleCallback) {
        window.cancelIdleCallback(idleCallbackId);
      }
    };
  }, []);

  return null;
}
