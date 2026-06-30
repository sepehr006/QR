import type { ToastMessage } from "@/utils/userMessages";

type ToastProps = {
  message: ToastMessage | null;
};

export function Toast({ message }: ToastProps) {
  if (!message) {
    return null;
  }

  const tone =
    message.kind === "success"
      ? "border-mint-600 bg-mint-100 text-ink-950"
      : "border-coral-500 bg-coral-100 text-ink-950";

  return (
    <div
      className={`fixed bottom-5 left-1/2 z-20 w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 rounded-lg border px-4 py-3 text-sm font-semibold shadow-soft sm:left-6 sm:translate-x-0 ${tone}`}
      role="status"
    >
      {message.text}
    </div>
  );
}
