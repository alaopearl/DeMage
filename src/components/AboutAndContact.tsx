import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Copy,
  Mail,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";
import { toast } from "sonner";
import {
  BUDGET_RANGES,
  CONTACT,
  DIFFERENTIATORS,
  PORTRAIT_IMAGE,
  PROJECT_TYPES,
  SOCIALS,
} from "@/data/portfolioData";

const GEAR = [
  "RED Komodo 6K",
  "Sony FX6",
  "Prime lens set",
  "Gimbal & slider",
  "DaVinci Resolve",
  "Location lighting kit",
];

const EMPTY = {
  name: "",
  email: "",
  phone: "",
  projectType: PROJECT_TYPES[0],
  budget: BUDGET_RANGES[2],
  message: "",
};

export default function AboutAndContact() {
  const reduce = useReducedMotion();
  const [form, setForm] = useState(EMPTY);
  const [copied, setCopied] = useState(false);

  const set = (key: keyof typeof EMPTY) => (value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const buildBrief = () =>
    [
      "New project inquiry - Mutairu Oladimeji Films",
      "",
      `Name: ${form.name || "-"}`,
      `Email: ${form.email || "-"}`,
      `Phone / WhatsApp: ${form.phone || "-"}`,
      `Project type: ${form.projectType}`,
      `Budget: ${form.budget}`,
      "",
      `Brief: ${form.message || "-"}`,
    ].join(String.fromCharCode(10));

  const validate = () => {
    if (form.name.trim().length < 2) {
      toast.error("Please enter your name.");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }
    if (form.message.trim().length < 12) {
      toast.error("Tell me a little more about the project (at least 12 characters).");
      return false;
    }
    return true;
  };

  const sendWhatsApp = () => {
    if (!validate()) return;
    const url = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(buildBrief())}`;
    window.open(url, "_blank", "noopener,noreferrer");
    toast.success("Brief ready - opening WhatsApp.", {
      description: "Send it through and you will have a reply within 24 hours.",
    });
  };

  const copyBrief = async () => {
    if (!validate()) return;
    try {
      await navigator.clipboard.writeText(buildBrief());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
      toast.success("Project brief copied to clipboard.");
    } catch {
      toast.error("Could not access the clipboard. Please copy manually.");
    }
  };

  const reveal = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.55, delay: reduce ? 0 : Math.min(i * 0.05, 0.3) },
  });

  return (
    <>
      <section id="about" className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <motion.div {...reveal(0)} className="relative">
              <div className="gold-frame relative overflow-hidden rounded-[24px] border border-[#E5C07B]/20">
                <img
                  src={PORTRAIT_IMAGE}
                  alt="Mutairu Oladimeji holding a cinema camera under golden rim light"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050811]/85 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/10 glass-panel p-4">
                  <p className="font-cinema text-lg leading-none text-[#F3E5AB]">
                    Since 2019
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#93A3BD]">
                    Behind the camera, every frame
                  </p>
                </div>
              </div>
              <div className="absolute -right-3 -top-3 hidden rounded-full border border-[#E5C07B]/30 bg-[#050811] px-4 py-2 font-mono text-[10px] tracking-[0.2em] text-[#E5C07B] sm:block">
                6 YRS
              </div>
            </motion.div>

            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-[#E5C07B]/60" />
                <span className="text-[10px] uppercase tracking-[0.38em] text-[#E5C07B]">
                  About Me
                </span>
              </div>
              <h2 className="mt-5 max-w-[26ch] font-cinema text-4xl leading-[1.03] text-[#F8FAFC] sm:text-5xl">
                A director who edits, an editor who{" "}
                <span className="italic gold-text">shoots</span>
              </h2>

              <div className="mt-6 space-y-4 text-[14px] leading-relaxed text-[#A9B7CC]">
                <p>
                  I am Mutairu Oladimeji - a videographer, video editor and film director
                  with six years spent on set and in the timeline. I have built films for
                  luxury gold trading, high-end real estate, travel and event brands, plus
                  narrative work that lives outside the brief.
                </p>
                <p>
                  I shoot on RED and Sony cinema systems with prime glass, light every scene
                  with intent, and finish the grade myself in DaVinci Resolve. Because the
                  same person holds the vision from concept to export, nothing gets lost in
                  translation.
                </p>
                <p>
                  My work is not about showing off movement. It is about making an audience
                  feel something in the first three seconds - and keeping them there.
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {GEAR.map((g) => (
                  <span
                    key={g}
                    className="rounded-full border border-[#E5C07B]/20 bg-[#0A1124] px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-[#C3CFE2]"
                  >
                    {g}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-20">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h3 className="font-cinema text-3xl leading-tight text-[#F8FAFC] sm:text-[2.6rem]">
                Why work <span className="italic gold-text">with me</span>
              </h3>
              <p className="max-w-sm text-sm leading-relaxed text-[#93A3BD]">
                Six reasons clients come back for the second film.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {DIFFERENTIATORS.map((d, i) => {
                const Icon = d.icon;
                return (
                  <motion.div
                    key={d.title}
                    {...reveal(i)}
                    className="group rounded-[16px] border border-white/8 bg-[#0A1124] p-5 transition-colors hover:border-[#E5C07B]/35"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-lg border border-[#E5C07B]/22 text-[#E5C07B]">
                      <Icon className="h-4 w-4" strokeWidth={1.7} />
                    </span>
                    <h4 className="mt-4 font-cinema text-lg leading-snug text-[#F8FAFC]">
                      {d.title}
                    </h4>
                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#93A3BD]">
                      {d.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative overflow-hidden border-t border-white/5 bg-[#070D1A] py-24 lg:py-32"
      >
        <div className="pointer-events-none absolute -left-20 top-10 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-[130px]" />
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-[#E5C07B]/60" />
                <span className="text-[10px] uppercase tracking-[0.38em] text-[#E5C07B]">
                  Contact
                </span>
              </div>
              <h2 className="mt-5 max-w-[20ch] font-cinema text-4xl leading-[1.02] text-[#F8FAFC] sm:text-5xl lg:text-[3.4rem]">
                Let&rsquo;s create something{" "}
                <span className="italic gold-text">extraordinary</span>
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-[#93A3BD]">
                Tell me about the project - the story, the audience and the deadline. I reply
                to every serious inquiry within 24 hours.
              </p>

              <div className="mt-8 space-y-3">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="group flex items-center justify-between rounded-xl border border-white/8 bg-[#0A1124] p-4 transition-colors hover:border-[#E5C07B]/35"
                >
                  <span className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-[#E5C07B]" />
                    <span className="text-[13px] text-[#C3CFE2]">{CONTACT.email}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-[#5A6A84] transition-colors group-hover:text-[#E5C07B]" />
                </a>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-white/8 bg-[#0A1124] p-4 transition-colors hover:border-[#E5C07B]/35"
                >
                  <span className="flex items-center gap-3">
                    <MessageCircle className="h-4 w-4 text-[#E5C07B]" />
                    <span className="text-[13px] text-[#C3CFE2]">+234 810 552 7189</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-[#5A6A84] transition-colors group-hover:text-[#E5C07B]" />
                </a>
                <div className="flex items-center gap-3 rounded-xl border border-white/8 bg-[#0A1124] p-4">
                  <MapPin className="h-4 w-4 text-[#E5C07B]" />
                  <span className="text-[13px] text-[#C3CFE2]">{CONTACT.location}</span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {SOCIALS.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-2 text-[10px] uppercase tracking-[0.16em] text-[#93A3BD] transition-colors hover:border-[#E5C07B]/40 hover:text-[#E5C07B]"
                    >
                      <Icon className="h-3.5 w-3.5" />
                      {s.label}
                    </a>
                  );
                })}
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendWhatsApp();
              }}
              className="rounded-[22px] border border-[#E5C07B]/18 bg-gradient-to-br from-[#101B36] to-[#080F1F] p-6 sm:p-8"
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#E5C07B]">
                Project Inquiry
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <Field label="Full name">
                  <input
                    value={form.name}
                    onChange={(e) => set("name")(e.target.value)}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </Field>
                <Field label="Email address">
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => set("email")(e.target.value)}
                    placeholder="you@company.com"
                    className={inputClass}
                  />
                </Field>
                <Field label="Phone / WhatsApp">
                  <input
                    value={form.phone}
                    onChange={(e) => set("phone")(e.target.value)}
                    placeholder="+234 ..."
                    className={inputClass}
                  />
                </Field>
                <Field label="Project type">
                  <select
                    value={form.projectType}
                    onChange={(e) => set("projectType")(e.target.value)}
                    className={inputClass}
                  >
                    {PROJECT_TYPES.map((t) => (
                      <option key={t} value={t} className="bg-[#0A1124]">
                        {t}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Budget range" full>
                  <select
                    value={form.budget}
                    onChange={(e) => set("budget")(e.target.value)}
                    className={inputClass}
                  >
                    {BUDGET_RANGES.map((b) => (
                      <option key={b} value={b} className="bg-[#0A1124]">
                        {b}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Project brief" full>
                  <textarea
                    value={form.message}
                    onChange={(e) => set("message")(e.target.value)}
                    rows={4}
                    placeholder="Story, audience, deliverables, deadline..."
                    className={`${inputClass} resize-none`}
                  />
                </Field>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#F3E5AB] via-[#E5C07B] to-[#C9A24B] py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0A1124] transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  Send via WhatsApp
                  <Send className="h-3.5 w-3.5" strokeWidth={2} />
                </button>
                <button
                  type="button"
                  onClick={copyBrief}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E5C07B]/35 px-5 py-3.5 text-[11px] font-medium uppercase tracking-[0.18em] text-[#E5C07B] transition-colors hover:border-[#E5C07B]/70 hover:bg-[#E5C07B]/8 active:scale-[0.98]"
                >
                  {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  {copied ? "Copied" : "Copy Brief"}
                </button>
              </div>
              <p className="mt-3 text-center text-[10px] uppercase tracking-[0.16em] text-[#5A6A84]">
                Opens WhatsApp with your brief pre-filled
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

const inputClass =
  "w-full rounded-xl border border-white/10 bg-[#050811]/70 px-4 py-3 text-[13px] text-[#F8FAFC] placeholder:text-[#55647E] transition-colors focus:border-[#E5C07B]/60 focus:outline-none";

function Field({
  label,
  children,
  full,
}: {
  label: string;
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <label className={`block ${full ? "sm:col-span-2" : ""}`}>
      <span className="mb-1.5 block text-[9px] uppercase tracking-[0.22em] text-[#8FA0BC]">
        {label}
      </span>
      {children}
    </label>
  );
}