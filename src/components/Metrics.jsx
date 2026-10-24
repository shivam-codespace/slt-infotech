import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Backdrop from "./Backdrop";
import CountUp from "./CountUp";
import Reveal from "./Reveal";
import { STATS } from "../data/site";

const METRICS = [
  STATS.platforms,
  STATS.aiSystems,
  STATS.mobileApps,
  STATS.satisfaction,
  STATS.opsOverhead,
  STATS.setupTime,
];

export default function Metrics() {
  return (
    <section className="section section-dark impact on-dark">
      <Backdrop aurora={false} />
      <div className="impact-glow" aria-hidden="true" />
      <div className="container impact-layout">
        <Reveal className="impact-copy">
          <span className="eyebrow">By the numbers</span>
          <h2>
            Results we’re <em>accountable</em> for.
          </h2>
          <p>
            We modernize the systems that outgrew their original design — from tangled legacy
            stacks to AI-native platforms — then stay on to keep them running.
          </p>
          <Link to="/about" className="link-arrow">
            How we work <ArrowRight size={16} />
          </Link>
        </Reveal>

        <div className="impact-grid">
          {METRICS.map((m, i) => (
            <Reveal className="impact-stat" key={m.label} delay={i * 70}>
              <CountUp value={m.value} />
              <span>{m.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
