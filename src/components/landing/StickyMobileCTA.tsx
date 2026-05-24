import { Phone, MessageCircle } from "lucide-react";

export function StickyMobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-border bg-background/95 backdrop-blur-xl px-3 py-2.5 grid grid-cols-2 gap-2 shadow-elevated">
      <a href="tel:+919876543210" className="flex items-center justify-center gap-2 h-12 rounded-lg border border-primary text-primary font-semibold text-sm">
        <Phone className="size-4" /> Call Now
      </a>
      <a href="https://wa.me/919876543210?text=Hi%20Shiny%20Cleany%2C%20I%20want%20a%20quote" target="_blank" rel="noopener" className="flex items-center justify-center gap-2 h-12 rounded-lg bg-cta text-cta-foreground font-semibold text-sm shadow-cta">
        <MessageCircle className="size-4" /> WhatsApp Quote
      </a>
    </div>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919876543210?text=Hi%20Shiny%20Cleany%2C%20I%20want%20a%20quote"
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-2 h-14 px-5 rounded-full text-white font-semibold shadow-elevated hover:scale-105 transition"
      style={{ background: "var(--whatsapp)" }}
    >
      <MessageCircle className="size-5" /> Chat on WhatsApp
    </a>
  );
}
