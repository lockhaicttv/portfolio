import Image from "next/image";

import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { DownloadIcon } from "@/components/ui/Icons";
import { about } from "@/data/about";
import { siteConfig } from "@/data/site";
import { withBasePath } from "@/lib/basePath";

/** Left half of the closing band; ContactSection sits to its right on wide screens. */
export default function AboutSection() {
  return (
    <div
      id="about"
      className="bleed-start grid scroll-mt-20 gap-8 py-10 pr-[var(--gutter)] md:grid-cols-[minmax(0,300px)_1fr] xl:pr-10"
      data-reveal
    >
      <div>
        <SectionEyebrow number="04">About Me</SectionEyebrow>
        <h2 className="mt-3 max-w-[300px] text-[1.3rem] font-semibold leading-[1.2]">
          {about.headline}
        </h2>
      </div>

      <div className="relative md:border-l md:border-border md:pl-8 md:vline-glow-l [--glow-delay:2.4s]">
        <p className="max-w-[340px] text-sm leading-relaxed text-[#d6d6d6]">
          {about.summary}
        </p>

        <ul className="mt-5 space-y-3">
          {about.education.map((entry) => (
            <li key={entry.degree} className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-md bg-foreground/95 p-1">
                <Image
                  src={withBasePath(entry.logo)}
                  alt={`${entry.institution} logo`}
                  width={64}
                  height={64}
                  unoptimized
                  className="h-full w-full object-contain"
                />
              </span>
              <div className="min-w-0">
                <p className="text-[0.8rem] font-medium leading-snug">
                  {entry.degree}
                </p>
                <p className="text-[0.72rem] text-muted">
                  {entry.institution.replace(/ \(.*\)$/, "")} · {entry.period}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <a
          href={withBasePath(siteConfig.resumeUrl)}
          className="text-link mt-6"
        >
          Download CV
          <DownloadIcon width={15} height={15} />
        </a>
      </div>
    </div>
  );
}
