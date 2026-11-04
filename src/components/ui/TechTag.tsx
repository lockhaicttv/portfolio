import type { ReactNode } from "react";

interface TechTagProps {
  children: ReactNode;
  size?: "md" | "sm";
  className?: string;
}

const sizes = {
  md: "px-3.5 py-1.5 text-[0.8125rem]",
  sm: "px-2.5 py-1 text-[0.72rem]",
};

/** Rounded technology chip. */
export default function TechTag({
  children,
  size = "md",
  className = "",
}: TechTagProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-border bg-[#1d1d1d] leading-none text-[#dcdcdc] ${sizes[size]} ${className}`}
    >
      {children}
    </span>
  );
}
