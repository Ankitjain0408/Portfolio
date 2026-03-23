import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { Award, Code, Github, Users } from "lucide-react";
import { profileLinks, profilePhotoSrc } from "@/constants/profileLinks";

const codingProfileItems = [
  ["LeetCode", profileLinks.leetcode],
  ["GeeksforGeeks", profileLinks.geeksforgeeks],
  ["GitHub", profileLinks.github],
  ["CodeChef", profileLinks.codechef],
] as const;

const letterVariants = {
  hidden: { y: 100, opacity: 0, rotateX: -40 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.8,
      delay: 0.3 + i * 0.04,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const AnimatedWord = ({ word, offset = 0 }: { word: string; offset?: number }) => (
  <span className="inline-flex overflow-hidden" style={{ perspective: "600px" }}>
    {word.split("").map((char, i) => (
      <motion.span
        key={i}
        custom={i + offset}
        variants={letterVariants}
        initial="hidden"
        animate="visible"
        className="inline-block"
        style={{ transformOrigin: "bottom" }}
      >
        {char}
      </motion.span>
    ))}
  </span>
);

const HeroSection = () => {
  const highlightsRef = useRef(null);
  const highlightsInView = useInView(highlightsRef, { once: true, amount: 0.3 });

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 md:px-12 pt-16"
    >
      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        {/* Left: copy · Right: transparent PNG only (no frame, shadow, or extra bg) */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-8 lg:gap-12">
          <div className="min-w-0 flex-1">
            <motion.div
              initial={{ opacity: 0, x: -20, filter: "blur(8px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6"
            >
              <span className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
                // SOFTWARE DEVELOPMENT ENGINEER
              </span>
            </motion.div>

            <h1 className="text-[clamp(3rem,11vw,8.5rem)] font-black leading-[0.9] tracking-[-0.04em] text-foreground uppercase">
              <AnimatedWord word="ANKIT" />
            </h1>
            <h1
              className="text-[clamp(3rem,11vw,8.5rem)] font-black leading-[0.9] tracking-[-0.04em] text-muted-foreground/30 uppercase"
              style={{ WebkitTextStroke: "1px hsl(var(--foreground) / 0.3)" }}
            >
              <AnimatedWord word="JAIN" offset={5} />
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10"
            >
              <p className="max-w-xl font-mono text-xs leading-relaxed tracking-wider text-muted-foreground">
                Full-stack developer and CS student driven by a passion for building efficient,
                scalable applications. Expertise in MERN stack, with a focus on performance and
                clean code.
              </p>
            </motion.div>

            <motion.div
              ref={highlightsRef}
              initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
              animate={highlightsInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2"
              >
                <Github size={16} className="text-primary/70" />
                <span className="font-mono text-xs tracking-wider text-foreground/80">
                  8+ Repos
                </span>
              </motion.div>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2"
              >
                <Code size={16} className="text-primary/70" />
                <span className="font-mono text-xs tracking-wider text-foreground/80">
                  MERN Stack
                </span>
              </motion.div>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2"
              >
                <Users size={16} className="text-primary/70" />
                <span className="font-mono text-xs tracking-wider text-foreground/80">
                  3+ Hackathons
                </span>
              </motion.div>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2"
              >
                <Award size={16} className="text-primary/70" />
                <span className="font-mono text-xs tracking-wider text-foreground/80">
                  5★ Problem Solving
                </span>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto flex w-full max-w-[22rem] shrink-0 justify-center overflow-hidden rounded-full aspect-square md:mx-0 md:max-w-none md:w-[clamp(18rem,34vw,26rem)] lg:w-[clamp(20rem,28vw,30rem)]"
          >
            <img
              src={profilePhotoSrc}
              alt="Ankit Jain"
              width={900}
              height={1200}
              className="block h-full w-full object-cover object-center bg-transparent scale-[1.18] md:scale-[1.26]"
              loading="eager"
              decoding="async"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="h-px bg-primary/30 mt-12 origin-left md:mt-14"
        />

        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.55, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6"
        >
          <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
            // CODING PROFILES
          </span>
          <div className="mt-3 flex flex-wrap gap-2">
            {codingProfileItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] sm:text-xs tracking-wider border border-border px-3 py-2 text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 active:scale-[0.97]"
              >
                {label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 1.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div className="flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="font-mono text-xs tracking-wider text-primary-foreground bg-primary px-6 py-3 hover:bg-primary/80 transition-all duration-300 active:scale-[0.97]"
            >
              VIEW PROJECTS
            </a>
            <a
              href="#contact"
              className="font-mono text-xs tracking-wider text-muted-foreground px-6 py-3 hover:text-foreground transition-colors duration-200"
            >
              CONTACT ME
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-wider text-foreground border border-primary/40 px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300 active:scale-[0.97] flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              RESUME
            </a>
          </div>

          <a
            href="#about"
            className="font-mono text-xs tracking-wider text-muted-foreground flex items-center gap-2 hover:text-foreground transition-colors group"
          >
            EXPLORE MY WORK{" "}
            <ArrowDown
              size={14}
              className="group-hover:translate-y-1 transition-transform duration-200"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
