import type { Metadata } from "next";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import HeroSection from "@/components/sections/HeroSection";
import SelectedWorkSection from "@/components/sections/SelectedWorkSection";

export const metadata: Metadata = {
  title: "Chien Le — Full-Stack Engineer",
  description:
    "Portfolio of Chien Le, a full-stack engineer building enterprise logistics, e-commerce and cloud-native systems with TypeScript, NestJS, React and PostgreSQL.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="content" tabIndex={-1} className="flex-1">
        <HeroSection />
        <SelectedWorkSection />
        <ExperienceSection />
        <ExpertiseSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
