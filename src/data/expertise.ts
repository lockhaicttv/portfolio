export type ExpertiseGroup = {
  id: string;
  title: string;
  icon: "server" | "browser" | "database" | "plug" | "cloud" | "layers";
  level: "Core" | "Working" | "Learning";
  description: string;
  skills: string[];
};

export const expertise: ExpertiseGroup[] = [
  {
    id: "backend",
    title: "Backend",
    icon: "server",
    level: "Core",
    description: "Service design and business logic in production systems.",
    skills: ["NestJS", "Node.js", "Express"],
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: "browser",
    level: "Core",
    description: "Typed product interfaces and design systems.",
    skills: ["React", "Next.js", "TypeScript"],
  },
  {
    id: "data",
    title: "Database",
    icon: "database",
    level: "Core",
    description: "Relational modelling and content storage.",
    skills: ["PostgreSQL", "MongoDB", "Strapi"],
  },
  {
    id: "api",
    title: "API & Integration",
    icon: "plug",
    level: "Core",
    description: "Contracts between services and client applications.",
    skills: ["GraphQL", "REST", "gRPC"],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    icon: "cloud",
    level: "Working",
    description: "Containerised deployment and Linux server operations.",
    skills: ["Docker", "Linux", "Nginx", "VPS deployment"],
  },
  {
    id: "architecture",
    title: "Architecture",
    icon: "layers",
    level: "Working",
    description: "Breaking legacy systems into maintainable services.",
    skills: ["Microservices", "System design", "Legacy migration"],
  },
];
