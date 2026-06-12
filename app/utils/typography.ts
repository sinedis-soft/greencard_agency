export function keepTypography(input?: string | null): string {
  if (!input) return "";

  return input
    // короткие слова (все языки Unicode)
    .replace(
      /(^|\s)([\p{L}]{1,2})\s+/gu,
      "$1$2\u00A0",
    )

    // открывающие кавычки
    .replace(
      /([«„“"])\s+/g,
      "$1\u00A0",
    )

    // № 123, § 5
    .replace(
      /([№§])\s+/g,
      "$1\u00A0",
    )

    // тире перед словом
    .replace(
      /(^|\s)(—|–)\s+/g,
      "$1$2\u00A0",
    );
}

export const keepShortWords = keepTypography;