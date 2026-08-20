import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { scrollToId } from "./Navbar";

const menu = [
  { label: "Home", id: "top" },
  { label: "About", id: "about" },
  { label: "Work", id: "work" },
  { label: "Contact", id: "contact" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/developer-ali16" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ali-shaikh-software-engineer/" },
  { label: "Email", href: "mailto:shaikh.o.ali16@gmail.com" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-border bg-background pt-24 pb-10 md:pt-32"
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center">
        <span className="font-display text-[25vw] font-bold leading-[0.75] tracking-tighter text-foreground opacity-[0.05]">
          CONTACT
        </span>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-4xl font-bold leading-[0.9] tracking-tighter sm:text-5xl lg:text-6xl">
              HOW CAN I HELP<span className="text-primary">?</span>
            </h2>
            <p className="mt-7 max-w-md leading-relaxed text-muted-foreground">
              Open to new opportunities and backend engineering collaborations. If you are building
              a reliable product or API, let’s talk.
            </p>
            <a
              href="mailto:shaikh.o.ali16@gmail.com"
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-4 text-sm font-semibold text-background transition-transform duration-300 hover:scale-105"
            >
              shaikh.o.ali16@gmail.com
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid grid-cols-2 gap-10 lg:justify-items-end"
          >
            <div>
              <h3 className="text-xs uppercase tracking-widest text-primary">Menu</h3>
              <ul className="mt-6 space-y-4">
                {menu.map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() =>
                        item.id === "top"
                          ? window.scrollTo({ top: 0, behavior: "smooth" })
                          : scrollToId(item.id)
                      }
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-widest text-primary">Socials</h3>
              <ul className="mt-6 space-y-4">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="mt-24 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
          <p className="text-xs text-muted-foreground">© 2026 Ali Shaikh. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
