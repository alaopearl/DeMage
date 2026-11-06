import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { HERO_IMAGE } from "@/data/portfolioData";

const STATS = [
  { value: "6+", label: "Years" },
  { value: "150+", label: "Projects" },
  { value: "40+", label: "Brands" },
];

const HEADLINE_A = ["Every", "Frame", "Has", "a", "Story."];

export default function Hero() {
  const reduce = useReducedMotion();

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] items-center overflow-hidden pt-28 pb-16 lg:pt-32"
    >
      {/* ambient light */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="drift absolute -top-24 left-[8%] h-[420px] w-[420px] rounded-full bg-[#D4AF37]/12 blur-[130px]" />
        <div
          className="drift absolute bottom-0 right-[6%] h-[380px] w-[520px] rounded-full bg-[#1B3A7A]/25 blur-[140px]"
          style={{ animationDelay: "3s" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(229,192,123,0.07),transparent_60%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#050811]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex items-center gap-4"
          >
            <span className="h-px w-10 bg-[#E5C07B]/60" />
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-medium uppercase tracking-[0.38em] text-[#F8FAFC] sm:text-[11px]">
                Mutairu Oladimeji
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#E5C07B] sm:text-[10px]">
                Videographer | Video Editor | Director
              </span>
            </div>
          </motion.div>

          <h1 className="mt-7 font-cinema text-[2.6rem] leading-[0.98] tracking-[-0.015em] text-[#F8FAFC] sm:text-6xl lg:text-[4.4rem]">
            {HEADLINE_A.map((word, i) => (
              <motion.span
                key={word + i}
                initial={reduce ? false : { opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 0.1 + i * 0.06,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
                className="mr-[0.28em] inline-block pb-1"
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              initial={reduce ? false : { opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.48, ease: [0.16, 1, 0.3, 1] as const }}
              className="mt-1 block pb-2 italic gold-text"
            >
              Every Story Deserves to Be Told.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
            className="mt-6 max-w-[46ch] text-[15px] leading-relaxed text-[#A9B7CC] sm:text-base"
          >
            Six years directing, shooting and editing cinematic films for luxury brands,
            real estate and narrative projects. Concept to final grade, one vision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.72, ease: "easeOut" }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <button
              onClick={() => scrollTo("#work")}
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#F3E5AB] via-[#E5C07B] to-[#C9A24B] px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0A1124] transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Explore My Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-[#E5C07B]/35 px-7 py-3.5 text-[11px] font-medium uppercase tracking-[0.2em] text-[#E5C07B] transition-colors hover:border-[#E5C07B]/70 hover:bg-[#E5C07B]/8 active:scale-[0.98]"
            >
              Contact Me
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
          className="relative"
        >
          <div className="gold-frame relative overflow-hidden rounded-[26px] border border-[#E5C07B]/20">
            <img
              src={HERO_IMAGE}
              alt="Cinema camera rig lit by a warm golden key light on a dark set"
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/5] lg:aspect-[4/5]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#04070F] via-[#04070F]/25 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-16 scanline bg-gradient-to-b from-[#E5C07B]/18 to-transparent" />

            <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-[#E5C07B]/30 bg-[#050811]/70 px-3 py-1.5 backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#E5C07B]" />
              <span className="text-[9px] uppercase tracking-[0.28em] text-[#E5C07B]">
                On Set
              </span>
            </div>

            <div className="absolute inset-x-4 bottom-4 grid grid-cols-3 divide-x divide-[#E5C07B]/15 rounded-2xl border border-white/10 glass-panel px-2 py-3.5 sm:inset-x-5 sm:bottom-5">
              {STATS.map((s) => (
                <div key={s.label} className="px-2 text-center">
                  <div className="font-cinema text-2xl text-[#F3E5AB] sm:text-[26px]">
                    {s.value}
                  </div>
                  <div className="mt-0.5 text-[9px] uppercase tracking-[0.24em] text-[#93A3BD]">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => scrollTo("#work")}
            aria-label="Play showreel"
            className="absolute -left-4 top-1/2 hidden h-16 w-16 -translate-y-1/2 place-items-center rounded-full border border-[#E5C07B]/40 bg-[#050811]/80 text-[#E5C07B] backdrop-blur transition-transform hover:scale-105 lg:grid"
          >
            <Play className="ml-0.5 h-5 w-5 fill-current" strokeWidth={1.5} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}