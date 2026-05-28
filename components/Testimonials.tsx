"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"
import { testimonials } from "@/lib/data"

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < count ? "fill-primary text-primary" : "text-white/10"}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 md:py-36 relative overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/4 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label justify-center"
          >
            Client Love
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-5xl sm:text-6xl lg:text-7xl text-[var(--text)] leading-none"
          >
            WHAT CLIENTS <br className="hidden sm:block" />
            <span className="text-gradient">SAY</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-[var(--text-muted)] mt-4 max-w-lg mx-auto"
          >
            Real feedback from real clients — relationships built on trust,
            quality, and results.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="glass-card rounded-2xl p-7 flex flex-col relative overflow-hidden"
            >
              {/* Large quote mark */}
              <Quote
                size={48}
                className="absolute top-4 right-4 text-primary/8"
                strokeWidth={1}
              />

              <div className="relative z-10 flex flex-col flex-1">
                <StarRating count={t.rating} />

                <p className="font-sans text-sm text-[var(--text-muted)] leading-relaxed mb-6 flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-5 border-t border-[var(--border)]">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <span className="font-heading text-sm text-primary tracking-widest">
                      {t.avatar}
                    </span>
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold text-[var(--text)]">
                      {t.name}
                    </p>
                    <p className="font-sans text-xs text-[var(--text-muted)]">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Satisfaction strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 glass-card rounded-2xl px-8 py-6"
        >
          {[
            { value: "100%", label: "Client Satisfaction" },
            { value: "50+", label: "Projects Completed" },
            { value: "5★", label: "Average Rating" },
            { value: "3+", label: "Long-term Clients" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="font-heading text-3xl text-primary leading-none">
                {item.value}
              </p>
              <p className="font-sans text-xs text-[var(--text-muted)] mt-1">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
