import { motion } from "motion/react";

const skills = [
  "Python",
  "FastAPI",
  "PostgreSQL",
  "Docker",
  "REST APIs",
  "JWT Authentication",
  "SQLAlchemy",
  "Git & GitHub",
  "API Security",
  "Backend Architecture",
];

export default function About() {
  return (
    <section id="about" className="relative border-t border-border bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            About
          </span>
          <h2 className="mt-5 font-display text-4xl font-bold leading-[0.9] tracking-tighter sm:text-5xl lg:text-6xl">
            BUILDING WITH PURPOSE<span className="text-primary">.</span>
          </h2>
          <p className="mt-8 max-w-lg leading-relaxed text-muted-foreground">
            I'm Ali Shaikh, a Python backend developer focused on FastAPI, PostgreSQL and Docker. I
            build secure, reliable APIs that turn complex business requirements into clear,
            maintainable systems.
          </p>
          <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">
            My work includes authentication, database design, automated workflows and production-
            ready application architecture. I enjoy solving difficult backend problems with clean
            code and practical engineering.
          </p>

          <div className="mt-12 flex max-w-md items-stretch">
            <div className="flex-1 pr-8">
              <p className="font-display text-4xl font-bold tracking-tighter text-primary sm:text-5xl">
                4+
              </p>
              <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                Real-World Apps
              </p>
            </div>
            <div className="w-px bg-border" />
            <div className="flex-1 pl-8">
              <p className="font-display text-4xl font-bold tracking-tighter text-primary sm:text-5xl">
                IBM
              </p>
              <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                Certified
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-3xl border border-border bg-white/5 p-8 backdrop-blur-md sm:p-10"
        >
          <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            My Toolkit
          </h3>
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: index * 0.06, duration: 0.5 }}
                className="cursor-default rounded-full border border-border px-5 py-2.5 text-sm text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary hover:glow-accent"
              >
                {skill}
              </motion.span>
            ))}
          </div>
          <p className="mt-10 border-t border-border pt-8 text-sm leading-relaxed text-muted-foreground">
            Open to new opportunities and engineering teams where I can solve complex backend
            challenges and help build scalable systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
