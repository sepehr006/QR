"use client";

import { Clipboard, Download } from "lucide-react";
import { Button } from "@/components/common/Button";
import { t } from "@/localization/i18n";

type QrActionsProps = {
  canAct: boolean;
  onCopy: () => void;
  onDownload: () => void;
};

export function QrActions({ canAct, onCopy, onDownload }: QrActionsProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <Button
        disabled={!canAct}
        icon={<Clipboard aria-hidden="true" size={18} />}
        onClick={onCopy}
        variant="secondary"
      >
        {t.actions.copy}
      </Button>
      <Button
        disabled={!canAct}
        icon={<Download aria-hidden="true" size={18} />}
        onClick={onDownload}
      >
        {t.actions.download}
      </Button>
    </div>
  );
}
