import Image from "next/image";
import type { CSSProperties } from "react";

import Button from "@/components/ui/Button";
import TechTag from "@/components/ui/TechTag";
import { ArrowDown } from "@/components/ui/Icons";
import PageContainer from "@/components/layout/PageContainer";
import { siteConfig } from "@/data/site";
import { withBasePath } from "@/lib/basePath";

const technologies = ["TypeScript", "NestJS", "React", "PostgreSQL", "Docker"];

const proofPoints = [
  "Full-stack engineering experience",
  "Enterprise logistics systems",
  "MSc in Cloud-Based Software Engineering at VAMK",
];

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div
        aria-hidden
        className="hero-grid pointer-events-none absolute inset-0 -z-10"
      />
      <PageContainer className="relative pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20 xl:pb-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-10">
          <div className="lg:col-span-7 xl:col-span-6">
            <p className="eyebrow hero-in" style={{ "--hero-delay": "40ms" } as CSSProperties}>
              Full-Stack Engineer / Finland
            </p>

            <h1
              className="text-display hero-in mt-7 max-w-[13ch] text-foreground"
              style={{ "--hero-delay": "120ms" } as CSSProperties}
            >
              Engineering systems that scale{" "}
              <span className="text-accent">beyond</span> the interface.
            </h1>

            <p
              className="hero-in mt-7 max-w-xl text-[1.02rem] leading-relaxed text-muted sm:text-lg"
              style={{ "--hero-delay": "220ms" } as CSSProperties}
            >
              I build robust backend architectures, modern web applications, and
              reliable cloud-native systems.
            </p>

            <ul
              className="hero-in mt-8 flex flex-wrap gap-2"
              aria-label="Primary technologies"
              style={{ "--hero-delay": "300ms" } as CSSProperties}
            >
              {technologies.map((technology) => (
                <li key={technology}>
                  <TechTag>{technology}</TechTag>
                </li>
              ))}
            </ul>

            <div
              className="hero-in mt-9 flex flex-col gap-3 sm:flex-row"
              style={{ "--hero-delay": "380ms" } as CSSProperties}
            >
              <Button href="#projects">View My Projects</Button>
              <Button href="#about" variant="secondary" arrow={false}>
                Learn More
              </Button>
            </div>

            <p
              className="hero-in mt-8 inline-flex items-center gap-2.5 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-subtle"
              style={{ "--hero-delay": "440ms" } as CSSProperties}
            >
              <span
                aria-hidden
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
              />
              {siteConfig.availability}
            </p>
          </div>

          <div
            className="hero-in relative lg:col-span-5 xl:col-span-4"
            style={{ "--hero-delay": "260ms" } as CSSProperties}
          >
            <div
              aria-hidden
              className="absolute -right-3 top-8 h-[86%] w-[62%] border border-accent/30 bg-accent/10"
              style={{
                clipPath: "polygon(38% 0, 100% 0, 100% 100%, 0 100%)",
              }}
            />
            <div
              aria-hidden
              className="absolute -left-3 bottom-10 top-24 w-px bg-accent/50"
            />
            <div className="relative aspect-[4/5] overflow-hidden border border-border bg-surface">
              <Image
                src={withBasePath("/images/hero-architecture.jpg")}
                alt="Monochrome architectural facade with repeating geometric forms"
                fill
                priority
                sizes="(max-width: 1023px) 100vw, (max-width: 1279px) 42vw, 33vw"
                className="object-cover grayscale contrast-125 brightness-[0.82]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/15 to-transparent" />
              <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-foreground/80">
                <span>Vaasa / Finland</span>
                <span className="text-subtle">63.09°N</span>
              </div>
            </div>
          </div>

          <aside className="hidden border-l border-border pl-6 xl:col-span-2 xl:flex xl:flex-col xl:justify-end xl:gap-8">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-subtle">
              Proof
            </p>
            {proofPoints.map((point, index) => (
              <div key={point}>
                <span className="font-mono text-[0.62rem] tracking-[0.12em] text-accent">
                  0{index + 1}
                </span>
                <p className="mt-2 text-[0.76rem] leading-relaxed text-muted">
                  {point}
                </p>
              </div>
            ))}
          </aside>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between xl:hidden">
          <ul className="grid gap-5 sm:grid-cols-3 sm:gap-6">
            {proofPoints.map((point, index) => (
              <li key={point} className="flex gap-3">
                <span className="font-mono text-[0.62rem] leading-5 tracking-[0.12em] text-accent">
                  0{index + 1}
                </span>
                <span className="text-[0.78rem] leading-5 text-muted">
                  {point}
                </span>
              </li>
            ))}
          </ul>
          <a
            href="#projects"
            className="hidden shrink-0 items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-subtle transition-colors hover:text-foreground sm:inline-flex"
          >
            Scroll
            <ArrowDown width={14} height={14} />
          </a>
        </div>
      </PageContainer>
    </section>
  );
}
