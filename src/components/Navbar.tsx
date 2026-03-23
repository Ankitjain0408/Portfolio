import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { num: "01", label: "HOME", href: "#home" },
  { num: "02", label: "ABOUT", href: "#about" },
  { num: "03", label: "SKILLS", href: "#skills" },
  { num: "04", label: "PROJECTS", href: "#projects" },
  { num: "05", label: "ACHIEVEMENTS", href: "#achievements" },
  { num: "06", label: "CERTIFICATES", href: "#certificates" },
  { num: "07", label: "CONTACT", href: "#contact" },
];

const Navbar = () => {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <a
          href="#home"
          className="font-mono text-sm font-bold tracking-widest text-foreground uppercase"
        >
          <span className="text-primary">ANKIT</span>.DEV
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs tracking-wider text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <span className="text-primary/50">{l.num}/</span>
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex font-mono text-[10px] tracking-wider border border-primary/40 px-4 py-1.5 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 active:scale-[0.97]"
          >
            RESUME
          </a>
          <button
            onClick={toggle}
            className="p-2 rounded-full hover:bg-accent transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-mono text-sm tracking-wider text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="text-primary/50">{l.num}/</span>
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
