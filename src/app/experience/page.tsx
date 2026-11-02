import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import ExperienceContent from "@/components/ExperienceContent";

export const metadata: Metadata = {
  title: "Experience | Lê Minh Chiến",
  description:
    "Work experience of Lê Minh Chiến — full-stack engineering roles, microservice architecture and client-facing platforms.",
};

export default function ExperiencePage() {
  return (
    <PageShell>
      <main id="content" tabIndex={-1} className="py-10">
        <ExperienceContent />
      </main>
    </PageShell>
  );
}
