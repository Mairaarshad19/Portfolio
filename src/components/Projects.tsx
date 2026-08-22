"use client";

import { projectsContent } from "@/data/portfolio-content";
import { ExternalLink, GitBranch } from "lucide-react";
import { useScrollReveal } from "@/lib/useScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import ProjectImage from "@/components/ProjectImage";

function ProjectCard({
  project,
}: {
  project: (typeof projectsContent)[number];
}) {
  const { ref, revealed } = useScrollReveal();
  const hasScreenshot = Boolean(project.screenshot);

  return (
    <div
      ref={ref}
      className={`card-lift border-2 border-accent/30 bg-bg-elevated rounded-2xl p-8 md:p-10 flex flex-col shadow-sm scroll-reveal ${revealed ? "revealed" : ""}`}
    >
      {/* Content — vertically centered when there's no image to balance the card */}
      <div
        className={`flex-1 flex flex-col ${
          hasScreenshot ? "" : "justify-center"
        }`}
      >
        {/* Header — centered */}
        <div className={`text-center ${hasScreenshot ? "mb-6" : "mb-8"}`}>
          <h3 className="text-2xl font-display font-bold text-fg">
            {project.name}
          </h3>
          <p className="mt-1 text-sm text-accent tracking-wide">
            {project.tagline}
          </p>
        </div>

        {/* Image — only when a screenshot exists. Uses the dual-layer
           ProjectImage component: blurred backdrop fills the frame,
           the real screenshot sits fully visible on top, nothing cropped. */}
        {hasScreenshot && (
          <div className="max-w-3xl mx-auto w-full">
            <ProjectImage screenshot={project.screenshot!} name={project.name} />
          </div>
        )}

        {/* Description */}
        <p
          className={`text-sm text-fg-muted leading-relaxed text-justify line-clamp-3 max-w-2xl mx-auto ${
            hasScreenshot ? "mb-6" : "mb-8"
          }`}
        >
          {project.description}
        </p>

        {/* Tech stack pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-6 max-w-2xl mx-auto">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium text-accent bg-bg-secondary border border-border rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Buttons — centered (or spacer for equal card heights) */}
      {project.links.github || project.links.live ? (
        <div className="flex items-center justify-center gap-3 mt-auto">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2 text-sm font-medium rounded-full bg-accent text-white hover:bg-accent-hover transition-all duration-200 shadow-sm"
            >
              <GitBranch size={14} />
              View Code
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2 text-sm font-medium rounded-full border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all duration-200"
            >
              <ExternalLink size={14} />
              Live Visit
            </a>
          )}
        </div>
      ) : (
        <div className="mt-auto" />
      )}
    </div>
  );
}

export default function Projects() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="projects" className="py-28">
      <div
        ref={ref}
        className={`container-content scroll-reveal ${revealed ? "revealed" : ""}`}
      >
        <SectionHeading>Projects</SectionHeading>

        {/* Single column — one project per row */}
        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {projectsContent.map((project) => (
            <div key={project.name} className="stagger-item">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}