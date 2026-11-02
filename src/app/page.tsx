import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import Avatar from "@/components/Avatar";
import SocialIcons from "@/components/SocialIcons";
import { navLinks, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Lê Minh Chiến | Full Stack Developer",
  description: siteConfig.tagline,
};

export default function Home() {
  return (
    <PageShell>
      <main
        id="content"
        tabIndex={-1}
        className="flex-1 w-full flex items-center justify-center py-10"
      >
        <div className="flex flex-col items-center gap-6 text-center max-w-2xl">
          <Avatar />
          <div>
            <h1 className="text-4xl sm:text-5xl font-serif-heading">
              {siteConfig.name.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-[color:var(--accent)]">
                {siteConfig.name.split(" ").slice(-1)[0]}
              </span>
            </h1>
            <p className="mt-3 text-lg">{siteConfig.role}</p>
            <p className="mt-2 text-base leading-relaxed opacity-90">
              {siteConfig.tagline}
            </p>
          </div>
          <nav aria-label="Explore" className="flex flex-wrap justify-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                transitionTypes={["nav-forward"]}
                className="px-4 py-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] text-sm hover:text-[color:var(--accent)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <SocialIcons />
        </div>
      </main>
    </PageShell>
  );
}

