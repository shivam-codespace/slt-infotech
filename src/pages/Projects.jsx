import { useState } from "react";
import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import usePageMeta from "../hooks/usePageMeta";
import { PROJECTS } from "../data/projects";

const CATEGORIES = ["All", ...new Set(PROJECTS.map((p) => p.category))];

export default function Projects() {
  usePageMeta(
    "Projects",
    "Production platforms SLT Info Tech has designed, built, and shipped — across healthcare, AI, fintech, and Web3."
  );
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title={
          <>
            Production systems, <em>shipped</em> and running.
          </>
        }
        sub="A broader look at platforms we've taken from first sketch to production — what we built, the services involved, and what changed for the teams using them."
      />

      <section className="section projects-section">
        <div className="container">
          <div className="filter-tabs" role="group" aria-label="Filter by category">
            {CATEGORIES.map((c) => (
              <button
                type="button"
                key={c}
                className={filter === c ? "filter-tab active" : "filter-tab"}
                aria-pressed={filter === c}
                onClick={() => setFilter(c)}
              >
                {c}
                <span className="filter-count">
                  {c === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.category === c).length}
                </span>
              </button>
            ))}
          </div>

          <div className="work-grid">
            {shown.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 80}>
                <ProjectCard project={p} variant="detailed" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        heading={
          <>
            Have a project like <em>one of these</em>?
          </>
        }
        subtext="Tell us what you're building. We'll come back with a clear scope, a timeline, and the team who'd deliver it."
        buttonText="Start a Project"
      />
    </>
  );
}
