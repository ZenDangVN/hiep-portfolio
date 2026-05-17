"use client";
import { motion } from "framer-motion";
import { Briefcase, Code2, Globe, Brain, Database, Settings } from "lucide-react";
import WaveDivider from "./WaveDivider";

type Job = {
  title: string;
  code: string;
  icon: React.ElementType;
  level: string;
  salary: string;
  tags: string[];
  desc: string;
  accent: string;
  hot?: boolean;
};

const jobs: Job[] = [
  {
    title: "BrSE (Bridge System Engineer)",
    code: "RJ-001",
    icon: Globe,
    level: "Middle / Senior",
    salary: "Thương lượng",
    tags: ["Japanese N3+", "System Design", "Communication", "IT Background"],
    desc: "Làm cầu nối kỹ thuật giữa khách hàng Nhật Bản và team dev Việt Nam. Yêu cầu tiếng Nhật giao tiếp tốt, hiểu biết kỹ thuật IT vững, kỹ năng quản lý dự án.",
    accent: "from-amber-500/20 to-orange-500/15",
    hot: true,
  },
  {
    title: "Development Manager (DM)",
    code: "RJ-002",
    icon: Settings,
    level: "Senior / Lead",
    salary: "Cạnh tranh",
    tags: ["Leadership", "Agile/Scrum", "Technical Review", "Japanese N4+"],
    desc: "Quản lý team phát triển phần mềm, lên kế hoạch sprint, review code, báo cáo tiến độ với khách hàng Nhật. Cần kinh nghiệm lead team tối thiểu 2 năm.",
    accent: "from-purple-500/20 to-amber-500/15",
    hot: true,
  },
  {
    title: "AI / ML Engineer",
    code: "RJ-003",
    icon: Brain,
    level: "Middle / Senior",
    salary: "Hấp dẫn",
    tags: ["Python", "TensorFlow / PyTorch", "LLM", "RAG", "MLOps"],
    desc: "Phát triển và triển khai các giải pháp AI/ML cho đối tác Nhật Bản. Làm việc với LLM, Computer Vision, xây dựng pipeline dữ liệu và model deployment.",
    accent: "from-blue-500/20 to-amber-400/15",
    hot: true,
  },
  {
    title: "Backend Developer",
    code: "RJ-004",
    icon: Database,
    level: "Junior / Middle",
    salary: "Tốt",
    tags: ["Java / .NET / Go", "REST API", "Microservices", "Docker"],
    desc: "Xây dựng API và hệ thống backend hiệu suất cao cho các ứng dụng enterprise của khách hàng Nhật. Làm việc theo Agile, code review chặt chẽ.",
    accent: "from-green-500/18 to-amber-500/12",
  },
  {
    title: "Frontend Developer",
    code: "RJ-005",
    icon: Code2,
    level: "Junior / Middle",
    salary: "Tốt",
    tags: ["React / Vue / Angular", "TypeScript", "Responsive UI", "Testing"],
    desc: "Phát triển giao diện web hiện đại cho sản phẩm Nhật Bản. Phối hợp chặt chẽ với BrSE và Design team để deliver UI/UX chất lượng cao.",
    accent: "from-cyan-500/18 to-amber-400/12",
  },
  {
    title: "Mobile Developer (iOS/Android)",
    code: "RJ-006",
    icon: Briefcase,
    level: "Middle / Senior",
    salary: "Cạnh tranh",
    tags: ["Swift / Kotlin", "React Native / Flutter", "App Store", "CI/CD"],
    desc: "Phát triển ứng dụng mobile cross-platform hoặc native cho thị trường Nhật Bản. Kinh nghiệm publish app, optimize performance và UX tốt.",
    accent: "from-orange-500/18 to-amber-300/12",
  },
];

export default function JobOpenings() {
  return (
    <div className="relative">
      <section id="jobs" className="py-28 px-6 coffee-dots relative overflow-hidden">

        {/* Decorative */}
        {/* Circuit grid overlay on top of coffee-dots */}
        <div className="absolute inset-0 circuit-bg opacity-70 pointer-events-none" />

        {/* Floating code job labels */}
        <div className="absolute top-14 left-[15%] font-mono text-[11px] text-cyan-400/14 select-none pointer-events-none animate-float tracking-wider">
          {"<BrSE />"}
        </div>
        <div className="absolute top-28 right-[18%] font-mono text-[11px] text-green-400/13 select-none pointer-events-none animate-float-delay rotate-3">
          AI.train(data)
        </div>
        <div className="absolute bottom-24 left-[30%] font-mono text-[10px] text-amber-400/12 select-none pointer-events-none animate-float-delay2 -rotate-2">
          git push origin main
        </div>
        <div className="absolute bottom-16 right-[8%] font-mono text-[10px] text-cyan-400/11 select-none pointer-events-none animate-float tracking-wider">
          {"{ DM: true }"}
        </div>

        {/* Neural nodes */}
        <div className="absolute top-32 left-[55%] pointer-events-none select-none">
          <div className="relative w-2.5 h-2.5">
            <div className="absolute inset-0 rounded-full bg-cyan-400/30 animate-float-node" />
            <div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-ring-pulse" />
          </div>
        </div>
        <div className="absolute bottom-36 left-[10%] pointer-events-none select-none">
          <div className="relative w-2 h-2">
            <div className="absolute inset-0 rounded-full bg-amber-400/25 animate-float-node" style={{ animationDelay: "2s" }} />
          </div>
        </div>

        <div className="absolute -right-8 top-24 font-hand text-[140px] text-amber-900/5 select-none pointer-events-none leading-none">
          Jobs
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="font-mono text-amber-500 text-sm">03.</span>
            <span className="font-hand text-lg text-amber-400/70 tracking-wide">Vị trí tuyển dụng</span>
            <div className="flex-1 h-px bg-amber-900/30" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-stone-100 mb-3"
          >
            Cơ hội đang{" "}
            <span className="gradient-text">chờ bạn ☕</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-stone-500 mb-14 max-w-xl text-sm"
          >
            Rikkei Japan đang tìm kiếm những tài năng IT để chinh phục thị trường Nhật Bản cùng nhau.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job, i) => {
              const Icon = job.icon;
              return (
                <motion.div
                  key={job.code}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.09 }}
                  whileHover={{ y: -5 }}
                  className="group relative vintage-card rounded-2xl p-6 flex flex-col gap-4 hover:border-amber-500/45 transition-all duration-300"
                >
                  {job.hot && (
                    <span className="absolute top-4 right-4 text-xs font-hand px-2.5 py-0.5 rounded-full bg-red-500/15 text-red-300 border border-red-500/25">
                      🔥 Hot
                    </span>
                  )}

                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${job.accent} flex items-center justify-center border border-amber-900/20`}>
                    <Icon className="w-6 h-6 text-amber-300/80" />
                  </div>

                  <div className="flex-1">
                    <p className="text-xs font-mono text-stone-600 mb-1">{job.code}</p>
                    <h3 className="text-stone-100 font-semibold text-base mb-1 group-hover:text-amber-300 transition-colors duration-200 leading-snug">
                      {job.title}
                    </h3>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs text-amber-400/80 font-mono">{job.level}</span>
                      <span className="w-1 h-1 rounded-full bg-stone-700" />
                      <span className="text-xs text-green-400/80 font-mono">{job.salary}</span>
                    </div>
                    <p className="text-stone-400 text-sm leading-relaxed">{job.desc}</p>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2 py-0.5 rounded-md bg-amber-900/20 text-stone-400 border border-amber-900/25"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="mt-1 w-full text-center py-2.5 rounded-xl border border-amber-500/30 text-amber-300 text-sm hover:bg-amber-500/10 transition-all duration-200"
                  >
                    Ứng tuyển ngay ☕
                  </a>
                </motion.div>
              );
            })}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-10 font-hand text-lg text-stone-500"
          >
            Không thấy vị trí phù hợp? Cứ nhắn mình — mình luôn sẵn sàng tư vấn ☕
          </motion.p>
        </div>
      </section>

      <WaveDivider fill="#110B06" variant="sharp" />
    </div>
  );
}
