import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact | Lê Minh Chiến",
  description:
    "Get in touch with Lê Minh Chiến — email, LinkedIn and collaboration on backend, cloud-native or full-stack work.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <main id="content" tabIndex={-1} className="py-10">
        <ContactContent />
      </main>
    </PageShell>
  );
}
