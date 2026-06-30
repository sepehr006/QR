import { fa } from "./fa";

export const messages = {
  fa,
} as const;

export type Language = keyof typeof messages;
export type Messages = (typeof messages)["fa"];

export const t = messages.fa;
