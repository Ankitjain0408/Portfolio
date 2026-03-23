import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, BookOpen, GraduationCap, Star, ExternalLink } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const achievements = [
  {
    icon: GraduationCap,
    title: "Full-Stack Development using MERN",
    org: "Cipher Schools · Jun 2025 – Jul 2025",
    description:
      "Completed hands-on training in MongoDB, Express.js, React.js, and Node.js, focusing on full-stack application development, REST APIs, and deployment workflows.",
  },
  {
    icon: Award,
    title: "5★ Problem Solving — HackerRank",
    org: "HackerRank",
    description: "Achieved 5-star rating in Problem Solving, demonstrating strong DSA and algorithmic skills.",
  },
  {
    icon: Star,
    title: "300+ DSA Problems Solved",
    org: "LeetCode / GeeksforGeeks",
    description: "Consistently solving algorithmic challenges across multiple competitive programming platforms.",
  },
];

const certificates = [
  {
    title: "Master Full-Stack Web Development with Laravel & PHP",
    issuer: "Board Infinity · Coursera",
    date: "Jan 28, 2026",
    details:
      "Online course authorized by Board Infinity and offered through Coursera · Certificate of completion",
    certificateUrl: "/certificate1.pdf",
  },
  {
    title: "Full-Stack Development",
    issuer: "CipherSchools",
    date: "Jun 4 – Jul 15, 2025",
    details:
      "Training while studying at Lovely Professional University · 70 hours of learning · Performance assessed as Satisfactory",
    certificateUrl: "/certificate2.pdf",
  },
  {
    title: "Privacy and Security in Online Social Media",
    issuer: "NPTEL · IIIT Hyderabad",
    date: "Jan – Apr 2025",
    details:
      "12-week NPTEL online certification (MoE, Govt. of India) · Elite · Consolidated score 73% · Assignments 20.89/25 · Proctored exam 51.87/75 · Credits recommended: 3–4",
    certificateUrl: "/certificate3.pdf",
  },
  {
    title: "Code-A-Haunt — 24-Hour Hackathon",
    issuer: "CodingBlocks LPU · Lovely Professional University",
    date: "Feb 29 – Mar 1, 2024",
    details:
      "Certificate of Participation · Recognized for coding and problem-solving during the 24-hour event",
    certificateUrl: "/certificate4.pdf",
  },
];

const AchievementCard = ({ item, index }: { item: typeof achievements[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="group border border-border p-8 hover:bg-accent/50 transition-colors duration-300"
    >
      <motion.div
        initial={{ rotate: -10, scale: 0.8, opacity: 0 }}
        animate={inView ? { rotate: 0, scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.12 + 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        <Icon
          size={28}
          className="text-primary/70 group-hover:text-primary transition-colors duration-200"
          strokeWidth={1.5}
        />
      </motion.div>
      <h3 className="text-base font-bold text-foreground mt-5 leading-snug">
        {item.title}
      </h3>
      <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground mt-1 block">
        {item.org}
      </span>
      <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
        {item.description}
      </p>
    </motion.div>
  );
};

const AchievementsSection = () => {
  const certRef = useRef(null);
  const certInView = useInView(certRef, { once: true, amount: 0.15 });

  return (
    <section id="achievements" className="py-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal>
          <span className="font-mono text-xs tracking-[0.3em] text-primary">
            // ACHIEVEMENTS
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-[-0.03em] mt-4 text-foreground leading-[1.1]">
            MILESTONES &<br />
            <span className="text-muted-foreground/40">CERTIFICATIONS</span>
          </h2>
        </ScrollReveal>

        {/* Achievements grid */}
        <div className="grid md:grid-cols-3 gap-px bg-border mt-16 border border-border">
          {achievements.map((item, i) => (
            <AchievementCard key={item.title} item={item} index={i} />
          ))}
        </div>

        {/* Certificates list — anchor for navbar */}
        <div id="certificates" className="scroll-mt-28">
          <ScrollReveal delay={0.1} className="mt-20">
            <span className="font-mono text-xs tracking-[0.3em] text-primary">
              // CERTIFICATES
            </span>
          </ScrollReveal>

          <div className="mt-8 border border-border divide-y divide-border" ref={certRef}>
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: -20 }}
              animate={certInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 p-5 sm:p-6 hover:bg-accent/40 transition-colors duration-200 group"
            >
              <div className="flex items-start gap-4 min-w-0 flex-1">
                <BookOpen
                  size={16}
                  className="text-muted-foreground/50 group-hover:text-foreground/70 transition-colors mt-0.5 shrink-0"
                  strokeWidth={1.5}
                />
                <div>
                  <h4 className="text-sm font-semibold text-foreground leading-snug">
                    {cert.title}
                  </h4>
                  <span className="font-mono text-[11px] text-muted-foreground">
                    {cert.issuer}
                  </span>
                  {cert.details ? (
                    <p className="text-xs text-muted-foreground/90 mt-2 max-w-xl leading-relaxed">
                      {cert.details}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:items-end shrink-0 ml-8 sm:ml-0">
                <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground/60">
                  {cert.date}
                </span>
                <a
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 font-mono text-[10px] tracking-wider border border-border px-4 py-2.5 text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 active:scale-[0.97]"
                >
                  <ExternalLink size={12} strokeWidth={2} />
                  View certificate
                </a>
              </div>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
