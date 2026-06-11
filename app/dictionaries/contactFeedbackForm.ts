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

const ckb: ContactFeedbackFormDictionary = {
  title: "فۆڕمی پەیوەندی",
  firstName: "ناو",
  lastName: "ناوی خێزان",
  phone: "ژمارەی تەلەفۆن",
  email: "ئیمەیڵ",
  comment: "تێبینی",
  submit: "ناردن",
  sending: "لە ناردندایە...",
  ok: "پەیامەکەت بە سەرکەوتوویی نێردرا. بە زوویی پەیوەندیت پێوە دەکەین.",
  error: "ناردنی فۆڕمەکە سەرکەوتوو نەبوو. تکایە دواتر هەوڵ بدەرەوە.",
};

const kmr: ContactFeedbackFormDictionary = {
  title: "Forma Têkiliyê",
  firstName: "Nav",
  lastName: "Paşnav",
  phone: "Telefon",
  email: "E-mail",
  comment: "Şîrove",
  submit: "Bişîne",
  sending: "Tê şandin...",
  ok: "Peyam bi serkeftî hate şandin. Em ê di demeke nêz de bi we re têkilî daynin.",
  error: "Şandina formê bi ser neket. Ji kerema xwe paşê dîsa biceribînin.",
};


const ar: ContactFeedbackFormDictionary = {
  title: "نموذج التواصل",
  firstName: "الاسم",
  lastName: "اسم العائلة",
  phone: "رقم الهاتف",
  email: "البريد الإلكتروني",
  comment: "التعليق",
  submit: "إرسال",
  sending: "جارٍ الإرسال...",
  ok: "تم إرسال الرسالة. سنتواصل معك قريبًا.",
  error: "تعذر إرسال النموذج. يرجى المحاولة مرة أخرى لاحقًا.",
};

const uk: ContactFeedbackFormDictionary = {
  title: "Форма зворотного зв’язку",
  firstName: "Ім’я",
  lastName: "Прізвище",
  phone: "Телефон",
  email: "E-mail",
  comment: "Коментар",
  submit: "Надіслати",
  sending: "Надсилання...",
  ok: "Повідомлення надіслано. Ми зв’яжемося з вами найближчим часом.",
  error: "Не вдалося надіслати форму. Спробуйте пізніше.",
};

const he: ContactFeedbackFormDictionary = {
  title: "טופס יצירת קשר",
  firstName: "שם פרטי",
  lastName: "שם משפחה",
  phone: "טלפון",
  email: "דואר אלקטרוני",
  comment: "הערה",
  submit: "שלח",
  sending: "שולח...",
  ok: "ההודעה נשלחה. ניצור איתכם קשר בהקדם.",
  error: "לא ניתן היה לשלוח את הטופס. אנא נסו שוב מאוחר יותר.",
};

const az: ContactFeedbackFormDictionary = {
  title: "Əlaqə forması",
  firstName: "Ad",
  lastName: "Soyad",
  phone: "Telefon",
  email: "E-poçt",
  comment: "Şərh",
  submit: "Göndər",
  sending: "Göndərilir...",
  ok: "Mesaj göndərildi. Tezliklə sizinlə əlaqə saxlayacağıq.",
  error: "Formanı göndərmək mümkün olmadı. Zəhmət olmasa, daha sonra yenidən cəhd edin.",
};

const ro: ContactFeedbackFormDictionary = {
  title: "Formular de contact",
  firstName: "Prenume",
  lastName: "Nume",
  phone: "Telefon",
  email: "E-mail",
  comment: "Comentariu",
  submit: "Trimite",
  sending: "Se trimite...",
  ok: "Mesajul a fost trimis. Vă vom contacta în curând.",
  error: "Formularul nu a putut fi trimis. Vă rugăm să încercați mai târziu.",
};

const sr: ContactFeedbackFormDictionary = {
  title: "Kontakt forma",
  firstName: "Ime",
  lastName: "Prezime",
  phone: "Telefon",
  email: "E-mail",
  comment: "Komentar",
  submit: "Pošalji",
  sending: "Slanje...",
  ok: "Poruka je poslata. Uskoro ćemo vas kontaktirati.",
  error: "Slanje obrasca nije uspelo. Pokušajte ponovo kasnije.",
};

const sq: ContactFeedbackFormDictionary = {
  title: "Formular kontakti",
  firstName: "Emri",
  lastName: "Mbiemri",
  phone: "Telefoni",
  email: "E-mail",
  comment: "Koment",
  submit: "Dërgo",
  sending: "Duke u dërguar...",
  ok: "Mesazhi u dërgua. Do t'ju kontaktojmë së shpejti.",
  error: "Nuk ishte e mundur të dërgohej formulari. Ju lutemi provoni përsëri më vonë.",
};

const mn: ContactFeedbackFormDictionary = {
  title: "Холбоо барих маягт",
  firstName: "Нэр",
  lastName: "Овог",
  phone: "Утас",
  email: "И-мэйл",
  comment: "Тайлбар",
  submit: "Илгээх",
  sending: "Илгээж байна...",
  ok: "Таны зурвас амжилттай илгээгдлээ. Бид тантай удахгүй холбогдох болно.",
  error: "Маягтыг илгээх боломжгүй байна. Дараа дахин оролдоно уу.",
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
  ckb,
  kmr,
  ar,
  uk,
  az,
  he,
  ro,
  sr,
  sq,
  mn,
};


export function getContactFeedbackFormDictionary(
  lang: Lang
): ContactFeedbackFormDictionary {
  return dictionaries[lang] ?? ru;
}