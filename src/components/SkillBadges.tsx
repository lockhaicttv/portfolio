import type { CSSProperties } from "react";

import { getSkillIcon } from "@/data/skillIcons";

interface SkillBadgesProps {
  skills: string[];
}

const badgeClass =
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium transition-transform hover:-translate-y-0.5";

function relativeLuminance(hex: string): number {
  const value = Number.parseInt(hex, 16);
  const channels = [(value >> 16) & 0xff, (value >> 8) & 0xff, value & 0xff].map(
    (channel) => {
      const ratio = channel / 255;
      return ratio <= 0.04045 ? ratio / 12.92 : ((ratio + 0.055) / 1.055) ** 2.4;
    },
  );
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

/**
 * Near-black brands (Next.js, Express) disappear on a dark theme, so those
 * glyphs lean further towards the theme text colour while staying recognisable.
 */
function iconTint(brandHex: string): string {
  const brandWeight = relativeLuminance(brandHex) < 0.12 ? 38 : 78;
  return `color-mix(in srgb, var(--brand) ${brandWeight}%, var(--text))`;
}

export default function SkillBadges({ skills }: SkillBadgesProps) {
  if (!skills || skills.length === 0) return null;

  return (
    <ul className="flex flex-wrap gap-2">
      {skills.map((skill) => {
        const icon = getSkillIcon(skill);

        // Skills without a brand mark (infrastructure, soft skills, ad-hoc
        // labels) keep the exact badge dimensions and switch to the site accent.
        if (!icon) {
          return (
            <li
              key={skill}
              className={badgeClass}
              style={{
                backgroundImage:
                  "linear-gradient(135deg, color-mix(in srgb, var(--accent) 16%, transparent), color-mix(in srgb, var(--accent) 30%, transparent))",
                borderColor: "color-mix(in srgb, var(--accent) 50%, var(--border))",
                color: "color-mix(in srgb, var(--accent) 45%, var(--text))",
                boxShadow:
                  "0 2px 10px -4px color-mix(in srgb, var(--accent) 55%, transparent)",
              } as CSSProperties}
            >
              <span>{skill}</span>
            </li>
          );
        }

        const brand = `#${icon.hex}`;
        const brandGlyphTint = iconTint(icon.hex);

        return (
          <li
            key={skill}
            className={badgeClass}
            style={{
              // `--brand` is the colour detected from the library's own icon data.
              "--brand": brand,
              // Brand colour blended with the site's blue accent: tinted fill,
              // a brand-tinted border, and a soft blue glow to make it pop.
              backgroundImage:
                "linear-gradient(135deg, color-mix(in srgb, var(--brand) 28%, transparent), color-mix(in srgb, var(--accent) 34%, transparent))",
              borderColor: "color-mix(in srgb, var(--brand) 55%, var(--accent))",
              color: "color-mix(in srgb, var(--brand) 40%, var(--text))",
              boxShadow:
                "0 2px 10px -4px color-mix(in srgb, var(--accent) 65%, var(--brand))",
            } as CSSProperties}
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
              className="h-4 w-4 shrink-0"
              style={{ color: brandGlyphTint }}
            >
              <path d={icon.path} fill="currentColor" />
            </svg>
            <span>{skill}</span>
          </li>
        );
      })}
    </ul>
  );
}
