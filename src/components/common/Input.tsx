import type { TextareaHTMLAttributes } from "react";

type InputProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  helper?: string;
  error?: string;
};

export function Input({ error, helper, id, label, className = "", ...props }: InputProps) {
  const helperId = `${id}-helper`;
  const errorId = `${id}-error`;

  return (
    <div className="space-y-2">
      <label className="block text-sm font-bold text-ink-950" htmlFor={id}>
        {label}
      </label>
      <textarea
        aria-describedby={error ? errorId : helper ? helperId : undefined}
        aria-invalid={Boolean(error)}
        className={`min-h-36 w-full resize-y rounded-lg border bg-white px-4 py-3 text-base leading-8 text-ink-950 outline-none transition placeholder:text-ink-600/70 focus:border-mint-700 focus:ring-4 focus:ring-mint-100 ${
          error ? "border-coral-500" : "border-surface-line"
        } ${className}`}
        dir="auto"
        id={id}
        {...props}
      />
      {error ? (
        <p className="text-sm font-medium text-coral-500" id={errorId}>
          {error}
        </p>
      ) : helper ? (
        <p className="text-sm text-ink-600" id={helperId}>
          {helper}
        </p>
      ) : null}
    </div>
  );
}
