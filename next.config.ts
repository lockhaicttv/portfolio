import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    // The portfolio is a single page now. Keep old bookmarks working by
    // sending each former route to its section on the home page.
    return [
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/experience", destination: "/#experience", permanent: true },
      { source: "/projects", destination: "/#projects", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
    ];
  },
  images: {
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
