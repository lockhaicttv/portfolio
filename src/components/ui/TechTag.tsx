import type { ReactNode } from "react";

interface TechTagProps {
  children: ReactNode;
  className?: string;
}

/** Quiet monospace chip. Amber is reserved for state, not labels. */
export default function TechTag({ children, className = "" }: TechTagProps) {
  return (
    <span
      className={`inline-flex items-center rounded-[2px] border border-border bg-surface px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-[0.08em] text-muted ${className}`}
    >
      {children}
    </span>
  );
}
