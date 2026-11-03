import PageContainer from "@/components/layout/PageContainer";
import SectionHeading from "@/components/ui/SectionHeading";
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

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="section-shell border-t border-border">
      <PageContainer>
        <div data-reveal>
          <SectionHeading
            number="03"
            eyebrow="Technical expertise"
            title="Modern technologies. Real-world impact."
            description="A compact view of what I use in production, what I apply in projects, and what I am actively deepening."
          />
        </div>

        <div className="mt-12 grid gap-x-16 sm:grid-cols-2" data-reveal>
          {expertise.map((group) => {
            const Icon = icons[group.icon];

            return (
              <div
                key={group.id}
                className="flex gap-4 border-t border-border py-7"
              >
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-[2px] border border-border bg-surface text-accent">
                  <Icon width={18} height={18} />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-[0.98rem] font-semibold tracking-[-0.01em]">
                      {group.title}
                    </h3>
                    <span className="shrink-0 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-subtle">
                      {group.level}
                    </span>
                  </div>
                  <p className="mt-1 text-[0.82rem] leading-relaxed text-muted">
                    {group.description}
                  </p>
                  <p className="mt-3 font-mono text-[0.68rem] uppercase leading-relaxed tracking-[0.08em] text-foreground/75">
                    {group.skills.join(" · ")}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-8 border-t border-border pt-5 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-subtle">
          Core = production experience · Working = applied in shipped projects
        </p>
      </PageContainer>
    </section>
  );
}
