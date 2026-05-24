import { useState } from "react";
import {
  Sparkles, Sofa, ChefHat, Bath, Building2, Truck, HardHat, Brush,
  ShieldCheck, Clock, BadgeIndianRupee, Users, Star, MapPin, Phone, MessageCircle,
  ChevronDown, Check, Leaf, Award, Home,
} from "lucide-react";
import { LeadForm } from "./LeadForm";
import heroImg from "@/assets/hero-cleaner.jpg";
import beforeBath from "@/assets/before-bath.jpg";
import afterBath from "@/assets/after-bath.jpg";
import beforeKitchen from "@/assets/before-kitchen.jpg";
import afterKitchen from "@/assets/after-kitchen.jpg";
import beforeSofa from "@/assets/before-sofa.jpg";
import afterSofa from "@/assets/after-sofa.jpg";

/* ---------------- HERO ---------------- */
export function Hero({ selectedService, setSelectedService }: { selectedService: string; setSelectedService: (s: string) => void }) {
  return (
    <section id="top" className="relative bg-hero-gradient pt-10 md:pt-16 pb-12 md:pb-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 flex flex-col items-start animate-fade-in">
          <span className="inline-flex items-center gap-2 rounded-full bg-mint text-mint-foreground px-3.5 py-1.5 text-xs font-semibold shadow-soft hover:scale-102 transition-transform duration-300">
            <img src="/brand/shinycleany-icon.png" alt="" className="size-4 animate-bounce" /> Trusted in Pune & PCMC since 2018
          </span>
          
          <div className="mt-6 mb-3 flex items-center gap-3">
            <img
              src="/brand/shinycleany-logo.png"
              alt="Shiny Cleany"
              width={180}
              height={40}
              className="h-8 sm:h-9 w-auto filter drop-shadow-sm"
            />
            <div className="h-5 w-px bg-border/60" />
            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.22em] text-primary/70">
              PUNE'S PREMIUM CLEANERS
            </span>
          </div>

          <h1 className="mt-4 font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-balance text-foreground tracking-tight">
            A spotless home, <span className="text-cta">handled in hours.</span>
          </h1>
          
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl text-balance leading-relaxed">
            Background-verified professionals, eco-safe plant-based products, and transparent fixed pricing. Book your deep cleaning in 60 seconds and pay only after you're satisfied.
          </p>

          <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3 text-sm border-l-2 border-primary/20 pl-4 py-1">
            {[
              ["12,000+", "Happy homes in Pune"],
              ["4.9★", "Google-rated service"],
              ["100%", "Satisfaction guarantee"],
            ].map(([k, v]) => (
              <div key={v} className="flex items-baseline gap-2">
                <span className="font-display font-black text-xl text-primary">{k}</span>
                <span className="text-muted-foreground text-xs font-medium">{v}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#quote"
              className="inline-flex items-center justify-center h-12 px-6 rounded-lg bg-cta text-cta-foreground font-semibold shadow-cta hover:scale-105 active:scale-98 transition duration-300"
            >
              Get Free Estimate
            </a>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg border border-border bg-background font-semibold text-foreground hover:border-primary hover:text-primary hover:scale-105 active:scale-98 transition duration-300"
            >
              <Phone className="size-4" /> Call +91 98765 43210
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative">
            <div className="absolute -inset-3 bg-primary/5 rounded-3xl blur-2xl animate-pulse" aria-hidden />
            <div id="quote" className="relative bg-card/95 backdrop-blur-md rounded-2xl shadow-elevated border border-border/80 p-5 sm:p-6 transition hover:border-primary/30 duration-300">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="font-display font-bold text-xl text-foreground">Quick Estimate</h2>
                  <p className="text-xs text-muted-foreground mt-0.5">Reply in 10 mins • 9 AM – 9 PM</p>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-mint text-mint-foreground px-2.5 py-1 text-[11px] font-bold">
                  <Sparkles className="size-3 animate-spin-slow" /> FREE
                </span>
              </div>
              <LeadForm defaultService={selectedService} />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-12 sm:mt-16">
        <div className="relative rounded-3xl overflow-hidden shadow-elevated border border-border/60 group/hero-img">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
          <img
            src={heroImg}
            alt="Shiny Cleany professional cleaning a modern Pune apartment"
            width={1280}
            height={1280}
            className="w-full h-[260px] sm:h-[420px] object-cover group-hover/hero-img:scale-[1.03] transition duration-700"
          />
        </div>
        {/* hidden initial selector hook to satisfy lint */}
        <span className="hidden" aria-hidden onClick={() => setSelectedService(selectedService)} />
      </div>
    </section>
  );
}

/* ---------------- TRUST STRIP ---------------- */
export function TrustStrip() {
  const items: { Icon: typeof ShieldCheck; label: string }[] = [
    { Icon: ShieldCheck, label: "Background-verified pros" },
    { Icon: Leaf, label: "Eco-safe products" },
    { Icon: BadgeIndianRupee, label: "Fixed transparent pricing" },
    { Icon: Clock, label: "On-time guarantee" },
    { Icon: Award, label: "ISO-trained team" },
    { Icon: Users, label: "Insured service" },
  ];
  return (
    <section className="border-y border-border bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map(({ Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5 text-sm text-foreground/80">
              <Icon className="size-4 text-primary" />
              <span className="font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ---------------- SERVICES ---------------- */
const SERVICES = [
  { icon: Sparkles, title: "Deep Home Cleaning", price: "From ₹2,499", desc: "Top-to-bottom transformation of your full home." },
  { icon: Bath, title: "Bathroom Cleaning", price: "From ₹399", desc: "Descaling, sanitisation & shine restoration." },
  { icon: ChefHat, title: "Kitchen Cleaning", price: "From ₹1,499", desc: "Degreasing of chimney, hob, tiles & cabinets." },
  { icon: Sofa, title: "Sofa Shampooing", price: "From ₹399/seat", desc: "Hot-water extraction for fabric & leather." },
  { icon: Brush, title: "Carpet Shampooing", price: "From ₹15/sqft", desc: "Deep dust & stain removal, quick dry." },
  { icon: Building2, title: "Office Cleaning", price: "Custom quote", desc: "Daily, weekly, or one-time corporate cleaning." },
  { icon: Truck, title: "Move-in / Move-out", price: "From ₹3,499", desc: "Full property clean for new tenants & handovers." },
  { icon: HardHat, title: "Post-Construction", price: "From ₹4,999", desc: "Paint, cement & dust removal after renovation." },
];
export function Services({ onPick }: { onPick: (s: string) => void }) {
  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead eyebrow="Our Services" title="Pick what your home needs today" subtitle="Every service is delivered by trained, uniformed professionals with company-owned equipment." />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map(({ icon: Icon, title, price, desc }) => (
            <a
              key={title}
              href="#quote"
              onClick={() => onPick(title)}
              className="group relative rounded-2xl border border-border bg-card p-5 hover:border-primary/50 hover:-translate-y-1 hover:shadow-elevated transition-all duration-300"
            >
              <div className="grid place-items-center size-11 rounded-xl bg-mint text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition">
                <Icon className="size-5" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground">{title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-primary">{price}</span>
                <span className="text-xs font-semibold text-cta group-hover:translate-x-1 transition">Book →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROPERTY SELECTOR ---------------- */
export function PropertySelector({ onPick }: { onPick: (s: string) => void }) {
  const props = [
    { type: "1 BHK", time: "4–5 hrs", price: "₹2,499", pros: "2 pros" },
    { type: "2 BHK", time: "5–6 hrs", price: "₹3,499", pros: "2 pros", popular: true },
    { type: "3 BHK", time: "6–8 hrs", price: "₹4,999", pros: "3 pros" },
    { type: "4 BHK / Villa", time: "8–10 hrs", price: "₹6,999", pros: "4 pros" },
  ];
  return (
    <section className="py-16 sm:py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead eyebrow="Transparent Pricing" title="Deep cleaning by property size" subtitle="One fixed price, no hidden charges, no surge pricing on weekends." />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {props.map((p) => (
            <div key={p.type} className={`relative rounded-2xl border bg-card p-6 ${p.popular ? "border-primary shadow-elevated" : "border-border"}`}>
              {p.popular && (
                <span className="absolute -top-3 left-6 rounded-full bg-cta text-cta-foreground text-[11px] font-bold uppercase tracking-wide px-3 py-1 shadow-cta">
                  Most booked
                </span>
              )}
              <h3 className="font-display font-bold text-xl text-foreground">{p.type}</h3>
              <div className="mt-3 flex items-baseline gap-1.5">
                <span className="text-3xl font-display font-extrabold text-primary">{p.price}</span>
                <span className="text-xs text-muted-foreground">starting</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-foreground/80">
                <li className="flex gap-2"><Check className="size-4 text-primary mt-0.5" /> {p.time} of cleaning</li>
                <li className="flex gap-2"><Check className="size-4 text-primary mt-0.5" /> {p.pros} + equipment</li>
                <li className="flex gap-2"><Check className="size-4 text-primary mt-0.5" /> Eco-safe products</li>
                <li className="flex gap-2"><Check className="size-4 text-primary mt-0.5" /> 100% refund guarantee</li>
              </ul>
              <a href="#quote" onClick={() => onPick("Deep Home Cleaning")} className="mt-5 inline-flex w-full items-center justify-center h-11 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition">
                Book this
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- INCLUDED TABS ---------------- */
const INCLUDED: Record<string, string[]> = {
  Bedroom: ["Cobweb removal", "Fan & light fixture cleaning", "Window glass & grills", "Wardrobe surface & handles", "Skirting & switch boards", "Floor wet mopping & sanitising"],
  Bathroom: ["Acid wash for tile descaling", "Toilet bowl deep clean & sanitise", "Chrome & faucet polishing", "Mirror & glass spot-free finish", "Exhaust fan dusting", "Floor disinfection"],
  Kitchen: ["Chimney degreasing (external)", "Hob & burner cleaning", "Tile & backsplash degrease", "Cabinet shutters wipe-down", "Sink descaling & polish", "Floor scrubbing"],
  Living: ["Sofa vacuuming", "Carpet vacuum & spot clean", "TV unit & decor dusting", "Wall hangings dust off", "Window grills & sills", "Floor sweep & mop"],
  Balcony: ["Floor scrubbing", "Railing cleaning", "Plant area dust off", "Drain cover cleaning", "Glass partition wipe", "Cobweb removal"],
};
export function IncludedTabs() {
  const tabs = Object.keys(INCLUDED);
  const [active, setActive] = useState(tabs[0]);
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead eyebrow="What's Included" title="50+ tasks across every room" subtitle="Tap a room to see exactly what our team will do." />
        <div className="mt-8 flex flex-wrap gap-2 justify-center">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`h-10 px-5 rounded-full text-sm font-semibold transition ${active === t ? "bg-primary text-primary-foreground shadow-soft" : "bg-secondary text-foreground/70 hover:text-primary"}`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="mt-8 max-w-3xl mx-auto rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-soft">
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {INCLUDED[active].map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm text-foreground/85">
                <span className="grid place-items-center size-5 rounded-full bg-mint text-primary shrink-0 mt-0.5">
                  <Check className="size-3" />
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- BEFORE / AFTER ---------------- */
function BeforeAfter({ before, after, label }: { before: string; after: string; label: string }) {
  const [x, setX] = useState(50);
  return (
    <div className="relative rounded-2xl overflow-hidden border border-border shadow-soft bg-card">
      <div className="relative aspect-[4/3] select-none">
        <img src={after} alt={`${label} after`} loading="lazy" width={768} height={576} className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${x}%` }}>
          <img src={before} alt={`${label} before`} loading="lazy" width={768} height={576} className="absolute inset-0 h-full w-[calc(100%*100/var(--w,50))] object-cover" style={{ width: `${(100 / x) * 100}%`, maxWidth: "none" }} />
        </div>
        <div className="absolute top-3 left-3 bg-foreground/80 text-background text-[11px] font-bold uppercase px-2 py-1 rounded">Before</div>
        <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-[11px] font-bold uppercase px-2 py-1 rounded">After</div>
        <div className="absolute inset-y-0" style={{ left: `${x}%` }}>
          <div className="absolute inset-y-0 -ml-px w-0.5 bg-white shadow-elevated" />
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 size-10 rounded-full bg-white shadow-elevated grid place-items-center text-primary font-bold">⇆</div>
        </div>
        <input
          aria-label="Drag to compare"
          type="range" min={0} max={100} value={x} onChange={(e) => setX(Number(e.target.value))}
          className="absolute inset-0 size-full opacity-0 cursor-ew-resize"
        />
      </div>
      <div className="p-4 font-display font-semibold text-foreground">{label}</div>
    </div>
  );
}
export function Gallery() {
  return (
    <section className="py-16 sm:py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead eyebrow="Real Results" title="Drag to see the difference" subtitle="Unedited photos from homes across Pune & PCMC." />
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          <BeforeAfter before={beforeBath} after={afterBath} label="Bathroom · Wakad" />
          <BeforeAfter before={beforeKitchen} after={afterKitchen} label="Kitchen · Baner" />
          <BeforeAfter before={beforeSofa} after={afterSofa} label="Sofa · Kharadi" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY US ---------------- */
export function WhyUs() {
  const items = [
    { icon: ShieldCheck, title: "Verified & insured pros", desc: "Every cleaner is police-verified, trained at our academy, and insured for your peace of mind." },
    { icon: BadgeIndianRupee, title: "Fixed pricing, always", desc: "Pay what we quote. No weekend surge, no add-ons after arrival, no surprises." },
    { icon: Leaf, title: "Eco-safe, child-safe", desc: "Plant-based, biodegradable cleaning agents that are safe for kids and pets." },
    { icon: Award, title: "100% refund guarantee", desc: "Not satisfied? We'll redo the area free or refund — your call." },
  ];
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead eyebrow="Why Shiny Cleany" title="The reliable choice — for once." subtitle="We obsess over the boring stuff so you don't have to." />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-6 hover:shadow-elevated hover:-translate-y-1 transition">
              <div className="grid place-items-center size-12 rounded-xl bg-primary text-primary-foreground mb-4">
                <Icon className="size-5" />
              </div>
              <h3 className="font-display font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROCESS ---------------- */
const STEPS = [
  ["Book", "Submit form or WhatsApp us in 60 seconds."],
  ["Confirm", "We send a fixed quote & ETA within 10 minutes."],
  ["Inspect", "Team lead surveys your home before starting."],
  ["Prep", "Furniture protected, equipment & supplies set up."],
  ["Deep clean", "5-stage cleaning, room by room, top to bottom."],
  ["Walkthrough", "Final inspection — we redo anything missed."],
  ["Pay", "Pay only after you're 100% satisfied. UPI / Cash."],
];
export function Process() {
  return (
    <section id="process" className="py-16 sm:py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <span className="inline-block rounded-full bg-primary-foreground/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider">Our Process</span>
          <h2 className="mt-4 font-display font-extrabold text-3xl sm:text-4xl">A 7-step ritual for a spotless home</h2>
        </div>
        <ol className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map(([title, desc], i) => (
            <li key={title} className="relative rounded-2xl border border-primary-foreground/15 bg-primary-foreground/[0.04] backdrop-blur p-6">
              <span className="font-display font-extrabold text-5xl text-primary-foreground/20">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 font-display font-semibold text-lg">{title}</h3>
              <p className="mt-1.5 text-sm text-primary-foreground/75">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- REVIEWS ---------------- */
const REVIEWS = [
  { name: "Priya Sharma", area: "Koregaon Park", text: "Booked a deep clean before Diwali. The team was on time, polite, and the kitchen looks brand new. Best ₹3,499 I've ever spent.", rating: 5 },
  { name: "Rahul Mehta", area: "Hinjawadi", text: "Tried 3 other services before — none came close. Shiny Cleany's bathroom descaling is genuinely magic.", rating: 5 },
  { name: "Aisha Khan", area: "Baner", text: "Loved that they used eco-safe products. My 2-year-old wasn't sneezing the next day, unlike previous cleanings.", rating: 5 },
  { name: "Vikram Joshi", area: "Wakad", text: "Move-in cleaning saved my weekend. Found them on Google, called, done in 6 hours. Very professional.", rating: 5 },
  { name: "Sneha Patil", area: "Kothrud", text: "The sofa shampooing was incredible — 4 years of stains gone. Pricing was exactly as quoted on WhatsApp.", rating: 5 },
  { name: "Arjun Desai", area: "Kharadi", text: "What I appreciated most: the team lead walked me through every room at the end. Felt respected, not rushed.", rating: 5 },
];
export function Reviews() {
  return (
    <section id="reviews" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead eyebrow="Reviews" title="Loved by 12,000+ Punekars" subtitle="4.9★ average across Google, JustDial & UrbanClap." />
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map((r) => (
            <figure key={r.name} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="flex gap-0.5 text-cta">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-3 text-sm text-foreground/85 leading-relaxed">"{r.text}"</blockquote>
              <figcaption className="mt-4 flex items-center gap-3 pt-4 border-t border-border">
                <div className="grid place-items-center size-10 rounded-full bg-mint text-primary font-bold text-sm">
                  {r.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{r.name}</div>
                  <div className="text-xs text-muted-foreground flex items-center gap-1"><MapPin className="size-3" />{r.area}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- AREAS ---------------- */
const AREAS = ["Koregaon Park", "Viman Nagar", "Kalyani Nagar", "Kharadi", "Magarpatta", "Hadapsar", "Baner", "Balewadi", "Aundh", "Pashan", "Kothrud", "Karve Nagar", "Hinjawadi", "Wakad", "Pimple Saudagar", "Pimple Nilakh", "Chinchwad", "Pimpri", "Akurdi", "Nigdi", "Ravet", "Tathawade"];
export function Areas() {
  return (
    <section id="areas" className="py-16 sm:py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead eyebrow="Service Areas" title="We're in your neighbourhood" subtitle="Same-day service available across Pune & PCMC." />
        <div className="mt-10 flex flex-wrap gap-2 justify-center max-w-4xl mx-auto">
          {AREAS.map((a) => (
            <span key={a} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground/80 hover:border-primary hover:text-primary transition">
              <MapPin className="size-3.5 text-primary" /> {a}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
const FAQS = [
  ["How long does deep cleaning take?", "A 2 BHK typically takes 5–6 hours with 2 trained professionals. Larger homes scale proportionally."],
  ["Do I need to provide any equipment or supplies?", "Not at all. Our team brings vacuum cleaners, scrubbers, eco-safe chemicals, microfibre cloths and ladders."],
  ["Is the pricing really fixed?", "Yes. The quote you receive on WhatsApp is the final amount. No weekend surge, no add-ons."],
  ["What if I'm not satisfied?", "We offer a 100% redo or refund guarantee. The team lead walks through each room with you before payment."],
  ["Are the products safe for kids and pets?", "All our products are plant-based, biodegradable, and certified non-toxic."],
  ["How do I book?", "WhatsApp us, fill the form above, or call +91 98765 43210. We confirm within 10 minutes."],
];
export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHead eyebrow="FAQ" title="Questions, answered" subtitle="Can't find what you need? WhatsApp us — we reply in under 10 minutes." />
        <div className="mt-10 space-y-3">
          {FAQS.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div key={q} className={`rounded-xl border bg-card overflow-hidden transition ${isOpen ? "border-primary shadow-soft" : "border-border"}`}>
                <button
                  className="w-full flex items-center justify-between gap-4 text-left p-5"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-semibold text-foreground">{q}</span>
                  <ChevronDown className={`size-5 text-primary shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
export function FinalCTA() {
  return (
    <section className="py-16 sm:py-24 bg-secondary/60">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="relative rounded-3xl brand-blue-gradient text-primary-foreground p-8 sm:p-14 text-center overflow-hidden shadow-elevated">
          <div className="absolute -top-12 -right-12 size-60 rounded-full bg-mint/20 blur-3xl" aria-hidden />
          <div className="absolute -bottom-16 -left-12 size-60 rounded-full bg-cta/20 blur-3xl" aria-hidden />
          <div className="relative">
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-balance">Ready for a home that finally feels new?</h2>
            <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">Get a fixed quote in 10 minutes. Book today — slots are filling for the weekend.</p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <a href="https://wa.me/919876543210?text=Hi%20Shiny%20Cleany" target="_blank" rel="noopener" className="inline-flex items-center gap-2 h-12 px-6 rounded-lg bg-cta text-cta-foreground font-semibold shadow-cta hover:brightness-105 transition">
                <MessageCircle className="size-4" /> WhatsApp Us Now
              </a>
              <a href="tel:+919876543210" className="inline-flex items-center gap-2 h-12 px-6 rounded-lg border border-primary-foreground/30 bg-primary-foreground/5 font-semibold hover:bg-primary-foreground/10 transition">
                <Phone className="size-4" /> +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-2">
            <img src="/brand/shinycleany-logo.png" alt="Shiny Cleany" width={210} height={50} className="h-11 w-auto" />
          </div>
          <p className="mt-3 text-muted-foreground">Pune & PCMC's most-loved professional home cleaning service. Trusted by 12,000+ households since 2018.</p>
        </div>
        <div>
          <div className="font-display font-semibold mb-3">Contact</div>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex gap-2"><Phone className="size-4 text-primary" />+91 98765 43210</li>
            <li className="flex gap-2"><MessageCircle className="size-4 text-primary" />WhatsApp: 9 AM – 9 PM</li>
            <li className="flex gap-2"><MapPin className="size-4 text-primary" />Baner, Pune 411045</li>
          </ul>
        </div>
        <div>
          <div className="font-display font-semibold mb-3">Quick Links</div>
          <ul className="space-y-2 text-muted-foreground">
            <li><a href="/#services" className="hover:text-primary">Services</a></li>
            <li><a href="/#process" className="hover:text-primary">Our Process</a></li>
            <li><a href="/#reviews" className="hover:text-primary">Reviews</a></li>
            <li><a href="/#faq" className="hover:text-primary">FAQ</a></li>
            <li><a href="/privacy-policy" className="hover:text-primary">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-primary">Terms of Service</a></li>
            <li><a href="/refund-cancellation" className="hover:text-primary">Refund & Cancellation</a></li>
            <li><a href="/contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        <Home className="inline-block size-3.5 mr-1 text-cta" />
        © {new Date().getFullYear()} Shiny Cleany Services Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}

/* ---------------- helpers ---------------- */
function SectionHead({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <span className="inline-block rounded-full bg-mint text-mint-foreground px-3 py-1.5 text-xs font-semibold uppercase tracking-wider">{eyebrow}</span>
      <h2 className="mt-4 font-display font-extrabold text-3xl sm:text-4xl text-foreground text-balance">{title}</h2>
      {subtitle && <p className="mt-3 text-muted-foreground text-balance">{subtitle}</p>}
    </div>
  );
}
