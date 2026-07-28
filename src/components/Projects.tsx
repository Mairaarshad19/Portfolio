"use client";

import { projectsContent } from "@/data/portfolio-content";
import { ExternalLink, GitBranch } from "lucide-react";
import { useScrollReveal } from "@/lib/useScrollReveal";

function ProjectCard({
  project,
  featured,
}: {
  project: (typeof projectsContent)[number];
  featured?: boolean;
}) {
  const { ref, revealed } = useScrollReveal();

  if (featured) {
    return (
      <div
        ref={ref}
        className={`relative border border-accent/40 bg-accent/[0.03] rounded-xl p-6 sm:p-8 hover:border-accent/60 transition-colors scroll-reveal ${revealed ? "revealed" : ""}`}
      >
        <span className="inline-flex items-center gap-1.5 mb-4 text-xs font-mono text-accent tracking-wide uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          Featured — Live Client Project
        </span>

        <h3 className="text-xl sm:text-2xl font-semibold text-fg">
          {project.name}
        </h3>
        <p className="mt-3 text-sm text-fg-dim leading-relaxed max-w-3xl">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-mono text-fg-muted bg-bg-elevated border border-border rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-4">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
            >
              <ExternalLink size={16} />
              Live Site
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-fg-muted hover:text-accent transition-colors"
            >
              <GitBranch size={16} />
              Source
            </a>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`border border-border bg-bg-elevated rounded-xl p-6 hover:border-border-light transition-colors flex flex-col scroll-reveal ${revealed ? "revealed" : ""}`}
    >
      <h3 className="text-lg font-semibold text-fg">{project.name}</h3>
      <p className="mt-2 text-sm text-fg-dim leading-relaxed flex-1">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 text-xs font-mono text-fg-muted bg-bg border border-border rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>

      {(project.links.github || project.links.live) && (
        <div className="mt-4 pt-4 border-t border-border flex items-center gap-4">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
            >
              <ExternalLink size={14} />
              Live
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-fg-muted hover:text-accent transition-colors"
            >
              <GitBranch size={14} />
              Source
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const { ref, revealed } = useScrollReveal();
  const featured = projectsContent.find((p) => p.featured);
  const others = projectsContent.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24">
      <div
        ref={ref}
        className={`container-content scroll-reveal ${revealed ? "revealed" : ""}`}
      >
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-fg mb-12">
          Projects
        </h2>

        <div className="space-y-8">
          {featured && <ProjectCard project={featured} featured />}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {others.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}