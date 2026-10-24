import { Link } from "react-router-dom";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import ProjectArt from "./ProjectArt";

function ProjectImage({ project: p }) {
  return (
    <div className="work-image" style={{ background: p.bg, color: p.fg }}>
      <ProjectArt category={p.category} color={p.fg} />
      <div className="work-image-top">
        <span className="work-logo-row">
          <span className="work-logo-badge">{p.logo}</span>
          {p.name}
        </span>
        <span className="work-tag-onimage">{p.category}</span>
      </div>
      <span className="work-headline">{p.headline}</span>
    </div>
  );
}

// "compact" links through to the projects page; "detailed" shows the full summary.
export default function ProjectCard({ project: p, variant = "compact" }) {
  if (variant === "compact") {
    return (
      <Link to={`/projects#${p.slug}`} className="work-card">
        <ProjectImage project={p} />
        <div className="work-caption">
          <span>
            <strong>{p.name}</strong> — {p.tagline}
          </span>
          <ArrowUpRight className="work-caption-arrow" size={18} aria-hidden="true" />
        </div>
      </Link>
    );
  }

  return (
    <article className="work-card detailed spotlight" id={p.slug}>
      <ProjectImage project={p} />
      <div className="work-body">
        <h3>{p.name}</h3>
        <p className="work-tagline">{p.tagline}</p>
        <p className="work-summary">{p.summary}</p>
        {p.outcome && (
          <p className="work-outcome">
            <TrendingUp size={16} aria-hidden="true" />
            {p.outcome}
          </p>
        )}
        <ul className="tag-list" aria-label="Services">
          {p.services.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <p className="work-stack">
          <span>Stack</span> {p.stack.join(" · ")}
        </p>
      </div>
    </article>
  );
}
