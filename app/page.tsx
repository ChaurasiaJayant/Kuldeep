import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import GithubSection from "@/components/GithubSection";
import Contact from "@/components/Contact";
import BackToTop from "@/components/BackToTop";
import { AnimatedIntro } from "@/intro";
import CursorTrail from "./CursorTrail";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <CursorTrail />
      <AnimatedIntro />
      <Navbar />
      <Hero />
      {/* <FeaturedProjects /> */}
      <Skills />
      <About />
      <Achievements />
      {/* <GithubSection /> */}
      <Contact />
      <BackToTop />
    </main>
  );
}
