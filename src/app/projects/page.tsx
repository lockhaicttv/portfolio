import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import ProjectsContent from "@/components/ProjectsContent";

export const metadata: Metadata = {
  title: "Projects | Lê Minh Chiến",
  description:
    "Projects by Lê Minh Chiến — APIs, microservices and web platforms built with NestJS, Next.js and PostgreSQL.",
};

export default function ProjectsPage() {
  return (
    <PageShell>
      <main id="content" tabIndex={-1} className="py-10">
        <ProjectsContent />
      </main>
    </PageShell>
  );
}
