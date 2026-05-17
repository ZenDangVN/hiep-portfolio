"use client";
import { motion } from "framer-motion";
import { Globe, Users, Building2, Star } from "lucide-react";
import WaveDivider from "./WaveDivider";

const stats = [
  { value: "2008",    label: "Năm thành lập" },
  { value: "3,000+", label: "Nhân viên toàn cầu" },
  { value: "15+",    label: "Quốc gia hoạt động" },
  { value: "#1",     label: "IT Outsourcing tại Việt Nam" },
];

const highlights = [
  {
    icon: Building2,
    title: "Công ty hàng đầu Nhật Bản",
    desc: "Rikkei Japan là thành viên của tập đoàn RikkeiSoft — top IT outsourcing tại Việt Nam, chuyên cung cấp nguồn nhân lực IT chất lượng cao cho thị trường Nhật Bản.",
  },
  {
    icon: Users,
    title: "Môi trường phát triển vượt trội",
    desc: "Văn hóa làm việc chuyên nghiệp, tốc độ tăng trưởng nhanh, chế độ đãi ngộ cạnh tranh và lộ trình thăng tiến rõ ràng cho từng nhân viên.",
  },
  {
    icon: Globe,
    title: "Cầu nối Việt Nam — Nhật Bản",
    desc: "Kết nối tài năng IT Việt Nam với các doanh nghiệp Nhật Bản hàng đầu. Cơ hội làm việc với công nghệ tiên tiến và phong cách làm việc quốc tế.",
  },
  {
    icon: Star,
    title: "Phúc lợi & Đãi ngộ hấp dẫn",
    desc: "Lương cạnh tranh, thưởng hiệu suất, bảo hiểm toàn diện, du lịch hàng năm, và nhiều chương trình phát triển kỹ năng liên tục.",
  },
];

export default function RikkeiIntro() {
  return (
    <div className="relative">
      <WaveDivider fill="#0D0905" flip variant="deep" />

      <section id="rikkei" className="warm-section py-28 px-6 relative overflow-hidden">

        {/* Hex grid overlay */}
        <div className="absolute inset-0 hex-bg opacity-80 pointer-events-none" />

        {/* Circuit corner — top-left */}
        <svg className="absolute top-0 left-0 w-64 h-56 pointer-events-none select-none" viewBox="0 0 256 224" fill="none">
          <path d="M0 40 L40 40 L40 80 L80 80 L80 120" stroke="rgba(6,182,212,0.12)" strokeWidth="1" fill="none"/>
          <path d="M0 90 L25 90 L25 130 L60 130" stroke="rgba(245,158,11,0.10)" strokeWidth="0.8" fill="none"/>
          <circle cx="40" cy="40" r="3" fill="#06B6D4" opacity="0.18"/>
          <circle cx="80" cy="80" r="2.5" fill="#F59E0B" opacity="0.18"/>
          <circle cx="60" cy="130" r="2" fill="#10B981" opacity="0.15"/>
        </svg>

        {/* Circuit corner — bottom-right */}
        <svg className="absolute bottom-0 right-0 w-64 h-56 pointer-events-none select-none" viewBox="0 0 256 224" fill="none">
          <path d="M256 184 L216 184 L216 144 L176 144 L176 104" stroke="rgba(6,182,212,0.12)" strokeWidth="1" fill="none"/>
          <path d="M256 134 L231 134 L231 94 L196 94" stroke="rgba(245,158,11,0.10)" strokeWidth="0.8" fill="none"/>
          <circle cx="216" cy="184" r="3" fill="#06B6D4" opacity="0.18"/>
          <circle cx="176" cy="144" r="2.5" fill="#F59E0B" opacity="0.18"/>
        </svg>

        {/* Floating neural nodes */}
        <div className="absolute top-20 right-[38%] pointer-events-none select-none">
          <div className="relative w-3 h-3">
            <div className="absolute inset-0 rounded-full bg-cyan-400/35 animate-float-node" />
            <div className="absolute inset-0 rounded-full border border-cyan-400/25 animate-ring-pulse" />
          </div>
        </div>
        <div className="absolute top-48 left-[22%] pointer-events-none select-none" style={{ animationDelay: "1.5s" }}>
          <div className="relative w-2.5 h-2.5">
            <div className="absolute inset-0 rounded-full bg-amber-400/30 animate-float-node" />
            <div className="absolute inset-0 rounded-full border border-amber-400/20 animate-ring-pulse" style={{ animationDelay: "0.8s" }} />
          </div>
        </div>
        <div className="absolute bottom-32 left-[42%] pointer-events-none select-none">
          <div className="relative w-2 h-2">
            <div className="absolute inset-0 rounded-full bg-green-400/30 animate-float-node" style={{ animationDelay: "2.2s" }} />
          </div>
        </div>

        {/* Floating code labels */}
        <div className="absolute top-16 left-[48%] font-mono text-[10px] text-cyan-400/12 select-none pointer-events-none animate-float tracking-wider">
          rikkei.connect()
        </div>
        <div className="absolute bottom-20 right-[12%] font-mono text-[10px] text-amber-400/12 select-none pointer-events-none animate-float-delay rotate-3">
          {"{ IT }"}
        </div>

        {/* Decorative */}
        <div className="absolute -right-12 top-20 font-hand text-[160px] text-amber-900/5 select-none pointer-events-none leading-none">
          Rikkei
        </div>
        <div className="absolute left-4 bottom-16 w-32 h-32 rounded-full border border-amber-900/10 pointer-events-none" />
        <div className="absolute left-12 bottom-20 w-20 h-20 rounded-full border border-amber-900/8 pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="font-mono text-amber-500 text-sm">01.</span>
            <span className="font-hand text-lg text-amber-400/70 tracking-wide">Về Rikkei Japan</span>
            <div className="flex-1 h-px bg-amber-900/30" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-stone-100 mb-3"
          >
            Chào mừng đến với{" "}
            <span className="gradient-text">Rikkei Japan</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-stone-500 mb-14 max-w-xl text-sm"
          >
            Nơi tài năng IT Việt Nam gặp gỡ cơ hội từ thị trường Nhật Bản — môi trường chuyên nghiệp, đãi ngộ hấp dẫn.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass-card rounded-2xl p-5 text-center group hover:border-amber-500/30 transition-all duration-300"
              >
                <p className="text-2xl font-bold text-amber-300 mb-1">{s.value}</p>
                <p className="text-xs text-stone-500 font-mono">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Highlight cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  className="vintage-card rounded-2xl p-6 flex gap-5 group hover:border-amber-500/45 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors duration-200">
                    <Icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-stone-100 font-semibold mb-2">{h.title}</h3>
                    <p className="text-stone-400 text-sm leading-relaxed">{h.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-14 vintage-card rounded-2xl p-6 text-center"
          >
            <p className="font-hand text-2xl text-amber-200/60 mb-4">
              Bạn đang tìm kiếm cơ hội mới trong lĩnh vực IT? ☕
            </p>
            <a
              href="#jobs"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-900 font-semibold text-sm transition-all duration-300 glow-amber"
            >
              Xem vị trí đang tuyển →
            </a>
          </motion.div>
        </div>
      </section>

      <WaveDivider fill="#0D0905" variant="gentle" />
    </div>
  );
}
