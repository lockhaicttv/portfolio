import PageContainer from "@/components/layout/PageContainer";
import Button from "@/components/ui/Button";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import TechTag from "@/components/ui/TechTag";
import { experiences } from "@/data/experience";
import { siteConfig } from "@/data/site";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-shell scroll-mt-20 border-t border-border">
      <PageContainer>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4" data-reveal>
            <SectionEyebrow number="02">Experience</SectionEyebrow>
            <h2 className="text-section-title mt-6 max-w-sm">
              Building systems in production.
            </h2>
            <p className="mt-5 max-w-sm text-[0.92rem] leading-relaxed text-muted">
              Enterprise logistics, e-commerce and internal platforms — with a
              focus on the decisions that keep a system maintainable after
              launch.
            </p>
            <div className="mt-8">
              <Button
                href={siteConfig.resumeUrl}
                variant="secondary"
                external
              >
                Download CV
              </Button>
            </div>
            <p className="mt-8 border-t border-border pt-5 font-mono text-[0.68rem] uppercase leading-relaxed tracking-[0.1em] text-subtle">
              Currently studying
              <br />
              <span className="text-foreground">
                MSc, Cloud-Based Software Engineering
              </span>
              <br />
              VAMK, Finland · 2026–2027
            </p>
          </div>

          <ol className="border-l border-border lg:col-span-8" data-reveal>
            {experiences.map((experience) => (
              <li
                key={experience.id}
                className="relative pb-11 pl-6 last:pb-0 sm:pl-8"
              >
                <span
                  aria-hidden
                  className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-background"
                />
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <h3 className="text-[1.05rem] font-semibold tracking-[-0.01em]">
                    {experience.company}
                  </h3>
                  <p className="shrink-0 font-mono text-[0.64rem] uppercase tracking-[0.12em] text-subtle">
                    {experience.period}
                  </p>
                </div>
                <p className="mt-1 text-sm text-muted">
                  {experience.role}
                  <span aria-hidden className="mx-2 text-border">
                    /
                  </span>
                  {experience.context}
                </p>

                <ul className="mt-4 space-y-2.5">
                  {experience.contributions.map((contribution) => (
                    <li
                      key={contribution}
                      className="flex gap-3 text-[0.88rem] leading-relaxed text-muted"
                    >
                      <span
                        aria-hidden
                        className="mt-[0.62rem] h-px w-3 shrink-0 bg-accent/70"
                      />
                      <span>{contribution}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {experience.technologies.map((technology) => (
                    <li key={technology}>
                      <TechTag>{technology}</TechTag>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </PageContainer>
    </section>
  );
}
