"use client"

import { motion } from "framer-motion"
import { GitFork, Link2, X, ArrowUp, Mail, Heart } from "lucide-react"
import { navLinks } from "@/lib/data"

const socialLinks = [
  { icon: <GitFork size={18} />, href: "#", label: "GitHub" },
  { icon: <Link2 size={18} />, href: "#", label: "LinkedIn" },
  { icon: <X size={18} />, href: "#", label: "Twitter / X" },
  { icon: <Mail size={18} />, href: "mailto:faisalfeas2@gmail.com", label: "Email" },
]

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <footer style={{ background: "var(--bg)" }} className="relative overflow-hidden">
      {/* Top border glow */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer area */}
        <div className="py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <button onClick={scrollTop} className="font-heading text-3xl tracking-widest mb-4">
              RG<span className="text-primary">.</span>
            </button>
            <p className="font-sans text-sm text-[var(--text-muted)] leading-relaxed max-w-sm mb-6">
              Senior Frontend Developer &amp; UI/UX Specialist crafting premium
              digital experiences. Available for freelance projects worldwide.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-9 h-9 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] hover:text-primary hover:border-primary/40 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-base tracking-widest text-[var(--text)] mb-5">
              NAVIGATION
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() =>
                      document
                        .getElementById(link.href.replace("#", ""))
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="font-sans text-sm text-[var(--text-muted)] hover:text-primary transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-base tracking-widest text-[var(--text)] mb-5">
              SERVICES
            </h4>
            <ul className="space-y-3">
              {[
                "UI/UX Design",
                "Frontend Development",
                "Next.js Development",
                "Landing Pages",
                "WordPress Dev",
                "Figma to Code",
              ].map((s) => (
                <li key={s}>
                  <span className="font-sans text-sm text-[var(--text-muted)]">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-[var(--text-muted)] flex items-center gap-1.5">
            © {new Date().getFullYear()} Ravi Gupta. Made with{" "}
            <Heart size={12} className="text-primary fill-primary" /> using Next.js &
            Tailwind CSS
          </p>
          <p className="font-sans text-xs text-[var(--text-muted)]">
            All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll to top */}
      <motion.button
        onClick={scrollTop}
        whileHover={{ y: -3 }}
        aria-label="Scroll to top"
        className="fixed bottom-8 right-6 z-40 w-10 h-10 rounded-full bg-primary text-black flex items-center justify-center shadow-lg glow-primary hover:shadow-primary/40 transition-shadow duration-300"
      >
        <ArrowUp size={18} strokeWidth={2.5} />
      </motion.button>
    </footer>
  )
}
