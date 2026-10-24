import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check, Sparkles } from "lucide-react";
import IconTile from "./IconTile";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { SERVICES } from "../data/services";

// Small illustrations for the larger tiles (decorative only).
function AgentVisual() {
  return (
    <div className="bv-agent" aria-hidden="true">
      <div className="bv-bubble user">Summarize open claims over $10k and flag anything unusual.</div>
      <div className="bv-bubble agent">
        <span className="bv-agent-name">
          <Sparkles size={13} /> Claims assistant
        </span>
        Found 37 open claims. Three look unusual — duplicate invoices from the same vendor.
        <span className="bv-sources">
          <span>claims_db</span>
          <span>policy_2026.pdf</span>
          <span>+2 sources</span>
        </span>
      </div>
      <div className="bv-typing">
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}

function CodeVisual() {
  return (
    <pre className="bv-code" aria-hidden="true">
      <span className="k">export async function</span> <span className="f">release</span>(env) {"{"}
      {"\n  "}
      <span className="k">await</span> test(); <span className="k">await</span> build();
      {"\n  "}
      <span className="k">return</span> deploy(env); <span className="c">// ✓ green</span>
      {"\n}"}
    </pre>
  );
}

function CloudVisual() {
  return (
    <svg className="bv-cloud" viewBox="0 0 240 110" aria-hidden="true">
      <path d="M40 55 H120 M120 55 L200 22 M120 55 L200 88" className="bv-link" />
      <path d="M40 55 H120 M120 55 L200 22 M120 55 L200 88" className="bv-flow" />
      {[
        [40, 55, "api"],
        [120, 55, "k8s"],
        [200, 22, "db"],
        [200, 88, "queue"],
      ].map(([x, y, label]) => (
        <g key={label}>
          <rect x={x - 22} y={y - 13} width="44" height="26" rx="8" className="bv-node" />
          <text x={x} y={y + 4} textAnchor="middle" className="bv-node-label">
            {label}
          </text>
        </g>
      ))}
    </svg>
  );
}

function DataVisual() {
  const bars = [38, 52, 45, 64, 58, 76, 70, 88, 82, 96];
  return (
    <svg className="bv-data" viewBox="0 0 300 110" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="bv-bar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5b6cff" />
          <stop offset="100%" stopColor="#c9d4ff" />
        </linearGradient>
      </defs>
      {bars.map((h, i) => (
        <rect key={i} x={8 + i * 29} y={110 - h} width="18" height={h} rx="5" fill="url(#bv-bar)" opacity={0.35 + i * 0.065} />
      ))}
      <path
        d={`M${bars.map((h, i) => `${17 + i * 29},${104 - h}`).join(" L")}`}
        className="bv-trend"
      />
    </svg>
  );
}

const ROADMAP = [
  { label: "Assess", when: "Q1", state: "done" },
  { label: "Pilot", when: "Q2", state: "done" },
  { label: "Scale", when: "Q3", state: "active" },
  { label: "Adopt", when: "Q4" },
];

function RoadmapVisual() {
  return (
    <div className="bv-roadmap" aria-hidden="true">
      <div className="bv-road-track">
        <span className="bv-road-fill" />
      </div>
      <div className="bv-road-steps">
        {ROADMAP.map((step) => (
          <div key={step.label} className={`bv-road-step ${step.state || ""}`.trim()}>
            <span className="bv-road-dot">{step.state === "done" && <Check size={12} strokeWidth={3} />}</span>
            <strong>{step.label}</strong>
            <small>{step.when}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

const LAYOUT = [
  { slug: "artificial-intelligence", size: "xl", Visual: AgentVisual },
  { slug: "software-engineering", size: "md", Visual: CodeVisual },
  { slug: "cloud-infrastructure", size: "md", Visual: CloudVisual },
  { slug: "data-analytics", size: "wide", Visual: DataVisual },
  { slug: "mobile-app-development", size: "sm" },
  { slug: "enterprise-systems", size: "sm" },
  { slug: "cybersecurity", size: "sm" },
  { slug: "managed-services", size: "sm" },
  { slug: "digital-transformation", size: "wide", Visual: RoadmapVisual },
];

export default function ServicesOverview() {
  const bySlug = Object.fromEntries(SERVICES.map((s) => [s.slug, s]));

  return (
    <section className="section" id="services">
      <div className="container">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              Nine disciplines. <em>One</em> accountable team.
            </>
          }
          sub="Strategy, engineering, cloud, and operations under one roof — so nothing gets lost between vendors, and one team answers for the result."
          action={
            <Link to="/services" className="btn btn-outline">
              All services <ArrowRight className="btn-arrow" size={16} />
            </Link>
          }
        />

        <div className="bento">
          {LAYOUT.map(({ slug, size, Visual }, i) => {
            const s = bySlug[slug];
            return (
              <Reveal key={slug} className={`bento-cell bento-${size}`} delay={(i % 4) * 70}>
                <Link to={`/services#${slug}`} className={Visual ? "bento-tile spotlight has-visual" : "bento-tile spotlight"}>
                  <div className="bento-top">
                    <IconTile icon={s.icon} size={size === "sm" ? "sm" : "md"} />
                    <ArrowUpRight className="bento-arrow" size={18} aria-hidden="true" />
                  </div>
                  {Visual && (
                    <div className="bento-visual">
                      <Visual />
                    </div>
                  )}
                  <div className="bento-text">
                    <h3>{s.title}</h3>
                    <p>{size === "xl" ? s.description : s.short}</p>
                  </div>
                </Link>
              </Reveal>
            );
          })}

          <Reveal className="bento-cell bento-wide" delay={140}>
            <div className="bento-tile bento-cta on-dark">
              <div className="bento-cta-glow" aria-hidden="true" />
              <div className="bento-text">
                <h3>
                  Not sure where to <em>start</em>?
                </h3>
                <p>Tell us what's slowing your team down — we'll recommend a scope, free of obligation.</p>
              </div>
              <Link to="/start-collaboration" className="btn btn-primary">
                Talk to a specialist <ArrowRight className="btn-arrow" size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
