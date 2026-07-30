import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Capabilities from "@/components/Capabilities";
import Skills from "@/components/Skills";
import GitHubActivity from "@/components/GitHubActivity";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Capabilities />
      <Skills />
      <GitHubActivity />
      <Contact />
    </>
  );
}
