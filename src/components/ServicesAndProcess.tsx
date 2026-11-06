import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { COLLABORATIONS, PROCESS, SERVICES } from "@/data/portfolioData";

export default function ServicesAndProcess() {
  const reduce = useReducedMotion();
  const reveal = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: 26 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.6, delay: reduce ? 0 : Math.min(i * 0.06, 0.4), ease: "easeOut" as const },
  });

  return (
    <>
      <section id="services" className="relative border-y border-white/5 bg-[#070D1A] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-[#E5C07B]/60" />
                <span className="text-[10px] uppercase tracking-[0.38em] text-[#E5C07B]">
                  Capabilities
                </span>
              </div>
              <h2 className="mt-5 max-w-[24ch] font-cinema text-4xl leading-[1.02] text-[#F8FAFC] sm:text-5xl lg:text-[3.4rem]">
                Nine ways I can carry your <span className="italic gold-text">story</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-[#93A3BD]">
              Every service runs through the same standard: intentional framing, controlled
              light, and an edit that respects the viewer&rsquo;s time.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  {...reveal(i)}
                  className={`group relative overflow-hidden rounded-[18px] border border-white/8 p-6 transition-colors hover:border-[#E5C07B]/35 ${
                    service.featured
                      ? "bg-gradient-to-br from-[#111C38] to-[#0A1124] sm:col-span-2 lg:col-span-2"
                      : "bg-[#0A1124]"
                  }`}
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#D4AF37]/0 blur-3xl transition-all duration-500 group-hover:bg-[#D4AF37]/12" />
                  <div className="flex items-start justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-[#E5C07B]/22 bg-[#050811]/60 text-[#E5C07B]">
                      <Icon className="h-[18px] w-[18px]" strokeWidth={1.6} />
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-[#4C5C77]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 font-cinema text-[21px] leading-snug text-[#F8FAFC]">
                    {service.title}
                  </h3>
                  <p
                    className={`mt-2 text-[13px] leading-relaxed text-[#93A3BD] ${
                      service.featured ? "max-w-xl" : ""
                    }`}
                  >
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="process" className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-[#E5C07B]/60" />
                <span className="text-[10px] uppercase tracking-[0.38em] text-[#E5C07B]">
                  The Process
                </span>
              </div>
              <h2 className="mt-5 font-cinema text-4xl leading-[1.02] text-[#F8FAFC] sm:text-5xl">
                Six steps from <span className="italic gold-text">idea to export</span>
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#93A3BD]">
                No stage is skipped and nothing is improvised on the day. You always know
                where the film is, and what happens next.
              </p>
              <div className="mt-8 rounded-2xl border border-[#E5C07B]/18 bg-[#0A1124] p-5">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.26em] text-[#E5C07B]">
                  <BadgeCheck className="h-4 w-4" /> Typical Timeline
                </div>
                <p className="mt-2 text-[13px] leading-relaxed text-[#A9B7CC]">
                  Commercial film: 10-18 days. Real estate: 4-7 days. Social content: 48-72
                  hours from wrap to delivery.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute bottom-2 left-[19px] top-2 w-px bg-gradient-to-b from-[#E5C07B]/50 via-[#E5C07B]/20 to-transparent" />
              <div className="space-y-7">
                {PROCESS.map((step, i) => (
                  <motion.div key={step.number} {...reveal(i)} className="relative flex gap-5">
                    <div className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#E5C07B]/35 bg-[#050811] font-mono text-[11px] text-[#E5C07B]">
                      {step.number}
                    </div>
                    <div className="pt-1">
                      <h3 className="font-cinema text-[22px] leading-none text-[#F8FAFC]">
                        {step.title}
                      </h3>
                      <p className="mt-2 max-w-xl text-[13px] leading-relaxed text-[#93A3BD]">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="collaborations"
        className="relative overflow-hidden border-y border-white/5 bg-[#070D1A] py-24 lg:py-28"
      >
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[560px] -translate-x-1/2 rounded-full bg-[#D4AF37]/8 blur-[120px]" />
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-[#E5C07B]/60" />
              <span className="text-[10px] uppercase tracking-[0.38em] text-[#E5C07B]">
                Featured Collaborations
              </span>
            </div>
            <h2 className="mt-5 font-cinema text-4xl leading-[1.02] text-[#F8FAFC] sm:text-5xl">
              Brands that trusted the <span className="italic gold-text">frame</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {COLLABORATIONS.map((c, i) => (
              <motion.div
                key={c.name}
                {...reveal(i)}
                className="group relative overflow-hidden rounded-[18px] border border-[#E5C07B]/18 bg-gradient-to-br from-[#101B36] to-[#080F1F] p-6 transition-colors hover:border-[#E5C07B]/45"
              >
                <div className="shimmer pointer-events-none absolute inset-x-0 top-0 h-px opacity-60" />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-cinema text-xl leading-tight tracking-[0.02em] text-[#F3E5AB]">
                      {c.name}
                    </h3>
                    <p className="mt-1.5 text-[10px] uppercase tracking-[0.2em] text-[#93A3BD]">
                      {c.focus}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-[#E5C07B]/25 px-2.5 py-1 text-[9px] uppercase tracking-[0.16em] text-[#E5C07B]/90">
                    {c.projects}
                  </span>
                </div>
                <p className="mt-4 text-[13px] leading-relaxed text-[#A9B7CC]">{c.scope}</p>
                <ArrowUpRight className="absolute bottom-5 right-5 h-4 w-4 text-[#E5C07B]/0 transition-all duration-300 group-hover:text-[#E5C07B]/80" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}