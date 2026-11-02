import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Sidebar from "@/components/Sidebar";
import { about } from "@/data/about";

export const metadata: Metadata = {
  title: "About | Lê Minh Chiến",
  description:
    "About Lê Minh Chiến — a full-stack engineer working with TypeScript, Next.js, NestJS, GraphQL and PostgreSQL, including skills, education and awards.",
};

export default function AboutPage() {
  return (
    <PageShell className="flex flex-col lg:flex-row gap-6 sm:gap-10">
      <Sidebar />
      <main
        id="content"
        tabIndex={-1}
        className="flex-1 flex items-center justify-center py-10"
      >
        <div className="max-w-4xl w-full">
          <h2 className="text-3xl sm:text-4xl font-serif-heading mb-6">
            About
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed font-serif-heading">
            {about.intro}
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-xl font-serif-heading mb-2">Skills</h3>
              <ul className="space-y-1">
                {about.skills.map((s) => (
                  <li key={s}>• {s}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-serif-heading mb-2">
                Infrastructure &amp; DevOps
              </h3>
              <ul className="space-y-1">
                {about.infrastructure.map((s) => (
                  <li key={s}>• {s}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-serif-heading mb-2">Soft skills</h3>
              <ul className="space-y-1">
                {about.softSkills.map((s) => (
                  <li key={s}>• {s}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-serif-heading mb-2">Education</h3>
              <ul className="space-y-2">
                {about.education.map((e) => (
                  <li key={e.degree}>
                    <p className="font-medium">{e.degree}</p>
                    <p className="text-sm opacity-90">
                      {e.institution}
                      {e.location ? `, ${e.location}` : ""} {e.period}
                    </p>
                    {e.gpa ? (
                      <p className="text-sm opacity-80">{e.gpa}</p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-serif-heading mb-2">Awards</h3>
            <ul className="space-y-1">
              {about.awards.map((a) => (
                <li key={a}>• {a}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </PageShell>
  );
}
