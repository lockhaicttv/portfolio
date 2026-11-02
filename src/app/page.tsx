import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import AboutContent from "@/components/AboutContent";
import ExperienceContent from "@/components/ExperienceContent";
import ProjectsContent from "@/components/ProjectsContent";
import ContactContent from "@/components/ContactContent";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Lê Minh Chiến | Full Stack Developer",
  description: siteConfig.tagline,
};

const sectionClass =
  "scroll-mt-20 border-t border-[color:var(--border)] py-16 sm:py-20";

export default function Home() {
  return (
    <PageShell>
      <main id="content" tabIndex={-1} className="flex-1">
        <section id="about" className="scroll-mt-20 py-16 sm:py-20">
          <AboutContent />
        </section>

        <section id="experience" className={sectionClass}>
          <ExperienceContent />
        </section>

        <section id="projects" className={sectionClass}>
          <ProjectsContent />
        </section>

        <section id="contact" className={sectionClass}>
          <ContactContent />
        </section>
      </main>
    </PageShell>
  );
}
