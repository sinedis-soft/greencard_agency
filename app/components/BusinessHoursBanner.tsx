// src/components/BusinessHoursBanner.tsx

"use client";

import { useEffect, useState } from "react";
import type { HomeDictionary } from "@/app/dictionaries/home";
import { businessHoursConfig } from "@/app/config/businessHoursConfig";
import {
  getBusinessStatus,
  type BusinessStatus,
} from "@/app/lib/businessHours";
import { formatMessage } from "@/app/lib/i18nFormat";

type BusinessHoursBannerProps = {
  dict: HomeDictionary["businessHours"];
};

function getClosingSoonText(
  dict: HomeDictionary["businessHours"],
  status: BusinessStatus
): string {
  const hours = status.hoursUntilClose ?? 0;
  const minutes = status.minutesRemainderUntilClose ?? 0;

  if (hours > 0 && minutes > 0) {
    return formatMessage(dict.closingSoonHoursMinutes, {
      hours,
      minutes,
    });
  }

  if (hours > 0) {
    return formatMessage(dict.closingSoonHours, {
      hours,
    });
  }

  return formatMessage(dict.closingSoonMinutes, {
    minutes,
  });
}

export function BusinessHoursBanner({ dict }: BusinessHoursBannerProps) {
  const [status, setStatus] = useState<BusinessStatus | null>(null);

  useEffect(() => {
    const updateStatus = () => {
      setStatus(getBusinessStatus(businessHoursConfig));
    };

    updateStatus();

    const timer = window.setInterval(updateStatus, 60_000);

    return () => window.clearInterval(timer);
  }, []);

  if (!status) {
    return null;
  }

  const label = status.isOpen ? dict.openLabel : dict.closedLabel;

  const details = (() => {
    if (status.statusCode === "closingSoon") {
      return getClosingSoonText(dict, status);
    }

    if (status.statusCode === "open") {
      return formatMessage(dict.openDetails, {
        time: status.closesAtClientTime,
      });
    }

    return formatMessage(dict[status.statusCode], {
      time: status.opensAtClientTime,
    });
  })();

  const timezoneNote = formatMessage(dict.timezoneNote, {
    timezone: status.clientTimezone,
  });

  return (
    <div
      className={[
        "businessHoursBanner",
        status.isOpen
          ? "businessHoursBannerOpen"
          : "businessHoursBannerClosed",
        status.isClosingSoon ? "businessHoursBannerClosingSoon" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      aria-live="polite"
    >
      <div className="businessHoursBannerMain">
        <strong>{label}</strong>
        <span> · {details}</span>
      </div>

      {!status.isOpen && (
        <p className="businessHoursBannerText">{dict.closedExtra}</p>
      )}

      {status.isClosingSoon && (
        <p className="businessHoursBannerText">{dict.closingSoonExtra}</p>
      )}

      <small>{timezoneNote}</small>
    </div>
  );
}