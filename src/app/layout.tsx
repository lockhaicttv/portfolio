import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { withBasePath } from "@/lib/basePath";

const heading = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Lê Minh Chiến | Full Stack Developer",
  description:
    "Portfolio of Lê Minh Chiến, a full-stack engineer building TypeScript web platforms with Next.js, React, NestJS, GraphQL and PostgreSQL.",
  openGraph: {
    title: "Lê Minh Chiến | Full Stack Developer",
    description:
      "Portfolio of Lê Minh Chiến, a full-stack engineer building TypeScript web platforms with Next.js, React, NestJS, GraphQL and PostgreSQL.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: withBasePath("/favicon.ico"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Lê Minh Chiến",
    jobTitle: "Full Stack Developer",
    email: "lmchien2706@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vaasa",
      addressCountry: "Finland",
    },
    sameAs: ["TODO_GITHUB_URL", "TODO_LINKEDIN_URL"],
  };

  return (
    <html
      lang="en"
      className={heading.variable}
      data-theme="dark"
      suppressHydrationWarning
    >
      <head>
        <script
          // Applies the saved theme before first paint; dark is the default.
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");document.documentElement.setAttribute("data-theme",t==="light"?"light":"dark")}catch(e){}})();`,
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
