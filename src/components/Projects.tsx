"use client";

import { projectsContent } from "@/data/portfolio-content";
import { ExternalLink, GitBranch, Code, Briefcase, GraduationCap } from "lucide-react";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { useCountUp } from "@/lib/useCountUp";

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
        className={`card-lift relative border border-accent/40 bg-accent-subtle/40 rounded-xl p-6 sm:p-8 hover:border-accent/60 shadow-sm scroll-reveal ${revealed ? "revealed" : ""}`}
      >
        <span className="inline-flex items-center gap-1.5 mb-4 text-xs font-mono text-accent tracking-wide uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          Featured — Live Client Project
        </span>

        <h3 className="text-xl sm:text-2xl font-semibold text-fg">
          {project.name}
        </h3>
        <p className="mt-3 text-sm text-fg-muted leading-relaxed max-w-3xl">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-mono text-fg-muted bg-bg-secondary border border-border rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-3">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-full border border-accent/40 text-accent hover:bg-accent hover:text-white transition-all duration-200"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-full border border-border text-fg-muted hover:border-accent/40 hover:text-accent transition-all duration-200"
            >
              <GitBranch size={14} />
              Code
            </a>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`card-lift border border-border bg-bg-elevated rounded-xl p-6 hover:border-border-light flex flex-col shadow-sm scroll-reveal ${revealed ? "revealed" : ""}`}
    >
      <h3 className="text-lg font-semibold text-fg">{project.name}</h3>
      <p className="mt-2 text-sm text-fg-muted leading-relaxed flex-1">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 text-xs font-mono text-fg-muted bg-bg-secondary border border-border rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>

      {(project.links.github || project.links.live) && (
        <div className="mt-4 pt-4 border-t border-border flex items-center gap-3">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-full border border-accent/40 text-accent hover:bg-accent hover:text-white transition-all duration-200"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-full border border-border text-fg-muted hover:border-accent/40 hover:text-accent transition-all duration-200"
            >
              <GitBranch size={14} />
              Code
            </a>
          )}
        </div>
      )}
    </div>
  );
}

function StatItem({
  icon: Icon,
  label,
  count,
  suffix = "",
}: {
  icon: React.ElementType;
  label: string;
  count: number;
  suffix?: string;
}) {
  const { ref, display } = useCountUp({ end: count, suffix });

  return (
    <div className="flex flex-col items-center gap-1.5">
      <Icon size={20} className="text-accent" />
      <span
        ref={ref}
        className="text-2xl font-display font-bold text-fg tabular-nums"
      >
        {display}
      </span>
      <span className="text-xs text-fg-muted font-mono">{label}</span>
    </div>
  );
}

export default function Projects() {
  const { ref, revealed } = useScrollReveal();
  const featured = projectsContent.find((p) => p.featured);
  const others = projectsContent.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-28">
      <div
        ref={ref}
        className={`container-content scroll-reveal ${revealed ? "revealed" : ""}`}
      >
        <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-fg mb-12">
          Projects
        </h2>

        {/* Stats row — counts up on scroll into view */}
        <div className="grid grid-cols-3 gap-6 mb-12 pb-12 border-b border-border">
          <StatItem icon={Code} label="Projects Built" count={5} suffix="+" />
          <StatItem icon={Briefcase} label="Live Internships" count={2} />
          <StatItem icon={GraduationCap} label="Graduation" count={2028} />
        </div>

        <div className="stagger-container space-y-8">
          {featured && <ProjectCard project={featured} featured />}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {others.map((project) => (
              <div key={project.name} className="stagger-item">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}