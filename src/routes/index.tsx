import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/landing/Header";
import { StickyMobileCTA, WhatsAppFloat } from "@/components/landing/StickyMobileCTA";
import {
  Hero, TrustStrip, Services, PropertySelector, IncludedTabs,
  Gallery, WhyUs, Process, Reviews, Areas, FAQ, FinalCTA, Footer,
} from "@/components/landing/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shiny Cleany — Premium Home Cleaning in Pune & PCMC" },
      { name: "description", content: "Book trusted, eco-safe home deep cleaning in Pune & PCMC. Fixed pricing, verified pros, 100% refund guarantee. WhatsApp us for a free estimate." },
      { property: "og:title", content: "Shiny Cleany — Premium Home Cleaning in Pune & PCMC" },
      { property: "og:description", content: "Trusted by 12,000+ homes. Eco-safe deep cleaning with fixed pricing and a 100% refund guarantee." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Shiny Cleany",
        image: "/og.jpg",
        telephone: "+91-98765-43210",
        priceRange: "₹₹",
        areaServed: ["Pune", "PCMC"],
        address: { "@type": "PostalAddress", addressLocality: "Pune", addressRegion: "MH", addressCountry: "IN" },
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "2400" },
      }),
    }],
  }),
  component: Landing,
});

function Landing() {
  const [selectedService, setSelectedService] = useState("Deep Home Cleaning");
  const pick = (s: string) => {
    setSelectedService(s);
    document.getElementById("quote")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
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
