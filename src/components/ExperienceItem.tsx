import SkillBadges from "./SkillBadges";

interface ExperienceItemProps {
  date: string;
  title: string;
  organization: string;
  description: string;
  tags: string[];
}

export default function ExperienceItem({
  date,
  title,
  organization,
  description,
  tags,
}: ExperienceItemProps) {
  return (
    <article className="group rounded-lg px-3 py-3 sm:px-4 sm:py-4 hover:bg-[color:var(--surface)] transition-colors">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
        <div>
          <h3 className="text-lg font-medium group-hover:text-[color:var(--accent)] transition-colors">
            {title} · {organization}
          </h3>
          {description ? (
            <p className="mt-1 text-sm opacity-90">{description}</p>
          ) : null}
        </div>
        <p className="text-sm opacity-80 whitespace-nowrap">{date}</p>
      </div>
      <div className="mt-3">
        <SkillBadges skills={tags} />
      </div>
    </article>
  );
}
