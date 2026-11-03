// GitHub Pages serves this site from /<repo>, so links to files in /public must
// carry the base path. The workflow passes it at build time; empty locally.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function withBasePath(path: string) {
  return `${basePath}${path}`;
}
