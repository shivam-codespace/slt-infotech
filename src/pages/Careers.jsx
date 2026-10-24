import { useId, useState } from "react";
import { ArrowDown, ArrowRight, Check, Clock, MapPin, Plus } from "lucide-react";
import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";
import IconTile from "../components/IconTile";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import usePageMeta from "../hooks/usePageMeta";
import { HIRING_STEPS, PERKS, ROLES } from "../data/careers";
import { mailto } from "../data/site";

const DEPARTMENTS = ["All", ...new Set(ROLES.map((r) => r.dept))];

export default function Careers() {
  usePageMeta(
    "Careers",
    "Open roles at SLT Info Tech — senior engineering, AI, cloud, design, and delivery positions working directly with clients."
  );
  const [filter, setFilter] = useState("All");
  const [openTitle, setOpenTitle] = useState(null);
  const baseId = useId();
  const shown = filter === "All" ? ROLES : ROLES.filter((r) => r.dept === filter);

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={
          <>
            Build alongside a <em>senior</em> team.
          </>
        }
        sub="We hire slowly and keep the team small — every role here works directly with clients, owns real outcomes, and ships to production."
        actions={
          <>
            <a href="#open-roles" className="btn btn-primary btn-lg">
              See open roles <ArrowDown className="btn-arrow" size={18} />
            </a>
            <a href={mailto("General application")} className="btn btn-outline btn-lg">
              Send a general application
            </a>
          </>
        }
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Why SLT Info Tech"
            title={
              <>
                What it’s like to <em>work</em> here.
              </>
            }
            sub="The same principles we promise clients shape how we work with each other."
          />
          <div className="perks-grid">
            {PERKS.map((perk, i) => (
              <Reveal className="perk-card spotlight" key={perk.title} delay={(i % 3) * 70}>
                <IconTile icon={perk.icon} />
                <h3>{perk.title}</h3>
                <p>{perk.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" id="open-roles">
        <div className="container">
          <SectionHeading
            eyebrow="Open Roles"
            title={`${ROLES.length} open positions`}
            sub="Every role works directly with clients. Select a role to see what you'd do and what we're looking for."
          />

          <div className="filter-tabs" role="group" aria-label="Filter by department">
            {DEPARTMENTS.map((d) => (
              <button
                type="button"
                key={d}
                className={filter === d ? "filter-tab active" : "filter-tab"}
                aria-pressed={filter === d}
                onClick={() => {
                  setFilter(d);
                  setOpenTitle(null);
                }}
              >
                {d}
                <span className="filter-count">
                  {d === "All" ? ROLES.length : ROLES.filter((r) => r.dept === d).length}
                </span>
              </button>
            ))}
          </div>

          <div className="roles-list">
            {shown.map((role, i) => {
              const open = openTitle === role.title;
              const bodyId = `${baseId}-role${i}`;
              return (
                <div className={open ? "role-item open" : "role-item"} key={role.title}>
                  <button
                    type="button"
                    className="role-header"
                    aria-expanded={open}
                    aria-controls={bodyId}
                    onClick={() => setOpenTitle(open ? null : role.title)}
                  >
                    <div>
                      <h3>{role.title}</h3>
                      <span className="role-meta">
                        <span className="role-dept">{role.dept}</span>
                        <span>
                          <MapPin size={14} aria-hidden="true" /> {role.location}
                        </span>
                        <span>
                          <Clock size={14} aria-hidden="true" /> {role.type}
                        </span>
                      </span>
                    </div>
                    <span className="faq-toggle" aria-hidden="true">
                      <Plus size={16} />
                    </span>
                  </button>
                  <div className="role-body" id={bodyId} hidden={!open}>
                    <p>{role.description}</p>
                    <div className="role-columns">
                      <div>
                        <h4>What you'll do</h4>
                        <ul className="role-list">
                          {role.responsibilities.map((r) => (
                            <li key={r}>
                              <Check size={15} strokeWidth={2.5} aria-hidden="true" />
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4>What we're looking for</h4>
                        <ul className="role-list">
                          {role.requirements.map((r) => (
                            <li key={r}>
                              <Check size={15} strokeWidth={2.5} aria-hidden="true" />
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <a href={mailto(`Application: ${role.title}`)} className="btn btn-primary btn-sm">
                      Apply for this role <ArrowRight className="btn-arrow" size={16} />
                    </a>
                  </div>
                </div>
              );
            })}
            {shown.length === 0 && <p className="no-results">No open roles in this department right now.</p>}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Hiring Process"
            title={
              <>
                Four steps, <em>no surprises</em>.
              </>
            }
            sub="A respectful process that shows you how we actually work — and gives us a real sense of how you do."
          />
          <ol className="hiring-steps">
            {HIRING_STEPS.map((step, i) => (
              <Reveal as="li" className="hiring-step spotlight" key={step.title} delay={i * 80}>
                <span className="hiring-step-index">{String(i + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CtaBanner
        heading={
          <>
            Don’t see the right role? <em>Introduce</em> yourself.
          </>
        }
        subtext="We're always glad to hear from senior engineers, designers, and delivery leads. Send a short note and a link to your work."
        buttonText="Email Our Team"
        href={mailto("General application")}
        secondary={null}
      />
    </>
  );
}
