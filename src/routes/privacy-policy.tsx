import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/landing/LegalPages";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Sections";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Shiny Cleany" },
      { name: "description", content: "Privacy policy and data protection terms for Shiny Cleany professional cleaning services in Pune & PCMC." },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <Header />
      <div className="flex-grow">
        <LegalPage pathname="/privacy-policy" />
      </div>
      <Footer />
    </div>
  );
}
