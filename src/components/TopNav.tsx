"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, siteConfig } from "@/data/site";
import ThemeToggle from "./ThemeToggle";

/** Depth of each route in the navigation hierarchy drives slide direction. */
const ROUTE_DEPTH: Record<string, number> = {
  "/": 0,
  "/experience": 1,
  "/projects": 2,
  "/contact": 3,
  "/about": 4,
};

export default function TopNav() {
  const pathname = usePathname();
  const currentDepth = ROUTE_DEPTH[pathname] ?? 0;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ viewTransitionName: "site-header" }}
    >
      <div className="backdrop-blur-md bg-[color:var(--bg)]/70 border-b border-[color:var(--border)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center gap-2 sm:gap-3">
          <Link
            href="/"
            transitionTypes={["nav-back"]}
            className="shrink-0 font-semibold tracking-wide py-1.5"
          >
            {siteConfig.shortName}
          </Link>
          <div className="flex-1 min-w-0 overflow-x-auto no-scrollbar">
            <nav
              aria-label="Primary"
              className="flex w-max ml-auto items-center gap-1 sm:gap-2"
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                const direction =
                  link.depth > currentDepth
                    ? "nav-forward"
                    : link.depth < currentDepth
                      ? "nav-back"
                      : undefined;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    transitionTypes={direction ? [direction] : undefined}
                    className={`shrink-0 px-3 py-1.5 rounded-full text-sm transition-colors ${
                      isActive
                        ? "bg-[color:var(--accent)] text-white"
                        : "hover:text-[color:var(--accent)]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
