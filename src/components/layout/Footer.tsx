import { navLinks, siteConfig } from "@/data/site";
import { withBasePath } from "@/lib/basePath";
import PageContainer from "./PageContainer";
import {
  ArrowUpRight,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/ui/Icons";

interface FooterProps {
  /** `page` points section links back to the home page anchors. */
  variant?: "home" | "page";
}

export default function Footer({ variant = "home" }: FooterProps) {
  const year = new Date().getFullYear();
  const isHome = variant === "home";
  const hrefFor = (hash: string) =>
    isHome ? hash : withBasePath(`/${hash}`);

  return (
    <footer className="border-t border-border bg-background">
      <PageContainer className="py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a
              href={isHome ? "#home" : withBasePath("/")}
              className="text-lg font-semibold tracking-[-0.02em]"
              aria-label={`L.C. — ${siteConfig.displayName} home`}
            >
              L<span className="text-accent">.</span>C
              <span className="text-accent">.</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Full-stack engineering for systems that need to hold up after
              launch.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-subtle">
              <span
                aria-hidden
                className="h-1.5 w-1.5 rounded-full bg-accent"
              />
              {siteConfig.location}
            </p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-3">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-subtle">
              Navigate
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 sm:grid-cols-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={hrefFor(link.href)}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-subtle">
              Elsewhere
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
                >
                  <MailIcon width={15} height={15} />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
                >
                  <LinkedInIcon width={15} height={15} />
                  LinkedIn
                  <ArrowUpRight width={13} height={13} />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
                >
                  <GitHubIcon width={15} height={15} />
                  GitHub
                  <ArrowUpRight width={13} height={13} />
                </a>
              </li>
              <li>
                <a
                  href={withBasePath(siteConfig.resumeUrl)}
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
                >
                  <DownloadIcon width={15} height={15} />
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-[0.72rem] text-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="font-mono uppercase tracking-[0.1em]">
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </PageContainer>
    </footer>
  );
}
