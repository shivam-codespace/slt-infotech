import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import CountUp from "./CountUp";
import PageHero from "./PageHero";
import { STATS } from "../data/site";

const HERO_STATS = [
  { value: "9", label: "Connected disciplines" },
  { value: "3", label: "Ways to engage" },
  { value: STATS.platforms.value, label: "Platforms shipped" },
  STATS.satisfaction,
];

export default function ServicesHero() {
  return (
    <PageHero
      eyebrow="What We Do"
      title={
        <>
          Enterprise consulting, <em>engineered</em> like software.
        </>
      }
      sub="SLT Info Tech pairs senior consultants with hands-on engineers across nine connected disciplines — so strategy, build, and operations stay accountable to one team instead of being handed off between vendors."
      actions={
        <>
          <Link to="/start-collaboration" className="btn btn-primary btn-lg">
            Start a Collaboration <ArrowUpRight className="btn-arrow" size={18} />
          </Link>
          <a href="#engagement-models" className="btn btn-outline btn-lg">
            Explore Engagement Models
          </a>
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
