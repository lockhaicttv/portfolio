import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function ContactContent() {
  return (
    <>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-heading leading-tight">
        Thanks for stopping by — let&apos;s build something reliable together.
      </h1>
      <p className="mt-4 text-lg leading-relaxed">
        I&apos;d be glad to collaborate on backend, cloud-native or full-stack work.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={`mailto:${siteConfig.email}`}
          className="px-4 py-2 rounded-full bg-[color:var(--accent)] text-white hover:bg-[color:var(--accent-dark)] transition-colors"
        >
          Email me
        </a>
        <a
          href={siteConfig.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-full bg-[color:var(--surface)] border border-[color:var(--border)] hover:text-[color:var(--accent)] transition-colors"
        >
          Connect on LinkedIn
        </a>
      </div>
      <p className="mt-8 italic opacity-90">— Lê Minh Chiến</p>
      <div className="mt-6">
        <Link
          href="/"
          transitionTypes={["nav-back"]}
          className="hover:text-[color:var(--accent)]"
        >
          ← Back to the start
        </Link>
      </div>
      <p className="mt-10 text-sm opacity-80">
        Designed and built with Next.js and Tailwind CSS, deployed on Vercel
      </p>
      <p className="mt-1 text-sm opacity-80">{siteConfig.location}</p>
    </>
  );
}
