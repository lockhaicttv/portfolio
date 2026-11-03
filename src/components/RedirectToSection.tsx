"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Client-side replacement for the old `redirects()` config: static hosting
 * (GitHub Pages) cannot redirect on the server, so old bookmarks are sent to
 * the matching section of the single-page home page from the browser.
 */
export function RedirectToSection({ section }: { section: string }) {
  const router = useRouter();
  const target = `/#${section}`;

  useEffect(() => {
    router.replace(target);
  }, [router, target]);

  return (
    <main className="flex min-h-screen items-center justify-center p-8">
      <p className="text-sm">
        Redirecting to <a href={target}>{target}</a>…
      </p>
    </main>
  );
}
