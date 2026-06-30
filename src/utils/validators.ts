import { APP_CONFIG } from "@/config/app";
import { t } from "@/localization/i18n";

export type ValidationResult =
  | { isValid: true; value: string }
  | { isValid: false; message: string };

export function validateQrText(input: string): ValidationResult {
  const value = input.trim();

  if (!value) {
    return { isValid: false, message: t.validation.required };
  }

  if (value.length > APP_CONFIG.maxQrTextLength) {
    return { isValid: false, message: t.validation.maxLength };
  }

  return { isValid: true, value };
}
