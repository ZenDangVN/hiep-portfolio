import { Coffee, Mail } from "lucide-react";
import { LinkedinIcon, TiktokIcon, FacebookIcon } from "./SocialIcons";

const socials = [
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/hiep-truong-a8789b326/", label: "LinkedIn" },
  { icon: TiktokIcon,   href: "https://www.tiktok.com/@hieptt14",                  label: "TikTok" },
  { icon: FacebookIcon, href: "https://www.facebook.com/hiep.truong.12935",         label: "Facebook" },
  { icon: Mail,         href: "mailto:hieptt@rikkeisoft.com",                       label: "Email" },
];

const links = [
  { href: "#rikkei",  label: "Rikkei Japan" },
  { href: "#about",   label: "About Me" },
  { href: "#jobs",    label: "Jobs" },
  { href: "#process", label: "Quy trình" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer
      className="border-t py-12 px-6 relative"
      style={{ backgroundColor: "#0A0703", borderColor: "rgba(120,60,10,0.25)" }}
    >
      {/* Subtle grain top border glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-amber-700/40 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Brand */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-amber-500/12 border border-amber-500/25 flex items-center justify-center group-hover:bg-amber-500/22 transition-colors">
              <Coffee className="w-4 h-4 text-amber-400" />
            </div>
            <span className="font-hand text-base text-amber-300/75 group-hover:text-amber-300 transition-colors tracking-wide">
              Hiệp Trương ☕
            </span>
          </a>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-stone-500 hover:text-amber-300 transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg border border-stone-800 flex items-center justify-center text-stone-500 hover:text-amber-300 hover:border-amber-500/35 transition-all duration-200"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div
          className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-stone-600 font-mono"
          style={{ borderTop: "1px solid rgba(120,60,10,0.2)" }}
        >
          <p>© {new Date().getFullYear()} Hiệp Trương. All rights reserved.</p>
          <p className="font-hand text-sm text-stone-500">Made with ☕ & Next.js · Tailwind · Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
