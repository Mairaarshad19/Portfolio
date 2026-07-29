"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";

const GITHUB_USERNAME = "Mairaarshad19";

// github-readme-stats custom theme params matching our light theme:
// bg=FAF9F7 (--color-bg), text=1A1A1A (--color-fg), title=1D4ED8 (--color-accent),
// icon=1D4ED8, border=E2DDD6 (--color-border), hide_border=true for clean integration
const THEME_PARAMS =
  "&bg_color=FAF9F7&text_color=1A1A1A&title_color=1D4ED8&icon_color=1D4ED8&border_color=E2DDD6&hide_border=true";

export default function GitHubActivity() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="github" className="py-28">
      <div
        ref={ref}
        className={`container-content scroll-reveal ${revealed ? "revealed" : ""}`}
      >
        <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-fg mb-10">
          GitHub Activity
        </h2>

        <div className="space-y-4">
          {/* Stats row: repos, commits, prs, etc. */}
          <div className="flex flex-wrap justify-center gap-4">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&count_private=true&include_all_commits=true&rank_icon=percentile${THEME_PARAMS}`}
              alt="GitHub stats"
              className="max-w-full h-auto"
              loading="lazy"
            />
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&langs_count=8${THEME_PARAMS}`}
              alt="Top languages"
              className="max-w-full h-auto"
              loading="lazy"
            />
          </div>

          {/* Contribution graph */}
          <div className="flex justify-center">
            <img
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${GITHUB_USERNAME}&bg_color=FAF9F7&color=1D4ED8&line=1D4ED8&point=1D4ED8&area=true&area_color=1D4ED8&hide_border=true`}
              alt="Contribution graph"
              className="max-w-full h-auto rounded-xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}