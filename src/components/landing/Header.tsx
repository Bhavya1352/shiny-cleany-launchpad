import { Phone, Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";

const nav = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#reviews" },
  { label: "Areas", href: "#areas" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid place-items-center size-9 rounded-xl bg-primary text-primary-foreground shadow-soft">
            <Sparkles className="size-5" />
          </span>
          <span className="font-display font-bold text-lg tracking-tight">
            Shiny<span className="text-primary">Cleany</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-7">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-foreground/70 hover:text-primary transition">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="tel:+919876543210" className="hidden sm:inline-flex items-center gap-2 h-10 px-4 rounded-lg border border-border bg-background text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition">
            <Phone className="size-4" /> +91 98765 43210
          </a>
          <a href="#quote" className="hidden sm:inline-flex items-center h-10 px-4 rounded-lg bg-cta text-cta-foreground font-semibold text-sm shadow-cta hover:brightness-105 transition">
            Get Quote
          </a>
          <button className="md:hidden grid place-items-center size-10 rounded-lg border border-border" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background px-4 py-4 space-y-2 animate-fade-in">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block py-2 text-sm font-medium text-foreground/80">
              {n.label}
            </a>
          ))}
          <a href="tel:+919876543210" className="flex items-center gap-2 py-2 text-sm font-semibold text-primary">
            <Phone className="size-4" /> +91 98765 43210
          </a>
        </div>
      )}
    </header>
  );
}
