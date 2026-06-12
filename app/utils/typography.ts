export function keepTypography(input?: string | null): string {
  if (!input) return "";

  return input
    .replace(/(^|\s)([\p{L}]{1,2})\s+/gu, "$1$2\u00A0")
    .replace(/\s+\(/g, "\u00A0(")
    .replace(/\(\s+/g, "(\u00A0")
    .replace(/([«„“"'])\s+/g, "$1\u00A0")
    .replace(/([№§])\s+/g, "$1\u00A0")
    .replace(/(^|\s)(—|–|-)\s+/g, "$1$2\u00A0");
}