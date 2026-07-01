import { APP_CONFIG } from "@/config/app";

export const fa = {
  meta: {
    title: "ساخت QR Code فارسی",
    description: "ابزار ساده و سریع برای ساخت QR Code از متن یا لینک",
  },
  app: {
    name: "سازنده QR",
    eyebrow: "نسخه وب",
    headline: "QR Code خود را سریع و تمیز بسازید",
    subtitle: "متن یا لینک را وارد کنید و خروجی قابل دانلود بگیرید.",
  },
  form: {
    label: "متن یا لینک",
    placeholder: "https://example.com یا هر متن دلخواه",
    helper: `حداکثر ${APP_CONFIG.maxQrTextLength.toLocaleString("fa-IR")} کاراکتر`,
    generate: "ساخت QR",
    clear: "پاک کردن",
    countSeparator: "از",
  },
  validation: {
    required: "برای ساخت QR باید متن یا لینک وارد کنید.",
    maxLength: `متن واردشده نباید بیشتر از ${APP_CONFIG.maxQrTextLength.toLocaleString("fa-IR")} کاراکتر باشد.`,
  },
  preview: {
    title: "پیش‌نمایش QR",
    emptyTitle: "هنوز QR ساخته نشده است",
    emptyText: "بعد از وارد کردن متن معتبر، QR اینجا نمایش داده می‌شود.",
    qrLabel: "کد QR ساخته‌شده",
  },
  actions: {
    copy: "کپی متن",
    copied: "متن کپی شد.",
    copyFailed: "کپی متن انجام نشد.",
    download: "دانلود SVG",
    downloaded: "فایل QR آماده دانلود شد.",
    downloadFailed: "دانلود QR انجام نشد.",
  },
  footer: {
    version: "ورژن 1.1",
    credit: "ساخته شده توسط Sepehr Labs",
  },
} as const;
