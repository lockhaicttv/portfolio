export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  period: string;
  role: string;
  teamSize?: number;
  featured?: boolean;
  /** Longer, confidentiality-safe detail used by the case-study route. */
  caseStudy: {
    context: string;
    purpose: string;
    contributions: string[];
    challenge: {
      title: string;
      body: string;
    };
    outcome: string;
  };
};

export const projects: Project[] = [
  {
    slug: "equipment-movement-system",
    title: "Equipment Movement System",
    category: "Enterprise logistics",
    summary:
      "A container-logistics platform for tracking equipment, gensets and transit events — rebuilt as modular services instead of legacy business logic.",
    image: "/images/project-equipment.jpg",
    imageAlt:
      "Stacked shipping containers at a logistics terminal, photographed in cool tones",
    technologies: ["NestJS", "GraphQL", "PostgreSQL", "Next.js", "gRPC"],
    period: "Jun 2024 – Jun 2026",
    role: "Full-Stack Engineer",
    teamSize: 12,
    featured: true,
    caseStudy: {
      context:
        "Container terminals depend on accurate equipment records. A single movement can involve a container, a genset, a transit event and several operational teams — and the legacy system carrying that logic was becoming difficult to extend safely.",
      purpose:
        "The Equipment Movement System gives operators one place to create, track and update equipment movements. The work focused on moving business logic out of the legacy system into a modular microservice architecture without disrupting day-to-day operations.",
      contributions: [
        "Migrated container, genset and transit-event business logic from the legacy system into modular services.",
        "Built backend services and GraphQL BFF APIs in NestJS on PostgreSQL, plus gRPC methods between services.",
        "Delivered the Next.js operator screens used to create, track and update equipment movements.",
        "Partnered with QA to make legacy test data findable through reverse queries, including a workflow with close to 40 nodes.",
      ],
      challenge: {
        title: "Testing a migration with no easy test data",
        body:
          "Reproducing realistic equipment workflows in the legacy testing environment was impractical: creating records by hand took too long and hid edge cases. I wrote reverse queries that located the required data for both passing and failing paths, so QA could validate a large workflow diagram without depending on manual setup.",
      },
      outcome:
        "The migration made equipment data easier to manage and maintain, and gave operators a consistent way to work with movements. The service now supports sessions of up to 10,000 records, with the architecture ready for further logistics modules.",
    },
  },
  {
    slug: "learning-management-system",
    title: "Learning Management System",
    category: "Internal platform",
    summary:
      "An internal LMS that showcases the company's corporate-training offering — led end to end, from UI to APIs, and approved for production launch.",
    image: "/images/project-lms.svg",
    imageAlt:
      "Abstract illustration of course modules and a progress track, representing a learning management system",
    technologies: ["Next.js", "NestJS", "GraphQL", "Ant Design"],
    period: "Feb – May 2024",
    role: "Full-Stack Engineer · Project lead",
    teamSize: 9,
    caseStudy: {
      context:
        "The company wanted a concrete way to present its corporate-training offering to prospective clients, rather than describing it in slides.",
      purpose:
        "The Learning Management System is an internal demo platform for courses, learners and progress. I led the project end to end, from the interface down to the APIs.",
      contributions: [
        "Led the project end to end, from UI to APIs.",
        "Built the platform full-stack with Next.js and Ant Design on the frontend and NestJS with GraphQL on the backend.",
        "Set up GraphQL codegen for the team so developers only write the queries — the typed hooks are generated.",
      ],
      challenge: {
        title: "Shipping a demo on a fixed schedule",
        body:
          "A nine-person team had three months to deliver a credible demo. Hand-writing data hooks for every query was slowing everyone down, so I introduced GraphQL codegen early: the schema became the single source of truth and the repetitive client code disappeared.",
      },
      outcome:
        "The demo phase was delivered on schedule, and management approved the product for production launch.",
    },
  },
  {
    slug: "pharma-distribution-platform",
    title: "Pharma Distribution Platform",
    category: "Pharma commerce",
    summary:
      "A B2C storefront, back office and CMS for a US pharmaceutical distributor offering health-insurance plans — restructured into a shared monorepo with a common API SDK.",
    image: "/images/project-pharma.jpg",
    imageAlt:
      "Pharmacy shelving and health products, representing a pharmaceutical commerce platform",
    technologies: ["Next.js", "React", "Strapi", "Material UI"],
    period: "Sep 2022 – Feb 2024",
    role: "Frontend Engineer",
    teamSize: 10,
    caseStudy: {
      context:
        "A US pharmaceutical distributor needed its customer storefront, internal back office and content team to work from the same product and content foundation across multiple states.",
      purpose:
        "The platform combined a B2C storefront, an operational back office and a Strapi CMS. My work covered the frontend, the shared component layer and the content-editing experience.",
      contributions: [
        "Developed and operated the storefront, back office and Strapi CMS features.",
        "Helped restructure the codebase into a monorepo with shared components and a shared API SDK.",
        "Rebuilt legacy CMS features with a simpler content model that later client projects could reuse.",
      ],
      challenge: {
        title: "Two applications, one design language",
        body:
          "Storefront and back office had grown separately, so components and API calls were duplicated. Moving them into a monorepo with shared packages reduced duplication and made search and account features reusable across projects — without freezing active delivery.",
      },
      outcome:
        "The shared foundation reduced duplicated frontend work and made future content and commerce projects faster to start from a consistent base.",
    },
  },
  {
    slug: "hardwood-erp-platform",
    title: "Hardwood ERP Platform",
    category: "B2B ERP",
    summary:
      "Customer-facing tools for a B2B ERP in the hardwood industry — log inventory, timber contracts and auction-based procurement.",
    image: "/images/project-hardwood.svg",
    imageAlt:
      "Abstract illustration of timber log cross-sections, representing a hardwood-industry ERP",
    technologies: ["Next.js", "React", "Strapi", "Material UI"],
    period: "May – Sep 2022",
    role: "Frontend Engineer",
    teamSize: 6,
    caseStudy: {
      context:
        "Hardwood suppliers and buyers manage log inventory, timber contracts and procurement through a dedicated B2B ERP rather than generic commerce tools.",
      purpose:
        "The platform's customer-facing tools let businesses work with inventory, contracts and auction-based purchasing in one place. My work focused on maintaining and extending those tools.",
      contributions: [
        "Maintained and extended customer-facing ERP tools for log inventory and timber contracts.",
        "Worked on auction-based procurement flows in Next.js and React.",
        "Built on a Strapi v3 content layer and Material UI component system.",
      ],
      challenge: {
        title: "Extending a domain-heavy product",
        body:
          "Timber trading has its own vocabulary and rules — grades, volumes, contract terms and auctions. Changes had to respect those workflows so that existing customers could keep trading without disruption.",
      },
      outcome:
        "The customer-facing tools kept pace with new requirements while staying consistent for the businesses already using them.",
    },
  },
  {
    slug: "b2b-enterprise-platform",
    title: "B2B Enterprise Demo",
    category: "Business platform",
    summary:
      "A B2B demo storefront backed by Elastic Path, kept reliable for sales demonstrations while its CMS and customer-facing tools were maintained.",
    image: "/images/project-b2b.jpg",
    imageAlt:
      "Analytics dashboard on a laptop screen, representing a B2B enterprise platform",
    technologies: ["React", "Next.js", "Strapi"],
    period: "Feb – May 2022",
    role: "Frontend Engineer",
    teamSize: 5,
    caseStudy: {
      context:
        "The team maintained a B2B enterprise demo storefront used to show the product to prospective clients. The commerce backend was provided by an Elastic Path partner, while content and presentation lived in the frontend and CMS.",
      purpose:
        "The platform needed to stay presentation-ready for sales while customer-facing tools and CMS content were extended behind the scenes.",
      contributions: [
        "Maintained the demo storefront and its customer-facing tools.",
        "Resolved CMS issues that were blocking sales demonstrations.",
        "Worked within a shared frontend codebase alongside the Elastic Path integration.",
      ],
      challenge: {
        title: "Keeping a live demo dependable",
        body:
          "A demo environment has little room for broken content states. CMS problems had a direct impact on sales conversations, so fixes had to be diagnosed quickly and applied without destabilising the rest of the storefront.",
      },
      outcome:
        "The demo stayed usable for sales conversations, and the CMS fixes removed a recurring source of friction for the team running demonstrations.",
    },
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
