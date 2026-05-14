import type { Lang } from "@/app/dictionaries/header";

export type BelarusPolandOcDictionary = {
  seo: { title: string; description: string };
  breadcrumbTitle: string;
  hero: { kicker: string; title: string; lead: string; cta: string };
  what: { title: string; text: string };
  who: { title: string; items: string[] };
  how: { title: string; steps: string[] };
  price: { title: string; text: string };
  validity: { title: string; text: string };
  form: { title: string; desc: string };
  faq: { title: string; items: Array<{ q: string; a: string }> };
  carousel: { title: string; cardTitle: string; cardText: string; cta: string };
};

const ru: BelarusPolandOcDictionary = {
  seo: {
    title: "страховка на белорусский автомобиль в Польшу — онлайн оформление автостраховки",
    description:
      "Оформление страховки для поездки в Польшу. Онлайн-заявка, расчет стоимости, поддержка в WhatsApp и Telegram.",
  },
  breadcrumbTitle: "Страхование белорусского авто в Польшу",
  hero: {
    kicker: "SEO-страница",
    title: "Зеленая карта в Польшу для машины на белорусских номерах",
    lead: "Оформите полис для въезда и поездки по Польше: онлайн-заявка, расчет стоимости и сопровождение в мессенджерах.",
    cta: "Перейти к форме заявки",
  },
  what: { title: "Что это за полис", text: "Это обязательная страховка гражданской ответственности для автомобиля на белорусских номерах при въезде в Польшу и движении по дорогам ЕС." },
  who: { title: "Кому нужен", items: ["Владельцам и водителям авто, зарегистрированных в Беларуси.", "Тем, кто въезжает в Польшу на личном или служебном автомобиле.", "Тем, кому нужна действующая страховая защита ответственности перед третьими лицами."] },
  how: { title: "Как оформить", steps: ["Оставьте заявку через форму на сайте.", "Передайте данные авто и водителя для расчета.", "Оплатите страховой взнос удобным способом.", "Получите готовый полис и инструкцию по проверке."] },
  price: { title: "Стоимость", text: "Цена зависит от срока действия полиса и типа транспортного средства. Точную стоимость мы рассчитываем после получения данных в заявке." },
  validity: { title: "Сроки действия", text: "Доступны полисы на 30, 60, 90, 180 и 364 дня. Дата начала указывается при оформлении, после чего покрытие действует выбранный период." },
  form: { title: "Форма заявки", desc: "Нажмите кнопку ниже — откроется главная страница с формой для оформления." },
  faq: { title: "FAQ", items: [
    { q: "Можно ли оформить онлайн, если я еще не пересек границу?", a: "Да, заявку можно оставить заранее, чтобы получить полис к нужной дате начала действия." },
    { q: "Подходит ли полис для поездок только по Польше?", a: "Полис оформляется для въезда в Польшу и может действовать на территории стран, указанных в условиях страхования." },
    { q: "Где проверить действительность полиса?", a: "Проверка возможна через официальные базы страховых организаций, включая UFG в Польше." },
  ] },
  carousel: { title: "Полезные страницы по направлениям", cardTitle: "Страхование белорусского авто для поездки в Польшу", cardText: "Условия, сроки, стоимость и оформление онлайн.", cta: "Открыть страницу" },
};

export const belarusPolandOcDictionary: Record<Lang, BelarusPolandOcDictionary> = { ru, pl: ru, en: ru, be: ru, uz: ru, ka: ru, kk: ru, tr: ru, fa: ru, hy: ru };

export function getBelarusPolandOcDictionary(lang: Lang): BelarusPolandOcDictionary {
  return belarusPolandOcDictionary[lang] ?? ru;
}
