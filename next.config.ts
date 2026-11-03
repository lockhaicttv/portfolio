import type { NextConfig } from "next";

// GitHub Pages serves project sites from /<repo>, so the build needs a basePath.
// Provided by the workflow (actions/configure-pages outputs base_path); empty locally.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || undefined;

const nextConfig: NextConfig = {
  // GitHub Pages only serves static files.
  output: "export",
  basePath,
  images: {
    // Required by `output: "export"`; images are served as-is.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
