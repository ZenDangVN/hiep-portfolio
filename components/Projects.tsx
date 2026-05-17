"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Smartphone, Globe, Brain } from "lucide-react";
import { LinkedinIcon } from "./SocialIcons";
import WaveDivider from "./WaveDivider";

type Project = {
  title: string;
  description: string;
  longDesc: string;
  tags: string[];
  icon: React.ElementType;
  accent: string;
  github: string;
  demo?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Senzo — AI Face Recognition",
    description: "Android app with real-time face detection & matching",
    longDesc:
      "Advanced Android application featuring real-time face detection using OpenCV and ML Kit. Implements template matching to compare and score facial similarities with a clean overlay UI.",
    tags: ["Android", "Kotlin", "OpenCV", "ML Kit", "Jetpack"],
    icon: Brain,
    accent: "from-amber-500/20 to-orange-500/15",
    github: "https://github.com/hieptruong/senzo",
    featured: true,
  },
  {
    title: "DevConnect Platform",
    description: "Real-time developer networking & collaboration hub",
    longDesc:
      "Full-stack web platform for developers to connect, share projects, and collaborate in real-time. Features WebSocket chat, project matching, and a tech-stack filter system.",
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Socket.io"],
    icon: Globe,
    accent: "from-amber-600/18 to-yellow-600/12",
    github: "https://github.com/hieptruong",
    demo: "https://devconnect.example.com",
  },
  {
    title: "Fitness Tracker App",
    description: "Cross-platform mobile app for workout tracking",
    longDesc:
      "Feature-rich fitness tracking app built with Jetpack Compose. Includes custom workout plans, progress charts, workout history, and health API integration.",
    tags: ["Android", "Kotlin", "Compose", "Room DB", "Charts"],
    icon: Smartphone,
    accent: "from-orange-500/18 to-amber-400/12",
    github: "https://github.com/hieptruong",
  },
];

export default function Projects() {
  return (
    <div className="relative">
      <section id="projects" className="warm-section py-28 px-6 relative overflow-hidden">

        {/* Decorative coffee rings (circles) */}
        <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full border border-amber-900/12 pointer-events-none" />
        <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full border border-amber-900/10 pointer-events-none" />
        <div className="absolute top-10 right-10 w-36 h-36 rounded-full border border-amber-900/10 pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="font-mono text-amber-500 text-sm">03.</span>
            <span className="font-hand text-lg text-amber-400/70 tracking-wide">Projects</span>
            <div className="flex-1 h-px bg-amber-900/30" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-stone-100 mb-3"
          >
            Featured{" "}
            <span className="gradient-text">Work</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-stone-500 mb-14 max-w-lg"
          >
            Một số dự án mình đã xây dựng — từ mobile apps đến full-stack platforms.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group relative vintage-card p-6 flex flex-col gap-4 cursor-default hover:border-amber-500/45 transition-all duration-300"
                >
                  {p.featured && (
                    <span className="absolute top-4 right-4 text-xs font-hand px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/25">
                      ⭐ Featured
                    </span>
                  )}

                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.accent} flex items-center justify-center border border-amber-900/20`}>
                    <Icon className="w-6 h-6 text-amber-300/80" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-stone-100 font-semibold text-lg mb-1 group-hover:text-amber-300 transition-colors duration-200">
                      {p.title}
                    </h3>
                    <p className="text-stone-500 text-sm mb-3">{p.description}</p>
                    <p className="text-stone-400 text-sm leading-relaxed">{p.longDesc}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2 py-0.5 rounded-md bg-amber-900/20 text-stone-400 border border-amber-900/25"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2 border-t border-amber-900/20">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-stone-400 hover:text-stone-200 transition-colors duration-200"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                      Code
                    </a>
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-amber-400 hover:text-amber-300 transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/hieptruong"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-stone-700 text-stone-400 hover:border-amber-500/45 hover:text-amber-300 transition-all duration-300 text-sm"
            >
              <LinkedinIcon className="w-4 h-4" />
              Xem thêm trên GitHub
            </a>
          </motion.div>
        </div>
      </section>

      <WaveDivider fill="#0D0905" flip variant="deep" />
    </div>
  );
}
