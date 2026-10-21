"use client";

// app/components/Calculator.tsx

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import type { Lang } from "@/app/dictionaries/header";

import {
  getCalculatorDictionary,
  Vehicle,
  Term,
} from "@/app/dictionaries/calculator";

import {
  getPolicyPrice,
  formatCurrency,
} from "@/app/lib/insurancePrices";
import { trackFunnelEvent } from "@/app/lib/analytics";

type CalculatorMode = "inline" | "order";

type PriceCalculatorToolInput = {
  vehicle_type?: unknown;
  insurance_term?: unknown;
};

type WebMcpTool = {
  name: string;
  title?: string;
  description: string;
  inputSchema: Record<string, unknown>;
  annotations?: {
    readOnlyHint?: boolean;
    consequentialHint?: boolean;
    untrustedContentHint?: boolean;
  };
  execute: (input: PriceCalculatorToolInput) => unknown | Promise<unknown>;
};

type WebMcpModelContext = {
  registerTool: (tool: WebMcpTool, options?: { signal?: AbortSignal }) => Promise<void>;
};

declare global {
  interface Document {
    modelContext?: WebMcpModelContext;
  }
}

const CALCULATOR_VEHICLE_TYPES: Vehicle[] = [
  "car",
  "van",
  "moto",
  "truck",
  "trailer",
  "special",
];

const CALCULATOR_TERMS: Term[] = ["30", "60", "90", "180", "365"];

function isVehicle(value: unknown): value is Vehicle {
  return typeof value === "string" && CALCULATOR_VEHICLE_TYPES.includes(value as Vehicle);
}

function isTerm(value: unknown): value is Term {
  return typeof value === "string" && CALCULATOR_TERMS.includes(value as Term);
}

export default function Calculator({ lang, mode = "inline" }: { lang: Lang; mode?: CalculatorMode }) {
  const router = useRouter();
  const t = getCalculatorDictionary(lang);

  const [vehicle, setVehicle] = useState<Vehicle>("car");
  const [term, setTerm] = useState<Term>("30");

  useEffect(() => {
    const modelContext = document.modelContext;

    if (!modelContext) return;

    const controller = new AbortController();

    void modelContext
      .registerTool(
        {
          name: "calculate_border_policy_price",
          title: "Calculate border insurance price",
          description:
            "Calculate the estimated border motor insurance price in PLN for a supported vehicle type and insurance term.",
          inputSchema: {
            type: "object",
            properties: {
              vehicle_type: {
                type: "string",
                enum: CALCULATOR_VEHICLE_TYPES,
                description: "Vehicle type to insure.",
              },
              insurance_term: {
                type: "string",
                enum: CALCULATOR_TERMS,
                description: "Insurance term in days.",
              },
            },
            required: ["vehicle_type", "insurance_term"],
            additionalProperties: false,
          },
          annotations: {
            readOnlyHint: true,
            consequentialHint: false,
            untrustedContentHint: false,
          },
          execute: ({ vehicle_type, insurance_term }) => {
            if (!isVehicle(vehicle_type)) {
              return {
                error: "unsupported_vehicle_type",
                supported_vehicle_types: CALCULATOR_VEHICLE_TYPES,
              };
            }

            if (!isTerm(insurance_term)) {
              return {
                error: "unsupported_insurance_term",
                supported_insurance_terms: CALCULATOR_TERMS,
              };
            }

            const price = getPolicyPrice(vehicle_type, insurance_term);

            if (price === null) {
              return {
                error: "price_not_available",
                vehicle_type,
                insurance_term,
              };
            }

            setVehicle(vehicle_type);
            setTerm(insurance_term);

            return {
              price,
              currency: "PLN",
              vehicle_type,
              insurance_term,
            };
          },
        },
        { signal: controller.signal }
      )
      .catch(() => {
        // WebMCP is an experimental progressive enhancement.
      });

    return () => controller.abort();
  }, []);

  const result = useMemo(() => {
    const price = getPolicyPrice(vehicle, term);

    if (price === null) {
      return "—";
    }

    return formatCurrency(price, "PLN", "pl-PL");
  }, [vehicle, term]);

  function applyEstimateToForm() {
    const detail = { vehicle, term };

    if (typeof window !== "undefined") {
      window.sessionStorage.setItem("calculatorSelection", JSON.stringify(detail));
      window.dispatchEvent(new CustomEvent("calculatorSelectionChanged", { detail }));
      trackFunnelEvent("calculator_complete", {
        language: lang,
        vehicle_type: vehicle,
        insurance_term: term,
        value: getPolicyPrice(vehicle, term),
        currency: "PLN",
      });
      trackFunnelEvent("begin_checkout", {
        language: lang,
        vehicle_type: vehicle,
        insurance_term: term,
        value: getPolicyPrice(vehicle, term),
        currency: "PLN",
      });
      if (mode === "order") {
        const params = new URLSearchParams({ vehicle, term });
        router.push(`/${lang}/order?${params.toString()}`);
        return;
      }

      document.getElementById("buy")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <aside
      className="panel"
      id="calc"
      aria-label={t.title}
    >
      <div className="panel__hd">
        <div className="panel__title">
          {t.title}
        </div>

        <span className="badge">
          {t.badge}
        </span>
      </div>

      <div className="panel__body">
        <p
          className="help"
          style={{ marginTop: 0 }}
        >
          {t.intro}
        </p>

        <div className="form">
          <div className="row-2">
            <div className="field">
              <label htmlFor="vehicle">
                {t.fields.vehicle.label}
              </label>

              <select
                id="vehicle"
                name="vehicle"
                className="input"
                value={vehicle}
                onChange={(e) =>
                  setVehicle(
                    e.target.value as Vehicle
                  )
                }
              >
                {t.fields.vehicle.options.map((o) => (
                  <option
                    key={o.value}
                    value={o.value}
                  >
                    {o.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="field">
              <label htmlFor="term">
                {t.fields.term.label}
              </label>

              <select
                id="term"
                name="term"
                className="input"
                value={term}
                onChange={(e) =>
                  setTerm(
                    e.target.value as Term
                  )
                }
              >
                {t.fields.term.options.map((o) => (
                  <option
                    key={o.value}
                    value={o.value}
                  >
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div
            className="calc-result"
            aria-live="polite"
          >
            <div className="calc-result__title">
              {t.resultTitle}
            </div>

            <div className="calc-result__value">
              {result}
            </div>

            <div className="help">
              {t.resultHint}
            </div>
          </div>

          <div className="help">
            {t.note}
          </div>

          <button type="button" className="btn btn--primary btn--full" onClick={applyEstimateToForm}>
            {t.button}
          </button>
        </div>
      </div>
    </aside>
  );
}
