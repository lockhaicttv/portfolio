import { experiences } from "@/data/experience";
import ExperienceItem from "./ExperienceItem";
import { siteConfig } from "@/data/site";

export default function ExperienceContent() {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 mb-6">
        <h1 className="text-3xl sm:text-4xl font-serif-heading">Experience</h1>
        <a
          href={siteConfig.cvUrl}
          className="px-3 py-1.5 rounded-full bg-[color:var(--accent)] text-white hover:bg-[color:var(--accent-dark)] transition-colors"
        >
          Download CV
        </a>
      </div>
      <div className="flex flex-col gap-2">
        {experiences.map((exp) => (
          <ExperienceItem
            key={exp.id}
            date={exp.date}
            title={exp.title}
            organization={exp.organization}
            description={exp.description}
            tags={exp.tags}
          />
        ))}
      </div>
    </>
  );
}
