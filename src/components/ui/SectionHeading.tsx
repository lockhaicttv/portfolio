import type { ReactNode } from "react";

import SectionEyebrow from "./SectionEyebrow";

interface SectionHeadingProps {
  number: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  id?: string;
  className?: string;
}

/**
 * Shared editorial header: eyebrow on the left, headline and supporting copy
 * aligned to a two-column measure on wide screens.
 */
export default function SectionHeading({
  number,
  eyebrow,
  title,
  description,
  id,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <SectionEyebrow number={number}>{eyebrow}</SectionEyebrow>
      <div className="mt-6 grid gap-6 lg:grid-cols-12 lg:items-end">
        <h2 id={id} className="text-section-title lg:col-span-7">
          {title}
        </h2>
        {description ? (
          <p className="max-w-md text-[0.98rem] leading-relaxed text-muted lg:col-span-5 lg:justify-self-end">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
