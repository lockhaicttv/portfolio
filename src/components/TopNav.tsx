"use client";

import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/data/site";
import ThemeToggle from "./ThemeToggle";

/** Keep the highlighted section in sync with the fixed header. */
const HEADER_OFFSET = 96;

export default function TopNav() {
  const [activeHref, setActiveHref] = useState("");

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    const updateActiveSection = () => {
      let current = "";

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= HEADER_OFFSET) {
          current = `#${section.id}`;
        }
      }

      // The last section can be shorter than the viewport, so make sure it
      // becomes active when the page is scrolled all the way down.
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
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ viewTransitionName: "site-header" }}
    >
      <div className="backdrop-blur-md bg-[color:var(--bg)]/70 border-b border-[color:var(--border)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center gap-2 sm:gap-3">
          <a
            href="#about"
            className="shrink-0 font-semibold tracking-wide py-1.5"
          >
            {siteConfig.shortName}
          </a>
          <div className="flex-1 min-w-0 overflow-x-auto no-scrollbar">
            <nav
              aria-label="Primary"
              className="flex w-max ml-auto items-center gap-1 sm:gap-2"
            >
              {navLinks.map((link) => {
                const isActive = activeHref === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? "location" : undefined}
                    className={`shrink-0 px-3 py-1.5 rounded-full text-sm transition-colors ${
                      isActive
                        ? "bg-[color:var(--accent)] text-white"
                        : "hover:text-[color:var(--accent)]"
                    }`}
                  >
                    {link.label}
                  </a>
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
