import type { Lang } from "@/app/dictionaries/header";

const messages: Record<
  Lang,
  {
    required: string;
    crmError: string;
    serverError: string;
    configError: string;
  }
> = {
  pl: {
    required: "Wypełnij wszystkie wymagane pola",
    crmError: "Błąd wysyłania do CRM",
    serverError: "Błąd serwera",
    configError: "Błąd konfiguracji serwera",
  },
  en: {
    required: "Please fill in all required fields",
    crmError: "Error sending data to CRM",
    serverError: "Server error",
    configError: "Server configuration error",
  },
  be: {
    required: "Запоўніце ўсе абавязковыя палі",
    crmError: "Памылка адпраўкі ў CRM",
    serverError: "Памылка сервера",
    configError: "Памылка канфігурацыі сервера",
  },
  ru: {
    required: "Заполните все обязательные поля",
    crmError: "Ошибка отправки в CRM",
    serverError: "Ошибка на сервере",
    configError: "Ошибка конфигурации сервера",
  },
  uk: {
    required: "Заповніть усі обов'язкові поля",
    crmError: "Помилка надсилання до CRM",
    serverError: "Помилка сервера",
    configError: "Помилка конфігурації сервера",
  },
  ro: {
    required: "Completați toate câmpurile obligatorii",
    crmError: "Eroare la trimiterea în CRM",
    serverError: "Eroare de server",
    configError: "Eroare de configurare a serverului",
  },
  sr: {
    required: "Попуните сва обавезна поља",
    crmError: "Грешка при слању у CRM",
    serverError: "Грешка на серверу",
    configError: "Грешка у конфигурацији сервера",
  },
  sq: {
    required: "Plotësoni të gjitha fushat e detyrueshme",
    crmError: "Gabim gjatë dërgimit në CRM",
    serverError: "Gabim në server",
    configError: "Gabim në konfigurimin e serverit",
  },
  kk: {
    required: "Барлық міндетті өрістерді толтырыңыз",
    crmError: "CRM жүйесіне жіберу қатесі",
    serverError: "Сервер қатесі",
    configError: "Сервер конфигурациясының қатесі",
  },
  uz: {
    required: "Barcha majburiy maydonlarni to‘ldiring",
    crmError: "CRM ga yuborishda xatolik",
    serverError: "Server xatosi",
    configError: "Server konfiguratsiyasi xatosi",
  },
  az: {
    required: "Bütün məcburi xanaları doldurun",
    crmError: "CRM-ə göndərmə xətası",
    serverError: "Server xətası",
    configError: "Server konfiqurasiyası xətası",
  },
  tr: {
    required: "Lütfen tüm zorunlu alanları doldurun",
    crmError: "CRM'ye gönderme hatası",
    serverError: "Sunucu hatası",
    configError: "Sunucu yapılandırma hatası",
  },
  hy: {
    required: "Լրացրեք բոլոր պարտադիր դաշտերը",
    crmError: "CRM ուղարկման սխալ",
    serverError: "Սերվերի սխալ",
    configError: "Սերվերի կարգավորման սխալ",
  },
  ka: {
    required: "შეავსეთ ყველა სავალდებულო ველი",
    crmError: "CRM-ში გაგზავნის შეცდომა",
    serverError: "სერვერის შეცდომა",
    configError: "სერვერის კონფიგურაციის შეცდომა",
  },
  fa: {
    required: "لطفاً تمام فیلدهای الزامی را تکمیل کنید",
    crmError: "خطا در ارسال به CRM",
    serverError: "خطای سرور",
    configError: "خطای پیکربندی سرور",
  },
  ckb: {
    required: "تکایە هەموو خانە پێویستەکان پڕ بکەرەوە",
    crmError: "هەڵە لە ناردن بۆ CRM",
    serverError: "هەڵەی سێرڤەر",
    configError: "هەڵەی ڕێکخستنی سێرڤەر",
  },
  kmr: {
    required: "Ji kerema xwe hemû qadên pêwîst dagirin",
    crmError: "Di şandina CRM de çewtî çêbû",
    serverError: "Çewtiya serverê",
    configError: "Çewtiya veavakirina serverê",
  },
  ar: {
    required: "يرجى ملء جميع الحقول المطلوبة",
    crmError: "خطأ في الإرسال إلى CRM",
    serverError: "خطأ في الخادم",
    configError: "خطأ في إعدادات الخادم",
  },
  he: {
    required: "נא למלא את כל השדות הנדרשים",
    crmError: "שגיאה בשליחה ל-CRM",
    serverError: "שגיאת שרת",
    configError: "שגיאת תצורת שרת",
  },
  mn: {
    required: "Бүх шаардлагатай талбаруудыг бөглөнө үү",
    crmError: "CRM рүү илгээхэд алдаа гарлаа",
    serverError: "Серверийн алдаа",
    configError: "Серверийн тохиргооны алдаа",
  },
};

export async function POST(req: Request) {
  let lang: Lang = "en";

  try {
    const body = (await req.json()) as {
      lang?: Lang;
      firstName?: string;
      lastName?: string;
      phone?: string;
      email?: string;
      comment?: string;
    };

    lang = body.lang && body.lang in messages ? body.lang : "en";
    const t = messages[lang];

    const firstName = (body.firstName || "").trim();
    const lastName = (body.lastName || "").trim();
    const phone = (body.phone || "").trim();
    const email = (body.email || "").trim();
    const comment = (body.comment || "").trim();

    if (!firstName || !lastName || !phone || !email || !comment) {
      return Response.json(
        { ok: false, message: t.required },
        { status: 400 }
      );
    }

    const webhook = process.env.BITRIX_WEBHOOK_URL;

    if (!webhook) {
      return Response.json(
        { ok: false, message: t.configError },
        { status: 500 }
      );
    }

    const bitrixUrl = `${webhook}/crm.lead.add.json`;

    const payload = {
      fields: {
        TITLE: `Contact form message: ${firstName} ${lastName}`,
        NAME: firstName,
        LAST_NAME: lastName,
        PHONE: [{ VALUE: phone, VALUE_TYPE: "WORK" }],
        EMAIL: [{ VALUE: email, VALUE_TYPE: "WORK" }],
        COMMENTS: comment,
        SOURCE_ID: "WEB",
      },
      params: {
        REGISTER_SONET_EVENT: "Y",
      },
    };

    const res = await fetch(bitrixUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      return Response.json(
        { ok: false, message: t.crmError },
        { status: 502 }
      );
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { ok: false, message: messages[lang].serverError },
      { status: 500 }
    );
  }
}