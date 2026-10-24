import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";
import IconTile from "../components/IconTile";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SocialIcon from "../components/SocialIcon";
import usePageMeta from "../hooks/usePageMeta";
import { STAFFING, TEAM } from "../data/team";

const DEPARTMENTS = ["All", ...new Set(TEAM.map((t) => t.dept))];

export default function Team() {
  usePageMeta(
    "Team",
    "Meet the senior engineers, designers, and leads behind SLT Info Tech — no layers between you and the people doing the work."
  );
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? TEAM : TEAM.filter((t) => t.dept === filter);

  return (
    <>
      <PageHero
        eyebrow="Team"
        title={
          <>
            The people behind the <em>builds</em>.
          </>
        }
        sub="A small, senior team — no layers between you and the engineers doing the work. The people you meet in the first call are the people who design, build, and support your system."
      />

      <section className="section team-section">
        <div className="container">
          <div className="filter-tabs" role="group" aria-label="Filter by department">
            {DEPARTMENTS.map((d) => (
              <button
                type="button"
                key={d}
                className={filter === d ? "filter-tab active" : "filter-tab"}
                aria-pressed={filter === d}
                onClick={() => setFilter(d)}
              >
                {d}
                <span className="filter-count">
                  {d === "All" ? TEAM.length : TEAM.filter((t) => t.dept === d).length}
                </span>
              </button>
            ))}
          </div>

          <div className="team-grid">
            {shown.map((member, i) => (
              <Reveal as="article" className="team-card spotlight" key={member.name} delay={(i % 4) * 60}>
                <span className="team-avatar" aria-hidden="true">
                  {member.initials}
                </span>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-focus">{member.focus}</p>
                <a href={member.linkedin} className="team-link" aria-label={`${member.name} on LinkedIn`}>
                  <SocialIcon name="linkedin" size={14} />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            eyebrow="How We Staff"
            title={
              <>
                Every engagement gets the <em>same</em> structure.
              </>
            }
            sub="Small teams of senior people, organized around your outcome — not a pyramid of junior staff behind an account manager."
          />
          <div className="principles-grid">
            {STAFFING.map((s, i) => (
              <Reveal className="principle-card spotlight" key={s.title} delay={i * 70}>
                <IconTile icon={s.icon} />
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="join-banner">
            <div>
              <span className="eyebrow">Careers</span>
              <h2>
                Want to build <em>alongside</em> us?
              </h2>
              <p>
                We hire slowly and keep the team small. If you like owning outcomes and
                working directly with clients, we'd like to hear from you.
              </p>
            </div>
            <Link to="/careers" className="btn btn-primary btn-lg">
              See open roles <ArrowRight className="btn-arrow" size={18} />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        heading={
          <>
            Work with the team that <em>builds</em> it.
          </>
        }
        subtext="Tell us what you're working on and a senior lead will get back to you within one business day."
      />
    </>
  );
}
