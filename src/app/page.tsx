import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />

      {/* Contact */}
      <section id="contact" className="py-24">
        <div className="container-content">
          <h2 className="text-2xl font-semibold text-fg mb-4">Contact</h2>
        </div>
      </section>
    </>
  );
}