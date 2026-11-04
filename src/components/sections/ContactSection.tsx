import Image from "next/image";

import Button from "@/components/ui/Button";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/data/site";
import { withBasePath } from "@/lib/basePath";

const socials = [
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: MailIcon },
  { label: "LinkedIn", href: siteConfig.socials.linkedin, icon: LinkedInIcon },
  { label: "GitHub", href: siteConfig.socials.github, icon: GitHubIcon },
];

/** Right half of the closing band, bleeding to the viewport edge. */
export default function ContactSection() {
  return (
    <div
      id="contact"
      className="bleed-end relative scroll-mt-20 overflow-hidden bg-gradient-to-r from-[#1a1a1a] via-[#2a2a2a] to-[#3a3a3a] py-10 pl-[var(--gutter)] xl:pl-10"
    >
      <div aria-hidden className="absolute inset-y-0 right-0 w-[70%]">
        <Image
          src={withBasePath("/images/contact-city.jpg")}
          alt=""
          fill
          sizes="(max-width: 1279px) 70vw, 30vw"
          className="object-cover object-bottom opacity-55 grayscale contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1f1f1f] via-[#1f1f1f]/40 to-transparent" />
      </div>

      <div className="relative" data-reveal>
        <SectionEyebrow number="05">Let&apos;s Connect</SectionEyebrow>
        <h2 className="mt-3 text-[1.3rem] font-semibold leading-[1.2]">
          Have a project
          <br />
          in mind?
        </h2>
        <p className="mt-2 max-w-[260px] text-[0.8125rem] leading-relaxed text-[#d6d6d6]">
          I&apos;m always open to discussing new ideas, collaborations, and
          opportunities.
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-4">
          <Button href={`mailto:${siteConfig.email}`} size="sm">
            Get in Touch
          </Button>
          <ul className="flex items-center gap-1">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  {...(href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="grid h-8 w-8 place-items-center rounded-full text-[#d6d6d6] transition-colors hover:bg-white/10 hover:text-accent"
                >
                  <Icon width={16} height={16} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
