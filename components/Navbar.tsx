"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Coffee } from "lucide-react";

const links = [
  { href: "#rikkei",  label: "Rikkei Japan" },
  { href: "#about",   label: "About Me" },
  { href: "#jobs",    label: "Jobs" },
  { href: "#process", label: "Quy trình" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card py-3" : "py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center group-hover:bg-amber-500/25 transition-colors duration-200">
            <Coffee className="w-4 h-4 text-amber-400" />
          </div>
          <span className="font-hand text-base text-amber-300/80 group-hover:text-amber-300 transition-colors duration-200 tracking-wide">
            Hiệp ☕
          </span>
        </a>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm text-stone-400 hover:text-amber-300 transition-colors duration-200 group"
            >
              {l.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-amber-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-1.5 px-5 py-2 rounded-lg border border-amber-500/40 text-amber-300 text-sm hover:bg-amber-500/10 glow-amber transition-all duration-300"
        >
          ☕ Cafe nhé?
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-stone-400 hover:text-amber-300 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden"
          >
            <div className="mx-4 mt-2 glass-card rounded-xl p-4 flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2.5 text-stone-400 hover:text-amber-300 hover:bg-amber-500/8 rounded-lg transition-all duration-200 text-sm"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 px-3 py-2.5 text-center rounded-lg border border-amber-500/35 text-amber-300 text-sm hover:bg-amber-500/10 transition-all duration-200"
              >
                ☕ Cafe nhé?
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
