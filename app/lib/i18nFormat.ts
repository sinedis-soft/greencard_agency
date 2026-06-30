// src/lib/i18nFormat.ts

export function formatMessage(
  template: string,
  values: Record<string, string | number | null | undefined>
): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => {
    const value = values[key];

    if (value === null || value === undefined) {
      return `{${key}}`;
    }

    return String(value);
  });
}