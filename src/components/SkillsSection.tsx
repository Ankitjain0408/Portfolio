import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const categories = [
  {
    title: "LANGUAGES",
    items: ["C++ (Major)", "Java", "Python", "C", "JavaScript", "PHP", "HTML", "CSS"],
  },
  {
    title: "FRAMEWORKS",
    items: ["React.js", "Node.js", "Express.js", "MongoDB", "Bootstrap", "jQuery"],
  },
  {
    title: "DATABASES",
    items: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    title: "TOOLS & PLATFORMS",
    items: [
      "Git", "VS Code", "Vercel", "Netlify", "Cloudinary", "Postman", "Figma",
      "XAMPP", "MySQL Workbench",
    ],
  },
  {
    title: "FUNDAMENTALS",
    items: ["DSA", "OOP", "DBMS", "SQL"],
  },
];

const marqueeBaseItems = [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "JavaScript",
  "Git",
  "MERN Stack",
];

const SkillCard = ({ cat, index }: { cat: typeof categories[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, filter: "blur(6px)", scale: 0.97 }}
      animate={
        inView
          ? { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }
          : {}
      }
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="bg-background p-8 group hover:bg-accent/50 transition-colors duration-300"
    >
      <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
        {cat.title}
      </span>
      <div className="flex flex-wrap gap-2 mt-4">
        {cat.items.map((item, i) => (
          <motion.span
            key={item}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 0.3,
              delay: index * 0.1 + 0.2 + i * 0.03,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="font-mono text-xs text-foreground/80 border border-border px-3 py-1.5 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 cursor-default"
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal>
          <span className="font-mono text-xs tracking-[0.3em] text-primary">
            // SKILLS
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-[-0.03em] mt-4 text-foreground leading-[1.1]">
            TECH STACK
          </h2>
        </ScrollReveal>

        <div className="mt-10 border border-border rounded-2xl bg-background overflow-hidden">
          <div className="marquee flex w-max gap-3 px-6 py-4">
            {[...marqueeBaseItems, ...marqueeBaseItems].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="font-mono text-xs whitespace-nowrap border border-border px-3 py-1.5 text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border mt-16 border border-border">
          {categories.map((cat, i) => (
            <SkillCard key={cat.title} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
