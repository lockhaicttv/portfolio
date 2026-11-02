import type { ReactNode } from "react";
import { ViewTransition } from "react";
import SiteBackdrop from "./SiteBackdrop";
import TopNav from "./TopNav";
import { pageTransition } from "./viewTransition";

interface PageShellProps {
  children: ReactNode;
  /** Extra classes for the centered max-w-7xl container (layout variants per page). */
  className?: string;
}

export default function PageShell({ children, className = "" }: PageShellProps) {
  return (
    <>
      <SiteBackdrop />
      <div className="relative z-10">
        <TopNav />
        <ViewTransition
          enter={pageTransition.enter}
          exit={pageTransition.exit}
          default="none"
        >
          <div className="pt-14">
            <div
              className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-[calc(100dvh-56px)] flex flex-col ${className}`}
            >
              {children}
            </div>
          </div>
        </ViewTransition>
      </div>
    </>
  );
}
