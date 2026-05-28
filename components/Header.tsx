"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import Icon from "@/components/common/Icon";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-(--bg)/80 backdrop-blur-xl border-b border-(--border)"
            : "py-5 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollTo("#home")}
              className="flex items-center gap-2 font-heading text-2xl tracking-widest cursor-pointer group"
            >
              <span className="text-(--text) group-hover:text-primary transition-colors duration-300">
                <Icon name="Brand" size="24" className="w-6 h-6" />
              </span>
              <span className="text-primary">.</span>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className={`relative px-4 py-2 text-sm font-sans font-medium tracking-wide transition-colors duration-300 cursor-pointer ${
                      isActive
                        ? "text-primary"
                        : "text-(--text-muted) hover:text-(--text)"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="navActive"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-3">
              {/* Hire Me CTA */}
              <button
                onClick={() => scrollTo("#contact")}
                className="group hidden sm:flex btn-primary text-sm py-2 px-5 rounded-md"
              >
                Hire Me
                <Icon
                  name="LongArrow"
                  size="20"
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              {/* Theme toggle — suppressHydrationWarning handles the
                  server(undefined) → client(dark|light) icon difference
                  without needing a mounted gate or a setState-in-effect */}
              <button
                suppressHydrationWarning
                onClick={() =>
                  setTheme(resolvedTheme === "dark" ? "light" : "dark")
                }
                aria-label="Toggle Theme"
                className="w-10 h-10 flex items-center justify-center rounded-md bg-white/10 border border-(--border) text-(--text-muted) hover:text-primary hover:border-primary/40 transition-all duration-300 cursor-pointer"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={resolvedTheme}
                    initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                    transition={{ duration: 0.25 }}
                    suppressHydrationWarning
                  >
                    {resolvedTheme === "dark" ? (
                      <Moon size={20} />
                    ) : (
                      <Sun size={20} />
                    )}
                  </motion.span>
                </AnimatePresence>
              </button>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="w-10 h-10 cursor-pointer lg:hidden flex items-center justify-center bg-black light:bg-dark/10 rounded-md border border-(--border) text-(--text-muted)"
                aria-label="Toggle Menu"
                suppressHydrationWarning
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 z-52 w-72 bg-(--bg-2) border-l border-(--border) lg:hidden flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-(--border)">
              <div className="inline-flex items-center gap-2">
                <span className="text-(--text) group-hover:text-primary transition-colors duration-300">
                  <Icon name="Brand" size="24" className="w-6 h-6" />
                </span>
                <span className="text-primary">.</span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="cursor-pointer text-(--text-muted) hover:text-primary"
                aria-label="Close Menu"
                suppressHydrationWarning
              >
                <X size={20} />
              </button>
            </div>
            <nav className="flex flex-col gap-1 p-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(link.href)}
                  className="text-left px-4 py-3 text-base font-sans font-medium text-(--text-muted) hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
            <div className="mt-auto px-6 pb-8">
              <button
                onClick={() => scrollTo("#contact")}
                className="group btn-primary w-full justify-center"
                suppressHydrationWarning
              >
                Hire Me
                <Icon
                  name="LongArrow"
                  size="20"
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
