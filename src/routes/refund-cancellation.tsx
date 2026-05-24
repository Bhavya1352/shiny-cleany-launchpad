import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/landing/LegalPages";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Sections";

export const Route = createFileRoute("/refund-cancellation")({
  head: () => ({
    meta: [
      { title: "Refund & Cancellation Policy | Shiny Cleany" },
      { name: "description", content: "Refund and cancellation guidelines for booking Shiny Cleany cleaning services in Pune." },
    ],
  }),
  component: RefundCancellationPage,
});

function RefundCancellationPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <Header />
      <div className="flex-grow">
        <LegalPage pathname="/refund-cancellation" />
      </div>
      <Footer />
    </div>
  );
}
