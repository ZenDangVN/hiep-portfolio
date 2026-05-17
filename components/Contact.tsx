"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

const socials = [
  { icon: GithubIcon,   label: "GitHub",   value: "github.com/hieptruong",    href: "https://github.com/hieptruong" },
  { icon: LinkedinIcon, label: "LinkedIn", value: "linkedin.com/in/hieptruong", href: "https://linkedin.com/in/hieptruong" },
  { icon: Mail,         label: "Email",    value: "hieptruong@rikkeisoft.com", href: "mailto:hieptruong@rikkeisoft.com" },
  { icon: MapPin,       label: "Location", value: "Ho Chi Minh City, Vietnam", href: "#" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `[Portfolio] Tin nhắn từ ${form.name}`,
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="warm-section py-28 px-6 relative overflow-hidden">

      {/* Hex grid overlay */}
      <div className="absolute inset-0 hex-bg opacity-75 pointer-events-none" />

      {/* Floating IT/cafe symbols */}
      <div className="absolute top-12 left-[12%] font-mono text-[11px] text-cyan-400/13 select-none pointer-events-none animate-float tracking-wider">
        ping hiep@rikkei
      </div>
      <div className="absolute top-[35%] left-[5%] font-mono text-[10px] text-green-400/11 select-none pointer-events-none animate-float-delay -rotate-3">
        {"<connect />"}
      </div>
      <div className="absolute bottom-28 right-[15%] font-mono text-[10px] text-amber-400/11 select-none pointer-events-none animate-float-delay2 rotate-3">
        reply_time: "24h"
      </div>

      {/* Neural nodes */}
      <div className="absolute top-24 right-[42%] pointer-events-none select-none">
        <div className="relative w-2.5 h-2.5">
          <div className="absolute inset-0 rounded-full bg-cyan-400/28 animate-float-node" />
          <div className="absolute inset-0 rounded-full border border-cyan-400/18 animate-ring-pulse" style={{ animationDelay: "1.2s" }} />
        </div>
      </div>

      {/* Decorative coffee rings */}
      <div className="absolute -top-8 right-16 w-40 h-40 rounded-full border-2 border-amber-900/10 pointer-events-none" />
      <div className="absolute -top-4 right-20 w-28 h-28 rounded-full border border-amber-900/8 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono text-amber-500 text-sm">05.</span>
          <span className="font-hand text-lg text-amber-400/70 tracking-wide">Contact</span>
          <div className="flex-1 h-px bg-amber-900/30" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-stone-100 mb-2"
        >
          Mình mời bạn{" "}
          <span className="gradient-text">1 ly cafe ☕</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-hand text-xl text-amber-200/55 mb-14"
        >
          Có project, có cơ hội, hay chỉ muốn tán gẫu — mình luôn sẵn sàng!
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center h-64 vintage-card rounded-2xl gap-4 text-center">
                <CheckCircle className="w-12 h-12 text-amber-400" />
                <p className="text-stone-100 font-semibold text-lg">Gửi thành công!</p>
                <p className="font-hand text-xl text-amber-200/60">Mình sẽ reply sớm nhé ☕</p>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { key: "name",  label: "Tên bạn",   placeholder: "Nguyễn Văn A",        type: "text" },
                    { key: "email", label: "Email",      placeholder: "ban@example.com",     type: "email" },
                  ].map(({ key, label, placeholder, type }) => (
                    <div key={key} className="flex flex-col gap-2">
                      <label className="text-xs font-mono text-stone-500 uppercase tracking-wider">{label}</label>
                      <input
                        required
                        type={type}
                        placeholder={placeholder}
                        value={form[key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                        className="bg-amber-950/20 border border-amber-900/30 rounded-xl px-4 py-3 text-stone-200 placeholder-stone-600 text-sm focus:outline-none focus:border-amber-500/50 focus:bg-amber-950/30 transition-all duration-200"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono text-stone-500 uppercase tracking-wider">Lời nhắn</label>
                  <textarea
                    required
                    rows={6}
                    placeholder="Kể cho mình nghe về dự án / cơ hội của bạn..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="bg-amber-950/20 border border-amber-900/30 rounded-xl px-4 py-3 text-stone-200 placeholder-stone-600 text-sm focus:outline-none focus:border-amber-500/50 focus:bg-amber-950/30 transition-all duration-200 resize-none"
                  />
                </div>

                <div className="flex flex-col gap-3 self-start">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-500 disabled:opacity-50 disabled:cursor-not-allowed text-stone-900 font-semibold transition-all duration-300 glow-amber"
                  >
                    {loading
                      ? <span className="w-4 h-4 border-2 border-stone-900/30 border-t-stone-900 rounded-full animate-spin" />
                      : <Send className="w-4 h-4" />}
                    {loading ? "Đang gửi..." : "Gửi tin nhắn ☕"}
                  </button>

                  {error && (
                    <p className="text-sm text-red-400/80 font-mono">
                      ✕ Gửi thất bại — thử lại hoặc nhắn mình qua LinkedIn nhé!
                    </p>
                  )}
                </div>
              </>
            )}
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="vintage-card rounded-2xl p-6">
              <p className="font-hand text-xl text-stone-400 leading-relaxed mb-6">
                Mình đang <span className="text-green-400 font-medium">mở cửa đón cơ hội mới</span> —
                dù là full-time, freelance, hay chỉ đơn giản là ngồi cafe tán gẫu về tech ☕
              </p>
              <div className="space-y-4">
                {socials.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-200 flex-shrink-0">
                      <Icon className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-xs text-stone-600 font-mono">{label}</p>
                      <p className="text-stone-300 text-sm group-hover:text-amber-300 transition-colors duration-200">{value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="vintage-card rounded-2xl p-5 flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              <p className="font-hand text-lg text-stone-400">
                Thường reply trong <span className="text-stone-200 font-semibold">24 giờ</span> — đủ thời gian pha thêm 1 ly cafe ☕
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
