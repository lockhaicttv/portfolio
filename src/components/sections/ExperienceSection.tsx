import PageContainer from "@/components/layout/PageContainer";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { DownloadIcon } from "@/components/ui/Icons";
import { experiences } from "@/data/experience";
import { siteConfig } from "@/data/site";
import { withBasePath } from "@/lib/basePath";

/** Experience timeline and technical expertise share one band, as in the reference. */
export default function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-20 border-b border-border">
      <PageContainer>
        <div className="grid py-10 xl:grid-cols-2 xl:py-8">
          <div
            className="grid gap-8 border-b border-border pb-10 md:grid-cols-[260px_1fr] xl:grid-cols-[230px_1fr] xl:border-b-0 xl:border-r xl:pb-0 xl:pr-10"
            data-reveal
          >
            <div>
              <SectionEyebrow number="02">Experience</SectionEyebrow>
              <h2 className="mt-3 text-[1.375rem] font-semibold leading-[1.2] tracking-[-0.01em]">
                ~5 years of experience
                <br />
                in full-stack development.
              </h2>
              <a
                href={withBasePath(siteConfig.resumeUrl)}
                className="text-link mt-6"
              >
                Download detailed CV
                <DownloadIcon width={15} height={15} />
              </a>
            </div>

            <ol className="timeline space-y-6">
              {experiences.map((experience) => (
                <li key={experience.id}>
                  <h3 className="text-sm font-semibold">
                    {experience.company}
                  </h3>
                  <p className="mt-0.5 text-[0.78rem] text-[#cfcfcf]">
                    {experience.role} · {experience.period}
                  </p>
                  <p className="mt-2 max-w-[300px] text-[0.78rem] leading-relaxed text-[#bdbdbd]">
                    {experience.summary}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <ExpertiseSection />
        </div>
      </PageContainer>
    </section>
  );
}
