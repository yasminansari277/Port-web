import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Minus, Plus } from "lucide-react";

const stages = [
  {
    title: "API DESIGN",
    body: "I translate business requirements into clear REST endpoints, predictable responses and maintainable service boundaries.",
  },
  {
    title: "DATABASES",
    body: "I model reliable PostgreSQL data structures, relationships and queries that keep backend workflows consistent as they grow.",
  },
  {
    title: "AUTHENTICATION",
    body: "Secure user access with JWT authentication, protected routes, validation and practical API security patterns.",
  },
  {
    title: "BACKEND BUILD",
    body: "Production-minded Python and FastAPI implementation with clean architecture, reusable logic and readable code.",
  },
  {
    title: "DOCKER & DELIVERY",
    body: "Containerized development and deployment workflows that make projects easier to run, test and hand over.",
  },
  {
    title: "COLLABORATION",
    body: "Clear Git and GitHub workflows, documentation and engineering collaboration from the first commit through delivery.",
  },
];

export default function Services() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative border-t border-border bg-background py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Services
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold leading-[0.9] tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            BACKEND <span className="text-outline">CAPABILITIES</span>
          </h2>
        </motion.div>

        <div className="mt-16 border-t border-border">
          {stages.map((stage, index) => {
            const isOpen = open === index;
            return (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="border-b border-border"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="group flex w-full items-center gap-6 py-7 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-xs tracking-widest text-muted-foreground">
                    0{index + 1}
                  </span>
                  <span
                    className={`flex-1 font-display text-2xl font-bold tracking-tighter transition-colors sm:text-3xl md:text-4xl ${
                      isOpen ? "text-primary" : "text-foreground group-hover:text-primary"
                    }`}
                  >
                    {stage.title}
                  </span>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border transition-colors group-hover:border-primary">
                    {isOpen ? (
                      <Minus className="h-4 w-4 text-primary" />
                    ) : (
                      <Plus className="h-4 w-4 text-muted-foreground" />
                    )}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-8 pl-12 leading-relaxed text-muted-foreground">
                        {stage.body}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
