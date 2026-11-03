import Image from "next/image";

import PageContainer from "@/components/layout/PageContainer";
import Button from "@/components/ui/Button";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import {
  ArrowUpRight,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
} from "@/components/ui/Icons";
import { siteConfig } from "@/data/site";
import { withBasePath } from "@/lib/basePath";

const contactLinks = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: MailIcon,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "in/lmchien2706",
    href: siteConfig.socials.linkedin,
    icon: LinkedInIcon,
    external: true,
  },
  {
    label: "GitHub",
    value: "lockhaicttv",
    href: siteConfig.socials.github,
    icon: GitHubIcon,
    external: true,
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden border-t border-border"
    >
      <Image
        src={withBasePath("/images/contact-city.jpg")}
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="object-cover object-center grayscale contrast-115 brightness-[0.5]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/35"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-accent/70 via-accent/10 to-transparent"
      />

      <PageContainer className="relative py-20 sm:py-28 lg:py-32">
        <div className="max-w-2xl" data-reveal>
          <SectionEyebrow number="05">Let&apos;s connect</SectionEyebrow>
          <h2 className="mt-6 text-[clamp(2.1rem,4.5vw,3.4rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
            Have a project in mind?
          </h2>
          <p className="mt-5 max-w-lg text-[0.98rem] leading-relaxed text-muted">
            I&apos;m always open to discussing new ideas, collaborations, and
            opportunities — especially backend, platform and cloud-native work.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={`mailto:${siteConfig.email}`} external>
              Get in Touch
            </Button>
            <Button
              href={siteConfig.resumeUrl}
              variant="secondary"
              arrow={false}
            >
              Download CV
            </Button>
          </div>
        </div>

        <div
          className="mt-16 grid max-w-4xl gap-px border-t border-border pt-0 sm:grid-cols-3"
          data-reveal
        >
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex items-start gap-3 border-b border-border py-5 transition-colors hover:text-accent sm:border-b-0 sm:border-r sm:pr-6 sm:last:border-r-0"
              >
                <Icon
                  width={17}
                  height={17}
                  className="mt-0.5 shrink-0 text-accent"
                />
                <span className="min-w-0 flex-1">
                  <span className="block font-mono text-[0.6rem] uppercase tracking-[0.14em] text-subtle">
                    {link.label}
                  </span>
                  <span className="mt-1 flex items-center gap-1.5 text-[0.82rem] text-foreground/90 transition-colors group-hover:text-accent">
                    <span className="truncate">{link.value}</span>
                    <ArrowUpRight
                      width={13}
                      height={13}
                      className="shrink-0 opacity-60"
                    />
                  </span>
                </span>
              </a>
            );
          })}
        </div>

        <p className="mt-8 inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-subtle">
          <MapPinIcon width={14} height={14} className="text-accent" />
          {siteConfig.location} · Available for work
        </p>
      </PageContainer>
    </section>
  );
}
