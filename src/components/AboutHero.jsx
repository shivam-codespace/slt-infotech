import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import CountUp from "./CountUp";
import PageHero from "./PageHero";
import { STATS } from "../data/site";

const HERO_STATS = [STATS.platforms, STATS.aiSystems, STATS.mobileApps, STATS.satisfaction];

export default function AboutHero() {
  return (
    <PageHero
      eyebrow="About SLT Info Tech"
      title={
        <>
          We modernize the systems businesses <em>rely</em> on.
        </>
      }
      sub="SLT Info Tech helps organizations upgrade legacy applications, infrastructure, data, and workflows — working from strategy through delivery to replace fragmented technology with secure, scalable systems built for real operations."
      actions={
        <>
          <Link to="/start-collaboration" className="btn btn-primary btn-lg">
            Start a Collaboration <ArrowUpRight className="btn-arrow" size={18} />
          </Link>
          <Link to="/services" className="btn btn-outline btn-lg">
            Explore Our Services
          </Link>
        </>
      }
    >
      <div className="stat-band">
        {HERO_STATS.map((s) => (
          <div className="stat-band-item" key={s.label}>
            <CountUp value={s.value} />
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </PageHero>
  );
}
