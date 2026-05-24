import { useEffect, useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";

const services = [
  "Deep Home Cleaning",
  "Bathroom Cleaning",
  "Kitchen Cleaning",
  "Sofa Shampooing",
  "Carpet Cleaning",
  "Office Cleaning",
  "Move-in / Move-out",
  "Post-Construction",
];
const localities = [
  "Koregaon Park", "Viman Nagar", "Kalyani Nagar", "Baner", "Balewadi",
  "Hinjawadi", "Wakad", "Aundh", "Kothrud", "Hadapsar",
  "Magarpatta", "Kharadi", "Pimple Saudagar", "Chinchwad", "Pimpri", "Other",
];
const propertyTypes = ["1 BHK", "2 BHK", "3 BHK", "4 BHK+", "Villa", "Office"];
const urgencies = ["Today", "Tomorrow", "This Week", "Just Exploring"];

const schema = z.object({
  service: z.string().min(1, "Select a service"),
  locality: z.string().min(1, "Select a locality"),
  property: z.string().min(1, "Select property type"),
  urgency: z.string().min(1, "Select urgency"),
  name: z.string().trim().min(2, "Enter your name").max(60),
  phone: z.string().trim().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile"),
});

type Props = { defaultService?: string; compact?: boolean };

export function LeadForm({ defaultService, compact }: Props) {
  const [form, setForm] = useState({
    service: defaultService ?? "Deep Home Cleaning",
    locality: "",
    property: "2 BHK",
    urgency: "Tomorrow",
    name: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (defaultService) setForm((f) => ({ ...f, service: defaultService }));
  }, [defaultService]);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setLoading(true);
    const msg = `Hi Shiny Cleany! I'd like a quote.%0A%0A*Service:* ${form.service}%0A*Locality:* ${form.locality}%0A*Property:* ${form.property}%0A*When:* ${form.urgency}%0A*Name:* ${form.name}%0A*Phone:* ${form.phone}`;
    setTimeout(() => {
      window.open(`https://wa.me/919876543210?text=${msg}`, "_blank");
      toast.success("Request sent. Our team will call within 10 minutes.");
      setLoading(false);
    }, 600);
  };

  const inputCls =
    "w-full h-11 rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition";

  return (
    <form onSubmit={onSubmit} className={compact ? "space-y-3" : "space-y-3.5"}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <select className={inputCls} value={form.service} onChange={set("service")}>
          {services.map((s) => <option key={s}>{s}</option>)}
        </select>
        <select className={inputCls} value={form.locality} onChange={set("locality")}>
          <option value="">Select locality</option>
          {localities.map((s) => <option key={s}>{s}</option>)}
        </select>
        <select className={inputCls} value={form.property} onChange={set("property")}>
          {propertyTypes.map((s) => <option key={s}>{s}</option>)}
        </select>
        <select className={inputCls} value={form.urgency} onChange={set("urgency")}>
          {urgencies.map((s) => <option key={s}>{s}</option>)}
        </select>
      </div>
      <input className={inputCls} placeholder="Your name" value={form.name} onChange={set("name")} maxLength={60} />
      <div className="flex">
        <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-border bg-muted text-sm text-muted-foreground">+91</span>
        <input
          className={`${inputCls} rounded-l-none`}
          placeholder="10-digit mobile number"
          inputMode="numeric"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="group w-full h-12 rounded-lg bg-cta text-cta-foreground font-semibold text-base shadow-cta hover:brightness-105 active:scale-[0.99] transition flex items-center justify-center gap-2"
      >
        {loading ? <Loader2 className="size-5 animate-spin" /> : <Send className="size-4" />}
        Get Free Estimate in 10 Minutes
      </button>
      <p className="text-[11px] text-center text-muted-foreground">
        No spam. We'll call you on WhatsApp with a fixed quote.
      </p>
    </form>
  );
}
