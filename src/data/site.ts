export const siteConfig = {
  name: "Lê Minh Chiến",
  displayName: "Chien Le",
  shortName: "L.C.",
  role: "Full-Stack Engineer",
  location: "Vaasa, Finland",
  email: "lmchien2706@gmail.com",
  url: "https://lockhaicttv.github.io/porfolio",
  availability: "Open to full-stack and cloud engineering work",
  socials: {
    github: "https://github.com/lockhaicttv",
    linkedin: "https://www.linkedin.com/in/lmchien2706/",
  },
  resumeUrl: "/resume/ChienLe_FullStack_Engineer.pdf",
} as const;

/** In-page sections. `href` is both the anchor target and the scroll-spy key. */
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;
