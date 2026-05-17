"use client";
import { motion } from "framer-motion";
import WaveDivider from "./WaveDivider";

type Tech = { name: string; color: string; bg: string };
type Category = { label: string; items: Tech[] };

const categories: Category[] = [
  {
    label: "Mobile",
    items: [
      { name: "Android",  color: "text-green-400",  bg: "bg-green-500/10  border-green-500/20" },
      { name: "Kotlin",   color: "text-violet-400", bg: "bg-violet-500/10 border-violet-500/20" },
      { name: "Java",     color: "text-orange-400", bg: "bg-orange-500/10 border-orange-500/20" },
      { name: "Jetpack",  color: "text-amber-400",  bg: "bg-amber-500/10  border-amber-500/20" },
      { name: "Compose",  color: "text-cyan-400",   bg: "bg-cyan-500/10   border-cyan-500/20" },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "React",      color: "text-cyan-400",   bg: "bg-cyan-500/10  border-cyan-500/20" },
      { name: "Next.js",    color: "text-stone-300",  bg: "bg-stone-500/10 border-stone-500/20" },
      { name: "TypeScript", color: "text-amber-400",  bg: "bg-amber-500/10 border-amber-500/20" },
      { name: "Tailwind",   color: "text-sky-400",    bg: "bg-sky-500/10   border-sky-500/20" },
      { name: "Framer",     color: "text-pink-400",   bg: "bg-pink-500/10  border-pink-500/20" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js",  color: "text-green-400",  bg: "bg-green-500/10  border-green-500/20" },
      { name: "Python",   color: "text-yellow-400", bg: "bg-yellow-500/10 border-yellow-500/20" },
      { name: "FastAPI",  color: "text-teal-400",   bg: "bg-teal-500/10   border-teal-500/20" },
      { name: "REST API", color: "text-indigo-400", bg: "bg-indigo-500/10 border-indigo-500/20" },
      { name: "GraphQL",  color: "text-pink-400",   bg: "bg-pink-500/10   border-pink-500/20" },
    ],
  },
  {
    label: "Database & Cloud",
    items: [
      { name: "Firebase",   color: "text-amber-400", bg: "bg-amber-500/10  border-amber-500/20" },
      { name: "PostgreSQL", color: "text-amber-300", bg: "bg-amber-400/8   border-amber-400/20" },
      { name: "MongoDB",    color: "text-green-400", bg: "bg-green-500/10  border-green-500/20" },
      { name: "SQLite",     color: "text-stone-300", bg: "bg-stone-500/10  border-stone-500/20" },
      { name: "Redis",      color: "text-red-400",   bg: "bg-red-500/10    border-red-500/20" },
    ],
  },
  {
    label: "DevOps & Tools",
    items: [
      { name: "Docker",    color: "text-sky-400",    bg: "bg-sky-500/10    border-sky-500/20" },
      { name: "Git",       color: "text-orange-400", bg: "bg-orange-500/10 border-orange-500/20" },
      { name: "GitHub CI", color: "text-stone-300",  bg: "bg-stone-500/10  border-stone-500/20" },
      { name: "OpenCV",    color: "text-amber-400",  bg: "bg-amber-500/10  border-amber-500/20" },
      { name: "ML Kit",    color: "text-yellow-400", bg: "bg-yellow-500/10 border-yellow-500/20" },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="relative py-28 px-6 coffee-dots">

      {/* Floating coffee accent */}
      <div className="absolute top-8 right-16 font-hand text-6xl text-amber-900/12 select-none pointer-events-none -rotate-6">
        ◉◉
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono text-amber-500 text-sm">02.</span>
          <span className="font-hand text-lg text-amber-400/70 tracking-wide">Tech Stack</span>
          <div className="flex-1 h-px bg-amber-900/30" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-stone-100 mb-3"
        >
          Tools I{" "}
          <span className="gradient-text">Work With</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-stone-500 mb-14 max-w-lg"
        >
          Công nghệ mình dùng hàng ngày để xây dựng sản phẩm đáng tin cậy.
        </motion.p>

        <div className="space-y-10">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.07 }}
            >
              <p className="text-xs font-mono text-stone-600 uppercase tracking-widest mb-4">
                {cat.label}
              </p>
              <div className="flex flex-wrap gap-3">
                {cat.items.map((tech, ti) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: ci * 0.07 + ti * 0.05 }}
                    whileHover={{ y: -3, scale: 1.06 }}
                    className={`px-4 py-2 rounded-xl border text-sm font-medium cursor-default transition-all duration-200 ${tech.color} ${tech.bg}`}
                  >
                    {tech.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <WaveDivider fill="#110B06" variant="sharp" />
      </div>
    </section>
  );
}
