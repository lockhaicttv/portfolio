import SectionEyebrow from "@/components/ui/SectionEyebrow";
import {
  BrowserIcon,
  CloudIcon,
  DatabaseIcon,
  LayersIcon,
  PlugIcon,
  ServerIcon,
} from "@/components/ui/Icons";
import { expertise, type ExpertiseGroup } from "@/data/expertise";

const icons: Record<ExpertiseGroup["icon"], typeof ServerIcon> = {
  server: ServerIcon,
  browser: BrowserIcon,
  database: DatabaseIcon,
  plug: PlugIcon,
  cloud: CloudIcon,
  layers: LayersIcon,
};

/** Right half of the experience band. */
export default function ExpertiseSection() {
  return (
    <div
      id="expertise"
      className="grid gap-8 pt-10 md:grid-cols-[260px_1fr] xl:grid-cols-[210px_1fr] xl:pl-9 xl:pt-0"
      data-reveal
    >
      <div>
        <SectionEyebrow number="03">Technical Expertise</SectionEyebrow>
        <h2 className="mt-3 text-[1.375rem] font-semibold leading-[1.2] tracking-[-0.01em]">
          Modern technologies.
          <br />
          Real-world impact.
        </h2>
      </div>

      <ul className="grid gap-x-6 gap-y-5 sm:grid-cols-2">
        {expertise.map((group) => {
          const Icon = icons[group.icon];
          return (
            <li key={group.id} className="flex items-start gap-3.5">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[7px] border border-border-strong text-accent">
                <Icon width={16} height={16} />
              </span>
              <div>
                <h3 className="text-sm font-semibold">{group.title}</h3>
                <p className="text-[0.78rem] text-muted">
                  {group.skills.slice(0, 2).join(", ")}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
