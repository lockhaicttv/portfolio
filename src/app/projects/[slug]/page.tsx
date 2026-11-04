import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageContainer from "@/components/layout/PageContainer";
import ScrollReveal from "@/components/ScrollReveal";
import Button from "@/components/ui/Button";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import TechTag from "@/components/ui/TechTag";
import { getProject, projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { withBasePath } from "@/lib/basePath";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Case study not found" };
  }

  const path = `/projects/${project.slug}/`;
  const image = `${siteConfig.url}${project.image}`;

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `${siteConfig.url}${path}`,
    },
    openGraph: {
      type: "article",
      title: `${project.title} — Case study`,
      description: project.summary,
      url: `${siteConfig.url}${path}`,
      images: [{ url: image, alt: project.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Case study`,
      description: project.summary,
      images: [image],
    },
  };
}

const contents = [
  { id: "context", label: "Context", number: "01" },
  { id: "purpose", label: "Purpose", number: "02" },
  { id: "contribution", label: "Contribution", number: "03" },
  { id: "challenge", label: "Challenge", number: "04" },
  { id: "outcome", label: "Outcome", number: "05" },
];

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex(
    (entry) => entry.slug === project.slug,
  );
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const facts = [
    { label: "Role", value: project.role },
    { label: "Period", value: project.period },
    ...(project.teamSize
      ? [{ label: "Team", value: `${project.teamSize}-person team` }]
      : []),
  ];

  const { caseStudy } = project;

  return (
    <>
      <Navbar variant="page" />
      <main id="content" tabIndex={-1} className="flex-1">
        <article>
          <header className="relative overflow-hidden border-b border-border">
            <div
              aria-hidden
              className="hero-backdrop pointer-events-none absolute inset-0 -z-10"
            />
            <PageContainer className="pb-12 pt-10 sm:pb-16 sm:pt-14 lg:pb-20 lg:pt-16">
              <nav aria-label="Breadcrumb">
                <ol className="flex flex-wrap items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-subtle">
                  <li>
                    <Link
                      href="/"
                      className="transition-colors hover:text-foreground"
                    >
                      Home
                    </Link>
                  </li>
                  <li aria-hidden className="text-border">
                    /
                  </li>
                  <li>
                    <Link
                      href="/#projects"
                      className="transition-colors hover:text-foreground"
                    >
                      Selected work
                    </Link>
                  </li>
                  <li aria-hidden className="text-border">
                    /
                  </li>
                  <li aria-current="page" className="text-muted">
                    {project.title}
                  </li>
                </ol>
              </nav>

              <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-8">
                <div className="lg:col-span-8">
                  <p className="eyebrow">
                    {project.featured ? "Flagship case study" : "Case study"}
                    <span aria-hidden className="h-px w-4 bg-border" />
                    <span>{project.category}</span>
                  </p>

                  <h1 className="mt-6 max-w-3xl text-[clamp(2.5rem,5.2vw,4rem)] font-semibold leading-[0.98] tracking-[-0.045em] [text-wrap:balance]">
                    {project.title}
                  </h1>

                  <p className="mt-6 max-w-2xl text-[1rem] leading-relaxed text-muted sm:text-[1.08rem]">
                    {project.summary}
                  </p>

                  <ul
                    className="mt-7 flex flex-wrap gap-1.5"
                    aria-label="Technologies used"
                  >
                    {project.technologies.map((technology) => (
                      <li key={technology}>
                        <TechTag>{technology}</TechTag>
                      </li>
                    ))}
                  </ul>
                </div>

                <dl className="grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-3 lg:col-span-4 lg:grid-cols-1">
                  {facts.map((fact) => (
                    <div key={fact.label} className="bg-background px-4 py-3.5">
                      <dt className="font-mono text-[0.58rem] uppercase tracking-[0.16em] text-subtle">
                        {fact.label}
                      </dt>
                      <dd className="mt-1.5 text-[0.82rem] leading-snug text-foreground/90">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </PageContainer>
          </header>

          <PageContainer className="pt-8 sm:pt-10">
            <figure
              className="relative aspect-[16/10] overflow-hidden border border-border bg-surface sm:aspect-[16/8]"
              data-reveal
            >
              <Image
                src={withBasePath(project.image)}
                alt={project.imageAlt}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                style={{ objectPosition: project.imagePosition }}
                className="object-cover grayscale-[0.35] contrast-110 brightness-[0.85]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-4 bottom-3.5 flex items-center justify-between gap-4 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-foreground/80 sm:inset-x-5">
                <span>
                  {project.category} <span className="text-subtle">/</span>{" "}
                  {project.role}
                </span>
                <span className="hidden text-subtle sm:inline">
                  {project.period}
                </span>
              </figcaption>
            </figure>
          </PageContainer>

          <div className="section-shell">
            <PageContainer>
              <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
                <aside className="lg:col-span-3">
                  <div className="lg:sticky lg:top-28">
                    <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-subtle">
                      On this page
                    </p>
                    <ul className="mt-4 border-l border-border">
                      {contents.map((item) => (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            className="group flex items-center gap-3 border-l border-transparent py-2 pl-4 -ml-px text-[0.8rem] text-muted transition-colors hover:border-accent hover:text-foreground"
                          >
                            <span className="font-mono text-[0.58rem] tracking-[0.12em] text-subtle transition-colors group-hover:text-accent">
                              {item.number}
                            </span>
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 border-t border-border pt-5">
                      <Button
                        href="/#projects"
                        variant="ghost"
                        arrow={false}
                        className="h-auto px-0 text-[0.78rem]"
                      >
                        ← All selected work
                      </Button>
                    </div>
                  </div>
                </aside>

                <div className="space-y-16 lg:col-span-8 lg:col-start-5">
                  <section id="context" className="scroll-mt-28" data-reveal>
                    <SectionEyebrow number="01">Context</SectionEyebrow>
                    <h2 className="mt-5 max-w-xl text-section-title">
                      The operational setting
                    </h2>
                    <p className="mt-5 max-w-2xl text-[0.98rem] leading-[1.8] text-muted">
                      {caseStudy.context}
                    </p>
                  </section>

                  <section
                    id="purpose"
                    className="scroll-mt-28 border-t border-border pt-12"
                    data-reveal
                  >
                    <SectionEyebrow number="02">Purpose</SectionEyebrow>
                    <h2 className="mt-5 max-w-xl text-section-title">
                      What the system does
                    </h2>
                    <p className="mt-5 max-w-2xl text-[0.98rem] leading-[1.8] text-muted">
                      {caseStudy.purpose}
                    </p>
                  </section>

                  <section
                    id="contribution"
                    className="scroll-mt-28 border-t border-border pt-12"
                    data-reveal
                  >
                    <SectionEyebrow number="03">Contribution</SectionEyebrow>
                    <h2 className="mt-5 max-w-xl text-section-title">
                      My part in the work
                    </h2>

                    <ol className="mt-8 border-t border-border">
                      {caseStudy.contributions.map((contribution, index) => (
                        <li
                          key={contribution}
                          className="flex gap-4 border-b border-border py-4 sm:gap-6"
                        >
                          <span className="mt-0.5 shrink-0 font-mono text-[0.62rem] tracking-[0.12em] text-accent">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="text-[0.9rem] leading-relaxed text-muted">
                            {contribution}
                          </span>
                        </li>
                      ))}
                    </ol>

                    {project.teamSize ? (
                      <p className="mt-5 font-mono text-[0.6rem] uppercase leading-relaxed tracking-[0.1em] text-subtle">
                        Delivered within a {project.teamSize}-person team ·
                        individual contributions described above
                      </p>
                    ) : null}
                  </section>

                  <section
                    id="challenge"
                    className="scroll-mt-28 border-t border-border pt-12"
                    data-reveal
                  >
                    <SectionEyebrow number="04">
                      Engineering challenge
                    </SectionEyebrow>
                    <div className="mt-6 border-l-2 border-accent bg-surface px-6 py-7 sm:px-8 sm:py-9">
                      <h2 className="max-w-xl text-[clamp(1.3rem,2.4vw,1.7rem)] font-semibold leading-tight tracking-[-0.025em]">
                        {caseStudy.challenge.title}
                      </h2>
                      <p className="mt-4 max-w-2xl text-[0.94rem] leading-[1.8] text-muted">
                        {caseStudy.challenge.body}
                      </p>
                    </div>
                  </section>

                  <section
                    id="outcome"
                    className="scroll-mt-28 border-t border-border pt-12"
                    data-reveal
                  >
                    <SectionEyebrow number="05">Outcome</SectionEyebrow>
                    <p className="mt-6 max-w-2xl text-[clamp(1.25rem,2.4vw,1.65rem)] font-medium leading-snug tracking-[-0.02em] text-foreground">
                      {caseStudy.outcome}
                    </p>
                    <p className="mt-6 max-w-2xl border-t border-border pt-5 text-[0.76rem] leading-relaxed text-subtle">
                      Client work is described at a level that respects
                      confidentiality. No customer data, internal URLs,
                      credentials or proprietary diagrams are included.
                    </p>
                  </section>
                </div>
              </div>
            </PageContainer>
          </div>
        </article>

        <section className="border-t border-border bg-surface/40">
          <PageContainer className="py-12 sm:py-16">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-subtle">
                  Next case study
                </p>
                <h2 className="mt-3 text-[1.55rem] font-semibold tracking-[-0.025em] sm:text-[1.8rem]">
                  {nextProject.title}
                </h2>
                <p className="mt-2 max-w-md text-[0.82rem] leading-relaxed text-muted">
                  {nextProject.category}
                  <span aria-hidden className="mx-2 text-border">
                    /
                  </span>
                  {nextProject.period}
                </p>
              </div>

              <Button href={`/projects/${nextProject.slug}`} variant="secondary">
                Read the case study
              </Button>
            </div>
          </PageContainer>
        </section>
      </main>
      <Footer variant="page" />
      <ScrollReveal />
    </>
  );
}
