"use client";

import Link from "next/link";
import type { Lang } from "@/app/dictionaries/header";
import {
  getCalculatorDictionary,
  type Term,
} from "@/app/dictionaries/calculator";
import { getLeadFormDictionary } from "@/app/dictionaries/leadForm";
import { getTariffsDictionary } from "@/app/dictionaries/tariffs";
import {
  PRICES_EUR,
  formatCurrency,
  type PriceVehicle,
} from "@/app/lib/insurancePrices";
import { keepShortWords } from "@/app/utils/typography";

const VEHICLE_ICONS: Record<PriceVehicle, string> = {
  car: "🚗",
  moto: "🏍️",
  van: "🚌",
  bus: "🚌",
  truck: "🚚",
  trailer: "◼️",
  special: "🚜",
};

const TERMS: Term[] = ["30", "60", "90", "180", "365"];

const MOBILE_HIDDEN_VEHICLES = new Set<PriceVehicle>([
  "bus",
  "truck",
  "special",
  "trailer",
]);

export default function TariffCards({ lang }: { lang: Lang }) {
  const calculator = getCalculatorDictionary(lang);
  const leadForm = getLeadFormDictionary(lang);
  const t = getTariffsDictionary(lang);

  const vehicleLabels = new Map(
    leadForm.policy.options.vehicleTypes.map((option) => [
      option.value as PriceVehicle,
      option.label,
    ]),
  );

  const termLabels = new Map(
    calculator.fields.term.options.map((option) => [
      option.value,
      option.label,
    ]),
  );

  const vehicles = leadForm.policy.options.vehicleTypes.map(
    (option) => option.value as PriceVehicle,
  );

  function rememberSelection(vehicle: PriceVehicle, term: Term) {
    window.sessionStorage.setItem(
      "calculatorSelection",
      JSON.stringify({ vehicle, term }),
    );
  }

  return (
    <section
      className="section section--tariffs"
      id="tariffs"
      aria-labelledby="tariffs-title"
    >
      <div className="container">
        <div className="section__hd tariffs__header">
          <div>
            <h2 className="section__title" id="tariffs-title">
              {keepShortWords(t.title)}
            </h2>

            <p className="section__desc">{t.desc}</p>
          </div>
        </div>

        <div className="tariffs__stack">
          {vehicles.map((vehicle) => {
            const hideOnMobile = MOBILE_HIDDEN_VEHICLES.has(vehicle);

            return (
              <article
                className={`tariff-group ${
                  hideOnMobile ? "tariff-group--desktop-only" : ""
                }`}
                key={vehicle}
                id={`tariff-${vehicle}`}
              >
                <div className="tariff-group__head">
                  <h3 className="tariff-group__title">
                    <span aria-hidden="true">
                      {VEHICLE_ICONS[vehicle]}
                    </span>{" "}
                    {keepShortWords(vehicleLabels.get(vehicle) || vehicle)}
                  </h3>
                </div>

                <div className="tariff-grid">
                  {TERMS.map((term) => {
                    const price = PRICES_EUR[vehicle]?.[term];

                    if (!price) {
                      return null;
                    }

                    const href = `/${lang}/order?vehicle=${vehicle}&term=${term}`;

                    return (
                      <div
                        className="tariff-card"
                        key={`${vehicle}-${term}`}
                        itemScope
                        itemType="https://schema.org/Offer"
                      >
                        <meta
                          itemProp="availability"
                          content="https://schema.org/InStock"
                        />
                        <meta itemProp="priceCurrency" content="PLN" />
                        <meta itemProp="url" content={href} />

                        <div className="tariff-card__top">
                          <span
                            className="tariff-card__term"
                            itemProp="name"
                          >
                            {termLabels.get(term) || term}
                          </span>

                          <span className="tag tag--green">
                            {vehicleLabels.get(vehicle)}
                          </span>
                        </div>

                        <div
                          className="tariff-card__price"
                          itemProp="price"
                        >
                          {formatCurrency(price, "PLN", "pl-PL")}
                        </div>

                        <ul className="tariff-card__list">
                          {t.badges.map((badge) => (
                            <li key={badge}>{badge}</li>
                          ))}
                        </ul>

                        <Link
                          className="btn btn--primary btn--full"
                          href={href}
                          onClick={() =>
                            rememberSelection(vehicle, term)
                          }
                        >
                          {t.order}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>

        <div className="tariff-table-wrap" aria-label={t.tableTitle}>
          <table className="tariff-table">
            <caption>{t.tableTitle}</caption>

            <thead>
              <tr>
                <th>{calculator.fields.vehicle.label}</th>

                {TERMS.map((term) => (
                  <th key={term}>{termLabels.get(term)}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {vehicles.map((vehicle) => (
                <tr key={vehicle}>
                  <th scope="row">{vehicleLabels.get(vehicle)}</th>

                  {TERMS.map((term) => (
                    <td key={term}>
                      {PRICES_EUR[vehicle]?.[term]
                        ? formatCurrency(
                            PRICES_EUR[vehicle][term],
                            "PLN",
                            "pl-PL",
                          )
                        : "—"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="help tariffs__note">{t.note}</p>
      </div>
    </section>
  );
}