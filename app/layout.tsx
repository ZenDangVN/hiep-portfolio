import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Caveat } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Hiệp Trương — Hôm nay cafe chưa?",
  description:
    "Talent Acquisition & Best Hunter tại Rikkei Japan. Và mình hay mời cafe lắm 😄",
  keywords: ["Hiep Truong", "Rikkei Japan", "Talent Acquisition", "Best Hunter", "Employee of the Year"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="vi"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${caveat.variable} scroll-smooth`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
