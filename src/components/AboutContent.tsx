import Image from "next/image";

import { about } from "@/data/about";
import { siteConfig } from "@/data/site";
import { withBasePath } from "@/lib/basePath";
import Avatar from "./Avatar";
import SkillBadges from "./SkillBadges";
import SocialIcons from "./SocialIcons";

export default function AboutContent() {
  return (
    <>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,340px)_1fr] lg:items-start lg:gap-12">
        <div className="flex flex-col items-start gap-5">
          <Avatar />
          <div>
            <h1 className="text-3xl font-serif-heading sm:text-4xl">
              {siteConfig.name.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-[color:var(--accent)]">
                {siteConfig.name.split(" ").slice(-1)[0]}
              </span>
            </h1>
            <p className="mt-2 text-lg">{siteConfig.role}</p>
            <p className="mt-2 text-sm leading-relaxed opacity-90">
              {siteConfig.tagline}
            </p>
            <div className="mt-4">
              <SocialIcons />
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-3xl font-serif-heading sm:text-4xl">
            About
          </h2>
          <p className="text-lg leading-relaxed font-serif-heading sm:text-xl">
            {about.intro}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#experience"
              className="px-4 py-2 rounded-full bg-[color:var(--accent)] text-[color:var(--accent-contrast)] hover:bg-[color:var(--accent-dark)] transition-colors"
            >
              View experience
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] hover:text-[color:var(--accent)] transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)]/40 p-5">
          <h3 className="mb-3 text-xl font-serif-heading">Skills</h3>
          <SkillBadges skills={about.skills} />
        </div>

        <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)]/40 p-5">
          <h3 className="mb-3 text-xl font-serif-heading">
            Infrastructure &amp; DevOps
          </h3>
          <SkillBadges skills={about.infrastructure} />
        </div>

        <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)]/40 p-5">
          <h3 className="mb-3 text-xl font-serif-heading">Soft skills</h3>
          <SkillBadges skills={about.softSkills} />
        </div>

        <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)]/40 p-5">
          <h3 className="mb-3 text-xl font-serif-heading">Education</h3>
          <ul className="space-y-4">
            {about.education.map((entry) => (
              <li key={entry.degree} className="flex items-start gap-3">
                <span className="flex h-12 w-16 shrink-0 items-center justify-center">
                  <Image
                    src={withBasePath(entry.logo)}
                    alt={`${entry.institution} logo`}
                    width={128}
                    height={96}
                    unoptimized
                    className="h-full w-full object-contain"
                  />
                </span>
                <div>
                  <p className="font-medium">{entry.degree}</p>
                  <p className="text-sm opacity-90">
                    {entry.institution}
                    {entry.location ? `, ${entry.location}` : ""} · {entry.period}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)]/40 p-5">
        <h3 className="mb-3 text-xl font-serif-heading">Awards</h3>
        <ul className="grid gap-2 sm:grid-cols-2">
          {about.awards.map((award) => (
            <li key={award} className="flex gap-2 text-sm">
              <span aria-hidden className="text-[color:var(--accent)]">
                •
              </span>
              <span>{award}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
