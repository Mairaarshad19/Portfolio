"use client";

import { useState } from "react";
import Image from "next/image";
import { projectsContent } from "@/data/portfolio-content";
import { ExternalLink, GitBranch, Code } from "lucide-react";
import { useScrollReveal } from "@/lib/useScrollReveal";
import SectionHeading from "@/components/SectionHeading";

function LandscapeImage({ screenshot, name }: { screenshot: string; name: string }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="relative w-full h-[300px] bg-bg-secondary rounded-xl border border-border mb-6 flex items-center justify-center overflow-hidden">
        <div className="flex flex-col items-center gap-1.5">
          <Code size={20} className="text-fg-muted/30" />
          <span className="text-xs text-fg-muted/30">{name}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[300px] bg-bg-secondary rounded-xl overflow-hidden border border-border mb-6 shadow-sm">
      <Image
        src={screenshot}
        alt={`${name} screenshot`}
        fill
        className="object-cover"
        onError={() => setError(true)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}

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
      className={`card-lift border-2 border-accent/30 bg-bg-elevated rounded-2xl p-8 flex flex-col shadow-sm scroll-reveal ${revealed ? "revealed" : ""}`}
    >
      {/* Content — vertically centered when there's no image to balance the card */}
      <div
        className={`flex-1 flex flex-col ${
          hasScreenshot ? "" : "justify-center"
        }`}
      >
        {/* Header — centered */}
        <div className={`text-center ${hasScreenshot ? "mb-5" : "mb-8"}`}>
          <h3 className="text-xl font-display font-bold text-fg">
            {project.name}
          </h3>
          <p className="mt-1 text-sm text-accent tracking-wide truncate">
            {project.tagline}
          </p>
        </div>

        {/* Image — only when a screenshot exists */}
        {hasScreenshot && (
          <LandscapeImage screenshot={project.screenshot!} name={project.name} />
        )}

        {/* Description */}
        <p
          className={`text-sm text-fg-muted leading-relaxed text-justify line-clamp-3 ${
            hasScreenshot ? "mb-6" : "mb-8 max-w-md mx-auto"
          }`}
        >
          {project.description}
        </p>

        {/* Tech stack pills — text-only, electric blue on white */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium text-[#0066FF] bg-white border border-blue-200/60 rounded-full"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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