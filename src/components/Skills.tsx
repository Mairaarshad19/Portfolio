"use client";

import { useState } from "react";
import { skillsTabs } from "@/data/portfolio-content";
import { useScrollReveal } from "@/lib/useScrollReveal";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiSharp,
  SiNextdotjs,
  SiExpress,
  SiReact,
  SiTailwindcss,
  SiFastapi,
  SiFlask,
  SiFlutter,
  SiPostgresql,
  SiNeo4J,
  SiMysql,
  SiSqlite,
  SiDatabricks,
  SiGithub,
  SiDocker,
  SiVercel,
} from "react-icons/si";
import type { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Python: SiPython,
  "C++": SiCplusplus,
  "C#": SiSharp,
  "Next.js": SiNextdotjs,
  "Express.js": SiExpress,
  React: SiReact,
  "Tailwind CSS": SiTailwindcss,
  FastAPI: SiFastapi,
  Flask: SiFlask,
  Flutter: SiFlutter,
  PostgreSQL: SiPostgresql,
  Neo4j: SiNeo4J,
  MySQL: SiMysql,
  SQLite: SiSqlite,
  Qdrant: SiDatabricks,
  "Git/GitHub": SiGithub,
  Docker: SiDocker,
  Vercel: SiVercel,
};

const brandColors: Record<string, string> = {
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  Python: "#3776AB",
  "C++": "#00599C",
  "C#": "#239120",
  "Next.js": "#000000",
  "Express.js": "#000000",
  React: "#61DAFB",
  "Tailwind CSS": "#06B6D4",
  FastAPI: "#009688",
  Flask: "#000000",
  Flutter: "#02569B",
  PostgreSQL: "#4169E1",
  Neo4j: "#4581C3",
  MySQL: "#4479A1",
  SQLite: "#003B57",
  Qdrant: "#D32F2F",
  "Git/GitHub": "#181717",
  Docker: "#2496ED",
  Vercel: "#000000",
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="skills" className="py-28">
      <div
        ref={ref}
        className={`container-content scroll-reveal ${revealed ? "revealed" : ""}`}
      >
        <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-fg mb-6">
          Skills
        </h2>

        {/* Intro paragraph — rewritten */}
        <p className="text-sm sm:text-base text-fg-muted leading-relaxed max-w-2xl mb-10">
          I build backend systems and full-stack applications with TypeScript
          and Python, working across Express.js, FastAPI, and Next.js. My
          database experience spans relational, graph, and vector stores,
          including PostgreSQL, Neo4j, and Qdrant. I use Docker, Git, and
          CI/CD tooling to keep projects production-ready.
        </p>

        {/* Segmented control tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-bg-secondary border border-border rounded-full p-1">
            {skillsTabs.map((tab, i) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(i)}
                className={`relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeTab === i
                    ? "bg-accent text-white shadow-sm"
                    : "text-fg-muted hover:text-fg"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Icon card grid with crossfade */}
        <div className="relative">
          {skillsTabs.map((tab, i) => {
            const isActive = activeTab === i;
            const Icon = iconMap[tab.skills[0]];

            return (
              <div
                key={tab.id}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 transition-all duration-500 ease-in-out"
                style={{
                  opacity: isActive ? 1 : 0,
                  position: isActive ? "relative" : "absolute",
                  inset: 0,
                  pointerEvents: isActive ? "auto" : "none",
                  transform: `translateY(${isActive ? 0 : 8}px)`,
                }}
              >
                {tab.skills.map((skill) => {
                  const SkillIcon = iconMap[skill];
                  return (
                    <div
                      key={skill}
                      className="flex flex-col items-center justify-center gap-3 bg-bg-elevated border border-border rounded-xl p-5 shadow-sm hover:border-accent/40 hover:shadow-md transition-all duration-200"
                    >
                      <div className="w-10 h-10 flex items-center justify-center">
                        {SkillIcon ? (
                          <SkillIcon size={28} color={brandColors[skill] ?? "#666"} />
                        ) : null}
                      </div>
                      <span className="text-xs font-medium text-fg-muted text-center leading-tight">
                        {skill}
                      </span>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}