const seen = new Map<string, number>();
const WINDOW_MS = 30_000;

export function isDuplicateLead(signature: string): boolean {
  const now = Date.now();
  const prev = seen.get(signature);

  if (prev && now - prev < WINDOW_MS) {
    return true;
  }

  seen.set(signature, now);
  return false;
}

export function createLeadSignature(input: {
  customerName: string;
  phone: string;
  email: string;
  vin: string;
  insuranceStartDate: string;
}) {
  return [input.customerName, input.phone, input.email, input.vin, input.insuranceStartDate]
    .map((value) => value.trim().toLowerCase())
    .join('|');
}
