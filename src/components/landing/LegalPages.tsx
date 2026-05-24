import { Mail, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";

type LegalPageKey = "privacy-policy" | "terms" | "refund-cancellation" | "contact";

type LegalSection = {
  title: string;
  body: string[];
};

const updatedAt = "25 May 2026";

const pages: Record<
  LegalPageKey,
  {
    eyebrow: string;
    title: string;
    summary: string;
    sections: LegalSection[];
  }
> = {
  "privacy-policy": {
    eyebrow: "Privacy",
    title: "Privacy Policy",
    summary:
      "How Shiny Cleany collects, uses, protects, and stores information shared through our website, calls, WhatsApp, and service bookings.",
    sections: [
      {
        title: "Information we collect",
        body: [
          "We collect details you submit for enquiries and bookings, including name, phone number, email, locality, property type, service requirement, preferred timing, and messages.",
          "We may also receive website source data such as page URL, campaign parameters, browser metadata, and form submission timestamps so we can respond to enquiries and improve service quality.",
        ],
      },
      {
        title: "How we use it",
        body: [
          "We use your information to contact you, prepare estimates, schedule cleaning services, manage follow-ups, send service updates, and keep operational records.",
          "We do not sell personal data. Information may be shared only with trained Shiny Cleany staff, assigned service teams, technology providers, or legal authorities when required.",
        ],
      },
      {
        title: "Data protection",
        body: [
          "Lead data is handled through Naya Growth systems with access controls, audit trails, and operational safeguards.",
          "You may ask us to correct or remove your enquiry details unless retention is required for accounting, legal, dispute, or safety reasons.",
        ],
      },
    ],
  },
  terms: {
    eyebrow: "Terms",
    title: "Terms of Service",
    summary:
      "The terms that apply when you request an estimate, book a service, communicate with our team, or use the Shiny Cleany website.",
    sections: [
      {
        title: "Bookings and estimates",
        body: [
          "Website and WhatsApp enquiries are requests for an estimate, not confirmed bookings. A booking is confirmed only after our team accepts the slot, scope, property details, and quote.",
          "Prices shown on the website are starting prices. Final pricing depends on property size, service type, condition, add-ons, access, and location.",
        ],
      },
      {
        title: "Customer responsibilities",
        body: [
          "Please provide accurate property information, ensure safe access, secure valuables, and disclose fragile surfaces or special instructions before work begins.",
          "Shiny Cleany may refuse or reschedule service if a location is unsafe, inaccessible, misrepresented, or outside the agreed scope.",
        ],
      },
      {
        title: "Service guarantee",
        body: [
          "If something is missed within the agreed cleaning scope, tell the team lead during the walkthrough or contact us within 24 hours. We will review and arrange a redo where appropriate.",
          "The guarantee does not cover permanent stains, pre-existing damage, pest issues, structural defects, or areas excluded from the confirmed scope.",
        ],
      },
    ],
  },
  "refund-cancellation": {
    eyebrow: "Policy",
    title: "Refund & Cancellation Policy",
    summary:
      "Clear rules for rescheduling, cancellations, redo requests, and refunds for Shiny Cleany home cleaning services.",
    sections: [
      {
        title: "Rescheduling",
        body: [
          "You may request a reschedule before the team is dispatched. We will try to move the booking to the next available slot.",
          "Same-day reschedules may be subject to availability and may carry a visit charge if the team has already travelled.",
        ],
      },
      {
        title: "Cancellations",
        body: [
          "Cancellations before dispatch normally do not carry a fee. If the team has already been dispatched or denied access at the location, a reasonable visit or blocking charge may apply.",
          "Repeated cancellations, inaccessible locations, or unsafe work conditions may lead to refusal of future bookings.",
        ],
      },
      {
        title: "Refunds and redo",
        body: [
          "For service quality concerns within the agreed scope, our first remedy is inspection and redo of the missed area.",
          "Refunds, where approved, are processed to the original payment method or another mutually agreed method within 7-10 working days.",
        ],
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Contact Shiny Cleany",
    summary:
      "Need a quote, a booking update, or help after a service? Reach the Shiny Cleany team through phone, WhatsApp, or the enquiry form.",
    sections: [
      {
        title: "Customer support",
        body: [
          "Phone: +91 98765 43210",
          "WhatsApp: +91 98765 43210",
          "Service hours: 9 AM to 9 PM",
          "Office: Baner, Pune, Maharashtra 411045",
        ],
      },
      {
        title: "Fastest way to book",
        body: [
          "For new cleaning enquiries, use the Quick Estimate form on the homepage. It sends your request directly to our service desk so the team can call or WhatsApp you quickly.",
        ],
      },
    ],
  },
};

export function isLegalPage(pathname: string): pathname is `/${LegalPageKey}` {
  const key = pathname.replace(/^\//, "") as LegalPageKey;
  return key in pages;
}

export function LegalPage({ pathname }: { pathname: string }) {
  const key = pathname.replace(/^\//, "") as LegalPageKey;
  const page = pages[key] ?? pages["privacy-policy"];

  return (
    <main className="bg-hero-gradient">
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="rounded-3xl border border-border/70 bg-white/90 shadow-elevated backdrop-blur">
          <div className="border-b border-border p-6 sm:p-10">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-mint px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-mint-foreground">
                  <ShieldCheck className="size-3.5" />
                  {page.eyebrow}
                </span>
                <h1 className="mt-4 font-display text-3xl font-extrabold text-foreground sm:text-5xl">
                  {page.title}
                </h1>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
                  {page.summary}
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Last updated: {updatedAt}
                </p>
              </div>
              <img
                src="/brand/shinycleany-icon.png"
                alt=""
                width={96}
                height={96}
                className="size-20 self-start"
              />
            </div>
          </div>

          <div className="grid gap-6 p-6 sm:p-10">
            {page.sections.map((section) => (
              <section key={section.title} className="rounded-2xl border border-border bg-card p-5 sm:p-6">
                <h2 className="font-display text-xl font-bold text-foreground">{section.title}</h2>
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}

            <div className="rounded-2xl brand-blue-gradient p-5 text-primary-foreground sm:p-6">
              <h2 className="font-display text-xl font-bold">Need help now?</h2>
              <div className="mt-4 grid gap-3 text-sm sm:grid-cols-3">
                <a href="tel:+919876543210" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3 font-semibold hover:bg-white/15">
                  <Phone className="size-4" /> Call
                </a>
                <a href="https://wa.me/919876543210?text=Hi%20Shiny%20Cleany" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3 font-semibold hover:bg-white/15">
                  <MessageCircle className="size-4" /> WhatsApp
                </a>
                <a href="/#quote" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3 font-semibold hover:bg-white/15">
                  <Mail className="size-4" /> Get quote
                </a>
              </div>
              <p className="mt-4 flex items-center gap-2 text-xs text-primary-foreground/75">
                <MapPin className="size-4" /> Serving Pune and PCMC from Baner, Pune.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
