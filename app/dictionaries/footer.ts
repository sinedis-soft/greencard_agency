// app/dictionaries/footer.ts

import type { Lang } from "@/app/dictionaries/header";

export type FooterDictionary = {
  company: string;
  about: string;
  contacts: string;
  contactsLink: string;
  more: string;
  rules: string;
  documents: string;
  copyright: string;
  cookiePolicy: string;
  privacyPolicy: string;
};

const ru: FooterDictionary = {
  company: "О компании",
  about: "О нас",
  contacts: "Контакты",
  contactsLink: "Контакты",
  more: "Дополнительно",
  rules: "Правила",
  documents: "Документы с информацией о продукте",
  copyright: "© 2026 Green card agency",
  cookiePolicy: "Политика использования файлов cookie",
  privacyPolicy: "Политика конфиденциальности",
};

const pl: FooterDictionary = {
  company: "O firmie",
  about: "O nas",
  contacts: "Kontakt",
  contactsLink: "Kontakt",
  more: "Dodatkowe informacje",
  rules: "Regulamin",
  documents: "Dokumenty zawierające informacje o produkcie",
  copyright: "© 2026 Green card agency",
  cookiePolicy: "Polityka plików cookie",
  privacyPolicy: "Polityka prywatności",
};

const en: FooterDictionary = {
  company: "Company",
  about: "About Us",
  contacts: "Contacts",
  contactsLink: "Contacts",
  more: "Additional Information",
  rules: "Terms and Conditions",
  documents: "Product Information Documents",
  copyright: "© 2026 Green Card Agency",
  cookiePolicy: "Cookie Policy",
  privacyPolicy: "Privacy Policy",
};

const be: FooterDictionary = {
  company: "Пра кампанію",
  about: "Пра нас",
  contacts: "Кантакты",
  contactsLink: "Кантакты",
  more: "Дадаткова",
  rules: "Правілы",
  documents: "Дакументы з інфармацыяй аб страхавым прадукце",
  copyright: "© 2026 Green card agency",
  cookiePolicy: "Палітыка выкарыстання файлаў cookie",
  privacyPolicy: "Палітыка канфідэнцыяльнасці",
};

const uz: FooterDictionary = {
  company: "Kompaniya haqida",
  about: "Biz haqimizda",
  contacts: "Kontaktlar",
  contactsLink: "Kontaktlar",
  more: "Qo‘shimcha",
  rules: "Qoidalar",
  documents: "Mahsulot haqida ma’lumot beruvchi hujjatlar",
  copyright: "© 2026 Green Card Agency",
  cookiePolicy: "Cookie-fayllardan foydalanish siyosati",
  privacyPolicy: "Maxfiylik siyosati",
};

const ka: FooterDictionary = {
  company: "კომპანიის შესახებ",
  about: "ჩვენ შესახებ",
  contacts: "კონტაქტები",
  contactsLink: "კონტაქტები",
  more: "დამატებით",
  rules: "წესები",
  documents: "პროდუქტის შესახებ საინფორმაციო დოკუმენტები",
  copyright: "© 2026 Green card agency",
  cookiePolicy: "Cookie-ფაილების გამოყენების პოლიტიკა",
  privacyPolicy: "კონფიდენციალურობის პოლიტიკა",
};

const kk: FooterDictionary = {
  company: "Компания туралы",
  about: "Біз туралы",
  contacts: "Байланыс",
  contactsLink: "Байланыс",
  more: "Қосымша",
  rules: "Ережелер",
  documents: "Өнім туралы ақпараттық құжаттар",
  copyright: "© 2026 Green card agency",
  cookiePolicy: "Cookie файлдарын пайдалану саясаты",
  privacyPolicy: "Құпиялылық саясаты",
};

const tr: FooterDictionary = {
  company: "Şirket Hakkında",
  about: "Hakkımızda",
  contacts: "İletişim",
  contactsLink: "İletişim",
  more: "Ek Bilgiler",
  rules: "Kurallar",
  documents: "Ürün Bilgilendirme Belgeleri",
  copyright: "© 2026 Green Card Agency",
  cookiePolicy: "Çerez Politikası",
  privacyPolicy: "Gizlilik Politikası",
};

const fa: FooterDictionary = {
  company: "درباره شرکت",
  about: "درباره ما",
  contacts: "اطلاعات تماس",
  contactsLink: "تماس با ما",
  more: "اطلاعات بیشتر",
  rules: "قوانین",
  documents: "اسناد اطلاعات محصول بیمه",
  copyright: "© 2026 Green card agency",
  cookiePolicy: "سیاست استفاده از فایل‌های کوکی",
  privacyPolicy: "سیاست حفظ حریم خصوصی",
};

const hy: FooterDictionary = {
  company: "Ընկերության մասին",
  about: "Մեր մասին",
  contacts: "Կոնտակտներ",
  contactsLink: "Կոնտակտներ",
  more: "Լրացուցիչ",
  rules: "Կանոններ",
  documents: "Ապրանքի վերաբերյալ տեղեկատվական փաստաթղթեր",
  copyright: "© 2026 Green card agency",
  cookiePolicy: "Cookie ֆայլերի օգտագործման քաղաքականություն",
  privacyPolicy: "Գաղտնիության քաղաքականություն",
};

const ckb: FooterDictionary = {
  company: "دەربارەی کۆمپانیا",
  about: "دەربارەی ئێمە",
  contacts: "پەیوەندییەکان",
  contactsLink: "پەیوەندییەکان",
  more: "زانیاری زیاتر",
  rules: "یاسا و مەرجەکان",
  documents: "بەڵگەنامەکانی زانیاری سەبارەت بە بەرهەم",
  copyright: "© 2026 Green Card Agency",
  cookiePolicy: "سیاسەتی بەکارهێنانی کوکی",
  privacyPolicy: "سیاسەتی پاراستنی نهێنی",
};
const kmr: FooterDictionary = {
  company: "Derbarê şirketê de",
  about: "Derbarê me de",
  contacts: "Têkilî",
  contactsLink: "Têkilî",
  more: "Agahdariyên zêdetir",
  rules: "Rêzikname",
  documents: "Belgeyên agahdariya berhemê",
  copyright: "© 2026 Green Card Agency",
  cookiePolicy: "Polîtîkaya pelên cookie",
  privacyPolicy: "Polîtîkaya nepeniyê",
};
const ar: FooterDictionary = {
  company: "عن الشركة",
  about: "من نحن",
  contacts: "جهات الاتصال",
  contactsLink: "اتصل بنا",
  more: "معلومات إضافية",
  rules: "الشروط والأحكام",
  documents: "مستندات معلومات المنتج",
  copyright: "© 2026 Green Card Agency",
  cookiePolicy: "سياسة ملفات تعريف الارتباط",
  privacyPolicy: "سياسة الخصوصية",
};

const uk: FooterDictionary = {
  company: "Про компанію",
  about: "Про нас",
  contacts: "Контакти",
  contactsLink: "Контакти",
  more: "Додатково",
  rules: "Правила",
  documents: "Документи з інформацією про страховий продукт",
  copyright: "© 2026 Green card agency",
  cookiePolicy: "Політика використання файлів cookie",
  privacyPolicy: "Політика конфіденційності",
};
const he: FooterDictionary = {
  company: "אודות החברה",
  about: "אודותינו",
  contacts: "פרטי קשר",
  contactsLink: "צור קשר",
  more: "מידע נוסף",
  rules: "תנאים וכללים",
  documents: "מסמכי מידע על המוצר",
  copyright: "© 2026 Green Card Agency",
  cookiePolicy: "מדיניות קובצי Cookie",
  privacyPolicy: "מדיניות פרטיות",
};
const az: FooterDictionary = {
  company: "Şirkət haqqında",
  about: "Haqqımızda",
  contacts: "Əlaqə məlumatları",
  contactsLink: "Əlaqə",
  more: "Əlavə məlumat",
  rules: "Qaydalar",
  documents: "Məhsul haqqında məlumat sənədləri",
  copyright: "© 2026 Green Card Agency",
  cookiePolicy: "Cookie fayllarından istifadə siyasəti",
  privacyPolicy: "Məxfilik siyasəti",
};
const ro: FooterDictionary = {
  company: "Companie",
  about: "Despre noi",
  contacts: "Contacte",
  contactsLink: "Contacte",
  more: "Informații suplimentare",
  rules: "Regulamente",
  documents: "Documente cu informații despre produs",
  copyright: "© 2026 Green Card Agency",
  cookiePolicy: "Politica privind fișierele cookie",
  privacyPolicy: "Politica de confidențialitate",
};
const sr: FooterDictionary = {
  company: "O kompaniji",
  about: "O nama",
  contacts: "Kontakti",
  contactsLink: "Kontakti",
  more: "Dodatno",
  rules: "Pravila",
  documents: "Dokumenti sa informacijama o proizvodu",
  copyright: "© 2026 Green card agency",
  cookiePolicy: "Politika korišćenja kolačića",
  privacyPolicy: "Politika privatnosti",
};
const sq: FooterDictionary = {
  company: "Kompania",
  about: "Rreth nesh",
  contacts: "Kontaktet",
  contactsLink: "Kontaktet",
  more: "Informacione shtesë",
  rules: "Rregullat",
  documents: "Dokumente me informacion mbi produktin",
  copyright: "© 2026 Green Card Agency",
  cookiePolicy: "Politika e përdorimit të cookies",
  privacyPolicy: "Politika e privatësisë",
};
const mn: FooterDictionary = {
  company: "Компанийн тухай",
  about: "Бидний тухай",
  contacts: "Холбоо барих",
  contactsLink: "Холбоо барих",
  more: "Нэмэлт мэдээлэл",
  rules: "Журам",
  documents: "Бүтээгдэхүүний мэдээлэл бүхий баримт бичгүүд",
  copyright: "© 2026 Green Card Agency",
  cookiePolicy: "Cookie файлын ашиглалтын бодлого",
  privacyPolicy: "Нууцлалын бодлого",
};



const dictionaries: Record<Lang, FooterDictionary> = {
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

export function getFooterDictionary(lang: Lang): FooterDictionary {
  return dictionaries[lang] ?? en;
}