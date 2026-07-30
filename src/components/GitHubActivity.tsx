"use client";

import { useState } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";

const GITHUB_USERNAME = "Mairaarshad19";

// github-readme-stats custom theme params matching our light theme:
// bg=FAF9F7 (--color-bg), text=1A1A1A (--color-fg), title=1D4ED8 (--color-accent),
// icon=1D4ED8, border=E2DDD6 (--color-border), hide_border=true for clean integration
const THEME_PARAMS =
  "&bg_color=FAF9F7&text_color=1A1A1A&title_color=1D4ED8&icon_color=1D4ED8&border_color=E2DDD6&hide_border=true";

function GitHubImage({
  src,
  alt,
  className = "w-full h-auto",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="flex items-center justify-center h-32 text-sm text-fg-dim font-mono">
        Unable to load GitHub stats. Try again later.
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setError(true)}
    />
  );
}

export default function GitHubActivity() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="github" className="py-28">
      <div
        ref={ref}
        className={`container-content scroll-reveal ${revealed ? "revealed" : ""}`}
      >
        <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-fg mb-12">
          GitHub Activity
        </h2>

        <div className="stagger-container space-y-6">
          {/* Stats row: repos, commits, prs, etc. */}
          <div className="stagger-item grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-lift bg-bg-elevated border border-border rounded-xl p-5 shadow-sm flex items-center justify-center">
              <GitHubImage
                src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&count_private=true&include_all_commits=true&rank_icon=percentile${THEME_PARAMS}`}
                alt="GitHub stats"
              />
            </div>
            <div className="card-lift bg-bg-elevated border border-border rounded-xl p-5 shadow-sm flex items-center justify-center">
              <GitHubImage
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&langs_count=8${THEME_PARAMS}`}
                alt="Top languages"
              />
            </div>
          </div>

          {/* Contribution graph */}
          <div className="stagger-item">
            <div className="card-lift bg-bg-elevated border border-border rounded-xl p-5 shadow-sm flex items-center justify-center">
              <GitHubImage
                src={`https://github-readme-activity-graph.vercel.app/graph?username=${GITHUB_USERNAME}&bg_color=FAF9F7&color=1D4ED8&line=1D4ED8&point=1D4ED8&area=true&area_color=1D4ED8&hide_border=true`}
                alt="Contribution graph"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}