import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Preloader from "@/components/Preloader";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();
const dotPalette = ["#60A5FA", "#86EFAC", "#FBBF24", "#A78BFA"] as const;
const floatingDots = Array.from({ length: 34 }, (_, i) => ({
  id: i,
  left: `${5 + ((i * 31) % 90)}%`,
  top: `${(i * 19) % 100}%`,
  size: 3 + (i % 3) * 2,
  duration: 14 + (i % 6) * 2,
  delay: -(i % 7) * 1.4,
  driftX: -22 + (i % 5) * 11,
  driftY: -14 + (i % 4) * 8,
  opacity: 0.12 + (i % 4) * 0.08,
  color: dotPalette[i % dotPalette.length],
}));

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <AnimatePresence>
            {loading && <Preloader onComplete={() => setLoading(false)} />}
          </AnimatePresence>

          {/* Global subtle background animation: drifting grid + floating dots */}
          <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {/* Light theme layer: soft color wash so animation is visible on bright background */}
            <motion.div
              aria-hidden
              className="absolute inset-[-18%] dark:hidden opacity-70"
              style={{
                background:
                  "radial-gradient(40% 45% at 15% 20%, hsl(var(--primary) / 0.24), transparent 70%), radial-gradient(35% 40% at 85% 80%, hsl(45 95% 55% / 0.2), transparent 72%)",
              }}
              animate={{ x: [0, -14, 0], y: [0, 12, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              aria-hidden
              className="absolute inset-[-20%] opacity-[0.26] dark:opacity-[0.16]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at center, hsl(var(--primary) / 0.22) 0 1px, transparent 1px)",
                backgroundSize: "34px 34px",
              }}
              animate={{ x: [0, -18, 0], y: [0, -10, 0] }}
              transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
            />

            {floatingDots.map((d) => (
              <motion.span
                key={d.id}
                aria-hidden
                className="absolute block rounded-full mix-blend-multiply dark:mix-blend-screen"
                style={{
                  left: d.left,
                  top: d.top,
                  width: `${d.size}px`,
                  height: `${d.size}px`,
                  backgroundColor: d.color,
                  opacity: d.opacity,
                }}
                animate={{
                  x: [0, d.driftX, 0],
                  y: [0, d.driftY, 0],
                  opacity: [d.opacity * 0.7, d.opacity, d.opacity * 0.7],
                }}
                transition={{
                  duration: d.duration,
                  delay: d.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <div className="relative z-10">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </div>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
