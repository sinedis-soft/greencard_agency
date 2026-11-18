// app/lib/insurancePrices.ts

export type PriceVehicle =
  | "car"
  | "van"
  | "truck"
  | "trailer"
  | "special"
  | "bus"
  | "moto";

export type PriceTerm = "30" | "60" | "90" | "180" | "365";

export const PRICES_EUR: Record<PriceVehicle, Partial<Record<PriceTerm, number>>> = {
  car: { "30": 150, "60": 286, "90": 409, "180": 695, "365": 944 },
  van: { "30": 920, "60": 1840, "90": 2760, "180": 5520, "365": 11163 },
  bus: { "30": 920, "60": 1840, "90": 2760, "180": 5520, "365": 11163 },
  truck: {  "30": 1540,  "60": 3080,  "90": 4620,  "180": 9240,  "365": 18685 },
  trailer: {  "30": 340,  "60": 680,  "90": 1020,  "180": 2040,  "365": 44125 },
  special: { "30": 920, "60": 1840, "90": 2760, "180": 5520, "365": 11163 },
  moto: { "30": 250, "60": 500, "90": 750, "180": 1500, "365": 3033 },
};

export function getPolicyPrice(vehicle: string, term: string): number | null {
  const price = PRICES_EUR[vehicle as PriceVehicle]?.[term as PriceTerm];

  if (!price || price <= 0) return null;

  return price;
}

export function formatCurrency(
  value: number,
  currency: "PLN" | "EUR" = "PLN",
  locale = "pl-PL"
) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}