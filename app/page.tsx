import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RikkeiIntro from "@/components/RikkeiIntro";
import About from "@/components/About";
import JobOpenings from "@/components/JobOpenings";
import RecruitProcess from "@/components/RecruitProcess";
import WaveDivider from "@/components/WaveDivider";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* 01. Rikkei Japan intro */}
      <RikkeiIntro />

      {/* 02. About Me */}
      <About />

      {/* 03. Job openings */}
      <JobOpenings />

      {/* 04. Recruitment process */}
      <RecruitProcess />

      {/* Contact */}
      <WaveDivider fill="#110B06" variant="sharp" />
      <Contact />

      <Footer />
    </main>
  );
}
