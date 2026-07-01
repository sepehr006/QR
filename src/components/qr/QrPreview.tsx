"use client";

import type { LucideIcon } from "lucide-react";
import QRCode from "react-qr-code";
import { t } from "@/localization/i18n";
import { colors } from "@/theme/colors";

type QrPreviewProps = {
  CenterIcon?: LucideIcon;
  value: string;
};

export function QrPreview({ CenterIcon, value }: QrPreviewProps) {
  return (
    <div className="flex min-h-[22rem] flex-col items-center justify-center rounded-lg border border-dashed border-surface-line bg-surface-muted p-5 text-center lg:min-h-[18rem]">
      {value ? (
        <div className="relative rounded-lg bg-white p-4 shadow-soft" aria-label={t.preview.qrLabel}>
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
          {CenterIcon ? (
            <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg border border-surface-line bg-white text-mint-700 shadow-sm">
              <CenterIcon aria-hidden="true" size={25} strokeWidth={2.1} />
            </div>
          ) : null}
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
