// app/lib/businessHours.ts

import type { BusinessHoursConfig } from "@/app/config/businessHoursConfig";

export type BusinessStatusCode =
  | "open"
  | "closingSoon"
  | "closedBeforeOpeningToday"
  | "closedUntilTomorrow"
  | "closedUntilMonday";

export type BusinessStatus = {
  isOpen: boolean;
  isClosingSoon: boolean;
  statusCode: BusinessStatusCode;

  businessTimezone: string;
  clientTimezone: string;

  opensAtClientTime: string;
  closesAtClientTime: string;

  minutesUntilClose: number | null;
  hoursUntilClose: number | null;
  minutesRemainderUntilClose: number | null;
};

type TimezoneParts = {
  hour: number;
  minute: number;
  weekday: number; // 1 = Monday, 7 = Sunday
};

function getPartsInTimezone(date: Date, timezone: string): TimezoneParts {
  const formatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: timezone,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const parts = formatter.formatToParts(date);
  const map = Object.fromEntries(parts.map((part) => [part.type, part.value]));

  const weekdayMap: Record<string, number> = {
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
    Sun: 7,
  };

  return {
    hour: Number(map.hour),
    minute: Number(map.minute),
    weekday: weekdayMap[map.weekday] ?? 1,
  };
}

function minutesFromMidnight(hour: number, minute: number): number {
  return hour * 60 + minute;
}

function formatTime(hour: number, minute: number): string {
  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

function getClientTimezone(): string {
  return Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
}

function getClosedStatusCode(
  parts: TimezoneParts,
  config: BusinessHoursConfig
): BusinessStatusCode {
  const nowMinutes = minutesFromMidnight(parts.hour, parts.minute);
  const startMinutes = minutesFromMidnight(config.startHour, config.startMinute);

  const isWorkday = config.workDays.includes(parts.weekday);

  if (isWorkday && nowMinutes < startMinutes) {
    return "closedBeforeOpeningToday";
  }

  if (parts.weekday >= 1 && parts.weekday <= 4) {
    return "closedUntilTomorrow";
  }

  return "closedUntilMonday";
}

export function getBusinessStatus(
  config: BusinessHoursConfig
): BusinessStatus {
  const now = new Date();

  const clientTimezone = getClientTimezone();
  const businessParts = getPartsInTimezone(now, config.businessTimezone);

  const nowMinutes = minutesFromMidnight(
    businessParts.hour,
    businessParts.minute
  );

  const startMinutes = minutesFromMidnight(
    config.startHour,
    config.startMinute
  );

  const endMinutes = minutesFromMidnight(
    config.endHour,
    config.endMinute
  );

  const isWorkday = config.workDays.includes(businessParts.weekday);

  const isOpen =
    isWorkday && nowMinutes >= startMinutes && nowMinutes < endMinutes;

  const opensAtClientTime = formatTime(config.startHour, config.startMinute);
  const closesAtClientTime = formatTime(config.endHour, config.endMinute);

  if (!isOpen) {
    return {
      isOpen: false,
      isClosingSoon: false,
      statusCode: getClosedStatusCode(businessParts, config),

      businessTimezone: config.businessTimezone,
      clientTimezone,

      opensAtClientTime,
      closesAtClientTime,

      minutesUntilClose: null,
      hoursUntilClose: null,
      minutesRemainderUntilClose: null,
    };
  }

  const minutesUntilClose = endMinutes - nowMinutes;

  const isClosingSoon =
    minutesUntilClose > 0 &&
    minutesUntilClose <= config.closingSoonThresholdMinutes;

  const hoursUntilClose = Math.floor(minutesUntilClose / 60);
  const minutesRemainderUntilClose = minutesUntilClose % 60;

  return {
    isOpen: true,
    isClosingSoon,
    statusCode: isClosingSoon ? "closingSoon" : "open",

    businessTimezone: config.businessTimezone,
    clientTimezone,

    opensAtClientTime,
    closesAtClientTime,

    minutesUntilClose,
    hoursUntilClose,
    minutesRemainderUntilClose,
  };
}