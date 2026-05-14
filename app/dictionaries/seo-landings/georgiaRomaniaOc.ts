import type { Lang } from "@/app/dictionaries/header";
import {
  belarusPolandOcDictionary,
  type BelarusPolandOcDictionary,
} from "@/app/dictionaries/seo-landings/belarusPolandOc";

function buildDictionary(lang: Lang): BelarusPolandOcDictionary {
  const base = belarusPolandOcDictionary[lang] ?? belarusPolandOcDictionary.ru;

  return {
    ...base,
    seo: {
      title:
        lang === "ru"
          ? "страховка на грузинский автомобиль в Румынию — онлайн оформление автостраховки"
          : base.seo.title,
      description:
        lang === "ru"
          ? "Оформление страховки для поездки в Румынию. Онлайн-заявка, расчет стоимости, поддержка в WhatsApp и Telegram."
          : base.seo.description,
    },
    breadcrumbTitle:
      lang === "ru" ? "Страхование грузинского авто в Румынию" : base.breadcrumbTitle,
    hero: {
      ...base.hero,
      title:
        lang === "ru"
          ? "Польская OC graniczna в Румынию для машины на грузинских номерах"
          : base.hero.title,
      kicker:
        lang === "ru" ? "Страхование для автомобилей с грузинской регистрацией" : base.hero.kicker,
      lead:
        lang === "ru"
          ? "Полис OC graniczne для въезда через Польшу и дальнейшей поездки в Румынию: расчет, подача заявки онлайн и помощь менеджера в мессенджерах."
          : base.hero.lead,
    },
    what: {
      title:
        lang === "ru"
          ? "Что такое OC graniczne для поездки в Румынию"
          : base.what.title,
      text:
        lang === "ru"
          ? "Если вы планируете ехать в Румынию на автомобиле с грузинскими номерами через Польшу, для пересечения границы может понадобиться польская пограничная страховка OC graniczne. Этот полис покрывает гражданскую ответственность водителя перед третьими лицами и помогает выполнить страховые требования в странах маршрута. На странице собраны основные условия, порядок оформления, сроки действия и ответы на частые вопросы."
          : base.what.text,
    },
    carousel: {
      ...base.carousel,
      title: lang === "ru" ? "Полезные страницы по направлениям" : base.carousel.title,
      cardTitle:
        lang === "ru"
          ? "Страхование грузинского авто для поездки в Румынию"
          : base.carousel.cardTitle,
      cardText:
        lang === "ru"
          ? "OC graniczne, сроки действия, стоимость и онлайн-оформление."
          : base.carousel.cardText,
    },
  };
}

export const georgiaRomaniaOcDictionary: Record<Lang, BelarusPolandOcDictionary> = {
  ru: buildDictionary("ru"),
  pl: buildDictionary("pl"),
  en: buildDictionary("en"),
  be: buildDictionary("be"),
  uz: buildDictionary("uz"),
  ka: buildDictionary("ka"),
  kk: buildDictionary("kk"),
  tr: buildDictionary("tr"),
  fa: buildDictionary("fa"),
  hy: buildDictionary("hy"),
};

export function getGeorgiaRomaniaOcDictionary(lang: Lang): BelarusPolandOcDictionary {
  return georgiaRomaniaOcDictionary[lang] ?? georgiaRomaniaOcDictionary.ru;
}
