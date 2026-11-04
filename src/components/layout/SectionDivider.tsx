import type { CSSProperties } from "react";

interface SectionDividerProps {
  /** Seconds to offset the sweep, so stacked dividers cascade instead of firing together. */
  delay?: number;
}

/** Hairline between sections with an amber streak that sweeps across it. */
export default function SectionDivider({ delay = 0 }: SectionDividerProps) {
  return (
    <div
      aria-hidden
      className="divider-glow"
      style={{ "--glow-delay": `${delay}s` } as CSSProperties}
    />
  );
}
