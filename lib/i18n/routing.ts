import { locales } from '@/types/i18n';

export function localizedPath(lang: string, slug?: string): string {
  return slug ? `/${lang}/${slug}` : `/${lang}`;
}

export { locales };
