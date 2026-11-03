import type { Metadata } from "next";
import { RedirectToSection } from "@/components/RedirectToSection";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

export default function ContactPage() {
  return <RedirectToSection section="contact" />;
}
