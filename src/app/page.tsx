import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Capabilities from "@/components/Capabilities";

// Lazy-load the Contact section (below the fold) to trim initial bundle size
const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <div className="py-28" aria-hidden="true" />,
});

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Capabilities />
      <Contact />
    </>
  );
}