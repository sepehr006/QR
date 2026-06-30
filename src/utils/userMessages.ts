export type ToastKind = "success" | "error";

export type ToastMessage = {
  kind: ToastKind;
  text: string;
};
