import { navLinks, siteConfig } from "@/data/site";
import { withBasePath } from "@/lib/basePath";
import PageContainer from "./PageContainer";

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
    <footer className="bg-background">
      <PageContainer className="flex flex-col gap-4 py-6 text-xs text-subtle md:flex-row md:items-center md:justify-between">
        <p>
          <a
            href={isHome ? "#home" : withBasePath("/")}
            aria-label={`L.C. — ${siteConfig.displayName} home`}
            className="mr-3 text-sm font-extrabold text-foreground"
          >
            L.C<span className="text-accent">.</span>
          </a>
          © {year} {siteConfig.name} · {siteConfig.location}
        </p>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={hrefFor(link.href)}
                  className="transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageContainer>
    </footer>
  );
}
