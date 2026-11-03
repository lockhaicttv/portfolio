"use client";

import { useEffect, useRef, useState } from "react";

import { navLinks, siteConfig } from "@/data/site";
import { withBasePath } from "@/lib/basePath";
import { ArrowUpRight, CloseIcon, MenuIcon } from "@/components/ui/Icons";

/** Keep the highlighted section in sync with the fixed header. */
const HEADER_OFFSET = 120;

interface NavbarProps {
  /**
   * `home` uses in-page anchors and scroll spy. `page` links back to the
   * matching section on the home page and leaves the nav unhighlighted.
   */
  variant?: "home" | "page";
}

export default function Navbar({ variant = "home" }: NavbarProps) {
  const isHome = variant === "home";
  const [activeHref, setActiveHref] = useState<string | null>(
    isHome ? "#home" : null,
  );
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const hrefFor = (hash: string) =>
    isHome ? hash : withBasePath(`/${hash}`);

  useEffect(() => {
    if (!isHome) return;

    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    const updateActiveSection = () => {
      let current = "#home";

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= HEADER_OFFSET) {
          current = `#${section.id}`;
        }
      }

      // Short final sections still need to become active at the page bottom.
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      ) {
        current = navLinks[navLinks.length - 1].href;
      }

      setActiveHref(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [isHome]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md"
        style={{ viewTransitionName: "site-header" }}
      >
        <div className="page-container grid h-[72px] grid-cols-[1fr_auto_1fr] items-center gap-4">
          <a
            href={isHome ? "#home" : withBasePath("/")}
            aria-label={`L.C. — ${siteConfig.displayName} home`}
            className="justify-self-start text-lg font-semibold tracking-[-0.02em]"
          >
            L<span className="text-accent">.</span>C
            <span className="text-accent">.</span>
          </a>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = isHome && activeHref === link.href;
                return (
                  <li key={link.href}>
                    <a
                      href={hrefFor(link.href)}
                      aria-current={isActive ? "location" : undefined}
                      className={`relative inline-flex py-2 text-[0.82rem] font-medium tracking-[0.01em] transition-colors ${
                        isActive
                          ? "text-foreground"
                          : "text-muted hover:text-foreground"
                      }`}
                    >
                      {link.label}
                      <span
                        aria-hidden
                        className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-accent transition-transform duration-300 ease-out ${
                          isActive ? "scale-x-100" : "scale-x-0"
                        }`}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center justify-self-end gap-2">
            <a
              href={hrefFor("#contact")}
              className="group/cta hidden h-10 items-center gap-2 rounded-[2px] border border-border px-4 text-[0.82rem] font-medium transition-colors hover:border-subtle hover:bg-surface sm:inline-flex"
            >
              Let&apos;s Talk
              <ArrowUpRight
                width={15}
                height={15}
                className="text-accent transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
              />
            </a>

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="inline-flex h-10 w-10 items-center justify-center rounded-[2px] border border-border text-foreground transition-colors hover:bg-surface lg:hidden"
            >
              <span className="sr-only">
                {open ? "Close navigation menu" : "Open navigation menu"}
              </span>
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        <div
          id="mobile-nav"
          hidden={!open}
          className="border-t border-border bg-background lg:hidden"
        >
          <nav aria-label="Mobile" className="page-container py-4">
            <ul className="flex flex-col">
              {navLinks.map((link, index) => {
                const isActive = isHome && activeHref === link.href;
                return (
                  <li key={link.href}>
                    <a
                      href={hrefFor(link.href)}
                      onClick={() => setOpen(false)}
                      aria-current={isActive ? "location" : undefined}
                      className={`flex min-h-12 items-center justify-between border-b border-border/60 text-[0.95rem] ${
                        isActive ? "text-accent" : "text-muted"
                      }`}
                    >
                      {link.label}
                      <span className="font-mono text-[0.65rem] tracking-[0.16em] text-subtle">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
            <a
              href={hrefFor("#contact")}
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex h-11 w-full items-center justify-center gap-2 rounded-[2px] bg-accent text-sm font-semibold text-accent-foreground"
            >
              Let&apos;s Talk
              <ArrowUpRight width={16} height={16} />
            </a>
          </nav>
        </div>
      </header>
      <div aria-hidden className="h-[72px]" />
    </>
  );
}
