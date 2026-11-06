import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-panel border-b border-[#E5C07B]/12 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.9)]"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-10">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            go("#home");
          }}
          className="group flex items-center gap-3"
        >
          <span className="grid h-10 w-10 place-items-center rounded-full border border-[#E5C07B]/40 font-cinema text-[15px] tracking-[0.08em] text-[#E5C07B] transition-colors group-hover:border-[#E5C07B]">
            MO
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="text-[11px] font-medium uppercase tracking-[0.34em] text-[#F8FAFC]">
              Mutairu
            </span>
            <span className="mt-1 text-[10px] uppercase tracking-[0.3em] text-[#8FA0BC]">
              Oladimeji
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                go(link.href);
              }}
              className="relative text-[11px] uppercase tracking-[0.22em] text-[#C3CFE2] transition-colors hover:text-[#E5C07B]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => go("#contact")}
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-[#F3E5AB] via-[#E5C07B] to-[#C9A24B] px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0A1124] transition-transform hover:-translate-y-0.5 active:scale-[0.98] sm:flex"
          >
            Book a Shoot
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-full border border-[#E5C07B]/25 text-[#E5C07B] lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: "easeInOut" }}
            className="overflow-hidden border-t border-[#E5C07B]/10 bg-[#070D1A]/95 lg:hidden"
          >
            <div className="flex flex-col px-5 py-4">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    go(link.href);
                  }}
                  className="border-b border-white/5 py-3.5 text-[12px] uppercase tracking-[0.24em] text-[#C3CFE2] last:border-0 hover:text-[#E5C07B]"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => go("#contact")}
                className="mt-4 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#F3E5AB] via-[#E5C07B] to-[#C9A24B] py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0A1124]"
              >
                Book a Shoot
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}