"use client";
import { motion } from "framer-motion";
import { MessageCircle, UserCheck, FileText, PartyPopper } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: MessageCircle,
    label: "Trao đổi cùng HR",
    japanese: "HR面談",
    desc: "Kết nối với mình qua LinkedIn, Email hoặc nhắn tin trực tiếp. Mình sẽ lắng nghe mục tiêu, nguyện vọng và tư vấn vị trí phù hợp nhất cho bạn.",
    tip: "☕ Cứ nhắn thoải mái — mình hay reply nhanh lắm!",
    color: "text-amber-400 bg-amber-500/10 border-amber-500/25",
    lineColor: "from-amber-500/40 to-amber-500/20",
  },
  {
    num: "02",
    icon: UserCheck,
    label: "Phỏng vấn",
    japanese: "面接",
    desc: "Phỏng vấn kỹ thuật và/hoặc phỏng vấn văn hóa với team Rikkei Japan. Mình sẽ chuẩn bị kỹ cho bạn về format, câu hỏi thường gặp và tips vượt qua.",
    tip: "📋 Mình prep kỹ cho bạn trước khi vào phòng phỏng vấn.",
    color: "text-blue-400 bg-blue-500/10 border-blue-500/25",
    lineColor: "from-blue-500/40 to-amber-500/20",
  },
  {
    num: "03",
    icon: FileText,
    label: "Offer",
    japanese: "内定",
    desc: "Nhận offer letter với mức lương, phúc lợi và ngày bắt đầu cụ thể. Mình hỗ trợ bạn negotiate để đảm bảo điều kiện tốt nhất.",
    tip: "💼 Thương lượng lương? Mình là người đứng về phía bạn!",
    color: "text-green-400 bg-green-500/10 border-green-500/25",
    lineColor: "from-green-500/40 to-amber-500/20",
  },
  {
    num: "04",
    icon: PartyPopper,
    label: "Nyusha — Gia nhập",
    japanese: "入社",
    desc: "Chào mừng bạn trở thành thành viên Rikkei Japan! Onboarding đầy đủ, mentor tận tình và hành trình mới bắt đầu cùng 1 ly cafe ☕",
    tip: "🎉 Welcome to the family — Rikkei Japan chào đón bạn!",
    color: "text-amber-300 bg-amber-400/10 border-amber-400/30",
    lineColor: "from-amber-400/40 to-transparent",
  },
];

export default function RecruitProcess() {
  return (
    <section id="process" className="warm-section py-28 px-6 relative overflow-hidden">

      {/* Terminal dots overlay */}
      <div className="absolute inset-0 terminal-dots opacity-75 pointer-events-none" />

      {/* Circuit grid subtle overlay */}
      <div className="absolute inset-0 circuit-bg opacity-40 pointer-events-none" />

      {/* Ambient neural SVG background */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none select-none" preserveAspectRatio="xMidYMid slice">
        <line x1="10%"  y1="20%"  x2="30%"  y2="45%"  stroke="#06B6D4" strokeWidth="0.7" strokeDasharray="5 9" opacity="0.08"/>
        <line x1="30%"  y1="45%"  x2="55%"  y2="30%"  stroke="#F59E0B" strokeWidth="0.6" strokeDasharray="4 8" opacity="0.07"/>
        <line x1="55%"  y1="30%"  x2="75%"  y2="60%"  stroke="#10B981" strokeWidth="0.7" strokeDasharray="5 9" opacity="0.08"/>
        <line x1="75%"  y1="60%"  x2="90%"  y2="35%"  stroke="#06B6D4" strokeWidth="0.6" strokeDasharray="4 8" opacity="0.07"/>
        <line x1="20%"  y1="70%"  x2="45%"  y2="80%"  stroke="#F59E0B" strokeWidth="0.5" strokeDasharray="3 7" opacity="0.06"/>
        <line x1="45%"  y1="80%"  x2="65%"  y2="75%"  stroke="#06B6D4" strokeWidth="0.5" strokeDasharray="3 7" opacity="0.06"/>
        <circle cx="10%"  cy="20%"  r="3.5" fill="#06B6D4" opacity="0.12"/>
        <circle cx="30%"  cy="45%"  r="4"   fill="#F59E0B" opacity="0.12"/>
        <circle cx="55%"  cy="30%"  r="3"   fill="#10B981" opacity="0.11"/>
        <circle cx="75%"  cy="60%"  r="4"   fill="#06B6D4" opacity="0.12"/>
        <circle cx="90%"  cy="35%"  r="3"   fill="#F59E0B" opacity="0.10"/>
        <circle cx="20%"  cy="70%"  r="2.5" fill="#10B981" opacity="0.10"/>
        <circle cx="65%"  cy="75%"  r="3"   fill="#06B6D4" opacity="0.10"/>
      </svg>

      {/* Floating process labels */}
      <div className="absolute top-14 left-[18%] font-mono text-[10px] text-cyan-400/12 select-none pointer-events-none animate-float tracking-wider">
        HR.connect()
      </div>
      <div className="absolute bottom-20 right-[20%] font-mono text-[10px] text-green-400/12 select-none pointer-events-none animate-float-delay">
        offer.sign()
      </div>
      <div className="absolute top-[45%] right-[6%] font-mono text-[10px] text-amber-400/10 select-none pointer-events-none animate-float-delay2 rotate-6">
        入社.start()
      </div>

      {/* Decorative rings */}
      <div className="absolute top-10 -right-8 w-56 h-56 rounded-full border border-amber-900/8 pointer-events-none" />
      <div className="absolute top-16 -right-4 w-40 h-40 rounded-full border border-amber-900/6 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono text-amber-500 text-sm">04.</span>
          <span className="font-hand text-lg text-amber-400/70 tracking-wide">Quy trình tuyển dụng</span>
          <div className="flex-1 h-px bg-amber-900/30" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-stone-100 mb-3"
        >
          Từ cafe đến{" "}
          <span className="gradient-text">Rikkei Japan</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-stone-500 mb-16 text-sm"
        >
          Quy trình đơn giản, minh bạch — mình đồng hành cùng bạn từng bước ☕
        </motion.p>

        {/* Steps */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[22px] top-12 bottom-12 w-px bg-gradient-to-b from-amber-500/40 via-amber-500/20 to-transparent md:hidden" />

          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-4 md:gap-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.12 }}
                  className="relative flex gap-5 md:flex-col md:gap-4 md:items-center md:text-center"
                >
                  {/* Connector line (desktop) */}
                  {i < steps.length - 1 && (
                    <div className={`hidden md:block absolute top-7 left-[calc(50%+28px)] right-[-50%] h-px bg-gradient-to-r ${step.lineColor}`} />
                  )}

                  {/* Icon circle */}
                  <div className={`relative z-10 w-11 h-11 rounded-full border flex items-center justify-center flex-shrink-0 ${step.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex-1 md:flex-none">
                    <div className="flex items-baseline gap-2 mb-1 md:justify-center">
                      <span className="font-mono text-xs text-stone-600">{step.num}</span>
                      <h3 className="text-stone-100 font-semibold text-sm">{step.label}</h3>
                    </div>
                    <p className="text-xs font-mono text-amber-500/50 mb-2 md:text-center">{step.japanese}</p>
                    <p className="text-stone-400 text-sm leading-relaxed mb-3">{step.desc}</p>
                    <div className="vintage-card rounded-xl px-3 py-2 text-xs font-hand text-amber-200/60">
                      {step.tip}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 vintage-card rounded-2xl p-8 text-center"
        >
          <p className="font-hand text-2xl text-amber-200/60 mb-2">
            Sẵn sàng bắt đầu hành trình chưa? ☕
          </p>
          <p className="text-stone-500 text-sm mb-6">
            Chỉ cần 1 tin nhắn — mình sẽ lo phần còn lại.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-900 font-semibold text-sm transition-all duration-300 glow-amber"
          >
            Nhắn mình ngay ☕
          </a>
        </motion.div>
      </div>
    </section>
  );
}
