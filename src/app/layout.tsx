import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter } from "next/font/google";

import "./globals.css";
import { siteConfig } from "@/data/site";
import { withBasePath } from "@/lib/basePath";

const sans = Inter({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-inter",
});

const mono = Geist_Mono({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-geist-mono",
});

const title = "Chien Le — Full-Stack Engineer";
const description =
  "Portfolio of Chien Le, a full-stack engineer building enterprise logistics, e-commerce and cloud-native systems with TypeScript, NestJS, React and PostgreSQL.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: "%s — Chien Le",
  },
  description,
  applicationName: "Chien Le — Portfolio",
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  keywords: [
    "Chien Le",
    "Full-Stack Engineer",
    "Backend Engineer",
    "NestJS",
    "TypeScript",
    "PostgreSQL",
    "GraphQL",
    "React",
    "Next.js",
    "Cloud engineering",
    "Finland",
  ],
  alternates: {
    canonical: `${siteConfig.url}/`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: "Chien Le — Full-Stack Engineer",
    title,
    description,
    images: [
      {
        url: `${siteConfig.url}/images/hero-architecture.jpg`,
        width: 1400,
        height: 1750,
        alt: "Monochrome architectural facade representing Chien Le's engineering portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${siteConfig.url}/images/hero-architecture.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: withBasePath("/favicon.ico"),
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#141414",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    alternateName: siteConfig.displayName,
    jobTitle: "Full-Stack Engineer",
    email: `mailto:${siteConfig.email}`,
    url: siteConfig.url,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vaasa",
      addressCountry: "Finland",
    },
    sameAs: [siteConfig.socials.github, siteConfig.socials.linkedin],
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Vaasa University of Applied Sciences (VAMK)",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Can Tho University",
      },
    ],
    knowsAbout: [
      "NestJS",
      "GraphQL",
      "PostgreSQL",
      "Next.js",
      "React",
      "TypeScript",
      "Microservices",
      "Cloud engineering",
    ],
  };

  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          // Enables the reveal transition before first paint. Without JS the
          // class is never added, so all content remains visible.
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add("reveal-enabled");`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="antialiased">
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
