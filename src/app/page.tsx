export default function Home() {
  return (
    <>
      {/* Home */}
      <section id="home" className="min-h-screen flex items-center justify-center">
        <div className="container-content text-center">
          <p className="text-fg-dim font-mono text-sm mb-4">Hello, I'm</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-fg">
            Maira Arshad
          </h1>
          <p className="mt-4 text-lg text-fg-muted max-w-lg mx-auto">
            Backend & full-stack developer building with Next.js, Express, and PostgreSQL.
          </p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24">
        <div className="container-content">
          <h2 className="text-2xl font-semibold text-fg mb-4">About</h2>
        </div>
      </section>

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