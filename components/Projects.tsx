"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Fullscreen } from "lucide-react";
import { projects } from "@/lib/data";
import ProjectModal from "@/components/ProjectModal";
import Icon from "@/components/common/Icon";

const categories = [
  "All",
  "Next.js",
  "Laravel",
  "Angular",
  "WordPress",
  "UI Design",
];

const PAGE_SIZE = 6;

export default function Projects() {
  const [active, setActive] = useState("All");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const changeCategory = (cat: string) => {
    setActive(cat);
    setVisibleCount(PAGE_SIZE);
    setModalIndex(null);
  };

  const loadMore = () => setVisibleCount((c) => c + PAGE_SIZE);

  const openModal = (index: number) => setModalIndex(index);
  const closeModal = () => setModalIndex(null);
  const goPrev = () => setModalIndex((i) => (i !== null && i > 0 ? i - 1 : i));
  const goNext = () =>
    setModalIndex((i) => (i !== null && i < visible.length - 1 ? i + 1 : i));

  return (
    <section
      id="projects"
      className="py-24 md:py-36 relative overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      <div className="absolute right-0 bottom-0 w-125 h-125 bg-primary/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-label"
            >
              Portfolio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading text-5xl sm:text-6xl lg:text-7xl text-(--text) leading-none"
            >
              SELECTED <br className="hidden sm:block" />
              <span className="text-gradient">PROJECTS</span>
            </motion.h2>
          </div>

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => changeCategory(cat)}
                className={`px-4 py-2 rounded-full font-sans text-xs font-semibold tracking-wide transition-all duration-300 border cursor-pointer ${
                  active === cat
                    ? "bg-primary text-black light:text-white border-primary"
                    : "border-(--border) text-(--text-muted) hover:border-primary/40 hover:text-(--text)"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -10 }}
                className="glass-card rounded-2xl overflow-hidden group flex flex-col"
              >
                {/* Project Image — clickable */}
                <button
                  onClick={() => openModal(i)}
                  className={`relative h-68 bg-linear-to-br border-b border-(--bg-2) ${project.gradient} overflow-hidden shrink-0 w-full cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary`}
                  aria-label={`Open ${project.title} details`}
                >
                  <div className="absolute inset-0 grid-bg opacity-30" />
                  <Image
                    src={project.thumbnail}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    alt={project.title}
                    className="object-cover object-center"
                  />
                  {/* Category badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-dark/60 border border-dark/20 font-sans text-xs text-(--projectBadge) light:text-white font-semibold tracking-wide">
                    {project.category}
                  </span>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <span className="px-4 py-3 inline-flex items-center justify-center gap-1.5 rounded-full bg-primary font-sans text-xs font-bold text-dark light:text-white tracking-wide">
                      <Fullscreen className="w-4 h-4" />
                      View Details
                    </span>
                  </div>
                </button>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-heading text-lg md:text-3xl tracking-wider text-(--text) mb-2">
                    {project.title}
                  </h3>
                  <p className="font-sans text-sm text-(--text-muted) leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-primary/8 border border-primary/15 font-sans text-xs text-primary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-1.5 font-sans text-xs font-semibold text-primary hover:underline"
                    >
                      <ExternalLink size={12} /> Live Demo
                    </a>
                    <span className="text-(--border)">|</span>
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-1.5 font-sans text-xs font-semibold text-(--text-muted) hover:text-(--text)"
                    >
                      <Icon name="Git" size="12" className="w-3 h-3" /> GitHub
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More / All Loaded CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            onClick={hasMore ? loadMore : undefined}
            disabled={!hasMore}
            className={`btn-outline group transition-opacity ${
              !hasMore ? "opacity-40 cursor-not-allowed" : ""
            }`}
          >
            {hasMore
              ? `View More Projects (${filtered.length - visibleCount} left)`
              : "All Projects Loaded"}
            {hasMore && (
              <Icon
                name="LongArrow"
                size="20"
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              />
            )}
          </button>
        </motion.div>
      </div>

      {/* Project Modal */}
      {modalIndex !== null && (
        <ProjectModal
          project={visible[modalIndex]}
          index={modalIndex}
          total={visible.length}
          onClose={closeModal}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </section>
  );
}
