import Image from "next/image";

import PageContainer from "@/components/layout/PageContainer";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { withBasePath } from "@/lib/basePath";
import { about } from "@/data/about";

export default function AboutSection() {
  return (
    <section id="about" className="section-shell scroll-mt-20 border-t border-border">
      <PageContainer>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5" data-reveal>
            <div className="relative overflow-hidden border border-border bg-surface">
              <div className="relative aspect-[4/3]">
                <Image
                  src={withBasePath("/images/about-workspace.jpg")}
                  alt="A developer workspace with code open on a monitor"
                  fill
                  sizes="(max-width: 1023px) 100vw, 40vw"
                  className="object-cover grayscale contrast-110 brightness-[0.72]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
              </div>
              <p className="absolute inset-x-5 bottom-4 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-foreground/80">
                Systems thinking · Vaasa, Finland
              </p>
            </div>

            <dl className="mt-6 grid gap-0 sm:grid-cols-3">
              {about.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="border-t border-border py-3 sm:border-l sm:border-t-0 sm:px-4 sm:py-0 sm:first:border-l-0 sm:first:pl-0"
                >
                  <dt className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-subtle">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-[0.8rem] leading-relaxed text-foreground/90">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-7" data-reveal>
            <SectionEyebrow number="04">About me</SectionEyebrow>
            <h2 className="text-section-title mt-6 max-w-xl">
              {about.headline}
            </h2>

            <div className="mt-6 max-w-2xl space-y-4 text-[0.92rem] leading-relaxed text-muted">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>

            <ul className="mt-8 grid gap-4 border-t border-border pt-6 sm:grid-cols-3">
              {about.principles.map((principle, index) => (
                <li key={principle.title}>
                  <span className="font-mono text-[0.6rem] tracking-[0.14em] text-accent">
                    0{index + 1}
                  </span>
                  <h3 className="mt-2 text-[0.84rem] font-semibold">
                    {principle.title}
                  </h3>
                  <p className="mt-1.5 text-[0.76rem] leading-relaxed text-subtle">
                    {principle.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="mt-14 grid gap-8 border-t border-border pt-10 lg:grid-cols-12"
          data-reveal
        >
          <div className="lg:col-span-4">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-subtle">
              Education
            </p>
            <p className="mt-3 max-w-xs text-[0.82rem] leading-relaxed text-muted">
              Formal grounding in information technology, now focused on
              cloud-native software engineering.
            </p>
          </div>

          <ul className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
            {about.education.map((entry) => (
              <li key={entry.degree} className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-[2px] border border-border bg-foreground/95 p-1.5">
                  <Image
                    src={withBasePath(entry.logo)}
                    alt={`${entry.institution} logo`}
                    width={80}
                    height={80}
                    unoptimized
                    className="h-full w-full object-contain"
                  />
                </span>
                <div>
                  <h3 className="text-[0.88rem] font-semibold leading-snug">
                    {entry.degree}
                  </h3>
                  <p className="mt-1 text-[0.76rem] leading-relaxed text-muted">
                    {entry.institution} · {entry.location}
                  </p>
                  <p className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.1em] text-subtle">
                    {entry.period}
                  </p>
                  <p className="mt-2 text-[0.74rem] leading-relaxed text-subtle">
                    {entry.note}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <ul className="mt-10 flex flex-col gap-2 border-t border-border pt-5 sm:flex-row sm:flex-wrap sm:gap-x-8">
          {about.awards.map((award) => (
            <li
              key={award}
              className="flex items-center gap-2 text-[0.72rem] text-subtle"
            >
              <span aria-hidden className="h-1 w-1 rounded-full bg-accent" />
              {award}
            </li>
          ))}
        </ul>
      </PageContainer>
    </section>
  );
}
