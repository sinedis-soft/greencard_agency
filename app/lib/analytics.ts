export type AnalyticsEventName =
  | "calculator_complete"
  | "begin_checkout"
  | "lead_form_view"
  | "lead_step_1_complete"
  | "lead_submit_attempt"
  | "generate_lead"
  | "lead_submit_error"
  | "payment_link_sent"
  | "purchase";

type AnalyticsEventParams = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const sentEventKeys = new Set<string>();

function cleanParams(params?: AnalyticsEventParams): AnalyticsEventParams | undefined {
  if (!params) return undefined;

  return Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== "")
  );
}

export function trackFunnelEvent(
  eventName: AnalyticsEventName,
  params?: AnalyticsEventParams,
  options?: { onceKey?: string }
) {
  if (typeof window === "undefined") return;

  const onceKey = options?.onceKey;

  if (onceKey) {
    const key = `${eventName}:${onceKey}`;

    if (sentEventKeys.has(key)) return;

    sentEventKeys.add(key);
  }

  window.gtag?.("event", eventName, cleanParams(params));
}

export const preparedKeyEvents: AnalyticsEventName[] = [
  "generate_lead",
  "payment_link_sent",
  "purchase",
];
