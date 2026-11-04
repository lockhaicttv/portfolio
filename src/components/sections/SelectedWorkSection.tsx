import type { CSSProperties } from "react";

import ElasticProjectReel from "@/components/ElasticProjectReel";
import PageContainer from "@/components/layout/PageContainer";
import ProjectCard from "@/components/projects/ProjectCard";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { ArrowRight } from "@/components/ui/Icons";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

export default function SelectedWorkSection() {
  return (
    <section id="projects" className="scroll-mt-20">
      <PageContainer>
        <div className="grid gap-8 py-10 lg:grid-cols-[300px_1fr] lg:gap-[42px] lg:py-8">
          <div data-reveal>
            <SectionEyebrow number="01">Selected Work</SectionEyebrow>
            <h2 className="text-section-title mt-3">
              Turning ideas
              <br />
              into reliable products.
            </h2>
            <p className="mt-3.5 max-w-[280px] text-[0.84rem] leading-relaxed text-[#cfcfcf]">
              From enterprise platforms to scalable cloud services, here are
              some of my works.
              <span className="hidden xl:inline">
                {" "}
                Pick a slice to open a project.
              </span>
            </p>
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link mt-6"
            >
              More on GitHub
              <ArrowRight width={15} height={15} />
            </a>
          </div>

          {/* Wide screens: interactive 3D reel in the cards' original slot. */}
          <div className="hidden xl:block" data-reveal>
            <ElasticProjectReel
              height={360}
              defaultActive={0}
              openSize={0.66}
              tilt={10}
              lift={24}
            />
          </div>

          {/* Narrower and touch screens: plain cards. */}
          <div className="grid gap-5 sm:grid-cols-2 xl:hidden">
            {projects.map((project, index) => (
              <div
                key={project.slug}
                data-reveal
                style={{ "--reveal-delay": `${index * 80}ms` } as CSSProperties}
              >
                <ProjectCard project={project} priority={index === 0} />
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
