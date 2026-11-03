import type { CSSProperties } from "react";

import PageContainer from "@/components/layout/PageContainer";
import ProjectCard from "@/components/projects/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

export default function SelectedWorkSection() {
  return (
    <section id="projects" className="section-shell scroll-mt-20 border-t border-border">
      <PageContainer>
        <div data-reveal>
          <SectionHeading
            number="01"
            eyebrow="Selected work"
            title="Turning ideas into reliable products."
            description="From enterprise platforms to scalable cloud services, here are some of my works."
          />
        </div>

        <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
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

        <p className="mt-12 border-t border-border pt-6 text-[0.8rem] leading-relaxed text-subtle">
          Each case study covers the operational context, my contribution and
          the engineering decisions behind the system — without exposing
          confidential client material.
        </p>
      </PageContainer>
    </section>
  );
}
