"use client";

import { motion } from "framer-motion";
import {
  Palette,
  Code2,
  Layers,
  Layout,
  Globe,
  PenTool,
  ArrowUpRight,
} from "lucide-react";
import { services } from "@/lib/data";
import TiltCard from "./TiltCard";
import { ServicesSkeleton } from "@/components/common/Skeleton";
import { useMounted } from "@/lib/useMounted";

const iconMap: Record<string, React.ReactNode> = {
  Palette: <Palette size={24} />,
  Code2: <Code2 size={24} />,
  Layers: <Layers size={24} />,
  Layout: <Layout size={24} />,
  Globe: <Globe size={24} />,
  Figma: <PenTool size={24} />,
};

export default function Services() {
  const mounted = useMounted();
  if (!mounted) return <ServicesSkeleton />;

  return (
    <section
      id="services"
      className="py-24 md:py-36 relative overflow-hidden"
      style={{ background: "var(--bg-2)" }}
    >
      {/* Background glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/4 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label"
          >
            What I Offer
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-5xl sm:text-6xl lg:text-7xl text-(--text) leading-none mb-4"
          >
            MY <span className="text-gradient">SERVICES</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-(--text-muted)"
          >
            From pixel-perfect design to production-ready code — I cover the
            full spectrum of modern web development.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <TiltCard
              key={service.title}
              className="glass-card rounded-2xl p-7 group cursor-default relative overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                  {iconMap[service.iconName]}
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl md:text-3xl tracking-wider text-(--text) mb-3">
                  {service.title}
                </h3>
                <p className="font-sans text-sm text-(--text-muted) leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Arrow link */}
                <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span className="font-sans text-xs font-semibold tracking-widest uppercase">
                    Learn More
                  </span>
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass-card rounded-2xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="font-heading text-2xl sm:text-3xl text-(--text) mb-1">
              Ready to start your{" "}
              <span className="text-gradient">next project?</span>
            </h3>
            <p className="font-sans text-sm text-(--text-muted)">
              Let&apos;s collaborate and build something exceptional together.
            </p>
          </div>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-primary whitespace-nowrap shrink-0"
          >
            Get In Touch
            <ArrowUpRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
