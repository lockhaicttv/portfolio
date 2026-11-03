export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  context: string;
  contributions: string[];
  technologies: string[];
};

export const experiences: Experience[] = [
  {
    id: "cyberlogitec",
    company: "Cyberlogitec Vietnam",
    role: "Full-Stack Engineer",
    period: "Feb 2024 – Jul 2026",
    location: "Vietnam",
    context: "Container logistics · enterprise systems",
    contributions: [
      "Migrated container, genset and transit-event business logic from a legacy system into modular microservices.",
      "Built NestJS services, GraphQL BFF APIs and gRPC methods on PostgreSQL, with Next.js operator screens.",
      "Led an internal LMS from UI to APIs and set up GraphQL codegen that removed repetitive hook work for the team.",
    ],
    technologies: ["NestJS", "GraphQL", "PostgreSQL", "Next.js"],
  },
  {
    id: "digicommerce",
    company: "Digicommerce",
    role: "Frontend Engineer",
    period: "Sep 2021 – Feb 2024",
    location: "Vietnam",
    context: "E-commerce · B2B platforms",
    contributions: [
      "Developed a pharma distribution storefront, back office and Strapi CMS for a US client.",
      "Restructured the codebase into a monorepo with shared components and a shared API SDK.",
      "Maintained B2B ERP and demo platforms while rebuilding legacy CMS editing flows.",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Strapi"],
  },
];
