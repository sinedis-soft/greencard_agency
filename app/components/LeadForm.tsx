// app/components/LeadForm.tsx
"use client";

import React, { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import type { Lang } from "@/app/dictionaries/header";
import { getLeadFormDictionary } from "@/app/dictionaries/leadForm";
import { getPolicyPrice, formatCurrency } from "@/app/lib/insurancePrices";
import SubmissionModal from "@/app/components/SubmissionModal";

type FormStatus = "idle" | "loading" | "success" | "error";
type SubmitOutcome = "none" | "success" | "partial";
type Step = 1 | 2;

type VehiclePriceState = Record<
  number,
  {
    vehicleType: string;
    period: string;
  }
>;

function formatLatinName(raw: string): string {
  return raw.replace(/[^A-Za-z\s'-]/g, "");
}

function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (!digits) return "";
  return "+" + digits;
}

function formatEmail(raw: string): string {
  let value = raw.replace(/\s/g, "");
  value = value.replace(/[^A-Za-z0-9.@_-]/g, "");

  const firstAtIndex = value.indexOf("@");
  if (firstAtIndex !== -1) {
    const beforeAt = value.slice(0, firstAtIndex + 1);
    const afterAt = value.slice(firstAtIndex + 1).replace(/@/g, "");
    value = beforeAt + afterAt;
  }

  if (value.length > 70) value = value.slice(0, 70);
  return value.toLowerCase();
}

function formatPlate(raw: string): string {
  return raw
    .replace(/\s/g, "")
    .replace(/[^A-Za-z0-9-]/g, "")
    .toUpperCase()
    .slice(0, 8);
}

function formatVIN(raw: string): string {
  return raw
    .replace(/\s/g, "")
    .replace(/[^A-Za-z0-9]/g, "")
    .replace(/[IOQ]/gi, "")
    .toUpperCase()
    .slice(0, 17);
}

function formatPass(raw: string): string {
  return raw
    .replace(/\s/g, "")
    .replace(/[^A-Za-z0-9-]/g, "")
    .toUpperCase()
    .slice(0, 15);
}

function validateFiles(
  files: FileList,
  forbiddenTypes: string[],
  fileForbiddenText: string,
  maxSingleFileBytes: number,
  maxTotalFilesBytes: number
): boolean {
  let totalSize = 0;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const type = file.type || "";
    totalSize += file.size;

    if (file.size > maxSingleFileBytes) {
      alert(`${file.name}: file is too large. Max ${Math.round(maxSingleFileBytes / (1024 * 1024))} MB per file.`);
      return false;
    }

    for (let j = 0; j < forbiddenTypes.length; j++) {
      const t = forbiddenTypes[j];

      if (t.charAt(t.length - 1) === "/") {
        if (type.indexOf(t) === 0) {
          alert(file.name + ": " + fileForbiddenText);
          return false;
        }
      } else if (type === t) {
        alert(file.name + ": " + fileForbiddenText);
        return false;
      }
    }
  }

  if (totalSize > maxTotalFilesBytes) {
    alert(`Attached files are too large. Max total ${Math.round(maxTotalFilesBytes / (1024 * 1024))} MB.`);
    return false;
  }

  return true;
}

function todayISO(): string {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");

  return yyyy + "-" + mm + "-" + dd;
}

function maxBirthDateISO(): string {
  const d = new Date();
  d.setFullYear(d.getFullYear() - 18);

  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");

  return yyyy + "-" + mm + "-" + dd;
}

export default function LeadForm(props: { lang: Lang; showOrderSummary?: boolean }) {
  const t = getLeadFormDictionary(props.lang);

  const [step, setStep] = useState<Step>(1);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");
  const [outcome, setOutcome] = useState<SubmitOutcome>("none");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [birthDate, setBirthDate] = useState("");
  const [address, setAddress] = useState("");

  const [vehicleBlocks, setVehicleBlocks] = useState<number[]>([0]);
  const [vehicleFileCounts, setVehicleFileCounts] = useState<Record<number, number>>({});
  const [vehiclePrices, setVehiclePrices] = useState<VehiclePriceState>({});

  const formRef = useRef<HTMLFormElement | null>(null);

  const forbiddenTypes = [
    "application/zip",
    "application/x-rar-compressed",
    "application/x-7z-compressed",
    "application/x-tar",
    "audio/",
    "video/",
  ];
  const maxSingleFileBytes = 10 * 1024 * 1024;
  const maxTotalFilesBytes = 20 * 1024 * 1024;

  useEffect(() => {
    function applyCalculatorSelection(selection: { vehicle?: unknown; term?: unknown }) {
      const vehicleType = typeof selection.vehicle === "string" ? selection.vehicle : "";
      const period = typeof selection.term === "string" ? selection.term : "";

      if (!vehicleType && !period) return;

      setVehiclePrices((prev) => ({
        ...prev,
        0: {
          vehicleType,
          period,
        },
      }));
    }

    try {
      const params = new URLSearchParams(window.location.search);
      const querySelection = { vehicle: params.get("vehicle"), term: params.get("term") };
      applyCalculatorSelection(querySelection);

      const savedSelection = window.sessionStorage.getItem("calculatorSelection");
      if (savedSelection && !querySelection.vehicle && !querySelection.term) {
        applyCalculatorSelection(JSON.parse(savedSelection) as { vehicle?: unknown; term?: unknown });
      }
    } catch {
      // ignore
    }

    function onCalculatorSelectionChanged(event: Event) {
      const detail = (event as CustomEvent<{ vehicle?: unknown; term?: unknown }>).detail;
      applyCalculatorSelection(detail || {});
    }

    window.addEventListener("calculatorSelectionChanged", onCalculatorSelectionChanged);

    return () => {
      window.removeEventListener("calculatorSelectionChanged", onCalculatorSelectionChanged);
    };
  }, []);

  function addVehicle() {
    setVehicleBlocks(function (prev) {
      const lastId = prev.length ? prev[prev.length - 1] : 0;
      return prev.concat([lastId + 1]);
    });
  }

  function removeVehicle(id: number) {
    setVehicleBlocks(function (prev) {
      if (prev.length <= 1) return prev;

      const next: number[] = [];
      for (let i = 0; i < prev.length; i++) {
        if (prev[i] !== id) next.push(prev[i]);
      }

      return next;
    });

    setVehicleFileCounts(function (prev) {
      const next = { ...prev };
      delete next[id];
      return next;
    });

    setVehiclePrices(function (prev) {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  }

  function validateStep(stepToValidate: Step): boolean {
    if (!formRef.current) return true;

    const elements = formRef.current.querySelectorAll(
      `[data-form-step="${stepToValidate}"] input, [data-form-step="${stepToValidate}"] select, [data-form-step="${stepToValidate}"] textarea`
    ) as NodeListOf<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

    for (let i = 0; i < elements.length; i++) {
      const el = elements[i];

      if (!el.checkValidity()) {
        el.reportValidity();

        try {
          el.focus();
        } catch {
          // ignore
        }

        return false;
      }
    }

    return true;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (status === "loading") return;

    setStatus("idle");
    setMessage("");

    if (!validateStep(2)) return;

    setStatus("loading");

    try {
      const formEl = e.currentTarget;
      const formData = new FormData(formEl);

      if (typeof window !== "undefined") {
        try {
          formData.append("pageUrl", window.location.href);

          const utm = localStorage.getItem("utm_data");
          if (utm) formData.append("utm", utm);
        } catch {
          // ignore
        }
      }

      const res = await fetch("/api/lead", {
        method: "POST",
        body: formData,
      });

      type LeadApiResponse = {
        ok?: boolean;
        message?: string;
        traceId?: string;
      };

      let data: LeadApiResponse | null = null;

      try {
        data = (await res.json()) as LeadApiResponse;
      } catch {
        data = null;
      }

      const ok = Boolean(data?.ok);
      const partialSuccess = Boolean((data as { partialSuccess?: boolean } | null)?.partialSuccess);
      const serverMsg = data?.message ? String(data.message) : "";

      const resetFormState = () => {
        formEl.reset();
        setStep(1);
        setFirstName("");
        setLastName("");
        setPhone("");
        setEmail("");
        setBirthDate("");
        setAddress("");
        setVehicleBlocks([0]);
        setVehicleFileCounts({});
        setVehiclePrices({});
      };

      if (!res.ok || !ok) {
        if (res.status === 413) {
          setStatus("error");
          setMessage("The attached files are too large for upload. Please attach smaller files.");
          return;
        }

        const traceSuffix = data?.traceId ? ` Trace ID: ${data.traceId}` : "";
        setStatus("error");
        setMessage(`${serverMsg || t.statusError}${traceSuffix}`);
        setOutcome("none");
        return;
      }

      setStatus("success");
      setMessage(t.statusSuccess);
      setOutcome(partialSuccess ? "partial" : "success");
      resetFormState();
    } catch {
      setStatus("error");
      setMessage(t.statusError);
      setOutcome("none");
    }
  }

  const minStartDate = useSyncExternalStore(() => () => {}, todayISO, () => "");
  const maxBirthDate = useSyncExternalStore(() => () => {}, maxBirthDateISO, () => "");
  const statusId = "lead-form-status";


  const orderSummaryTexts: Record<Lang, {
    title: string;
    selectedTariff: string;
    term: string;
    days: string;
    vehicleType: string;
    cost: string;
    inPln: string;
    notSelected: string;
  }> = {
    ru: { title: "Ваш заказ", selectedTariff: "Выбранный тариф", term: "Срок", days: "дней", vehicleType: "Тип ТС", cost: "Стоимость", inPln: "В PLN", notSelected: "Выберите в форме" },
    en: { title: "Your order", selectedTariff: "Selected tariff", term: "Term", days: "days", vehicleType: "Vehicle type", cost: "Cost", inPln: "In PLN", notSelected: "Select in the form" },
    pl: { title: "Twoje zamówienie", selectedTariff: "Wybrana taryfa", term: "Okres", days: "dni", vehicleType: "Typ pojazdu", cost: "Koszt", inPln: "W PLN", notSelected: "Wybierz w formularzu" },
    be: { title: "Ваш заказ", selectedTariff: "Выбраны тарыф", term: "Тэрмін", days: "дзён", vehicleType: "Тып ТС", cost: "Кошт", inPln: "У PLN", notSelected: "Выберыце ў форме" },
    uz: { title: "Buyurtmangiz", selectedTariff: "Tanlangan tarif", term: "Muddat", days: "kun", vehicleType: "Transport turi", cost: "Narx", inPln: "PLNda", notSelected: "Formada tanlang" },
    ka: { title: "თქვენი შეკვეთა", selectedTariff: "არჩეული ტარიფი", term: "ვადა", days: "დღე", vehicleType: "ტრანსპორტის ტიპი", cost: "ღირებულება", inPln: "PLN-ში", notSelected: "აირჩიეთ ფორმაში" },
    kk: { title: "Сіздің тапсырысыңыз", selectedTariff: "Таңдалған тариф", term: "Мерзім", days: "күн", vehicleType: "Көлік түрі", cost: "Құны", inPln: "PLN түрінде", notSelected: "Формада таңдаңыз" },
    tr: { title: "Siparişiniz", selectedTariff: "Seçilen tarife", term: "Süre", days: "gün", vehicleType: "Araç tipi", cost: "Tutar", inPln: "PLN olarak", notSelected: "Formda seçin" },
    fa: { title: "سفارش شما", selectedTariff: "تعرفه انتخاب‌شده", term: "مدت", days: "روز", vehicleType: "نوع وسیله نقلیه", cost: "هزینه", inPln: "به PLN", notSelected: "در فرم انتخاب کنید" },
    hy: { title: "Ձեր պատվերը", selectedTariff: "Ընտրված սակագին", term: "Ժամկետ", days: "օր", vehicleType: "ՏՄ տեսակ", cost: "Արժեք", inPln: "PLN-ով", notSelected: "Ընտրեք ձևում" },
    ckb: { title: "داواکارییەکەت", selectedTariff: "نرخی هەڵبژێردراو", term: "ماوە", days: "ڕۆژ", vehicleType: "جۆری ئۆتۆمبێل", cost: "تێچوو", inPln: "بە PLN", notSelected: "لە فۆرمەکە هەڵبژێرە" },
    kmr: { title: "Sipariya we", selectedTariff: "Tarîfa hilbijartî", term: "Dem", days: "roj", vehicleType: "Cureyê wesayîtê", cost: "Nirx", inPln: "Bi PLN", notSelected: "Di formê de hilbijêrin" },
    ar: { title: "طلبك", selectedTariff: "التعرفة المختارة", term: "المدة", days: "يومًا", vehicleType: "نوع المركبة", cost: "التكلفة", inPln: "بالزلوتي PLN", notSelected: "اختر في النموذج" },
    uk: { title: "Ваше замовлення", selectedTariff: "Вибраний тариф", term: "Строк", days: "днів", vehicleType: "Тип ТЗ", cost: "Вартість", inPln: "У PLN", notSelected: "Виберіть у формі" },
    he: { title: "ההזמנה שלך", selectedTariff: "תעריף שנבחר", term: "תקופה", days: "ימים", vehicleType: "סוג רכב", cost: "עלות", inPln: "ב-PLN", notSelected: "בחר בטופס" },
    az: { title: "Sifarişiniz", selectedTariff: "Seçilmiş tarif", term: "Müddət", days: "gün", vehicleType: "Nəqliyyat növü", cost: "Qiymət", inPln: "PLN ilə", notSelected: "Formada seçin" },
    ro: { title: "Comanda dvs.", selectedTariff: "Tariful selectat", term: "Perioada", days: "zile", vehicleType: "Tip vehicul", cost: "Cost", inPln: "În PLN", notSelected: "Selectați în formular" },
    sr: { title: "Ваша поруџбина", selectedTariff: "Изабрана тарифа", term: "Рок", days: "дана", vehicleType: "Тип возила", cost: "Цена", inPln: "У PLN", notSelected: "Изаберите у форми" },
    sq: { title: "Porosia juaj", selectedTariff: "Tarifa e zgjedhur", term: "Afati", days: "ditë", vehicleType: "Lloji i automjetit", cost: "Kosto", inPln: "Në PLN", notSelected: "Zgjidhni në formular" },
    mn: { title: "Таны захиалга", selectedTariff: "Сонгосон тариф", term: "Хугацаа", days: "өдөр", vehicleType: "Тээврийн хэрэгслийн төрөл", cost: "Үнэ", inPln: "PLN-ээр", notSelected: "Маягтаас сонгоно уу" },
  };

  const estimatedTotal = (() => {
    let total = 0;
    let hasPrice = false;

    for (let i = 0; i < vehicleBlocks.length; i++) {
      const id = vehicleBlocks[i];
      const item = vehiclePrices[id];

      if (!item) continue;

      const price = getPolicyPrice(item.vehicleType, item.period);

      if (price !== null) {
        total += price;
        hasPrice = true;
      }
    }

    return hasPrice ? total : null;
  })();



  const firstVehicleSelection = vehiclePrices[vehicleBlocks[0]] || { vehicleType: "", period: "" };
  const orderSummary = orderSummaryTexts[props.lang] || orderSummaryTexts.en;
  const selectedVehicleTypeLabel =
    t.policy.options.vehicleTypes.find((option) => option.value === firstVehicleSelection.vehicleType)?.label || orderSummary.notSelected;
  const selectedPeriodLabel = firstVehicleSelection.period
    ? `${firstVehicleSelection.period} ${orderSummary.days}`
    : orderSummary.notSelected;
  const selectedPrice = getPolicyPrice(firstVehicleSelection.vehicleType, firstVehicleSelection.period);
  const selectedPriceLabel = selectedPrice !== null ? formatCurrency(selectedPrice, "PLN", "pl-PL") : orderSummary.notSelected;


  const modalTexts: Record<Lang, { success: string; partial: string }> = {
  ru: {
    success:
      "Ваша заявка успешно отправлена. Менеджер может связаться с вами по электронной почте или через мессенджеры для уточнения информации.",
    partial:
      "Ваша заявка отправлена, но возникла проблема с прикреплёнными файлами. Менеджер свяжется с вами по электронной почте или через мессенджеры для уточнения информации.",
  },
  en: {
    success:
      "Your request has been successfully sent. A manager may contact you by email or messenger to clarify the information.",
    partial:
      "Your request has been sent, but there is a problem with the attached files. A manager will contact you by email or messenger to clarify the information.",
  },
  pl: {
    success:
      "Twoje zgłoszenie zostało pomyślnie wysłane. Menedżer może skontaktować się z Tobą e-mailem lub przez komunikator, aby doprecyzować informacje.",
    partial:
      "Twoje zgłoszenie zostało wysłane, ale wystąpił problem z załączonymi plikami. Menedżer skontaktuje się z Tobą e-mailem lub przez komunikator, aby doprecyzować informacje.",
  },
  be: {
    success:
      "Ваша заяўка паспяхова адпраўлена. Менеджар можа звязацца з вамі па электроннай пошце або праз месенджары для ўдакладнення інфармацыі.",
    partial:
      "Ваша заяўка адпраўлена, але ўзнікла праблема з прымацаванымі файламі. Менеджар звяжацца з вамі па электроннай пошце або праз месенджары для ўдакладнення інфармацыі.",
  },
  uk: {
    success:
      "Вашу заявку успішно надіслано. Менеджер може зв’язатися з вами електронною поштою або через месенджери для уточнення інформації.",
    partial:
      "Вашу заявку надіслано, але виникла проблема з прикріпленими файлами. Менеджер зв’яжеться з вами електронною поштою або через месенджери для уточнення інформації.",
  },
  kk: {
    success:
      "Өтініміңіз сәтті жіберілді. Ақпаратты нақтылау үшін менеджер сізбен электрондық пошта немесе мессенджерлер арқылы байланысуы мүмкін.",
    partial:
      "Өтініміңіз жіберілді, бірақ тіркелген файлдарда мәселе бар. Ақпаратты нақтылау үшін менеджер сізбен электрондық пошта немесе мессенджерлер арқылы байланысады.",
  },
  uz: {
    success:
      "Arizangiz muvaffaqiyatli yuborildi. Menejer ma’lumotlarni aniqlashtirish uchun siz bilan e-pochta yoki messenjerlar orqali bog‘lanishi mumkin.",
    partial:
      "Arizangiz yuborildi, ammo biriktirilgan fayllar bilan muammo yuzaga keldi. Menejer ma’lumotlarni aniqlashtirish uchun siz bilan e-pochta yoki messenjerlar orqali bog‘lanadi.",
  },
  az: {
    success:
      "Müraciətiniz uğurla göndərildi. Məlumatları dəqiqləşdirmək üçün menecer sizinlə e-poçt və ya messencerlər vasitəsilə əlaqə saxlaya bilər.",
    partial:
      "Müraciətiniz göndərildi, lakin əlavə edilmiş fayllarla bağlı problem yarandı. Məlumatları dəqiqləşdirmək üçün menecer sizinlə e-poçt və ya messencerlər vasitəsilə əlaqə saxlayacaq.",
  },
  tr: {
    success:
      "Başvurunuz başarıyla gönderildi. Bilgileri netleştirmek için bir yönetici sizinle e-posta veya mesajlaşma uygulamaları üzerinden iletişime geçebilir.",
    partial:
      "Başvurunuz gönderildi, ancak ekli dosyalarla ilgili bir sorun oluştu. Bilgileri netleştirmek için bir yönetici sizinle e-posta veya mesajlaşma uygulamaları üzerinden iletişime geçecektir.",
  },
  ka: {
    success:
      "თქვენი განაცხადი წარმატებით გაიგზავნა. ინფორმაციის დასაზუსტებლად მენეჯერი შეიძლება დაგიკავშირდეთ ელფოსტით ან მესენჯერებით.",
    partial:
      "თქვენი განაცხადი გაიგზავნა, მაგრამ მიმაგრებულ ფაილებთან დაკავშირებით პრობლემა წარმოიშვა. ინფორმაციის დასაზუსტებლად მენეჯერი დაგიკავშირდებათ ელფოსტით ან მესენჯერებით.",
  },
  hy: {
    success:
      "Ձեր հայտը հաջողությամբ ուղարկվել է։ Տեղեկությունները ճշտելու համար մենեջերը կարող է կապվել ձեզ հետ էլ․ փոստով կամ մեսենջերներով։",
    partial:
      "Ձեր հայտը ուղարկվել է, բայց կցված ֆայլերի հետ խնդիր է առաջացել։ Տեղեկությունները ճշտելու համար մենեջերը կկապվի ձեզ հետ էլ․ փոստով կամ մեսենջերներով։",
  },
  fa: {
    success:
      "درخواست شما با موفقیت ارسال شد. ممکن است مدیر برای تکمیل اطلاعات از طریق ایمیل یا پیام‌رسان‌ها با شما تماس بگیرد.",
    partial:
      "درخواست شما ارسال شد، اما مشکلی در فایل‌های پیوست وجود دارد. مدیر برای تکمیل اطلاعات از طریق ایمیل یا پیام‌رسان‌ها با شما تماس خواهد گرفت.",
  },
  ckb: {
    success:
      "داواکارییەکەت بە سەرکەوتوویی نێردرا. بۆ ڕوونکردنەوەی زانیارییەکان، بەڕێوەبەر دەتوانێت لە ڕێگەی ئیمەیڵ یان مێسنجەرەکان پەیوەندیت پێوە بکات.",
    partial:
      "داواکارییەکەت نێردرا، بەڵام کێشەیەک لە فایلە هاوپێچکراوەکاندا هەیە. بۆ ڕوونکردنەوەی زانیارییەکان، بەڕێوەبەر لە ڕێگەی ئیمەیڵ یان مێسنجەرەکان پەیوەندیت پێوە دەکات.",
  },
  kmr: {
    success:
      "Daxwaza we bi serkeftî hate şandin. Dibe ku rêveber ji bo zelalkirina agahdariyan bi e-mail an messengeran bi we re têkilî dayne.",
    partial:
      "Daxwaza we hate şandin, lê pirsgirêkek bi pelên girêdayî re derket. Rêveber dê ji bo zelalkirina agahdariyan bi e-mail an messengeran bi we re têkilî dayne.",
  },
  ar: {
    success:
      "تم إرسال طلبك بنجاح. قد يتواصل معك أحد المختصين عبر البريد الإلكتروني أو تطبيقات المراسلة لتأكيد المعلومات أو استكمالها.",
    partial:
      "تم إرسال طلبك، ولكن حدثت مشكلة في الملفات المرفقة. سيتواصل معك أحد المختصين عبر البريد الإلكتروني أو تطبيقات المراسلة لتوضيح المعلومات المطلوبة.",
  },
  he: {
    success:
      "הבקשה שלך נשלחה בהצלחה. מנהל עשוי ליצור איתך קשר בדוא״ל או באמצעות מסנג׳רים כדי להבהיר את המידע.",
    partial:
      "הבקשה שלך נשלחה, אך קיימת בעיה עם הקבצים המצורפים. מנהל יצור איתך קשר בדוא״ל או באמצעות מסנג׳רים כדי להבהיר את המידע.",
  },
  ro: {
    success:
      "Cererea dumneavoastră a fost trimisă cu succes. Un manager vă poate contacta prin e-mail sau mesagerie pentru clarificarea informațiilor.",
    partial:
      "Cererea dumneavoastră a fost trimisă, dar a apărut o problemă cu fișierele atașate. Un manager vă va contacta prin e-mail sau mesagerie pentru clarificarea informațiilor.",
  },
  sr: {
    success:
      "Ваш захтев је успешно послат. Менаџер може да вас контактира путем е-поште или месинџера ради појашњења информација.",
    partial:
      "Ваш захтев је послат, али постоји проблем са приложеним датотекама. Менаџер ће вас контактирати путем е-поште или месинџера ради појашњења информација.",
  },
  sq: {
    success:
      "Kërkesa juaj u dërgua me sukses. Një menaxher mund t’ju kontaktojë me e-mail ose përmes aplikacioneve të mesazheve për të sqaruar informacionin.",
    partial:
      "Kërkesa juaj u dërgua, por ka një problem me skedarët e bashkëngjitur. Një menaxher do t’ju kontaktojë me e-mail ose përmes aplikacioneve të mesazheve për të sqaruar informacionin.",
  },
  mn: {
    success:
      "Таны хүсэлт амжилттай илгээгдлээ. Мэдээллийг тодруулахын тулд менежер тантай имэйл эсвэл мессенжерээр холбогдож болно.",
    partial:
      "Таны хүсэлт илгээгдсэн боловч хавсаргасан файлуудтай холбоотой асуудал гарлаа. Мэдээллийг тодруулахын тулд менежер тантай имэйл эсвэл мессенжерээр холбогдоно.",
  },
};

  return (
    <div className={props.showOrderSummary ? "lead-form-layout lead-form-layout--with-summary" : "lead-form-layout"}>
      {props.showOrderSummary ? (
        <aside className="order-summary-card" aria-label={orderSummary.title}>
          <div className="order-summary-card__head">{orderSummary.title}</div>
          <div className="order-summary-card__body">
            <div className="order-summary-card__section-title">{orderSummary.selectedTariff}</div>
            <div className="order-summary-card__selection">
              <div className="order-summary-card__row">
                <span>{orderSummary.term}:</span>
                <b>{selectedPeriodLabel}</b>
              </div>
              <div className="order-summary-card__row">
                <span>{orderSummary.vehicleType}:</span>
                <b>{selectedVehicleTypeLabel}</b>
              </div>
            </div>
            <div className="order-summary-card__divider" />
            <div className="order-summary-card__section-title">{orderSummary.cost}</div>
            <div className="order-summary-card__price-row">
              <span>{orderSummary.inPln}:</span>
              <strong>{selectedPriceLabel}</strong>
            </div>
          </div>
        </aside>
      ) : null}

      <div className="lead-form-card" aria-label={t.title}>
      <div className="lead-form-card__inner">
        <div className="panel__hd">
          <div className="panel__title">{t.title}</div>
        </div>

        <div className="panel__body">
          <p className="help help--top">{t.intro}</p>

          <div className="steps" aria-label={t.title}>
            <div className={step === 1 ? "step step--active" : "step"}>
              <span>{t.steps.step1}</span>
              <b>{t.steps.contacts}</b>
            </div>

            <div className={step === 2 ? "step step--active" : "step"}>
              <span>{t.steps.step2}</span>
              <b>{t.steps.vehicleData}</b>
            </div>
          </div>

          <form
            ref={formRef}
            className="form"
            onSubmit={onSubmit}
            noValidate
            aria-describedby={status !== "idle" ? statusId : undefined}
          >
            <input type="hidden" name="lang" value={props.lang} />

            <div data-form-step="1" hidden={step !== 1}>
              <div className="hr" />

              <div className="legend">{t.contact.legend}</div>

              <div className="row-2">
                <div className="field">
                  <label htmlFor="firstName">{t.contact.firstName} *</label>
                  <input
                    id="firstName"
                    name="contact_firstNameLat"
                    placeholder="Tom"
                    className="input"
                    value={firstName}
                    onChange={(ev) => setFirstName(formatLatinName(ev.target.value))}
                    required
                    autoComplete="given-name"
                  />
                </div>

                <div className="field">
                  <label htmlFor="lastName">{t.contact.lastName} *</label>
                  <input
                    id="lastName"
                    name="contact_lastNameLat"
                    placeholder="Kavaliou"
                    className="input"
                    value={lastName}
                    onChange={(ev) => setLastName(formatLatinName(ev.target.value))}
                    required
                    autoComplete="family-name"
                  />
                </div>
              </div>

              <div className="row-2">
                <div className="field">
                  <label htmlFor="phone">{t.contact.phone} *</label>
                  <input
                    id="phone"
                    name="contact_phone"
                    placeholder="+48573581333"
                    className="input"
                    value={phone}
                    onChange={(ev) => setPhone(formatPhone(ev.target.value))}
                    required
                    inputMode="tel"
                    autoComplete="tel"
                  />
                </div>

                <div className="field">
                  <label htmlFor="email">{t.contact.email} *</label>
                  <input
                    id="email"
                    name="contact_email"
                    placeholder="exempl@mail.pl"
                    className="input"
                    value={email}
                    onChange={(ev) => setEmail(formatEmail(ev.target.value))}
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="block">
                <div className="block__title">{t.policyholder.individualTitle}</div>

                <div className="row-2">
                  <div className="field">
                    <label htmlFor="birthDate">{t.policyholder.birthDate} *</label>
                    <input
                      id="birthDate"
                      type="date"
                      name="policyholder_birthDate"
                      className="input"
                      value={birthDate}
                      onChange={(e) => setBirthDate(e.currentTarget.value)}
                      required
                      max={maxBirthDate}
                      autoComplete="bday"
                    />
                  </div>
                  <div className="field">
                      <label htmlFor="policyholderPass">{t.policyholder.persPass} *</label>
                      <input
                        id="policyholderPass"
                        name="policyholder_pass"
                        className="input"
                        required
                        onChange={(e) => {
                          e.currentTarget.value = formatPass(e.currentTarget.value);
                        }}
                      />
                      </div>

                  <div className="field" />
                </div>

                <div className="field">
                  <label htmlFor="policyholderAddress">{t.policyholder.addressTitle} *</label>
                  <input
                    id="policyholderAddress"
                    name="policyholder_address"
                    className="input"
                    value={address}
                    onChange={(e) => setAddress(e.currentTarget.value)}
                    required
                    autoComplete="street-address"
                    placeholder={t.policyholder.addressPlaceholder}
                  />
                  <div className="help">{t.policyholder.addressHelp}</div>
                </div>
              </div>
            </div>

            <div data-form-step="2" hidden={step !== 2}>
              <div className="hr" />

              <div className="legend">{t.policy.legend}</div>

              {vehicleBlocks.map(function (id, idx) {
                const fieldIds = {
                  period: `vehicle-${id}-period`,
                  startDate: `vehicle-${id}-start-date`,
                  countryFrom: `vehicle-${id}-country-from`,
                  vehicleType: `vehicle-${id}-type`,
                  plate: `vehicle-${id}-plate`,
                  vin: `vehicle-${id}-vin`,
                  brend: `vehicle-${id}-brand`,
                  year: `vehicle-${id}-year`,
                  engineType: `vehicle-${id}-engine-type`,
                  engineCapacity: `vehicle-${id}-engine-capacity`,
                  vehiclePower: `vehicle-${id}-power`,
                  powerUnit: `vehicle-${id}-power-unit`,
                  comment: `vehicle-${id}-comment`,
                  docs: `vehicle-${id}-docs`,
                };

                return (
                  <div key={id} className="vehicle">
                    <div className="vehicle__top">
                      <div className="vehicle__title">
                        {t.policy.vehicleBlockTitle} #{idx + 1}
                      </div>

                      {vehicleBlocks.length > 1 ? (
                        <button
                          type="button"
                          className="btn btn--ghost btn--sm"
                          onClick={() => removeVehicle(id)}
                          disabled={status === "loading"}
                        >
                          {t.policy.removeVehicle}
                        </button>
                      ) : null}
                    </div>

                    <div className="row-2">
                      <div className="field">
                        <label htmlFor={fieldIds.period}>{t.policy.period} *</label>
                        <select
                          id={fieldIds.period}
                          name={"vehicles[" + idx + "][period]"}
                          className="input"
                          value={vehiclePrices[id]?.period || ""}
                          required
                          onChange={(e) => {
                            const value = e.currentTarget.value;

                            setVehiclePrices((prev) => ({
                              ...prev,
                              [id]: {
                                vehicleType: prev[id]?.vehicleType || "",
                                period: value,
                              },
                            }));
                          }}
                        >
                          <option value="">{t.notSelected}</option>
                          {t.policy.options.periods.map(function (o) {
                            return (
                              <option key={o.value} value={o.value}>
                                {o.label}
                              </option>
                            );
                          })}
                        </select>
                      </div>

                      <div className="field">
                        <label htmlFor={fieldIds.startDate}>{t.policy.startDate} *</label>
                        <input
                          id={fieldIds.startDate}
                          type="date"
                          name={"vehicles[" + idx + "][startDate]"}
                          className="input"
                          min={minStartDate}
                          required
                        />
                      </div>
                    </div>

                    <div className="row-2">
                      <div className="field">
                        <label htmlFor={fieldIds.countryFrom}>{t.policy.countryFrom} *</label>
                        <select
                          id={fieldIds.countryFrom}
                          name={"vehicles[" + idx + "][countryFrom]"}
                          className="input"
                          defaultValue=""
                          required
                        >
                          <option value="">{t.notSelected}</option>
                          {t.policy.options.countriesFrom.map(function (o) {
                            return (
                              <option key={o.value} value={o.value}>
                                {o.label}
                              </option>
                            );
                          })}
                        </select>
                      </div>

                      <div className="field">
                        <label htmlFor={fieldIds.vehicleType}>{t.policy.vehicleType} *</label>
                        <select
                          id={fieldIds.vehicleType}
                          name={"vehicles[" + idx + "][vehicleType]"}
                          className="input"
                          value={vehiclePrices[id]?.vehicleType || ""}
                          required
                          onChange={(e) => {
                            const value = e.currentTarget.value;

                            setVehiclePrices((prev) => ({
                              ...prev,
                              [id]: {
                                vehicleType: value,
                                period: prev[id]?.period || "",
                              },
                            }));
                          }}
                        >
                          <option value="">{t.notSelected}</option>
                          {t.policy.options.vehicleTypes.map(function (o) {
                            return (
                              <option key={o.value} value={o.value}>
                                {o.label}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>

                    

                    <div className="row-2">
                      <div className="field">
                        <label htmlFor={fieldIds.plate}>{t.policy.vehiclePlate} *</label>
                        <input
                          id={fieldIds.plate}
                          name={"vehicles[" + idx + "][plate]"}
                          className="input"
                          required
                          onChange={(e) => {
                            e.currentTarget.value = formatPlate(e.currentTarget.value);
                          }}
                        />
                      </div>

                      <div className="field">
                        <label htmlFor={fieldIds.vin}>{t.policy.vehicleVin} *</label>
                        <input
                          id={fieldIds.vin}
                          name={"vehicles[" + idx + "][vin]"}
                          className="input"
                          required
                          minLength={17}
                          maxLength={17}
                          pattern="[A-HJ-NPR-Z0-9]{17}"
                          onChange={(e) => {
                            e.currentTarget.value = formatVIN(e.currentTarget.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="row-2">
                      <div className="field">
                        <label htmlFor={fieldIds.brend}>{t.policy.vehicleBrend} *</label>
                        <input
                          id={fieldIds.brend}
                          name={"vehicles[" + idx + "][brend]"}
                          className="input"
                          required
                        />
                      </div>
                        <div className="field">
                          <label htmlFor={fieldIds.year}>{t.policy.vehicleYear} *</label>

                          <input
                            id={fieldIds.year}
                            name={"vehicles[" + idx + "][year]"}
                            className="input"
                            required
                            inputMode="numeric"
                            pattern="^\d{4}$"
                            placeholder="2020"
                            maxLength={4}
                            onChange={(e) => {
                              e.currentTarget.value = e.currentTarget.value
                                .replace(/\D/g, "")
                                .slice(0, 4);
                            }}
                            onBlur={(e) => {
                              const year = Number(e.currentTarget.value);

                              if (year < 1985 || year > new Date().getFullYear() + 1) {
                                e.currentTarget.setCustomValidity("Invalid year");
                              } else {
                                e.currentTarget.setCustomValidity("");
                              }
                            }}
                          />
                        </div>
                      
                    </div>

                    <div className="row-2">
                      <div className="field">
                        <label htmlFor={fieldIds.engineType}>{t.policy.engineType} *</label>
                        <select
                          id={fieldIds.engineType}
                          name={"vehicles[" + idx + "][engineType]"}
                          className="input"
                          defaultValue=""
                          required
                          onChange={(e) => {
                            const value = e.currentTarget.value;

                            setVehiclePrices((prev) => ({
                              ...prev,
                              [id]: {
                                vehicleType: value,
                                period: prev[id]?.period || "",
                              },
                            }));
                          }}
                        >
                          <option value="">{t.notSelected}</option>
                          {t.policy.options.engineTypes.map(function (o) {
                            return (
                              <option key={o.value} value={o.value}>
                                {o.label}
                              </option>
                            );
                          })}
                        </select>
                      </div>

                      <div className="field">
                        <label htmlFor={fieldIds.engineCapacity}>{t.policy.vehicleEngineCapacity} *</label>

                        <input
                          id={fieldIds.engineCapacity}
                          name={"vehicles[" + idx + "][engineCapacity]"}
                          className="input"
                          required
                          inputMode="decimal"
                          pattern="^\d+([.,]\d{1,2})?$"
                          placeholder="3986"
                          onChange={(e) => {
                            let value = e.currentTarget.value;

                            value = value.replace(",", ".");
                            value = value.replace(/[^0-9.]/g, "");

                            const parts = value.split(".");

                            if (parts.length > 2) {
                              value = parts[0] + "." + parts.slice(1).join("");
                            }

                            e.currentTarget.value = value;
                          }}
                        />
                      </div>
                    </div>

                    <div className="row-2">
                      <div className="field">
                        <label htmlFor={fieldIds.vehiclePower}>{t.policy.vehiclePower} *</label>

                        <input
                          id={fieldIds.vehiclePower}
                          name={"vehicles[" + idx + "][vehiclePower]"}
                          className="input"
                          required
                          inputMode="decimal"
                          pattern="^\d+([.,]\d{1,2})?$"
                          placeholder="250"
                          onChange={(e) => {
                            let value = e.currentTarget.value;

                            value = value.replace(",", ".");
                            value = value.replace(/[^0-9.]/g, "");

                            const parts = value.split(".");

                            if (parts.length > 2) {
                              value = parts[0] + "." + parts.slice(1).join("");
                            }

                            e.currentTarget.value = value;
                          }}
                        />
                      </div>


                      <div className="field">
                        <label htmlFor={fieldIds.powerUnit}>{t.policy.powerUnit} *</label>
                        <select
                          id={fieldIds.powerUnit}
                          name={"vehicles[" + idx + "][powerUnit]"}
                          className="input"
                          defaultValue=""
                          required
                          onChange={(e) => {
                            const value = e.currentTarget.value;

                            setVehiclePrices((prev) => ({
                              ...prev,
                              [id]: {
                                vehicleType: value,
                                period: prev[id]?.period || "",
                              },
                            }));
                          }}
                        >
                          <option value="">{t.notSelected}</option>
                          {t.policy.options.powerUnits.map(function (o) {
                            return (
                              <option key={o.value} value={o.value}>
                                {o.label}
                              </option>
                            );
                          })}
                        </select>
                      </div>

                      
                    </div>

                    <div className="field">
                      <label htmlFor={fieldIds.comment}>{t.policy.comment}</label>
                      <textarea
                        id={fieldIds.comment}
                        name={"vehicles[" + idx + "][comment]"}
                        className="input"
                        rows={3}
                      />
                    </div>

                    <div className="field">
                      <label htmlFor={fieldIds.docs}>
                        {t.policy.docsLabel} *
                        {vehicleFileCounts[id] ? " (" + vehicleFileCounts[id] + ")" : ""}
                      </label>
                      <input
                        id={fieldIds.docs}
                        type="file"
                        name={"vehicles[" + idx + "][docs]"}
                        multiple
                        required
                        accept="image/*,application/pdf"
                        className="file"
                        onChange={(e) => {
                          const fl = e.currentTarget.files;
                          if (!fl) return;

                          const ok = validateFiles(
                            fl,
                            forbiddenTypes,
                            t.fileForbidden,
                            maxSingleFileBytes,
                            maxTotalFilesBytes
                          );

                          if (!ok) {
                            e.currentTarget.value = "";
                            setVehicleFileCounts(function (prev) {
                              return { ...prev, [id]: 0 };
                            });
                            return;
                          }

                          setVehicleFileCounts(function (prev) {
                            return { ...prev, [id]: fl.length };
                          });
                        }}
                      />
                      <div className="help">{t.policy.docsHint}</div>
                    </div>
                  </div>
                );
              })}

              {estimatedTotal !== null ? (
                <div className="estimate-box" aria-live="polite">
                  <div className="estimate-box__title">
                    {t.estimate.title} {formatCurrency(estimatedTotal)}.
                  </div>
                  <div className="estimate-box__text">{t.estimate.hint}</div>
                </div>
              ) : null}

              <div className="field">
                <label className="check check--terms">
                  <input
                    type="checkbox"
                    name="termsAccepted"
                    value="yes"
                    required
                    disabled={status === "loading"}
                  />

                  <span className="terms-text">
                    {t.terms.textBefore}{" "}
                    <Link href={`/${props.lang}/rules`} target="_blank" className="terms-link">
                      {t.terms.linkText}
                    </Link>
                    {t.terms.textAfter}
                  </span>
                </label>
              </div>

              <div className="actions">
                <button
                  type="button"
                  className="btn btn--soft"
                  onClick={addVehicle}
                  disabled={status === "loading"}
                >
                  {t.policy.addVehicle}
                </button>
              </div>
            </div>

            {status !== "idle" ? (
              <div id={statusId} role="status" aria-live="polite" className="help help--status">
                {status === "loading" ? t.statusSending : message}
              </div>
            ) : null}

            <div className="actions actions--right">
              {step === 2 ? (
                <button
                  type="button"
                  className="btn btn--soft"
                  onClick={() => setStep(1)}
                  disabled={status === "loading"}
                >
                  {t.steps.back}
                </button>
              ) : null}

              {step === 1 ? (
                <button
                  type="button"
                  className="btn btn--primary"
                  onClick={() => {
                    setStatus("idle");
                    setMessage("");

                    if (!validateStep(1)) return;

                    setStep(2);
                  }}
                  disabled={status === "loading"}
                >
                  {t.steps.next}
                </button>
              ) : (
                <button type="submit" className="btn btn--primary" disabled={status === "loading"}>
                  {status === "loading" ? t.statusSending : t.submit}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        .lead-form-layout {
          display: grid;
          gap: 24px;
          align-items: start;
        }

        .lead-form-layout--with-summary {
          grid-template-columns: minmax(0, 1fr) minmax(280px, 360px);
        }

        .order-summary-card {
          position: sticky;
          top: 96px;
          grid-column: 2;
          grid-row: 1;
          border: 1px solid rgba(0, 63, 57, 0.1);
          border-radius: 22px;
          background: #ffffff;
          box-shadow: 0 24px 58px rgba(0, 47, 43, 0.14);
          overflow: hidden;
        }

        .order-summary-card__head {
          padding: 20px 24px;
          background: var(--brand-primary);
          color: #ffffff;
          font-size: 20px;
          font-weight: 900;
          letter-spacing: -0.02em;
        }

        .order-summary-card__body {
          padding: 24px;
        }

        .order-summary-card__section-title {
          color: var(--text-700);
          font-weight: 900;
          margin-bottom: 12px;
        }

        .order-summary-card__selection {
          display: grid;
          gap: 12px;
          padding: 18px;
          border-radius: 16px;
          background: rgba(123, 174, 55, 0.1);
        }

        .order-summary-card__row,
        .order-summary-card__price-row {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 16px;
          color: var(--text-700);
        }

        .order-summary-card__row b {
          color: var(--brand-primary);
          text-align: end;
          overflow-wrap: anywhere;
        }

        .order-summary-card__divider {
          height: 1px;
          margin: 18px 0;
          background: rgba(0, 63, 57, 0.12);
        }

        .order-summary-card__price-row strong {
          color: var(--brand-primary);
          font-size: clamp(24px, 3vw, 32px);
          line-height: 1;
          letter-spacing: -0.04em;
          white-space: nowrap;
        }

        .lead-form-card {
          position: relative;
          grid-column: 1;
          grid-row: 1;
          border: 1px solid rgba(0, 63, 57, 0.1);
          border-radius: 28px;
          background:
            radial-gradient(720px 320px at 0% 0%, rgba(123, 174, 55, 0.16), transparent 58%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(248, 250, 249, 0.96));
          box-shadow: 0 28px 70px rgba(0, 47, 43, 0.12);
          overflow: hidden;
        }

        .lead-form-card__inner {
          position: relative;
        }

        .panel__hd {
          padding: clamp(20px, 3vw, 28px) clamp(18px, 3vw, 30px) 12px;
          border-bottom: 0;
        }

        .panel__body {
          padding: 0 clamp(18px, 3vw, 30px) clamp(20px, 3vw, 30px);
        }

        .panel__title,
        .legend,
        label,
        .help,
        .block__title,
        .vehicle__title {
          overflow-wrap: anywhere;
          word-break: break-word;
        }

        .panel__title {
          color: var(--brand-primary);
          font-size: clamp(22px, 2.4vw, 30px);
          line-height: 1.15;
          letter-spacing: -0.04em;
        }

        .help--top {
          max-width: 78ch;
          margin: 0 0 16px 0;
          color: var(--text-700);
          font-size: 15px;
          line-height: 1.6;
        }

        .steps {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin: 16px 0 18px;
        }

        .step {
          position: relative;
          border: 1px solid rgba(0, 63, 57, 0.1);
          border-radius: 18px;
          padding: 13px 14px;
          background: rgba(255, 255, 255, 0.76);
          color: var(--text-700);
          opacity: 0.76;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.8);
        }

        .step--active {
          opacity: 1;
          border-color: rgba(123, 174, 55, 0.38);
          background: #ffffff;
          box-shadow: 0 14px 34px rgba(0, 47, 43, 0.08);
        }

        .step--active::before {
          content: "";
          position: absolute;
          inset-inline-start: 14px;
          top: -1px;
          width: 48px;
          height: 3px;
          border-radius: 0 0 999px 999px;
          background: var(--brand-accent);
        }

        .step span {
          display: block;
          font-size: 12px;
          line-height: 1.2;
        }

        .step b {
          display: block;
          margin-top: 4px;
          color: var(--text-900);
          font-size: 14px;
          line-height: 1.25;
        }

        [hidden] {
          display: none !important;
        }

        .hr {
          height: 1px;
          margin: 16px 0;
          background: linear-gradient(90deg, rgba(0, 63, 57, 0.12), rgba(0, 63, 57, 0));
        }

        .legend {
          margin: 0 0 12px 0;
          color: var(--brand-primary);
          font-weight: 900;
          letter-spacing: -0.01em;
        }

        .field {
          margin: 0 0 12px 0;
          min-width: 0;
        }

        label {
          display: block;
          margin: 0 0 6px 0;
          line-height: 1.25;
        }

        .input,
        select,
        textarea,
        .file {
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          min-width: 0;
        }

        .input,
        select,
        textarea {
          border-color: rgba(0, 63, 57, 0.14);
          background: rgba(255, 255, 255, 0.92);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.9);
        }

        .input:focus,
        select:focus,
        textarea:focus {
          border-color: rgba(123, 174, 55, 0.76);
          box-shadow: 0 0 0 4px rgba(123, 174, 55, 0.16);
          outline: 0;
        }

        .file {
          padding: 12px;
          border: 1px dashed rgba(0, 63, 57, 0.22);
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.72);
        }

        .check {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin: 0;
        }

        .check span {
          min-width: 0;
        }

        .check--terms {
          margin-top: 16px;
          align-items: flex-start;
        }

        .terms-text {
          line-height: 1.45;
        }

        .terms-text :global(.terms-link) {
          color: var(--brand-red-dark);
          text-decoration: underline;
          text-decoration-thickness: 2px;
          text-underline-offset: 3px;
          font-weight: 800;
          cursor: pointer;
        }

        .terms-text :global(.terms-link:hover) {
          color: var(--brand-red);
          opacity: 0.9;
        }

        .estimate-box {
          margin-top: 16px;
          padding: 16px 18px;
          border-radius: 18px;
          border: 1px solid rgba(123, 174, 55, 0.3);
          background: var(--brand-accent-soft);
        }

        .estimate-box__title {
          font-weight: 900;
          color: var(--brand-red-dark);
          margin-bottom: 6px;
        }

        .estimate-box__text {
          color: var(--text-700);
          font-size: 13px;
          line-height: 1.45;
        }

        .row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          align-items: start;
        }

        .block {
          margin-top: 14px;
          padding: 16px;
          border: 1px solid rgba(0, 63, 57, 0.08);
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.58);
        }

        .block__title {
          color: var(--brand-primary);
          font-weight: 900;
          margin: 0 0 12px 0;
        }

        .vehicle {
          margin-top: 14px;
          padding: 16px;
          border: 1px solid rgba(0, 63, 57, 0.1);
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.72);
          box-shadow: 0 14px 34px rgba(0, 47, 43, 0.06);
        }

        .vehicle__top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin: 0 0 8px 0;
          min-width: 0;
        }

        .vehicle__title {
          color: var(--brand-primary);
          font-weight: 900;
          line-height: 1.2;
          min-width: 0;
        }

        .btn--sm {
          height: 36px;
          padding: 0 12px;
          border-radius: 12px;
          white-space: nowrap;
          flex: 0 0 auto;
        }

        .actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 10px;
        }

        .actions--right {
          justify-content: flex-end;
        }

        .help--status {
          margin-top: 10px;
        }

        @media (max-width: 900px) {
          .lead-form-layout--with-summary {
            grid-template-columns: 1fr;
          }

          .order-summary-card {
            position: static;
            grid-column: 1;
            grid-row: 1;
          }

          .lead-form-card {
            grid-column: 1;
            grid-row: 2;
          }
        }

        @media (max-width: 520px) {
          .lead-form-card {
            border-radius: 22px;
          }

          .panel__hd {
            padding: 18px 14px 8px;
          }

          .panel__body {
            padding: 0 14px 18px;
          }

          .steps {
            grid-template-columns: 1fr;
          }

          .row-2 {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .btn--sm {
            padding: 0 10px;
          }
        }
      `}</style>
          <SubmissionModal isOpen={outcome !== "none"} onClose={() => setOutcome("none")} title={outcome === "partial" ? "Green Card Agency" : "Green Card Agency"} message={outcome === "partial" ? modalTexts[props.lang].partial : modalTexts[props.lang].success} variant={outcome === "partial" ? "partial" : "success"} />
      </div>
    </div>
  );
}
