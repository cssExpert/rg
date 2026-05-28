"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { stats } from "@/lib/data";
import TiltCard from "./TiltCard";

const expertise = [
  "React.js & Next.js Applications",
  "TypeScript & Modern JavaScript",
  "Tailwind CSS & Bootstrap Styling",
  "WordPress Custom Themes",
  "Figma Design to Code",
  "Performance Optimization & SEO",
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-36 relative overflow-hidden"
      style={{ background: "var(--bg-2)" }}
    >
      {/* Ambient glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-125 h-125 bg-primary/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:gap-24 items-center lg:grid-cols-[1fr_2fr]">
          {/* Left – Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main image card */}
            <TiltCard className="p-4 sm:p-6 flex flex-col h-full">
              <div className="relative rounded-2xl overflow-hidden border border-neutral-900 light:border-(--border) aspect-4/5 max-w-sm mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-linear-to-br from-[#1a1a1a] via-[#111] to-darker light:from-(--bg-2) light:via-(--card) light:to-(--card)" />
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  {/* Code snippet style decoration */}
                  <div className="glass-card rounded-xl p-5 w-64 font-mono text-xs h-[calc(full - 100px)]">
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                    </div>
                    <p className="text-(--text-muted)">
                      <span className="text-primary">const</span>{" "}
                      <span className="text-blue-400">developer</span> = &#123;
                    </p>
                    <p className="text-(--text-muted) pl-4">
                      name:{" "}
                      <span className="text-green-400">
                        &apos;Ravi Gupta&apos;
                      </span>
                      ,
                    </p>
                    <p className="text-(--text-muted) pl-4">
                      exp:{" "}
                      <span className="text-primary">
                        &apos;18+ years&apos;
                      </span>
                      ,
                    </p>
                    <p className="text-(--text-muted) pl-4">
                      stack:{" "}
                      <span className="text-yellow-400">
                        [&apos;React&apos;, &apos;Next.js&apos;]
                      </span>
                      ,
                    </p>
                    <p className="text-(--text-muted) pl-4">
                      passion:{" "}
                      <span className="text-green-400">
                        &apos;Premium UI&apos;
                      </span>
                    </p>
                    <p className="text-(--text-muted)">&#125;</p>
                  </div>

                  {/* Availability badge */}
                  <div className="glass-card rounded-full px-5 py-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="font-sans text-xs font-medium text-(--text)">
                      Open to new projects
                    </span>
                  </div>
                </div>
              </div>
            </TiltCard>

            {/* Stats overlay cards */}
            <div className="grid grid-cols-2 gap-3 mt-4 max-w-sm mx-auto lg:mx-0">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="glass-card rounded-xl p-4 text-center"
                >
                  <p className="font-heading text-3xl text-primary leading-none mb-1">
                    {stat.value}
                  </p>
                  <p className="font-sans text-xs text-(--text-muted)">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right – Content */}
          <div>
            <motion.span
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="section-label"
            >
              Who I Am
            </motion.span>

            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-heading text-5xl sm:text-6xl lg:text-7xl text-(--text) leading-none mb-6"
            >
              ABOUT <span className="text-gradient">ME</span>
            </motion.h2>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-sans text-(--text-muted) leading-relaxed mb-5"
            >
              I&apos;m <strong className="text-(--text)">Ravi Gupta</strong>, a
              Senior Frontend Developer and UI/UX Specialist with over{" "}
              <strong className="text-primary">
                18 years of professional experience
              </strong>{" "}
              in crafting exceptional digital experiences. I specialize in
              building scalable, performant, and visually stunning web
              applications.
            </motion.p>

            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-sans text-(--text-muted) leading-relaxed mb-8"
            >
              My journey began with raw HTML and CSS, evolving through the rise
              of responsive design, JavaScript frameworks, and today&apos;s
              modern React ecosystem. I blend technical precision with a
              designer&apos;s eye to deliver products that are both functional
              and beautiful. Whether it&apos;s a complex SaaS dashboard or a
              conversion-focused landing page, I bring the same level of
              craftsmanship to every project.
            </motion.p>

            {/* Expertise list */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-3 mb-10"
            >
              {expertise.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    size={16}
                    className="text-primary shrink-0"
                    strokeWidth={2.5}
                  />
                  <span className="font-sans text-sm text-(--text-muted)">
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-primary"
              >
                Work With Me
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-outline"
              >
                My Work
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
