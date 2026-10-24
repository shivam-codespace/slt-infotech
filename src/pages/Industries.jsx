import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";
import IconTile from "../components/IconTile";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import usePageMeta from "../hooks/usePageMeta";
import { INDUSTRIES, REGULATED_PRINCIPLES } from "../data/industries";

export default function Industries() {
  usePageMeta(
    "Industries",
    "AI, data, and modern software for banking, healthcare, retail, logistics, insurance, manufacturing, and more — built for regulated and high-volume workflows."
  );

  return (
    <>
      <PageHero
        eyebrow="AI by Industry"
        title={
          <>
            Technology built for the way your industry <em>works</em>.
          </>
        }
        sub="We apply AI, data, and modern engineering where workflows repeat, data already exists, and outcomes can be measured — across regulated and high-volume industries."
        actions={
          <Link to="/start-collaboration" className="btn btn-primary btn-lg">
            Discuss Your Use Case <ArrowUpRight className="btn-arrow" size={18} />
          </Link>
        }
      />

      <section className="section industries-grid-section">
        <div className="container">
          <div className="industries-grid">
            {INDUSTRIES.map((ind, i) => (
              <Reveal as="article" className="industry-card spotlight" key={ind.title} delay={(i % 3) * 70}>
                <div className="industry-card-head">
                  <IconTile icon={ind.icon} />
                  <span className="industry-index">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3>{ind.title}</h3>
                <p>{ind.description}</p>
                <ul className="tag-list" aria-label={`${ind.title} use cases`}>
                  {ind.useCases.map((u) => (
                    <li key={u}>{u}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            eyebrow="Regulated Industries"
            title={
              <>
                Compliance and trust, <em>designed in</em> from day one.
              </>
            }
            sub="Finance, healthcare, insurance, and legal teams can't afford surprises. Here's how we build systems that hold up to auditors, regulators, and the people who rely on them."
          />
          <div className="principles-grid">
            {REGULATED_PRINCIPLES.map((p, i) => (
              <Reveal className="principle-card spotlight" key={p.title} delay={i * 70}>
                <IconTile icon={p.icon} />
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        heading={
          <>
            Have a workflow worth <em>automating</em>?
          </>
        }
        subtext="Work directly with senior product engineers to design, build, and deploy secure production systems."
        buttonText="Discuss Your Project"
      />
    </>
  );
}
