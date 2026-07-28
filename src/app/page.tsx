import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Hero />
      <About />

      {/* Experience */}
      <section id="experience" className="py-24">
        <div className="container-content">
          <h2 className="text-2xl font-semibold text-fg mb-4">Experience</h2>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24">
        <div className="container-content">
          <h2 className="text-2xl font-semibold text-fg mb-4">Projects</h2>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24">
        <div className="container-content">
          <h2 className="text-2xl font-semibold text-fg mb-4">Skills</h2>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24">
        <div className="container-content">
          <h2 className="text-2xl font-semibold text-fg mb-4">Contact</h2>
        </div>
      </section>
    </>
  );
}