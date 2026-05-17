"use client";
import { motion } from "framer-motion";
import { Coffee } from "lucide-react";
import WaveDivider from "./WaveDivider";

type Milestone = { icon: string; text: string; date: string; color: string };
type Job = {
  role: string;
  company: string;
  period: string;
  type: string;
  description: string;
  milestones: Milestone[];
};

const jobs: Job[] = [
  {
    role: "Talent Acquisition — Recruiter",
    company: "Rikkei Japan (RikkeiSoft)",
    period: "09/2024 — Hiện tại",
    type: "Full-time",
    description:
      "Chịu trách nhiệm tuyển dụng nhân sự IT cho thị trường Nhật Bản. Xây dựng pipeline tuyển dụng hiệu quả, phát triển mạng lưới ứng viên và đạt các chỉ tiêu vượt trội chỉ sau vài tháng gia nhập.",
    milestones: [
      { icon: "🏆", text: "Best Hunter of the Month",        date: "11/2024", color: "text-yellow-400 bg-yellow-500/10 border-yellow-500/22" },
      { icon: "🌱", text: "Rookie Hunter of the Year",        date: "2024",    color: "text-green-400  bg-green-500/10  border-green-500/22" },
      { icon: "🥇", text: "Top 1 Tuyển dụng RikkeiJapan",    date: "2025",    color: "text-amber-400  bg-amber-500/10  border-amber-500/22" },
      { icon: "⭐", text: "Top 20 Nhân viên xuất sắc tập đoàn", date: "2025", color: "text-purple-400 bg-purple-500/10 border-purple-500/22" },
      { icon: "👑", text: "Employee of the Year",             date: "2025",    color: "text-amber-300  bg-amber-400/10  border-amber-400/30" },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6 coffee-dots overflow-hidden">

      {/* Big decorative text */}
      <div className="absolute -right-8 top-24 font-hand text-[140px] text-amber-900/6 select-none pointer-events-none leading-none">
        Rikkei
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono text-amber-500 text-sm">04.</span>
          <span className="font-hand text-lg text-amber-400/70 tracking-wide">Experience</span>
          <div className="flex-1 h-px bg-amber-900/30" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-stone-100 mb-3"
        >
          Hành trình{" "}
          <span className="gradient-text">sự nghiệp</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-stone-500 mb-14 text-sm"
        >
          Từ ngày đầu gia nhập đến những giải thưởng liên tiếp — một hành trình tăng tốc đáng nhớ.
        </motion.p>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px timeline-line" />

          <div className="space-y-10">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative flex gap-8 pl-16"
              >
                {/* Dot */}
                <div className="absolute left-0 top-1 w-12 h-12 rounded-xl glass-card border border-amber-900/40 flex items-center justify-center">
                  <Coffee className="w-5 h-5 text-amber-400" />
                </div>

                <div className="flex-1 vintage-card p-6 hover:border-amber-500/40 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-stone-100 font-semibold text-lg">{job.role}</h3>
                      <p className="text-amber-400 text-sm font-medium">{job.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-stone-400 text-sm font-mono">{job.period}</p>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                        {job.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-stone-400 text-sm leading-relaxed mb-6">{job.description}</p>

                  {/* Milestones */}
                  <div className="space-y-2">
                    <p className="font-hand text-base text-amber-500/60 mb-3">Thành tích nổi bật ✨</p>
                    {job.milestones.map((m, mi) => (
                      <motion.div
                        key={mi}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: mi * 0.1 }}
                        className={`flex items-center justify-between rounded-xl px-4 py-2.5 border ${m.color}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-lg">{m.icon}</span>
                          <span className="text-sm font-medium">{m.text}</span>
                        </div>
                        <span className="text-xs font-mono opacity-65 flex-shrink-0">{m.date}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 vintage-card p-6 text-center"
        >
          <p className="font-hand text-2xl text-amber-200/55 leading-relaxed">
            &ldquo;Tuyển dụng không chỉ là tìm người đủ năng lực —<br />
            mà là kết nối đúng người với đúng cơ hội, vào đúng thời điểm.&rdquo;
          </p>
          <p className="text-amber-500/60 text-xs font-mono mt-3">— Hiệp Trương</p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <WaveDivider fill="#110B06" variant="gentle" />
      </div>
    </section>
  );
}
