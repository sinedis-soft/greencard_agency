import type { Lang } from "@/app/dictionaries/header";

export type ContactFeedbackFormDictionary = {
  title: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  comment: string;
  submit: string;
  sending: string;
  ok: string;
  error: string;
};

const ru: ContactFeedbackFormDictionary = {
  title: "Форма обратной связи",
  firstName: "Имя",
  lastName: "Фамилия",
  phone: "Телефон",
  email: "E-mail",
  comment: "Комментарий",
  submit: "Отправить",
  sending: "Отправка...",
  ok: "Сообщение отправлено. Мы скоро свяжемся с вами.",
  error: "Не удалось отправить форму. Попробуйте позже.",
};

const pl: ContactFeedbackFormDictionary = {
  title: "Formularz kontaktowy",
  firstName: "Imię",
  lastName: "Nazwisko",
  phone: "Telefon",
  email: "E-mail",
  comment: "Komentarz",
  submit: "Wyślij",
  sending: "Wysyłanie...",
  ok: "Wiadomość została wysłana. Skontaktujemy się z Państwem wkrótce.",
  error: "Nie udało się wysłać formularza. Prosimy spróbować ponownie później.",
};

const en: ContactFeedbackFormDictionary = {
  title: "Contact Form",
  firstName: "First Name",
  lastName: "Last Name",
  phone: "Phone",
  email: "E-mail",
  comment: "Comment",
  submit: "Submit",
  sending: "Sending...",
  ok: "Your message has been sent. We will contact you shortly.",
  error: "Unable to send the form. Please try again later.",
};

const be: ContactFeedbackFormDictionary = {
  title: "Форма зваротнай сувязі",
  firstName: "Імя",
  lastName: "Прозвішча",
  phone: "Тэлефон",
  email: "E-mail",
  comment: "Каментарый",
  submit: "Адправіць",
  sending: "Адпраўка...",
  ok: "Паведамленне адпраўлена. Мы хутка звяжамся з вамі.",
  error: "Не ўдалося адправіць форму. Паспрабуйце пазней.",
};

const uz: ContactFeedbackFormDictionary = {
  title: "Qayta aloqa shakli",
  firstName: "Ism",
  lastName: "Familiya",
  phone: "Telefon",
  email: "E-mail",
  comment: "Izoh",
  submit: "Yuborish",
  sending: "Yuborilmoqda...",
  ok: "Xabar yuborildi. Tez orada siz bilan bog‘lanamiz.",
  error: "Shaklni yuborib bo‘lmadi. Keyinroq qayta urinib ko‘ring.",
};

const ka: ContactFeedbackFormDictionary = {
  title: "უკუკავშირის ფორმა",
  firstName: "სახელი",
  lastName: "გვარი",
  phone: "ტელეფონი",
  email: "E-mail",
  comment: "კომენტარი",
  submit: "გაგზავნა",
  sending: "იგზავნება...",
  ok: "შეტყობინება წარმატებით გაიგზავნა. მალე დაგიკავშირდებით.",
  error: "ფორმის გაგზავნა ვერ მოხერხდა. სცადეთ მოგვიანებით.",
};

const kk: ContactFeedbackFormDictionary = {
  title: "Кері байланыс нысаны",
  firstName: "Аты",
  lastName: "Тегі",
  phone: "Телефон",
  email: "E-mail",
  comment: "Түсініктеме",
  submit: "Жіберу",
  sending: "Жіберілуде...",
  ok: "Хабарлама жіберілді. Жақын арада сізбен хабарласамыз.",
  error: "Нысанды жіберу мүмкін болмады. Кейінірек қайталап көріңіз.",
};

const tr: ContactFeedbackFormDictionary = {
  title: "İletişim Formu",
  firstName: "Ad",
  lastName: "Soyad",
  phone: "Telefon",
  email: "E-posta",
  comment: "Yorum",
  submit: "Gönder",
  sending: "Gönderiliyor...",
  ok: "Mesajınız gönderildi. En kısa sürede sizinle iletişime geçeceğiz.",
  error: "Form gönderilemedi. Lütfen daha sonra tekrar deneyin.",
};

const fa: ContactFeedbackFormDictionary = {
  title: "فرم بازخورد",
  firstName: "نام",
  lastName: "نام خانوادگی",
  phone: "شماره تلفن",
  email: "ایمیل",
  comment: "توضیحات",
  submit: "ارسال",
  sending: "در حال ارسال...",
  ok: "پیام با موفقیت ارسال شد. به‌زودی با شما تماس خواهیم گرفت.",
  error: "ارسال فرم امکان‌پذیر نبود. لطفاً بعداً دوباره تلاش کنید.",
};

const hy: ContactFeedbackFormDictionary = {
  title: "Հետադարձ կապի ձև",
  firstName: "Անուն",
  lastName: "Ազգանուն",
  phone: "Հեռախոս",
  email: "E-mail",
  comment: "Մեկնաբանություն",
  submit: "Ուղարկել",
  sending: "Ուղարկվում է...",
  ok: "Հաղորդագրությունն ուղարկվել է։ Մենք շուտով կկապվենք ձեզ հետ։",
  error: "Չհաջողվեց ուղարկել ձևը։ Խնդրում ենք փորձել ավելի ուշ։",
};

const dictionaries: Partial<Record<Lang, ContactFeedbackFormDictionary>> = {
  ru,
  pl,
  en,
  be,
  uz,
  ka,
  kk,
  tr,
  fa,
  hy,
};

export function getContactFeedbackFormDictionary(
  lang: Lang
): ContactFeedbackFormDictionary {
  return dictionaries[lang] ?? ru;
}