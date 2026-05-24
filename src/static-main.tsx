import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/landing/Header";
import { StickyMobileCTA, WhatsAppFloat } from "@/components/landing/StickyMobileCTA";
import {
  Hero, TrustStrip, Services, PropertySelector, IncludedTabs,
  Gallery, WhyUs, Process, Reviews, Areas, FAQ, FinalCTA, Footer,
} from "@/components/landing/Sections";
import { isLegalPage, LegalPage } from "@/components/landing/LegalPages";
import "@/styles.css";

function App() {
  const [selectedService, setSelectedService] = useState("Deep Home Cleaning");
  const pathname = window.location.pathname;
  const pick = (s: string) => {
    setSelectedService(s);
    document.getElementById("quote")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (isLegalPage(pathname)) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <LegalPage pathname={pathname} />
        <Footer />
        <StickyMobileCTA />
        <WhatsAppFloat />
        <Toaster richColors position="top-center" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero selectedService={selectedService} setSelectedService={setSelectedService} />
        <TrustStrip />
        <Services onPick={pick} />
        <PropertySelector onPick={pick} />
        <IncludedTabs />
        <Gallery />
        <WhyUs />
        <Process />
        <Reviews />
        <Areas />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
      <WhatsAppFloat />
      <Toaster richColors position="top-center" />
    </div>
  );
}

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
