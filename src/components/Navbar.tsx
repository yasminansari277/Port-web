import { motion } from "motion/react";

const links = [
  { label: "About", id: "about" },
  { label: "Work", id: "work" },
  { label: "Contact", id: "contact" },
];

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
      className="fixed inset-x-0 top-0 z-50 h-20 w-full border-b border-border bg-background/80 backdrop-blur-md md:h-24"
    >
      <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display text-xl font-bold tracking-tighter text-foreground transition-opacity hover:opacity-80 sm:text-2xl"
          aria-label="Back to top"
        >
          ALI<span className="text-primary">.</span>
        </button>

        <div className="flex items-center gap-6 sm:gap-10">
          <ul className="hidden items-center gap-8 sm:flex">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => scrollToId(l.id)}
                  className="text-sm font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => scrollToId("contact")}
            aria-label="Get in touch"
            className="grid h-11 w-11 place-items-center rounded-full border border-border bg-surface transition-all hover:border-primary hover:glow-accent"
          >
            <span className="block h-2.5 w-2.5 rounded-full bg-primary" />
          </button>
        </div>
      </nav>
    </motion.header>
  );
}
