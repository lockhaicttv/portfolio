import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/data/projects";
import { ArrowUpRight } from "@/components/ui/Icons";
import TechTag from "@/components/ui/TechTag";
import { withBasePath } from "@/lib/basePath";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export default function ProjectCard({ project, priority }: ProjectCardProps) {
  return (
    <article className="h-full">
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`Read the ${project.title} case study`}
        className="group flex h-full flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background"
      >
        <div className="project-media relative aspect-[4/3] overflow-hidden border border-border bg-surface">
          <Image
            src={withBasePath(project.image)}
            alt={project.imageAlt}
            fill
            priority={priority}
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
            className="object-cover grayscale-[0.35] contrast-105 brightness-[0.88]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          {project.featured ? (
            <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-[2px] border border-accent/40 bg-background/85 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-accent backdrop-blur-sm">
              <span aria-hidden className="h-1 w-1 rounded-full bg-accent" />
              Flagship
            </span>
          ) : null}
        </div>

        <div className="mt-5 flex flex-1 items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-subtle">
              {project.category}
              <span aria-hidden className="mx-2 text-border">
                /
              </span>
              {project.period}
            </p>
            <h3 className="mt-2 text-[1.08rem] font-semibold leading-snug tracking-[-0.015em] transition-colors group-hover:text-accent">
              {project.title}
            </h3>
            <p className="mt-2 line-clamp-2 text-[0.86rem] leading-relaxed text-muted">
              {project.summary}
            </p>
          </div>
          <span
            aria-hidden
            className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-[2px] border border-border text-muted transition-colors group-hover:border-accent group-hover:text-accent"
          >
            <ArrowUpRight width={16} height={16} />
          </span>
        </div>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 3).map((technology) => (
            <li key={technology}>
              <TechTag>{technology}</TechTag>
            </li>
          ))}
        </ul>
      </Link>
    </article>
  );
}
