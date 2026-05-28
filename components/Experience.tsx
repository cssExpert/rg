"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, Calendar } from "lucide-react";
import { experience } from "@/lib/data";
import TiltCard from "./TiltCard";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 md:py-36 relative overflow-hidden"
      style={{ background: "var(--bg-2)" }}
    >
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label justify-center"
          >
            Career Path
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-5xl sm:text-6xl lg:text-7xl text-(--text) leading-none"
          >
            WORK <span className="text-gradient">EXPERIENCE</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-(--text-muted) mt-4 max-w-xl mx-auto"
          >
            A decade-and-a-half journey of building, leading, and shipping
            world-class digital products.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

          <div className="space-y-10">
            {experience.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex flex-col sm:flex-row gap-6 sm:gap-0 ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 sm:left-1/2 top-6 sm:top-8 -translate-x-1/2 z-10">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-(--bg-2) glow-primary" />
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden sm:block sm:w-1/2" />

                {/* Card */}
                <div
                  className={`pl-12 sm:pl-0 sm:w-1/2 ${
                    i % 2 === 0 ? "sm:pl-10" : "sm:pr-10"
                  }`}
                >
                  <TiltCard className="glass-card rounded-2xl p-6">
                    {/* Header */}
                    <div className="flex flex-col items-start justify-between gap-4 mb-3">
                      <div className="flex items-center gap-1.5 shrink-0 px-2 py-1 rounded-full bg-primary/10 border border-primary/20">
                        <Calendar size={11} className="text-primary" />
                        <span className="font-sans text-[10px] text-primary whitespace-nowrap">
                          {item.period}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-heading text-xl md:text-2xl tracking-wider text-(--text) leading-tight">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <BriefcaseBusiness
                            size={12}
                            className="text-primary"
                          />
                          <span className="font-sans text-sm font-semibold text-primary">
                            {item.company}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="font-sans text-sm text-(--text-muted) leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-md bg-white/4 border border-white/8 font-sans text-xs text-(--text-muted)"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </TiltCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
