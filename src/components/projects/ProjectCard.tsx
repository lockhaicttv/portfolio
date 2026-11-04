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
        className="group relative flex h-full flex-col overflow-hidden rounded-[10px] border border-border bg-surface transition-colors hover:border-[#444] focus-visible:border-accent"
      >
        <div className="project-media relative h-[132px] overflow-hidden">
          <Image
            src={withBasePath(project.image)}
            alt={project.imageAlt}
            fill
            priority={priority}
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw"
            className="object-cover grayscale-[0.2] brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
        </div>

        <span
          aria-hidden
          className="absolute right-3.5 top-3 text-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
        >
          <ArrowUpRight width={18} height={18} />
        </span>

        <div className="flex flex-1 flex-col px-4 pb-4 pt-3.5">
          <h3 className="text-base font-semibold transition-colors group-hover:text-accent">
            {project.title}
          </h3>
          <p className="mb-3 mt-0.5 text-[0.78rem] text-muted">
            {project.category}
          </p>
          <ul className="mt-auto flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((technology) => (
              <li key={technology}>
                <TechTag size="sm">{technology}</TechTag>
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </article>
  );
}
