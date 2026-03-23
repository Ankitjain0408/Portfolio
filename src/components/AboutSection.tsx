import ScrollReveal from "./ScrollReveal";

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal>
          <span className="font-mono text-xs tracking-[0.3em] text-primary">
            // ABOUT
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-[-0.03em] mt-4 text-foreground leading-[1.1]">
            BUILDING THINGS<br />
            <span className="text-muted-foreground/40">THAT MATTER</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-16 mt-16">
          <ScrollReveal delay={0.15} direction="left">
            <p className="text-muted-foreground leading-relaxed text-sm">
              I'm Ankit Jain, a Computer Science student at Lovely Professional
              University, aspiring Software Development Engineer, and full-stack
              web developer passionate about building modern, user-friendly
              applications. I have strong problem-solving and coding skills, and
              I enjoy creating efficient, scalable solutions using modern web
              technologies.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm mt-4">
              My approach combines a deep understanding of data structures and
              algorithms with practical experience shipping production-ready
              applications. Every project is an opportunity to push boundaries
              and deliver real value.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3} direction="right">
            <div className="space-y-6">
                <div className="border-l-2 border-primary/40 pl-6">
                <span className="font-mono text-xs text-muted-foreground tracking-wider">
                  EDUCATION
                </span>
                <h3 className="text-foreground font-semibold mt-1">
                  B.Tech in Computer Science Engineering
                </h3>
                <p className="text-muted-foreground text-sm">
                  Lovely Professional University
                </p>
                <p className="text-muted-foreground/60 text-sm font-mono mt-1">
                  Expected Graduation: 2027
                </p>
                <p className="text-muted-foreground/60 text-sm font-mono mt-1">
                  CGPA: 8.48
                </p>
              </div>

              <div className="border-l-2 border-primary/40 pl-6">
                <span className="font-mono text-xs text-muted-foreground tracking-wider">
                  FOCUS
                </span>
                <p className="text-muted-foreground text-sm mt-1">
                  Full-Stack Development, Data Structures & Algorithms,
                  Object-Oriented Programming, Database Management Systems
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
