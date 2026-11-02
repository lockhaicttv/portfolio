import SkillBadges from "./SkillBadges";

interface ProjectCardProps {
  name: string;
  period: string;
  role: string;
  teamSize: number;
  description: string;
  tags: string[];
}

export default function ProjectCard({
  name,
  period,
  role,
  teamSize,
  description,
  tags,
}: ProjectCardProps) {
  return (
    <article className="rounded-lg border border-[color:var(--border)] bg-transparent p-4 sm:p-5 transition-transform hover:-translate-y-1 hover:border-[color:var(--accent)]">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
        <h3 className="text-lg font-medium">{name}</h3>
        <p className="text-sm opacity-80">{period}</p>
      </div>
      <p className="mt-1 text-sm opacity-90">
        {role} · team of {teamSize}
      </p>
      <p className="mt-2 text-sm leading-relaxed opacity-95">{description}</p>
      <div className="mt-3">
        <SkillBadges skills={tags} />
      </div>
    </article>
  );
}
