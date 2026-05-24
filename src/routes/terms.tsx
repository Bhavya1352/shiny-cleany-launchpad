import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/landing/LegalPages";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Sections";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | Shiny Cleany" },
      { name: "description", content: "Terms of service and booking guidelines for Shiny Cleany cleaning services in Pune & PCMC." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <Header />
      <div className="flex-grow">
        <LegalPage pathname="/terms" />
      </div>
      <Footer />
    </div>
  );
}
