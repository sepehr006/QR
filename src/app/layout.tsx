import type { Metadata } from "next";
import { t } from "@/localization/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: t.meta.title,
  description: t.meta.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
