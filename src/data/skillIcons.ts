import type { SimpleIcon } from "simple-icons";
import {
  siExpress,
  siGraphql,
  siMongodb,
  siMui,
  siNestjs,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siReact,
  siStrapi,
  siTypescript,
  siVite,
  siVuedotjs,
} from "simple-icons";

/**
 * Brand marks for the skills list. Simple Icons ships each brand's own
 * metadata (`path` for the glyph, `hex` for its primary colour), so the badge
 * colours are taken from the library itself instead of being hard-coded here.
 */
const skillIcons: Record<string, SimpleIcon> = {
  TypeScript: siTypescript,
  GraphQL: siGraphql,
  NestJS: siNestjs,
  "Next.js": siNextdotjs,
  "Node.js": siNodedotjs,
  React: siReact,
  Express: siExpress,
  Vue: siVuedotjs,
  PostgreSQL: siPostgresql,
  MongoDB: siMongodb,
  Strapi: siStrapi,
  "Strapi v3": siStrapi,
  "Strapi v4": siStrapi,
  Vite: siVite,
  "Material-UI": siMui,
  "Material-UI 4": siMui,
  "Material-UI 5": siMui,
};

export function getSkillIcon(skill: string): SimpleIcon | undefined {
  return skillIcons[skill];
}
