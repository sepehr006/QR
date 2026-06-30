"use client";

import QRCode from "react-qr-code";
import { t } from "@/localization/i18n";
import { colors } from "@/theme/colors";

type QrPreviewProps = {
  value: string;
};

export function QrPreview({ value }: QrPreviewProps) {
  return (
    <div className="flex min-h-[22rem] flex-col items-center justify-center rounded-lg border border-dashed border-surface-line bg-surface-muted p-5 text-center">
      {value ? (
        <div className="rounded-lg bg-white p-4 shadow-soft" aria-label={t.preview.qrLabel}>
          <QRCode
            bgColor={colors.surface.raised}
            fgColor={colors.ink[950]}
            id="generated-qr-code"
            level="M"
            size={232}
            title={t.preview.qrLabel}
            value={value}
            viewBox="0 0 256 256"
          />
        </div>
      ) : (
        <div className="max-w-xs space-y-2">
          <h2 className="text-lg font-bold text-ink-950">{t.preview.emptyTitle}</h2>
          <p className="text-sm leading-7 text-ink-600">{t.preview.emptyText}</p>
        </div>
      )}
    </div>
  );
}
