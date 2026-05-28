"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, GitFork, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/lib/data";

type Project = (typeof projects)[number];

interface ProjectModalProps {
  project: Project;
  index: number;
  total: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function ProjectModal({
  project,
  index,
  total,
  onClose,
  onPrev,
  onNext,
}: ProjectModalProps) {
  const isFirst = index === 0;
  const isLast = index === total - 1;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && !isFirst) onPrev();
      if (e.key === "ArrowRight" && !isLast) onNext();
    },
    [onClose, onPrev, onNext, isFirst, isLast]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10"
        style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
        onClick={onClose}
      >
        {/* Modal card */}
        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 24 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl rounded-2xl overflow-hidden flex flex-col"
          style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
            boxShadow: "0 40px 100px rgba(0,0,0,0.5)",
            maxHeight: "90vh",
          }}
        >
          {/* Hero image */}
          <div className="relative h-56 sm:h-72 shrink-0 overflow-hidden">
            <Image
              src={project.thumbnail}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 768px"
              alt={project.title}
              className="object-cover object-center"
            />
            {/* gradient overlay — always dark so text is readable over any image */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 70%, var(--card) 100%)",
              }}
            />
            {/* Title overlay on image */}
            <div className="absolute bottom-4 left-6">
              <p
                className="font-heading text-4xl sm:text-5xl leading-none select-none pointer-events-none"
                style={{ color: "rgba(255,255,255,0.18)", letterSpacing: "0.02em" }}
              >
                {project.title.split(" ").slice(0, 2).join(" ")}
              </p>
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 cursor-pointer"
              style={{
                background: "var(--bg-2)",
                border: "1px solid var(--border)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "var(--card-hover)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "var(--bg-2)")
              }
            >
              <X size={16} className="text-(--text)" />
            </button>
          </div>

          {/* Scrollable content */}
          <div className="overflow-y-auto flex-1 px-6 py-6 sm:px-8 sm:py-7">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full font-sans text-xs font-semibold tracking-widest uppercase"
                  style={{
                    border: "1px solid color-mix(in srgb, var(--color-primary) 40%, transparent)",
                    color: "var(--color-primary)",
                    background: "color-mix(in srgb, var(--color-primary) 8%, transparent)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h2 className="font-heading text-3xl sm:text-4xl tracking-wider text-(--text) mb-3">
              {project.title.toUpperCase()}
            </h2>

            {/* Description */}
            <p className="font-sans text-sm sm:text-base leading-relaxed mb-6 text-(--text-muted)">
              {project.description}
            </p>

            {/* Metadata row */}
            <div
              className="grid grid-cols-3 gap-4 rounded-xl p-5 mb-6"
              style={{
                background: "var(--bg-2)",
                border: "1px solid var(--border)",
              }}
            >
              <div>
                <p className="font-sans text-xs tracking-widest uppercase mb-1 text-(--text-muted)">
                  My Role
                </p>
                <p className="font-sans text-sm font-semibold text-(--text) leading-snug">
                  {project.role}
                </p>
              </div>
              <div>
                <p className="font-sans text-xs tracking-widest uppercase mb-1 text-(--text-muted)">
                  Year
                </p>
                <p className="font-sans text-sm font-semibold text-(--text)">
                  {project.year}
                </p>
              </div>
              <div>
                <p className="font-sans text-xs tracking-widest uppercase mb-1 text-(--text-muted)">
                  Tech Stack
                </p>
                <p className="font-sans text-sm font-semibold text-(--text) leading-snug">
                  {project.tech.join(" · ")}
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 flex-wrap">
              <a
                href={project.liveUrl}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-sans text-xs font-bold tracking-widest uppercase transition-opacity hover:opacity-80"
                style={{
                  background: "linear-gradient(90deg, #ceff00, #80ff00)",
                  color: "#000",
                }}
              >
                <ExternalLink size={14} />
                Live Preview
              </a>
              <a
                href={project.githubUrl}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-sans text-xs font-bold tracking-widest uppercase transition-colors"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--text-muted)",
                  background: "transparent",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "var(--border-hover)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "var(--border)")
                }
              >
                <GitFork size={14} />
                View Code
              </a>
            </div>
          </div>

          {/* Prev / Next navigation bar */}
          <div
            className="flex items-center justify-between px-6 py-4 shrink-0"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <button
              onClick={onPrev}
              disabled={isFirst}
              aria-label="Previous project"
              className="flex items-center gap-2 font-sans text-xs font-semibold tracking-wide uppercase transition-all duration-200"
              style={{
                color: "var(--text-muted)",
                opacity: isFirst ? 0.35 : 1,
                cursor: isFirst ? "not-allowed" : "pointer",
              }}
              onMouseEnter={(e) => {
                if (!isFirst) e.currentTarget.style.color = "var(--color-primary)";
              }}
              onMouseLeave={(e) => {
                if (!isFirst) e.currentTarget.style.color = "var(--text-muted)";
              }}
            >
              <ChevronLeft size={16} />
              Prev
            </button>

            {/* Counter */}
            <span className="font-sans text-xs text-(--text-muted)" style={{ opacity: 0.6 }}>
              {index + 1} / {total}
            </span>

            <button
              onClick={onNext}
              disabled={isLast}
              aria-label="Next project"
              className="flex items-center gap-2 font-sans text-xs font-semibold tracking-wide uppercase transition-all duration-200"
              style={{
                color: "var(--text-muted)",
                opacity: isLast ? 0.35 : 1,
                cursor: isLast ? "not-allowed" : "pointer",
              }}
              onMouseEnter={(e) => {
                if (!isLast) e.currentTarget.style.color = "var(--color-primary)";
              }}
              onMouseLeave={(e) => {
                if (!isLast) e.currentTarget.style.color = "var(--text-muted)";
              }}
            >
              Next
              <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
