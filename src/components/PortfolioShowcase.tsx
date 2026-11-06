import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Pause, Play, Sliders, Volume2, VolumeX, X } from "lucide-react";
import { CATEGORIES, PROJECTS } from "@/data/portfolioData";
import type { Project, ProjectCategory } from "@/types";

type Filter = ProjectCategory | "All";

const FILTERS: Filter[] = ["All", ...CATEGORIES];

function formatTime(progress: number, runtime: string) {
  const [m, s] = runtime.split(":").map(Number);
  const total = m * 60 + s;
  const current = Math.round((progress / 100) * total);
  return `${String(Math.floor(current / 60)).padStart(2, "0")}:${String(
    current % 60,
  ).padStart(2, "0")}`;
}

export default function PortfolioShowcase() {
  const [filter, setFilter] = useState<Filter>("All");
  const [active, setActive] = useState<Project | null>(null);
  const reduce = useReducedMotion();

  const projects = useMemo(
    () => (filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter],
  );

  const counts = useMemo(() => {
    const map: Record<string, number> = { All: PROJECTS.length };
    PROJECTS.forEach((p) => {
      map[p.category] = (map[p.category] ?? 0) + 1;
    });
    return map;
  }, []);

  return (
    <section id="work" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-[#E5C07B]/60" />
              <span className="text-[10px] uppercase tracking-[0.38em] text-[#E5C07B]">
                Selected Work
              </span>
            </div>
            <h2 className="mt-5 max-w-[22ch] font-cinema text-4xl leading-[1.02] text-[#F8FAFC] sm:text-5xl lg:text-[3.4rem]">
              Films built to hold <span className="italic gold-text">attention</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[#93A3BD]">
            A selection from six years of commercial, architectural and narrative work.
            Open any project for the director notes and the gear behind it.
          </p>
        </div>

        <div className="mt-10 -mx-5 overflow-x-auto px-5 pb-2 lg:mx-0 lg:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex min-w-max items-center gap-2.5">
            {FILTERS.map((f) => {
              const on = filter === f;
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`rounded-full border px-4 py-2 text-[10px] uppercase tracking-[0.2em] transition-all ${
                    on
                      ? "border-[#E5C07B]/60 bg-[#E5C07B]/12 text-[#F3E5AB]"
                      : "border-white/10 text-[#8FA0BC] hover:border-[#E5C07B]/30 hover:text-[#E5C07B]"
                  }`}
                >
                  {f}
                  <span className="ml-2 text-[9px] text-[#E5C07B]/60">{counts[f] ?? 0}</span>
                </button>
              );
            })}
          </div>
        </div>

        <motion.div layout className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {projects.map((project, i) => (
              <motion.article
                key={project.id}
                layout
                initial={reduce ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.45, delay: reduce ? 0 : Math.min(i * 0.05, 0.3) }}
                className={`group relative overflow-hidden rounded-[20px] border border-white/8 bg-[#0A1124] transition-colors hover:border-[#E5C07B]/35 ${
                  i === 0 && filter === "All" ? "lg:col-span-2" : ""
                }`}
              >
                <button
                  onClick={() => setActive(project)}
                  className="block w-full text-left"
                  aria-label={`Watch ${project.title}`}
                >
                  <div className="relative overflow-hidden">
                    <video
                      src={project.video}
                      poster={project.thumbnail}
                      muted
                      loop
                      playsInline
                      autoPlay
                      preload="metadata"
                      className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] ${
                        i === 0 && filter === "All" ? "aspect-[16/9]" : "aspect-[4/3]"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#04070F] via-[#04070F]/20 to-transparent opacity-90" />
                    <div className="absolute inset-0 grid place-items-center">
                      <span className="grid h-14 w-14 place-items-center rounded-full border border-[#E5C07B]/50 bg-[#050811]/55 text-[#E5C07B] opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100 group-hover:scale-105">
                        <Play className="ml-0.5 h-4 w-4 fill-current" />
                      </span>
                    </div>
                    <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-[#050811]/70 px-2.5 py-1 text-[9px] uppercase tracking-[0.2em] text-[#C3CFE2] backdrop-blur">
                      {project.category}
                    </span>
                    <span className="absolute right-4 top-4 rounded-full bg-[#050811]/70 px-2.5 py-1 font-mono text-[10px] text-[#E5C07B] backdrop-blur">
                      {project.runtime}
                    </span>
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-cinema text-xl leading-tight text-[#F8FAFC]">
                          {project.title}
                        </h3>
                        <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#E5C07B]/80">
                          {project.client}
                        </p>
                      </div>
                      <span className="mt-1 text-[10px] tracking-[0.15em] text-[#7E8FA8]">
                        {project.year}
                      </span>
                    </div>
                    <p className="mt-3 line-clamp-2 text-[13px] leading-relaxed text-[#93A3BD]">
                      {project.description}
                    </p>
                  </div>
                </button>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {projects.length === 0 && (
          <div className="mt-10 rounded-2xl border border-dashed border-[#E5C07B]/25 p-12 text-center">
            <p className="text-sm text-[#93A3BD]">
              No projects in this category yet. Try another filter.
            </p>
          </div>
        )}
      </div>

      <AnimatePresence>
        {active && <VideoModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}

function VideoModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(project.runtime);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    document.body.classList.add("no-scroll");
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("no-scroll");
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] grid place-items-center overflow-y-auto bg-[#02040A]/88 p-4 backdrop-blur-sm sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} preview`}
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
        onClick={(e) => e.stopPropagation()}
        className="my-auto w-full max-w-4xl overflow-hidden rounded-[22px] border border-[#E5C07B]/22 bg-[#070D1A] shadow-[0_60px_120px_-50px_rgba(0,0,0,0.95)]"
      >
        <div className="flex items-center justify-between border-b border-white/8 px-5 py-3.5">
          <div>
            <p className="font-cinema text-lg leading-none text-[#F8FAFC]">{project.title}</p>
            <p className="mt-1 text-[9px] uppercase tracking-[0.22em] text-[#E5C07B]/80">
              {project.client} - {project.year}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close preview"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/12 text-[#C3CFE2] transition-colors hover:border-[#E5C07B]/50 hover:text-[#E5C07B]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="relative bg-black">
          <video
            ref={videoRef}
            src={project.video}
            poster={project.thumbnail}
            muted={muted}
            autoPlay
            playsInline
            className={`w-full object-cover transition-all duration-700 ${
              playing ? "scale-100 opacity-100" : "scale-[1.02] opacity-80"
            } aspect-[16/9]`}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onEnded={() => setPlaying(false)}
            onLoadedMetadata={(e) => {
              const seconds = Math.round(e.currentTarget.duration || 0);
              setDuration(`${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`);
            }}
            onTimeUpdate={(e) => {
              const video = e.currentTarget;
              setProgress(video.duration ? (video.currentTime / video.duration) * 100 : 0);
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

          <button
            onClick={togglePlayback}
            aria-label={playing ? "Pause" : "Play"}
            className="absolute inset-0 grid place-items-center text-[#F3E5AB]"
          >
            <span
              className={`grid h-16 w-16 place-items-center rounded-full border border-[#E5C07B]/40 bg-[#050811]/50 backdrop-blur transition-opacity ${
                playing ? "opacity-0 hover:opacity-100" : "opacity-100"
              }`}
            >
              {playing ? (
                <Pause className="h-5 w-5 fill-current" />
              ) : (
                <Play className="ml-0.5 h-5 w-5 fill-current" />
              )}
            </span>
          </button>

          <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 px-4 pb-4">
            <button
              onClick={togglePlayback}
              aria-label={playing ? "Pause" : "Play"}
              className="text-[#F3E5AB]"
            >
              {playing ? (
                <Pause className="h-4 w-4 fill-current" />
              ) : (
                <Play className="h-4 w-4 fill-current" />
              )}
            </button>
            <span className="font-mono text-[10px] text-[#C3CFE2]">
              {formatTime(progress, duration)}
            </span>
            <div
              className="relative h-1 flex-1 cursor-pointer rounded-full bg-white/20"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const nextProgress = Math.min(100, Math.max(0, ((e.clientX - rect.left) / rect.width) * 100));
                setProgress(nextProgress);
                if (videoRef.current?.duration) {
                  videoRef.current.currentTime = (nextProgress / 100) * videoRef.current.duration;
                }
              }}
            >
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#E5C07B] to-[#F3E5AB]"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="font-mono text-[10px] text-[#7E8FA8]">{duration}</span>
            <button
              onClick={() => setMuted((m) => !m)}
              aria-label={muted ? "Unmute" : "Mute"}
              className="text-[#C3CFE2] transition-colors hover:text-[#E5C07B]"
            >
              {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <div className="grid gap-6 p-5 sm:grid-cols-[1.4fr_1fr] sm:p-6">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#E5C07B]">Director Notes</p>
            <p className="mt-3 text-[13px] leading-relaxed text-[#A9B7CC] italic">
              &ldquo;{project.directorNote}&rdquo;
            </p>
            <p className="mt-4 text-[13px] leading-relaxed text-[#93A3BD]">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 px-2.5 py-1 text-[9px] uppercase tracking-[0.16em] text-[#8FA0BC]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/8 bg-[#0A1124] p-4">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-[#E5C07B]">
              <Sliders className="h-3.5 w-3.5" /> Production Specs
            </div>
            <ul className="mt-3 space-y-2">
              {project.specs.map((s) => (
                <li key={s} className="flex items-start gap-2 text-[12px] text-[#A9B7CC]">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#E5C07B]" />
                  {s}
                </li>
              ))}
            </ul>
            <button
              onClick={() => {
                onClose();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#F3E5AB] via-[#E5C07B] to-[#C9A24B] py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0A1124] transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Book a Similar Project
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}