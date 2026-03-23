import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { profileLinks } from "@/constants/profileLinks";
import { toast } from "@/components/ui/sonner";

const CONTACT_EMAIL = "jaina4522@gmail.com";

/** FormSubmit AJAX: https://formsubmit.co/ajax-documentation — no API key; confirm the email once via FormSubmit’s first message. */
const formSubmitAjaxUrl = `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`;

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitting(true);
    try {
      await toast.promise(
        (async () => {
          const res = await fetch(formSubmitAjaxUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({
              name: form.name,
              email: form.email,
              message: form.message,
              _subject: `Portfolio contact from ${form.name}`,
              _replyto: form.email,
              _captcha: false,
            }),
          });

          const raw = await res.text();
          if (!res.ok) {
            let detail = raw.slice(0, 280);
            try {
              const j = JSON.parse(raw) as { message?: string; error?: string };
              detail = j.message || j.error || detail;
            } catch {
              /* keep text snippet */
            }
            throw new Error(detail || `Failed to send (${res.status})`);
          }

          try {
            const j = JSON.parse(raw) as { success?: boolean | string };
            if (j.success === false) throw new Error("Failed to send");
          } catch (err) {
            if (err instanceof Error && err.message === "Failed to send") throw err;
            /* non-JSON success body is OK */
          }

          setForm({ name: "", email: "", message: "" });
        })(),
        {
          id: "contact-send",
          loading: "Sending…",
          success: "Sent successfully!",
          error: (err) => (err instanceof Error ? err.message : "Failed to send"),
        }
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12" ref={ref}>
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal>
          <span className="font-mono text-xs tracking-[0.3em] text-primary">
            // CONTACT
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-[-0.03em] mt-4 text-foreground leading-[1.1]">
            LET'S WORK<br />
            <span className="text-muted-foreground/40">TOGETHER</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-16 mt-16">
          <ScrollReveal delay={0.15} direction="left">
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              {[
                { key: "name" as const, label: "NAME", type: "text" },
                { key: "email" as const, label: "EMAIL", type: "email" },
              ].map((field, i) => (
                <motion.div
                  key={field.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <label className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground block mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    required
                    value={form[field.key]}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors duration-200"
                  />
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <label className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground block mb-2">
                  MESSAGE
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors duration-200 resize-none"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <button
                  type="submit"
                  disabled={submitting}
                  className="font-mono text-xs tracking-wider bg-primary px-8 py-3 text-primary-foreground hover:bg-primary/80 transition-all duration-300 active:scale-[0.97] disabled:opacity-60 disabled:pointer-events-none cursor-pointer"
                >
                  {submitting ? "SENDING…" : "SEND MESSAGE"}
                </button>
              </motion.div>
            </form>
          </ScrollReveal>

          <ScrollReveal delay={0.3} direction="right">
            <div className="space-y-8">
              <div>
                <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
                  REACH OUT
                </span>
                <div className="mt-4 space-y-4">
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <Mail size={16} className="shrink-0" />
                    jaina4522@gmail.com
                  </a>
                  <a
                    href="tel:7077937791"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Phone size={16} className="shrink-0" />
                    +91 7077937791
                  </a>
                </div>
              </div>

              <div>
                <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
                  SOCIALS
                </span>
                <div className="mt-4 flex flex-wrap gap-4">
                  <a
                    href={profileLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-border p-3 text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 active:scale-[0.95]"
                    title="GitHub"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={profileLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-border p-3 text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 active:scale-[0.95]"
                    title="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>

              <div>
                <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
                  CODING PROFILES
                </span>
                <div className="mt-4 flex flex-wrap gap-3">
                  {(
                    [
                      ["LeetCode", profileLinks.leetcode],
                      ["GeeksforGeeks", profileLinks.geeksforgeeks],
                      ["GitHub", profileLinks.github],
                      ["CodeChef", profileLinks.codechef],
                    ] as const
                  ).map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[10px] tracking-wider border border-border px-4 py-2.5 text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 active:scale-[0.97]"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
