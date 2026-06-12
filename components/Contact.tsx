"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle } from "lucide-react";
import Icon from "@/components/common/Icon";
import { ContactSkeleton } from "@/components/common/Skeleton";
import { useMounted } from "@/lib/useMounted";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

const contactInfo = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "ravigupta.exe@gmail.com",
    href: "mailto:ravigupta.exe@gmail.com",
    target: "_blank",
  },
  {
    icon: <Icon name="LinkedIn" size="16" className="w-4 h-4" />,
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/gr8ravi",
    href: "https://www.linkedin.com/in/gr8ravi",
    target: "_blank",
  },
  {
    icon: <Icon name="GitHub" size="18" className="w-4.5 h-4.5" />,
    label: "GitHub",
    value: "https://www.github.com/cssExpert",
    href: "https://www.github.com/cssExpert",
    target: "_blank",
  },
  {
    icon: <MapPin size={18} />,
    label: "Location",
    value: "India • Remote Worldwide",
    href: null,
  },
];

export default function Contact() {
  const mounted = useMounted();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!mounted) return <ContactSkeleton />;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formState.name,
          from_email: formState.email,
          subject: formState.subject,
          message: formState.message,
        },
        EMAILJS_PUBLIC_KEY,
      );
      setSubmitted(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Something went wrong. Please try again or email me directly.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full bg-white/3 border border-[var(--border)] rounded-xl px-4 py-3.5 font-sans text-sm text-(--text) placeholder-[var(--text-muted)] outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-300";

  return (
    <section
      id="contact"
      className="py-24 md:py-36 relative overflow-hidden"
      style={{ background: "var(--bg-2)" }}
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label justify-center"
          >
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-5xl sm:text-6xl lg:text-7xl text-(--text) leading-none mb-4"
          >
            LET&apos;S BUILD SOMETHING <br className="hidden sm:block" />
            <span className="text-gradient">GREAT TOGETHER</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-(--text-muted) max-w-xl mx-auto"
          >
            Have a project in mind or want to discuss a collaboration? I&apos;d
            love to hear from you. Typically respond within 24 hours.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10">
          {/* Left – Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            {/* Availability badge */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="font-sans text-sm font-semibold text-green-400">
                  Available for new projects
                </span>
              </div>
              <p className="font-heading text-3xl md:text-4xl lg:text-5xl text-(--text) leading-tight">
                LET&apos;S WORK <span className="text-primary">TOGETHER</span>
              </p>
              <p className="font-sans text-sm text-(--text-muted) mt-3 leading-relaxed">
                Whether it&apos;s a startup MVP, enterprise dashboard, or a
                complete brand redesign — I bring expertise and passion to every
                engagement.
              </p>
            </div>

            {/* Contact cards */}
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="glass-card rounded-xl p-4 flex items-center gap-4 group hover:border-primary/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary/20 transition-colors">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="font-sans text-xs text-(--text-muted) uppercase tracking-widest">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.target}
                      rel={
                        item.target === "_blank"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="font-sans text-sm text-(--text) hover:text-primary transition-colors truncate block"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-sans text-sm text-(--text) truncate">
                      {item.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right – Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-2xl p-8"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center py-12 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="w-16 h-16 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mb-6"
                >
                  <CheckCircle size={32} className="text-primary" />
                </motion.div>
                <h3 className="font-heading text-2xl text-(--text) mb-3">
                  MESSAGE SENT!
                </h3>
                <p className="font-sans text-sm text-(--text-muted) mb-6 max-w-sm">
                  Thanks for reaching out! I&apos;ll get back to you within 24
                  hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({
                      name: "",
                      email: "",
                      subject: "",
                      message: "",
                    });
                  }}
                  className="btn-outline text-sm py-2"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-sans text-xs text-(--text-muted) uppercase tracking-widest mb-2 block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="font-sans text-xs text-(--text-muted) uppercase tracking-widest mb-2 block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="font-sans text-xs text-(--text-muted) uppercase tracking-widest mb-2 block">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Project Inquiry / Collaboration"
                    required
                    value={formState.subject}
                    onChange={(e) =>
                      setFormState({ ...formState, subject: e.target.value })
                    }
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="font-sans text-xs text-(--text-muted) uppercase tracking-widest mb-2 block">
                    Message
                  </label>
                  <textarea
                    placeholder="Tell me about your project, goals, and timeline..."
                    required
                    rows={6}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {error && (
                  <p className="font-sans text-sm text-red-400 text-center -mb-1">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
