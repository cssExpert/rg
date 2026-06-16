"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import Icon from "@/components/common/Icon";
import ScrambleText from "@/components/ScrambleText";
import { useMounted } from "@/lib/useMounted";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

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
      <header
        style={{ animation: "slide-down 0.6s cubic-bezier(0.22,1,0.36,1) both" }}
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
                    <ScrambleText text={link.label} />
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-3">
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

              <button
                onClick={() =>
                  setTheme(resolvedTheme === "dark" ? "light" : "dark")
                }
                aria-label="Toggle Theme"
                className="w-10 h-10 flex items-center justify-center rounded-md bg-white/10 border border-(--border) text-(--text-muted) hover:text-primary hover:border-primary/40 transition-all duration-300 cursor-pointer"
              >
                {mounted ? (
                  resolvedTheme === "dark" ? (
                    <Moon size={20} />
                  ) : (
                    <Sun size={20} />
                  )
                ) : (
                  <span className="w-5 h-5" />
                )}
              </button>

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
      </header>

      {/* Mobile drawer — CSS transition, no Framer Motion */}
      <div
        className={`fixed inset-y-0 right-0 z-52 w-72 bg-(--bg-2) border-l border-(--border) lg:hidden flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-(--border)">
          <div className="inline-flex items-center gap-2">
            <span className="text-(--text)">
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
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-left px-4 py-3 text-base font-sans font-medium text-(--text-muted) hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
            >
              {link.label}
            </button>
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
      </div>

      {/* Backdrop */}
      <div
        onClick={() => setMobileOpen(false)}
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />
    </>
  );
}
