"use client";

import { useEffect, useState } from "react";

import SideRays from "./SideRays";

/**
 * Full-page background: React Bits "Side Rays" fixed behind all page content.
 * The shader needs to know whether it sits on the dark or light palette, so this
 * wrapper follows `<html data-theme>` (same source of truth as ThemeToggle).
 */
export default function SiteBackdrop() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const sync = () => setLight(root.getAttribute("data-theme") === "light");
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(root, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <SideRays
        rayColor1="#d97757"
        rayColor2="#ffc46b"
        origin="top-right"
        intensity={light ? 1.6 : 3}
        spread={2.2}
        speed={1.4}
        falloff={2}
        glow={2}
        density={6}
        opacity={light ? 0.35 : 0.9}
        lightMode={light}
        followMouse
        mouseInfluence={0.35}
      />
    </div>
  );
}
