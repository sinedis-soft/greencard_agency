import { beDictionary } from '@/dictionaries/be';
import { enDictionary } from '@/dictionaries/en';
import { plDictionary } from '@/dictionaries/pl';
import { ruDictionary } from '@/dictionaries/ru';
import { defaultLocale, type Locale, type SiteDictionary } from '@/types/i18n';

const dictionaries: Record<Locale, SiteDictionary> = {
  ru: ruDictionary,
  pl: plDictionary,
  en: enDictionary,
  be: beDictionary
};

export function isLocale(value: string): value is Locale {
  return Object.hasOwn(dictionaries, value);
}

export function getDictionary(locale: string): SiteDictionary {
  return dictionaries[isLocale(locale) ? locale : defaultLocale];
}
