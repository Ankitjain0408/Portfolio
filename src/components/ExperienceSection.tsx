import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const freelanceItems = [
  "Built a production-ready business website for a real-world client",
  "Developed full e-commerce functionality with product catalog",
  "Delivered functional, responsive website within deadline",
  "Managed end-to-end development lifecycle independently",
];

const gscItems = [
  "Contributed to 8+ public repositories on GitHub with 50+ commits, gaining hands-on experience in collaborative software development, version-controlled repositories, code integration, and repository management.",
  "Participated in 3+ internal hackathons, working in cross-functional teams of 4–6, to design and prototype solutions, debug and optimize code, and deliver scalable solutions for real-world problem statements.",
  "Collaborated on and published 4+ mini-projects on GitHub, following industry-standard version control workflows including branching strategies, commit management, pull requests, and code reviews to ensure clean, maintainable, and scalable codebases.",
];

const ExperienceSection = () => {
  const listRef = useRef(null);
  const listRef2 = useRef(null);
  const listInView = useInView(listRef, { once: true, amount: 0.3 });
  const listInView2 = useInView(listRef2, { once: true, amount: 0.3 });

  return (
    <section className="py-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal>
          <span className="font-mono text-xs tracking-[0.3em] text-primary">
            // EXPERIENCE
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-[-0.03em] mt-4 text-foreground leading-[1.1]">
            PROFESSIONAL<br />
            <span className="text-muted-foreground/40">EXPERIENCE</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15} direction="up" distance={50}>
          <div className="mt-16 space-y-8">
            <div className="border border-border p-8 md:p-12 hover:bg-accent/30 transition-colors duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    Freelance Web Developer
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    Website for Hardware & Sanitary Shop
                  </p>
                </div>
                <span className="font-mono text-xs text-muted-foreground tracking-wider shrink-0">
                  2 MONTHS
                </span>
              </div>
              <div className="h-px bg-border my-6" />
              <ul className="space-y-2" ref={listRef}>
                {freelanceItems.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={listInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + i * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="text-muted-foreground text-sm flex items-start gap-3"
                  >
                    <span className="text-primary/60 mt-1 shrink-0">—</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="border border-border p-8 md:p-12 hover:bg-accent/30 transition-colors duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    GitHub Student Club Member
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    Tech Stack: Git, GitHub, C++, JavaScript, MERN Stack
                  </p>
                </div>
                <span className="font-mono text-xs text-muted-foreground tracking-wider shrink-0">
                  JUN 2024 – PRESENT
                </span>
              </div>
              <div className="h-px bg-border my-6" />
              <ul className="space-y-2" ref={listRef2}>
                {gscItems.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={listInView2 ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + i * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="text-muted-foreground text-sm flex items-start gap-3"
                  >
                    <span className="text-primary/60 mt-1 shrink-0">—</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ExperienceSection;
