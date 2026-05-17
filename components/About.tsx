"use client";
import { motion } from "framer-motion";
import { Trophy, Star, TrendingUp, Users } from "lucide-react";
import WaveDivider from "./WaveDivider";

const stats = [
  { value: "9/2024",  label: "Gia nhập Rikkei",                  icon: Star },
  { value: "#1",      label: "Top 1 Tuyển dụng RikkeiJapan 2025", icon: TrendingUp },
  { value: "Top 20",  label: "Nhân viên xuất sắc tập đoàn",       icon: Users },
  { value: "5 🏆",    label: "Giải thưởng lớn",                   icon: Trophy },
];

const achievements = [
  { icon: "🏆", text: "Best Hunter of the Month — Tháng 11/2024" },
  { icon: "🌱", text: "Rookie Hunter of the Year — 2024" },
  { icon: "🥇", text: "Top 1 Tuyển dụng RikkeiJapan — 2025" },
  { icon: "⭐", text: "Top 20 Nhân viên xuất sắc tập đoàn Rikkei — 2025" },
  { icon: "👑", text: "Employee of the Year — 2025" },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function About() {
  return (
    <div className="relative">
      <section id="about" className="warm-section py-24 px-6 relative overflow-hidden">

        {/* Circuit grid overlay */}
        <div className="absolute inset-0 circuit-bg opacity-60 pointer-events-none" />

        {/* Floating node — top right */}
        <div className="absolute top-12 right-[35%] pointer-events-none select-none">
          <div className="relative w-2.5 h-2.5">
            <div className="absolute inset-0 rounded-full bg-cyan-400/25 animate-float-node" />
            <div className="absolute inset-0 rounded-full border border-cyan-400/18 animate-ring-pulse" style={{ animationDelay: "1s" }} />
          </div>
        </div>

        {/* Floating code fragment */}
        <div className="absolute bottom-16 right-[10%] font-mono text-[10px] text-cyan-400/10 select-none pointer-events-none animate-float-delay tracking-wider">
          talent.acquire()
        </div>

        {/* Coffee bean scatter */}
        <div className="absolute right-12 top-16 font-hand text-5xl text-amber-900/15 select-none pointer-events-none rotate-12">
          ☕
        </div>
        <div className="absolute left-8 bottom-24 text-4xl text-amber-900/10 select-none pointer-events-none -rotate-12">
          ◉
        </div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="font-mono text-amber-500 text-sm">02.</span>
            <span className="font-hand text-lg text-amber-400/70 tracking-wide">About Me</span>
            <div className="flex-1 h-px bg-amber-900/30" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left — bio */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-stone-100 mb-6"
              >
                Về mình —{" "}
                <span className="gradient-text">Hiệp Trương</span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-4 text-stone-400 leading-relaxed"
              >
                <p>
                  Mình là <span className="text-stone-200 font-medium">Hiệp Trương</span> — Talent Acquisition tại{" "}
                  <span className="text-amber-400 font-medium">Rikkei Japan</span>. Gia nhập Rikkei từ tháng 9/2024,
                  mình đã nhanh chóng khẳng định bản thân trong môi trường tuyển dụng IT đầy cạnh tranh.
                </p>
                <p>
                  Chỉ sau hơn 2 tháng, mình đạt giải{" "}
                  <span className="text-yellow-400 font-medium">🏆 Best Hunter of the Month (11/2024)</span>{" "}
                  và liên tiếp nhận{" "}
                  <span className="text-green-400 font-medium">Rookie Hunter of the Year 2024</span>.
                </p>
                <p>
                  Bước sang 2025, mình vươn lên{" "}
                  <span className="text-amber-400 font-medium">Top 1 Tuyển dụng RikkeiJapan</span>,
                  lọt{" "}
                  <span className="text-purple-400 font-medium">Top 20 Nhân viên xuất sắc</span> toàn tập đoàn,
                  và nhận danh hiệu{" "}
                  <span className="text-amber-300 font-medium">👑 Employee of the Year</span>.
                </p>
                <p className="font-hand text-xl text-amber-200/60">
                  À, và mình hay mời cafe lắm — vì những cuộc trò chuyện hay nhất bắt đầu bằng 1 ly cà phê ☕
                </p>
              </motion.div>

              {/* Achievement chips */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 space-y-2.5"
              >
                {achievements.map((a, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.25 + i * 0.07 }}
                    className="vintage-card px-4 py-3 flex items-center gap-3"
                  >
                    <span className="text-lg flex-shrink-0">{a.icon}</span>
                    <span className="text-stone-300 text-sm">{a.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.55 }}
                href="/cv.pdf"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl bg-amber-600/20 border border-amber-500/30 text-amber-300 hover:bg-amber-600/30 transition-all duration-300 text-sm font-medium"
              >
                Download CV ↓
              </motion.a>
            </div>

            {/* Right — stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, label, icon: Icon }, i) => (
                <motion.div
                  key={label}
                  custom={i}
                  variants={cardVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="glass-card rounded-2xl p-6 group hover:border-amber-500/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <p className="text-2xl font-bold text-stone-100 mb-1 leading-tight">{value}</p>
                  <p className="text-stone-500 text-xs leading-snug">{label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Wave out into coffee-dots bg */}
      <WaveDivider fill="#0D0905" flip variant="gentle" />
    </div>
  );
}
