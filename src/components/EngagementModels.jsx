import { Link } from "react-router-dom";
import { ArrowRight, Check, LifeBuoy, Target, Users } from "lucide-react";
import IconTile from "./IconTile";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const MODELS = [
  {
    icon: Target,
    title: "Fixed-Scope Project",
    badge: "Most Common",
    description:
      "A defined outcome, scoped and estimated before work starts. Best for a platform build, migration, or product with a clear finish line.",
    items: ["Milestone-based pricing", "Fixed timeline & deliverables", "Demo every two weeks"],
    bestFor: "Net-new builds, migrations, and MVPs",
  },
  {
    icon: Users,
    title: "Embedded Team",
    description:
      "Senior consultants and engineers embed directly into your roadmap and tools, reporting into your existing process.",
    items: ["Monthly capacity, scales up or down", "Works inside your existing stack", "Your rituals, your backlog"],
    bestFor: "Ongoing roadmaps and capacity gaps",
  },
  {
    icon: LifeBuoy,
    title: "Managed Retainer",
    description:
      "Ongoing ownership of systems after launch — monitoring, support, and continuous improvement from the team that built it.",
    items: ["24/7 monitoring & support", "Incremental monthly improvements", "Agreed response times"],
    bestFor: "Post-launch stability and growth",
  },
];

export default function EngagementModels() {
  return (
    <section className="section section-alt" id="engagement-models">
      <div className="container">
        <SectionHeading
          eyebrow="Engagement models"
          title={
            <>
              Pick how you want to <em>work</em> with us.
            </>
          }
          sub="Every engagement is led by senior staff from the first call — the model just changes how we're structured around your team."
        />

        <div className="engagement-grid">
          {MODELS.map((model, i) => (
            <Reveal
              as="article"
              className={model.badge ? "engagement-card featured spotlight" : "engagement-card spotlight"}
              key={model.title}
              delay={i * 80}
            >
              {model.badge && <span className="pill-solid engagement-badge">{model.badge}</span>}
              <IconTile icon={model.icon} />
              <h3>{model.title}</h3>
              <p>{model.description}</p>
              <ul className="service-checklist">
                {model.items.map((item) => (
                  <li key={item}>
                    <Check className="check" size={16} strokeWidth={2.5} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="engagement-best">
                <span>Best for</span>
                {model.bestFor}
              </p>
              <Link to="/start-collaboration" className="link-arrow">
                Start with this model <ArrowRight size={16} />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
