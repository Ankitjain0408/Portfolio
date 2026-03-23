import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { profileLinks } from "@/constants/profileLinks";
import { toast } from "@/components/ui/sonner";

const ProjectsSection = () => {
  const techRef = useRef(null);
  const techInView = useInView(techRef, { once: true, amount: 0.3 });

  const liveDemoUrl = "https://hardware-sanitary-app.vercel.app";
  const firstProjectGithubUrl = "https://github.com/Ankitjain0408/hardware-sanitary-app";
  const designVisionLiveUrl = "";
  const designVisionGithubUrl = "https://github.com/Ankitjain0408/DesignVision";

  const techStack = [
    "React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS",
    "Cloudinary", "Vercel", "Netlify",
  ];

  const features = [
    "Production-ready e-commerce platform with 100+ products",
    "Category & brand-based browsing system",
    "Secure admin dashboard for inventory & pricing",
    "Cloudinary integration for media optimization",
    "Email notifications system",
    "Deployed on Vercel & Netlify",
  ];

  const designVisionTechStack = [
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "Tailwind CSS",
  ];

  const designVisionFeatures = [
    "Built a responsive AR-based interior design web application using HTML, CSS, and JavaScript, supporting 10+ interior layout visualizations to help users preview and plan room designs more effectively.",
    "Delivered a server-rendered homepage using PHP with Tailwind CSS, featuring a category-based image gallery (5+ categories) that allowed structured browsing and simplified content management.",
    "Enhanced navigation and visual structure with HTML, CSS, and JavaScript, resulting in a cleaner, 20% more user-friendly interface.",
  ];

  const openLiveLink = async (url: string) => {
    if (!url.trim()) {
      toast.info("Live demo link is not available yet.", { id: "live-link-status" });
      return;
    }

    try {
      // no-cors allows a lightweight reachability check without requiring CORS headers.
      await fetch(url, { method: "GET", mode: "no-cors", cache: "no-store" });
      window.open(url, "_blank", "noopener,noreferrer");
    } catch {
      toast.error("Live link is unreachable right now. Please try again later.", {
        id: "live-link-status",
      });
    }
  };

  return (
    <section id="projects" className="py-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal>
          <span className="font-mono text-xs tracking-[0.3em] text-primary">
            // PROJECTS
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-[-0.03em] mt-4 text-foreground leading-[1.1]">
            FEATURED<br />
            <span className="text-muted-foreground/40">WORK</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1} distance={50}>
          <div className="mt-16 border border-border group">
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
                    FEATURED PROJECT
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-2">
                    Shri Krishna Hardware & Sanitary
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground mt-1 inline-block">
                    Sep 2025 – Dec 2025
                  </span>
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => void openLiveLink(liveDemoUrl)}
                    className="font-mono text-xs tracking-wider border border-primary bg-primary px-5 py-2.5 text-primary-foreground hover:bg-primary/80 transition-all duration-200 flex items-center gap-2 active:scale-[0.97]"
                  >
                    <ExternalLink size={12} /> LIVE DEMO
                  </button>
                  <a
                    href={firstProjectGithubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs tracking-wider border border-border px-5 py-2.5 text-muted-foreground hover:bg-foreground hover:text-background transition-all duration-200 flex items-center gap-2 active:scale-[0.97]"
                  >
                    <Github size={12} /> GITHUB
                  </a>
                </div>
              </div>

              <div className="h-px bg-border my-8" />

              <div className="grid md:grid-cols-2 gap-12" ref={techRef}>
                <div>
                  <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
                    TECH STACK
                  </span>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {techStack.map((t, i) => (
                      <motion.span
                        key={t}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={techInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          duration: 0.3,
                          delay: 0.1 + i * 0.05,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="font-mono text-xs border border-border px-3 py-1.5 text-foreground/70 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
                    KEY FEATURES
                  </span>
                  <ul className="space-y-2 mt-3">
                    {features.map((f, i) => (
                      <motion.li
                        key={f}
                        initial={{ opacity: 0, x: -15 }}
                        animate={techInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          duration: 0.4,
                          delay: 0.2 + i * 0.08,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="text-muted-foreground text-sm flex items-start gap-3"
                      >
                        <span className="text-primary/60 mt-0.5 shrink-0">—</span>
                        {f}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2} distance={50}>
          <div className="mt-8 border border-border group">
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
                    PROJECT
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-2">
                    DesignVision — AR Interior Design Planner
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground mt-1 inline-block">
                    Apr 2025 – Jun 2025
                  </span>
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => void openLiveLink(designVisionLiveUrl)}
                    className="font-mono text-xs tracking-wider border border-primary bg-primary px-5 py-2.5 text-primary-foreground hover:bg-primary/80 transition-all duration-200 flex items-center gap-2 active:scale-[0.97]"
                  >
                    <ExternalLink size={12} /> LIVE DEMO
                  </button>
                  <a
                    href={designVisionGithubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs tracking-wider border border-border px-5 py-2.5 text-muted-foreground hover:bg-foreground hover:text-background transition-all duration-200 flex items-center gap-2 active:scale-[0.97]"
                  >
                    <Github size={12} /> GITHUB
                  </a>
                </div>
              </div>

              <div className="h-px bg-border my-8" />

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
                    TECH STACK
                  </span>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {designVisionTechStack.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs border border-border px-3 py-1.5 text-foreground/70 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
                    KEY FEATURES
                  </span>
                  <ul className="space-y-2 mt-3">
                    {designVisionFeatures.map((f) => (
                      <li key={f} className="text-muted-foreground text-sm flex items-start gap-3">
                        <span className="text-primary/60 mt-0.5 shrink-0">—</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProjectsSection;
