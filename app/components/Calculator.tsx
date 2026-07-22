"use client";

// app/components/Calculator.tsx

import { useMemo, useState } from "react";
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

type CalculatorMode = "inline" | "order";

export default function Calculator({ lang, mode = "inline" }: { lang: Lang; mode?: CalculatorMode }) {
  const router = useRouter();
  const t = getCalculatorDictionary(lang);

  const [vehicle, setVehicle] = useState<Vehicle>("car");
  const [term, setTerm] = useState<Term>("30");

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
