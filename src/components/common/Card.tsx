import type { HTMLAttributes } from "react";

export function Card({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={`rounded-lg border border-surface-line bg-surface-raised p-5 shadow-soft sm:p-6 ${className}`}
      {...props}
    />
  );
}
