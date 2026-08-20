import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    category: "Backend System",
    title: "PetroCore System",
    description:
      "A Python backend system for managing petroleum operations with structured data, secure endpoints and maintainable business logic.",
    tags: ["Python", "FastAPI", "PostgreSQL"],
    url: "https://github.com/developer-ali16/PetroCore-System",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
  },
  {
    category: "Database Design",
    title: "E-Commerce Management",
    description:
      "A relational database project for e-commerce workflows, built around organized product, customer and order data.",
    tags: ["PostgreSQL", "SQL", "Database"],
    url: "https://github.com/developer-ali16/e-commerce-management-DATA-BASE",
    image:
      "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=800&auto=format&fit=crop",
  },
  {
    category: "API Platform",
    title: "Mottainai Smart Pantry",
    description:
      "A FastAPI backend that tracks pantry inventory, monitors expiry dates and sends reminders to help reduce food waste.",
    tags: ["FastAPI", "Python", "Automation"],
    url: "https://github.com/developer-ali16/Mottainai-Smart-pantry-V2",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop",
  },
  {
    category: "Web Application",
    title: "NEXO WEB",
    description:
      "A practical web application project demonstrating full-stack problem solving and a clean path from user request to working feature.",
    tags: ["TypeScript", "Web Development", "GitHub"],
    url: "https://github.com/developer-ali16/NEXO-WEB",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
  },
];

export default function RecentWorks() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = projects[activeIdx]!;

  const handleCardClick = (index: number) => {
    if (index === activeIdx) {
      setActiveIdx((prev) => (prev + 1) % projects.length);
    } else {
      setActiveIdx(index);
    }
  };

  return (
    <section id="work" className="relative border-t border-border bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-wrap items-end justify-between gap-6"
        >
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Portfolio
            </span>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[0.9] tracking-tighter sm:text-5xl lg:text-6xl">
              RECENT WORKS
            </h2>
          </div>
          <a
            href="https://github.com/developer-ali16?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            View All Projects
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </a>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <div
              className="relative h-[340px] sm:h-[450px] md:h-[480px]"
              style={{ perspective: "1400px" }}
            >
              {projects.map((project, index) => {
                const diff = (index - activeIdx + projects.length) % projects.length;
                return (
                  <motion.button
                    key={project.title}
                    onClick={() => handleCardClick(index)}
                    aria-label={`Show ${project.title}`}
                    animate={{
                      y: diff * 35,
                      scale: 1 - diff * 0.05,
                      rotateX: diff * 2,
                      opacity: diff > 2 ? 0 : 1,
                      zIndex: projects.length - diff,
                    }}
                    transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                    className="absolute inset-x-0 top-0 h-[280px] overflow-hidden rounded-3xl border border-border bg-surface text-left shadow-[var(--shadow-elevated)] sm:h-[380px]"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-6">
                      <div>
                        <p className="text-[0.65rem] uppercase tracking-widest text-primary">
                          {project.category}
                        </p>
                        <p className="mt-1 font-display text-2xl font-bold tracking-tighter text-foreground">
                          {project.title}
                        </p>
                      </div>
                      <span className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background/60 backdrop-blur-md">
                        <ArrowUpRight className="h-4 w-4 text-primary" />
                      </span>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            <div className="mt-6 flex items-center gap-2">
              {projects.map((p, i) => (
                <button
                  key={p.title}
                  onClick={() => setActiveIdx(i)}
                  aria-label={`Go to ${p.title}`}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === activeIdx ? "w-10 bg-primary" : "w-4 bg-foreground/20"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="flex items-start lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
              >
                <p className="text-xs uppercase tracking-widest text-primary">{active.category}</p>
                <h3 className="mt-4 font-display text-3xl font-bold leading-[0.95] tracking-tighter sm:text-4xl">
                  {active.title}
                </h3>
                <p className="mt-5 leading-relaxed text-muted-foreground">{active.description}</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {active.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-4 py-1.5 text-xs uppercase tracking-widest text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={active.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-9 inline-flex items-center gap-3 rounded-full bg-gradient-accent px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-105"
                >
                  Explore Project
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
