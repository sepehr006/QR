"use client";

import { FormEvent, useEffect, useState } from "react";
import { Eraser, QrCode } from "lucide-react";
import { Button } from "@/components/common/Button";
import { Card } from "@/components/common/Card";
import { Input } from "@/components/common/Input";
import { Toast } from "@/components/common/Toast";
import { APP_CONFIG } from "@/config/app";
import { t } from "@/localization/i18n";
import { downloadSvgElement } from "@/utils/downloadQr";
import type { ToastMessage } from "@/utils/userMessages";
import { validateQrText } from "@/utils/validators";
import { QrActions } from "./QrActions";
import { QrPreview } from "./QrPreview";

export function QrGenerator() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [qrValue, setQrValue] = useState("");
  const [toast, setToast] = useState<ToastMessage | null>(null);

  useEffect(() => {
    if (!toast) {
      return;
    }

    const timeoutId = window.setTimeout(() => setToast(null), 2600);
    return () => window.clearTimeout(timeoutId);
  }, [toast]);

  function showToast(message: ToastMessage) {
    setToast(message);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = validateQrText(input);

    if (!result.isValid) {
      setError(result.message);
      setQrValue("");
      return;
    }

    setError("");
    setQrValue(result.value);
  }

  function handleClear() {
    setInput("");
    setError("");
    setQrValue("");
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(qrValue);
      showToast({ kind: "success", text: t.actions.copied });
    } catch {
      showToast({ kind: "error", text: t.actions.copyFailed });
    }
  }

  function handleDownload() {
    const svgElement = document.getElementById("generated-qr-code");

    if (!(svgElement instanceof SVGSVGElement)) {
      showToast({ kind: "error", text: t.actions.downloadFailed });
      return;
    }

    downloadSvgElement(svgElement, "qr-code.svg");
    showToast({ kind: "success", text: t.actions.downloaded });
  }

  return (
    <main className="min-h-screen px-4 py-6 sm:px-6 lg:h-screen lg:min-h-0 lg:overflow-hidden lg:px-8 lg:py-4">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-6xl flex-col justify-center gap-6 lg:h-full lg:min-h-0 lg:gap-4">
        <header className="mx-auto max-w-3xl space-y-4 text-center lg:space-y-3">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-surface-line bg-surface-raised px-4 py-2 text-sm font-bold text-mint-700 shadow-sm">
            <QrCode aria-hidden="true" size={18} />
            <span>{t.app.eyebrow}</span>
          </div>
          <div className="space-y-3">
            <p className="text-sm font-bold text-ink-600">{APP_CONFIG.name}</p>
            <h1 className="mx-auto max-w-2xl text-4xl font-black leading-tight text-ink-950 sm:text-5xl lg:text-4xl">
              {t.app.headline}
            </h1>
            <p className="mx-auto max-w-xl text-base leading-8 text-ink-600 sm:text-lg">{t.app.subtitle}</p>
          </div>
        </header>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_25rem]">
          <Card>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <Input
                error={error}
                helper={`${input.length.toLocaleString("fa-IR")} ${t.form.countSeparator} ${APP_CONFIG.maxQrTextLength.toLocaleString("fa-IR")} - ${t.form.helper}`}
                id="qr-text"
                label={t.form.label}
                maxLength={APP_CONFIG.maxQrTextLength + 1}
                onChange={(event) => {
                  setInput(event.target.value);
                  if (error) {
                    setError("");
                  }
                }}
                placeholder={t.form.placeholder}
                value={input}
              />

              <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                <Button icon={<QrCode aria-hidden="true" size={18} />} type="submit">
                  {t.form.generate}
                </Button>
                <Button
                  icon={<Eraser aria-hidden="true" size={18} />}
                  onClick={handleClear}
                  variant="ghost"
                >
                  {t.form.clear}
                </Button>
              </div>
            </form>
          </Card>

          <Card className="space-y-4">
            <h2 className="text-xl font-black text-ink-950">{t.preview.title}</h2>
            <QrPreview value={qrValue} />
            <QrActions canAct={Boolean(qrValue)} onCopy={handleCopy} onDownload={handleDownload} />
          </Card>
        </div>

        <footer className="space-y-1 text-center text-sm font-semibold text-ink-600">
          <p>{t.footer.version}</p>
          <p>{t.footer.credit}</p>
        </footer>
      </div>
      <Toast message={toast} />
    </main>
  );
}
