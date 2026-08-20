import { useRef } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import { scrollToId } from "./Navbar";

export default function Hero() {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-background pt-28 pb-16 md:pt-32">
      <div className="pointer-events-none absolute inset-0 grid-overlay" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="font-display text-[20vw] font-bold leading-none tracking-tighter text-foreground opacity-[0.02]">
          DESIGN
        </span>
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
        >
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-primary glow-accent" />
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground sm:text-sm">
              Python Backend Developer
            </span>
          </div>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[0.9] tracking-tighter sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            BACKEND
            <br />
            <span className="text-outline">SYSTEMS</span>
            <span className="text-primary">.</span>
          </h1>

          <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
            I build secure, database-driven REST APIs and scalable backend systems with Python,
            FastAPI, PostgreSQL and Docker.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollToId("work")}
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-accent px-7 py-4 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-105"
            >
              View My Work
              <span className="grid h-7 w-7 place-items-center rounded-full bg-background/20">
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </span>
            </button>
            <button
              onClick={() => scrollToId("contact")}
              className="inline-flex items-center gap-3 rounded-full border border-border bg-surface px-7 py-4 text-sm font-semibold text-foreground transition-colors hover:border-primary"
            >
              <span className="h-2 w-2 rounded-full bg-primary" />
              Contact Me
            </button>
          </div>
        </motion.div>

        <div ref={constraintsRef} className="relative flex h-[520px] items-center justify-center">
          <div className="pointer-events-none absolute left-1/2 top-[-60vh] h-[60vh] w-6 -translate-x-1/2 bg-gradient-accent opacity-30" />
          <motion.div
            drag
            dragElastic={0.2}
            dragConstraints={constraintsRef}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            animate={{ y: [0, -15, 0], rotateZ: [-1, 1, -1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            whileDrag={{ scale: 1.03, cursor: "grabbing" }}
            className="relative w-[280px] cursor-grab rounded-[2rem] border border-border bg-surface p-3 shadow-[var(--shadow-elevated)] sm:w-[320px]"
          >
            <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-foreground/20" />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-border">
              <img
                src={portrait}
                alt="Portrait of Ali Shaikh, Python backend developer"
                width={768}
                height={1024}
                className="h-[380px] w-full object-cover sm:h-[420px]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/70 to-transparent p-5 pt-16">
                <p className="font-display text-2xl font-bold tracking-tighter text-foreground">
                  Ali Shaikh<span className="text-primary">.</span>
                </p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Python Backend Developer
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
