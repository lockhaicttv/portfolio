import Link from "next/link";
import type { ReactNode } from "react";

import { ArrowRight, ArrowUpRight } from "./Icons";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "sm";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  external?: boolean;
  size?: Size;
  className?: string;
}

const variants: Record<Variant, string> = {
  primary:
    "border border-accent bg-accent text-accent-foreground hover:border-accent-hover hover:bg-accent-hover",
  secondary:
    "border border-accent bg-transparent text-accent hover:bg-accent/10",
  ghost:
    "border border-transparent text-muted hover:text-foreground",
};

const sizes: Record<Size, string> = {
  md: "h-10 px-[18px] text-sm",
  sm: "h-8 px-3.5 text-xs",
};

export default function Button({
  href,
  children,
  variant = "primary",
  arrow = true,
  external,
  size = "md",
  className = "",
}: ButtonProps) {
  const classes = [
    "group/btn inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200",
    sizes[size],
    variants[variant],
    className,
  ].join(" ");

  const content = (
    <>
      <span>{children}</span>
      {arrow ? (
        <span className="transition-transform duration-200 ease-out group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
          {external ? (
            <ArrowUpRight width={15} height={15} />
          ) : (
            <ArrowRight width={15} height={15} />
          )}
        </span>
      ) : null}
    </>
  );

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      {...(external || href.startsWith("http")
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {content}
    </a>
  );
}
