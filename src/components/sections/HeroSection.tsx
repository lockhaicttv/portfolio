import Image from "next/image";
import type { CSSProperties, ComponentType, SVGProps } from "react";

import Button from "@/components/ui/Button";
import TechTag from "@/components/ui/TechTag";
import {
  BriefcaseIcon,
  CodeIcon,
  GraduationIcon,
} from "@/components/ui/Icons";
import PageContainer from "@/components/layout/PageContainer";
import { withBasePath } from "@/lib/basePath";

const technologies = ["TypeScript", "NestJS", "React", "PostgreSQL", "Docker"];

/**
 * Cut-out monochrome portrait with a transparent background. Set to null to
 * let the architecture image fill the slot instead.
 */
const PORTRAIT_SRC: string | null = "/images/portrait-winter.webp";

const stats: {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  caption: string;
}[] = [
  { icon: BriefcaseIcon, title: "~5 Years", caption: "Experience" },
  { icon: CodeIcon, title: "Full-Stack", caption: "Engineer" },
  { icon: GraduationIcon, title: "Cloud Engineering", caption: "MSc @ VAMK" },
];

const delay = (ms: number) => ({ "--hero-delay": `${ms}ms` }) as CSSProperties;

export default function HeroSection() {
  return (
    <section
      id="home"
      className="hero-backdrop relative overflow-hidden border-b border-border lg:min-h-[560px]"
    >
      {/* Visual composition — decorative, faded behind the copy on small screens. */}
      <div
        aria-hidden
        className="hero-in pointer-events-none absolute inset-y-0 right-0 w-full opacity-20 lg:w-[62%] lg:opacity-100"
        style={delay(200)}
      >
        <div className="hero-stripe hidden lg:block -top-[180px] right-[28%] h-[900px] w-[120px] opacity-95" />
        <div className="hero-stripe hidden lg:block right-[44%] top-5 h-[520px] w-[70px] opacity-90" />

        <div
          className={`hero-building absolute bottom-0 bg-surface ${
            PORTRAIT_SRC
              ? "left-[18%] h-[80%] w-[34%] opacity-80 xl:left-[4%]"
              : "left-[22%] h-[84%] w-[40%]"
          }`}
        >
          <Image
            src={withBasePath("/images/hero-architecture.jpg")}
            alt=""
            fill
            priority
            sizes="(max-width: 1023px) 60vw, 26vw"
            className="object-cover grayscale contrast-125 brightness-[0.7]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
        </div>

        {PORTRAIT_SRC ? (
          // Desktop only: on narrow screens it would sit behind the copy.
          // lg anchors right to clear the text; xl centres it in front of the
          // building and stops short of the stats column.
          <div className="absolute bottom-0 right-0 hidden h-[73%] w-[47%] lg:block xl:left-[11.5%] xl:right-auto xl:w-[51%]">
            <Image
              src={withBasePath(PORTRAIT_SRC)}
              alt=""
              fill
              priority
              sizes="(max-width: 1279px) 35vw, 40vw"
              className="object-contain object-bottom"
            />
          </div>
        ) : null}

        {/* Blend the visual into the section below. */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#121212] to-transparent" />
      </div>

      <PageContainer className="relative z-10">
        <div className="max-w-[540px] pb-14 pt-[120px] sm:pb-16 lg:pb-20 lg:pt-[132px]">
          <p className="eyebrow hero-in" style={delay(40)}>
            Full-Stack Engineer&nbsp;&nbsp;/&nbsp;&nbsp;Finland
          </p>

          <h1
            className="text-display hero-in mt-4 max-w-[520px] text-foreground"
            style={delay(120)}
          >
            Engineering systems that scale{" "}
            <span className="text-accent">beyond</span> the interface.
          </h1>

          <p
            className="hero-in mt-6 max-w-[460px] text-[0.97rem] leading-relaxed text-[#e0e0e0]"
            style={delay(220)}
          >
            I build robust backend architectures, modern web applications, and
            reliable cloud-native systems.
          </p>

          <ul
            className="hero-in mt-5 flex flex-wrap gap-2.5"
            aria-label="Primary technologies"
            style={delay(300)}
          >
            {technologies.map((technology) => (
              <li key={technology}>
                <TechTag>{technology}</TechTag>
              </li>
            ))}
          </ul>

          <div
            className="hero-in mt-6 flex flex-wrap gap-4"
            style={delay(380)}
          >
            <Button href="#projects">View My Projects</Button>
            <Button href="#experience" variant="secondary" arrow={false}>
              Learn More <span aria-hidden>↓</span>
            </Button>
          </div>
        </div>
      </PageContainer>

      <dl
        className="hero-in absolute right-[70px] top-1/2 z-10 hidden -translate-y-[35%] flex-col gap-6 border-l border-border-strong pl-6 xl:flex"
        style={delay(460)}
      >
        {stats.map(({ icon: Icon, title, caption }) => (
          <div key={title} className="flex items-center gap-4">
            <span className="grid h-10 w-10 place-items-center text-accent">
              <Icon width={22} height={22} />
            </span>
            <div>
              <dt className="text-sm font-medium">{title}</dt>
              <dd className="text-[0.8125rem] text-muted">{caption}</dd>
            </div>
          </div>
        ))}
      </dl>
    </section>
  );
}
