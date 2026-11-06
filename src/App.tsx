import { ArrowUpRight, Mail } from "lucide-react";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import ServicesAndProcess from "@/components/ServicesAndProcess";
import AboutAndContact from "@/components/AboutAndContact";
import { CONTACT, SOCIALS } from "@/data/portfolioData";

const FOOTER_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Collaborations", href: "#collaborations" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050811] text-[#E8EDF7] antialiased">
      <Navbar />
      <main>
        <Hero />
        <PortfolioShowcase />
        <ServicesAndProcess />
        <AboutAndContact />
      </main>

      <footer className="relative overflow-hidden border-t border-[#E5C07B]/12 bg-[#04070F] pt-16">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px gold-rule" />
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full border border-[#E5C07B]/40 font-cinema text-base text-[#E5C07B]">
                  MO
                </span>
                <div className="leading-none">
                  <p className="text-[11px] uppercase tracking-[0.34em] text-[#F8FAFC]">
                    Mutairu Oladimeji
                  </p>
                  <p className="mt-1.5 text-[9px] uppercase tracking-[0.28em] text-[#8FA0BC]">
                    Videographer / Editor / Director
                  </p>
                </div>
              </div>
              <p className="mt-5 max-w-xs text-[13px] leading-relaxed text-[#8FA0BC]">
                Cinematic films for brands, properties and stories that deserve to be seen.
                Six years behind the camera - based in Lagos, shooting anywhere.
              </p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#E5C07B]/30 px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-[#E5C07B] transition-colors hover:border-[#E5C07B]/70 hover:bg-[#E5C07B]/8"
              >
                <Mail className="h-3.5 w-3.5" /> Start a project
              </a>
            </div>

            <div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-[#E5C07B]/80">Explore</p>
              <ul className="mt-4 space-y-2.5">
                {FOOTER_LINKS.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .querySelector(l.href)
                          ?.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                      className="text-[12.5px] text-[#93A3BD] transition-colors hover:text-[#E5C07B]"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-[#E5C07B]/80">Follow</p>
              <ul className="mt-4 space-y-2.5">
                {SOCIALS.map((s) => {
                  const Icon = s.icon;
                  return (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-[12.5px] text-[#93A3BD] transition-colors hover:text-[#E5C07B]"
                      >
                        <Icon className="h-3.5 w-3.5" />
                        {s.handle}
                        <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-3 border-t border-white/6 py-6 sm:flex-row">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#55647E]">
              &copy; {new Date().getFullYear()} Mutairu Oladimeji Films. All rights reserved.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-[10px] uppercase tracking-[0.2em] text-[#8FA0BC] transition-colors hover:text-[#E5C07B]"
            >
              Back to top
            </button>
          </div>
        </div>
      </footer>

      <Toaster
        theme="dark"
        position="top-right"
        closeButton
        toastOptions={{
          style: {
            background: "#0A1124",
            border: "1px solid rgba(229,192,123,0.25)",
            color: "#F8FAFC",
          },
        }}
      />
    </div>
  );
}