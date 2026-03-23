import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"counting" | "name" | "exit">("counting");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setPhase("name"), 200);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 2;
      });
    }, 40);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (phase === "name") {
      const t = setTimeout(() => setPhase("exit"), 1400);
      return () => clearTimeout(t);
    }
    if (phase === "exit") {
      const t = setTimeout(onComplete, 800);
      return () => clearTimeout(t);
    }
  }, [phase, onComplete]);

  return (
    <AnimatePresence>
      {phase !== "exit" ? null : null}
      <motion.div
        className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center overflow-hidden"
        animate={
          phase === "exit"
            ? { clipPath: "inset(0 0 100% 0)" }
            : { clipPath: "inset(0 0 0% 0)" }
        }
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        onAnimationComplete={() => {
          if (phase === "exit") onComplete();
        }}
      >
        {/* Counter phase */}
        <AnimatePresence mode="wait">
          {phase === "counting" && (
            <motion.div
              key="counter"
              exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-4"
            >
              <motion.span
                className="font-mono text-7xl md:text-9xl font-black tabular-nums text-foreground"
                style={{ lineHeight: 1 }}
              >
                {Math.min(count, 100)}
              </motion.span>
              <motion.div
                className="w-48 h-px bg-border overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <motion.div
                  className="h-full bg-foreground"
                  style={{ width: `${Math.min(count, 100)}%` }}
                  transition={{ duration: 0.1 }}
                />
              </motion.div>
              <span className="font-mono text-[10px] tracking-[0.4em] text-muted-foreground uppercase">
                Loading portfolio
              </span>
            </motion.div>
          )}

          {phase === "name" && (
            <motion.div
              key="name"
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="overflow-hidden">
                <motion.h1
                  className="text-5xl md:text-8xl font-black tracking-[-0.04em] text-foreground uppercase"
                  style={{ lineHeight: 1 }}
                  initial={{ y: "120%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  ANKIT JAIN
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.span
                  className="font-mono text-xs tracking-[0.3em] text-muted-foreground block"
                  initial={{ y: "120%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  SOFTWARE DEVELOPMENT ENGINEER
                </motion.span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Corner markers */}
        <span className="absolute top-6 left-6 font-mono text-[10px] tracking-[0.3em] text-muted-foreground/40">
          PORTFOLIO
        </span>
        <span className="absolute bottom-6 right-6 font-mono text-[10px] tracking-[0.3em] text-muted-foreground/40">
          © 2025
        </span>
      </motion.div>
    </AnimatePresence>
  );
};

export default Preloader;
