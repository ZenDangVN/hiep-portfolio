"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Mail } from "lucide-react";
import { LinkedinIcon, TiktokIcon, FacebookIcon } from "./SocialIcons";

const socials = [
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/hiep-truong-a8789b326/", label: "LinkedIn" },
  { icon: TiktokIcon,   href: "https://www.tiktok.com/@hieptt14",                  label: "TikTok" },
  { icon: FacebookIcon, href: "https://www.facebook.com/hiep.truong.12935",         label: "Facebook" },
  { icon: Mail,         href: "mailto:hieptt@rikkeisoft.com",                       label: "Email" },
];

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">

      {/* ── Organic warm blobs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/4 -left-24 w-[480px] h-[480px] bg-amber-700/10 animate-blob"
          style={{ filter: "blur(72px)" }}
        />
        <div
          className="absolute bottom-1/4 -right-20 w-[420px] h-[420px] bg-orange-700/8 animate-blob-slow"
          style={{ filter: "blur(80px)" }}
        />
        <div
          className="absolute top-2/3 left-1/3 w-[360px] h-[360px] bg-yellow-800/6 animate-blob-slower"
          style={{ filter: "blur(90px)" }}
        />
      </div>

      {/* ── Scattered coffee bean dots (decorative) ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        {["top-16 left-12", "top-32 right-24", "bottom-40 left-20", "bottom-20 right-16", "top-1/2 left-8"].map((pos, i) => (
          <div
            key={i}
            className={`absolute ${pos} text-amber-900/40 text-xl`}
            style={{ animationDelay: `${i * 0.7}s` }}
          >
            ◉
          </div>
        ))}
      </div>

      {/* ── IT / AI layer ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">

        {/* Neural network SVG — top-right */}
        <svg className="absolute top-0 right-0 w-[520px] h-[420px]" viewBox="0 0 520 420" fill="none">
          {/* Edges */}
          <line x1="390" y1="70"  x2="460" y2="155" stroke="#06B6D4" strokeWidth="0.7" strokeDasharray="4 7" opacity="0.18"/>
          <line x1="390" y1="70"  x2="310" y2="195" stroke="#F59E0B" strokeWidth="0.6" strokeDasharray="3 6" opacity="0.14"/>
          <line x1="460" y1="155" x2="430" y2="270" stroke="#06B6D4" strokeWidth="0.7" strokeDasharray="4 7" opacity="0.16"/>
          <line x1="310" y1="195" x2="430" y2="270" stroke="#10B981" strokeWidth="0.6" strokeDasharray="3 6" opacity="0.13"/>
          <line x1="490" y1="95"  x2="460" y2="155" stroke="#F59E0B" strokeWidth="0.5" strokeDasharray="4 8" opacity="0.12"/>
          <line x1="355" y1="330" x2="430" y2="270" stroke="#06B6D4" strokeWidth="0.6" strokeDasharray="3 6" opacity="0.15"/>
          <line x1="490" y1="95"  x2="390" y2="70"  stroke="#06B6D4" strokeWidth="0.5" strokeDasharray="5 8" opacity="0.10"/>
          <line x1="355" y1="330" x2="310" y2="195" stroke="#F59E0B" strokeWidth="0.5" strokeDasharray="4 7" opacity="0.10"/>
          {/* Nodes */}
          <circle cx="390" cy="70"  r="3.5" fill="#06B6D4" opacity="0.35"/>
          <circle cx="460" cy="155" r="3"   fill="#F59E0B" opacity="0.30"/>
          <circle cx="310" cy="195" r="4.5" fill="#06B6D4" opacity="0.28"/>
          <circle cx="430" cy="270" r="3"   fill="#10B981" opacity="0.30"/>
          <circle cx="490" cy="95"  r="2.5" fill="#F59E0B" opacity="0.25"/>
          <circle cx="355" cy="330" r="4"   fill="#06B6D4" opacity="0.28"/>
          {/* Outer rings */}
          <circle cx="390" cy="70"  r="8"  stroke="#06B6D4" strokeWidth="0.6" opacity="0.12"/>
          <circle cx="310" cy="195" r="10" stroke="#06B6D4" strokeWidth="0.6" opacity="0.10"/>
          <circle cx="355" cy="330" r="9"  stroke="#10B981" strokeWidth="0.6" opacity="0.10"/>
        </svg>

        {/* Neural network SVG — bottom-left (mirror) */}
        <svg className="absolute bottom-0 left-0 w-[320px] h-[280px]" viewBox="0 0 320 280" fill="none">
          <line x1="40"  y1="220" x2="110" y2="160" stroke="#F59E0B" strokeWidth="0.6" strokeDasharray="3 6" opacity="0.12"/>
          <line x1="110" y1="160" x2="185" y2="210" stroke="#06B6D4" strokeWidth="0.5" strokeDasharray="4 7" opacity="0.12"/>
          <line x1="60"  y1="130" x2="110" y2="160" stroke="#10B981" strokeWidth="0.5" strokeDasharray="3 6" opacity="0.11"/>
          <circle cx="40"  cy="220" r="3"   fill="#F59E0B" opacity="0.25"/>
          <circle cx="110" cy="160" r="4"   fill="#06B6D4" opacity="0.28"/>
          <circle cx="185" cy="210" r="2.5" fill="#10B981" opacity="0.22"/>
          <circle cx="60"  cy="130" r="3"   fill="#06B6D4" opacity="0.22"/>
        </svg>

        {/* Floating binary / code fragments */}
        <div className="absolute top-[12%] right-[22%] font-mono text-[11px] text-cyan-400/18 animate-float tracking-widest">
          01001010
        </div>
        <div className="absolute top-[58%] right-[7%] font-mono text-xs text-amber-500/15 animate-float-delay rotate-6">
          {"<AI />"}
        </div>
        <div className="absolute top-[78%] left-[5%] font-mono text-[11px] text-green-400/15 animate-float-delay2">
          model.fit()
        </div>
        <div className="absolute top-[22%] left-[3%] font-mono text-[10px] text-cyan-400/12 animate-float">
          11001101
        </div>
        <div className="absolute top-[40%] right-[3%] font-mono text-[10px] text-amber-400/12 animate-float-delay2 -rotate-6">
          {"{ recruit }"}
        </div>
        <div className="absolute bottom-[18%] right-[26%] font-mono text-[10px] text-green-400/10 animate-float">
          npm i talent
        </div>

        {/* Horizontal scan line */}
        <div
          className="absolute left-0 right-0 h-px animate-scan"
          style={{ background: "linear-gradient(90deg, transparent 0%, rgba(6,182,212,0.12) 30%, rgba(245,158,11,0.10) 60%, transparent 100%)" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left — text */}
          <div className="flex-1 text-center lg:text-left">

            <motion.div
              {...fadeUp(0)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/22 text-amber-300 text-sm mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Kéo ghế ngồi chơi đi bạn ơi~
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="text-4xl lg:text-6xl font-bold mb-4 leading-tight tracking-tight"
            >
              Hôm nay bạn{" "}
              <span className="gradient-text">cafe chưa?</span>
            </motion.h1>

            {/* Handwritten subtitle */}
            <motion.p
              {...fadeUp(0.18)}
              className="font-hand text-2xl lg:text-3xl text-amber-200/70 mb-4"
            >
              Nếu chưa mình mời bạn 1 ly nha ☕
            </motion.p>

            <motion.div
              {...fadeUp(0.22)}
              className="flex items-center gap-3 justify-center lg:justify-start mb-6"
            >
              <div className="h-px w-8 bg-amber-500/40" />
              <p className="text-stone-200 font-bold text-xl tracking-wide">Hiệp Trương</p>
              <div className="h-px w-8 bg-amber-500/40" />
            </motion.div>

            <motion.div
              {...fadeUp(0.3)}
              className="text-lg text-stone-400 mb-8 h-8 flex items-center justify-center lg:justify-start gap-2"
            >
              <span className="font-mono text-amber-500/50">&gt;_</span>
              <TypeAnimation
                sequence={[
                  "Talent Acquisition", 2200,
                  "Best Hunter 🏆",     2200,
                  "Employee of the Year 👑", 2200,
                  "Coffee Lover ☕",     2200,
                ]}
                wrapper="span"
                speed={55}
                repeat={Infinity}
                className="text-amber-300 font-medium"
              />
            </motion.div>

            <motion.div
              {...fadeUp(0.4)}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
            >
              <a
                href="#jobs"
                className="px-8 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-900 font-semibold transition-all duration-300 glow-amber"
              >
                Xem vị trí tuyển dụng
              </a>
              <a
                href="#contact"
                className="px-8 py-3 rounded-xl border border-stone-700 text-stone-300 hover:border-amber-500/50 hover:text-amber-300 font-semibold transition-all duration-300"
              >
                Liên hệ mình
              </a>
            </motion.div>

            <motion.div
              {...fadeUp(0.5)}
              className="flex gap-3 justify-center lg:justify-start"
            >
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg border border-stone-700/80 flex items-center justify-center text-stone-400 hover:text-amber-300 hover:border-amber-500/45 hover:bg-amber-500/8 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — photo collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
            className="flex-shrink-0 lg:flex-1 flex justify-center"
          >
            <div className="relative w-72 lg:w-[360px] h-[500px] lg:h-[540px]">
              {/* Warm glow behind */}
              <div
                className="absolute inset-8 rounded-3xl animate-blob-slow"
                style={{ background: "radial-gradient(ellipse, rgba(180,83,9,0.18) 0%, transparent 70%)", filter: "blur(24px)" }}
              />

              {/* Photo 1 */}
              <motion.div
                initial={{ opacity: 0, rotate: -6, y: 30 }}
                animate={{ opacity: 1, rotate: -5, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                whileHover={{ rotate: -2, scale: 1.03, zIndex: 50 }}
                className="absolute top-0 left-0 w-52 h-72 rounded-2xl overflow-hidden shadow-2xl border-2 z-20 cursor-pointer"
                style={{ borderColor: "rgba(146,64,14,0.5)", transformOrigin: "bottom left" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${BASE}/images/photo1.jpg`} alt="Hiệp Trương" className="w-full h-full object-cover object-top" />
              </motion.div>

              {/* Photo 2 */}
              <motion.div
                initial={{ opacity: 0, rotate: 6, y: 30 }}
                animate={{ opacity: 1, rotate: 6, y: 0 }}
                transition={{ duration: 0.8, delay: 0.65 }}
                whileHover={{ rotate: 2, scale: 1.03, zIndex: 50 }}
                className="absolute top-16 right-0 w-44 h-60 rounded-2xl overflow-hidden shadow-2xl border-2 z-10 cursor-pointer"
                style={{ borderColor: "rgba(146,64,14,0.5)", transformOrigin: "bottom right" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${BASE}/images/photo2.jpg`} alt="Hiệp Trương tại Tokyo" className="w-full h-full object-cover object-top" />
              </motion.div>

              {/* Award */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ scale: 1.04, zIndex: 50 }}
                className="absolute bottom-0 left-6 right-6 h-52 rounded-2xl overflow-hidden shadow-2xl border-2 z-30 cursor-pointer"
                style={{ borderColor: "rgba(245,158,11,0.4)" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${BASE}/images/award.jpg`} alt="Best Hunter — Rikkei" className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-950/40 to-transparent pointer-events-none" />
              </motion.div>

              {/* Steam above coffee emoji */}
              <div className="absolute top-0 right-4 z-40 flex flex-col items-center gap-0">
                <div className="flex gap-1 mb-0.5">
                  <div className="w-[3px] h-5 bg-amber-300/35 rounded-full animate-steam" />
                  <div className="w-[3px] h-6 bg-amber-300/30 rounded-full animate-steam-2" />
                  <div className="w-[3px] h-4 bg-amber-300/35 rounded-full animate-steam-3" />
                </div>
                <motion.div
                  animate={{ y: [0, -5, 0], rotate: [0, 6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="text-3xl drop-shadow-lg select-none"
                >
                  ☕
                </motion.div>
              </div>

              {/* Best Hunter badge */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute z-40"
                style={{ bottom: "220px", right: "-8px" }}
              >
                <div className="glass-card rounded-xl px-3 py-1.5 text-xs font-mono text-amber-300 flex items-center gap-1.5 shadow-lg">
                  🏆 Best Hunter
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
