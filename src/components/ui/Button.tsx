import Link from "next/link";
import type { ReactNode } from "react";

import { ArrowRight, ArrowUpRight } from "./Icons";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  external?: boolean;
  className?: string;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-foreground hover:bg-accent-hover border border-accent hover:border-accent-hover",
  secondary:
    "border border-border bg-transparent text-foreground hover:border-subtle hover:bg-surface",
  ghost:
    "border border-transparent text-muted hover:text-foreground",
};

export default function Button({
  href,
  children,
  variant = "primary",
  arrow = true,
  external,
  className = "",
}: ButtonProps) {
  const classes = [
    "group/btn inline-flex h-11 items-center justify-center gap-2.5 rounded-[2px] px-5 text-sm font-medium transition-colors duration-200",
    variants[variant],
    className,
  ].join(" ");

  const content = (
    <>
      <span>{children}</span>
      {arrow ? (
        <span className="transition-transform duration-200 ease-out group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
          {external ? (
            <ArrowUpRight width={16} height={16} />
          ) : (
            <ArrowRight width={16} height={16} />
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
