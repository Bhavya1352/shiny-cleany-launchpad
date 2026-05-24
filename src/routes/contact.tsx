import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Sections";
import { LeadForm } from "@/components/landing/LeadForm";
import { Phone, MessageCircle, MapPin, Clock, Mail, Sparkles } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Shiny Cleany — Premium Cleaners in Pune" },
      { name: "description", content: "Reach out to Shiny Cleany for the best deep home cleaning services in Pune & PCMC. Call, WhatsApp, or request a quick estimate." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <Header />
      <main className="bg-hero-gradient flex-grow py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-mint text-mint-foreground px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="size-3.5 animate-pulse" /> Get In Touch
            </span>
            <h1 className="mt-4 font-display font-extrabold text-4xl sm:text-5xl text-foreground tracking-tight">
              Let's make your home <span className="text-cta">spotless today.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Have questions or want a custom quote? Reach our service desk instantly via WhatsApp, phone, or fill out the quick request form.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Contact details */}
            <div className="lg:col-span-6 space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <a
                  href="tel:+919876543210"
                  className="group rounded-2xl border border-border bg-card p-6 shadow-soft hover:border-primary/50 hover:shadow-elevated transition duration-300"
                >
                  <div className="grid place-items-center size-11 rounded-xl bg-mint text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition">
                    <Phone className="size-5" />
                  </div>
                  <h3 className="font-display font-bold text-base text-foreground">Call Support</h3>
                  <p className="mt-1 text-sm text-muted-foreground font-medium">+91 98765 43210</p>
                  <span className="mt-3 inline-block text-xs font-semibold text-cta group-hover:translate-x-1 transition">Call now →</span>
                </a>

                <a
                  href="https://wa.me/919876543210?text=Hi%20Shiny%20Cleany"
                  target="_blank"
                  rel="noopener"
                  className="group rounded-2xl border border-border bg-card p-6 shadow-soft hover:border-primary/50 hover:shadow-elevated transition duration-300"
                >
                  <div className="grid place-items-center size-11 rounded-xl bg-mint text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition">
                    <MessageCircle className="size-5" />
                  </div>
                  <h3 className="font-display font-bold text-base text-foreground">WhatsApp Chat</h3>
                  <p className="mt-1 text-sm text-muted-foreground font-medium">9 AM – 9 PM Everyday</p>
                  <span className="mt-3 inline-block text-xs font-semibold text-cta group-hover:translate-x-1 transition">Message us →</span>
                </a>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-soft space-y-4">
                <div className="flex gap-4">
                  <MapPin className="size-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-bold text-base text-foreground">Main Office Location</h4>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      Baner Road, Near Balewadi High Street, Baner, Pune, Maharashtra 411045
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 border-t border-border pt-4">
                  <Clock className="size-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-bold text-base text-foreground">Operational Hours</h4>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      We deliver cleaning services 7 days a week, including Sundays and public holidays. Dispatch slots start at 8:00 AM.
                    </p>
                  </div>
                </div>
              </div>

              {/* Generated luxury apartment visual */}
              <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-border/60 group/visual">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent z-10" />
                <img
                  src="/images/pune_luxury_flat.png"
                  alt="Spotless luxury living room in Baner, Pune"
                  width={600}
                  height={400}
                  className="w-full h-[240px] sm:h-[300px] object-cover group-hover/visual:scale-105 transition duration-700"
                />
                <div className="absolute bottom-4 left-4 z-20 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-primary/80 backdrop-blur px-2.5 py-1 rounded">Pune Premium Standard</span>
                  <h4 className="mt-1.5 font-display font-extrabold text-lg">A clean home is a happy home.</h4>
                </div>
              </div>
            </div>

            {/* Contact Form Card */}
            <div className="lg:col-span-6">
              <div className="relative">
                <div className="absolute -inset-3 bg-primary/5 rounded-3xl blur-2xl animate-pulse" aria-hidden />
                <div className="relative bg-card/95 backdrop-blur-md rounded-3xl shadow-elevated border border-border/80 p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="font-display font-bold text-2xl text-foreground">Quick Estimate</h2>
                      <p className="text-xs text-muted-foreground mt-0.5">We reply in 10 minutes with a fixed price quote.</p>
                    </div>
                    <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-mint text-mint-foreground px-2.5 py-1 text-[11px] font-bold">
                      <Sparkles className="size-3 animate-spin-slow" /> FREE
                    </span>
                  </div>
                  <LeadForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
