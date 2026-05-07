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
  car: { "30": 157.50, "60": 256.20, "90": 429.45, "180": 729.75, "365": 991.20 },
  van: { "30": 966.00, "60": 1932, "90": 2898.00, "180": 5796.00, "365": 11721.15 },
  bus: { "30": 966.00, "60": 1932, "90": 2898.00, "180": 5796.00, "365": 11721.15 },
  truck: {  "30": 1617,  "60": 3234,  "90": 4851,  "180": 9702,  "365": 19619,},
  trailer: {  "30": 357,  "60": 714,  "90": 1071,  "180": 2142,  "365": 4331,},
  special: {  "30": 966,  "60": 1932,  "90": 2898,  "180": 5796,  "365": 11721,},
  moto: { "30": 262.50, "60": 525, "90": 787.50, "180": 1575.00, "365": 3184.65 },
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