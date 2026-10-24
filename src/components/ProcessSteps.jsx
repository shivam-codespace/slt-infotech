import { Link } from "react-router-dom";
import { ArrowRight, CodeXml, LifeBuoy, PenTool, Search } from "lucide-react";
import IconTile from "./IconTile";
import Reveal from "./Reveal";

const STEPS = [
  {
    icon: Search,
    title: "Discover",
    description:
      "We map the business goal, the people involved, your current systems, and constraints — and agree on what success looks like.",
    deliverable: "A written scope",
  },
  {
    icon: PenTool,
    title: "Design",
    description:
      "Architecture, user flows, and a milestone plan with fixed scope and pricing, reviewed with your team before build starts.",
    deliverable: "Architecture & milestone plan",
  },
  {
    icon: CodeXml,
    title: "Build",
    description:
      "Senior engineers ship working software in two-week increments, with demos and written updates — no surprises at the end.",
    deliverable: "A working demo every two weeks",
  },
  {
    icon: LifeBuoy,
    title: "Operate",
    description:
      "Monitoring, support, and continuous improvement from the same team — or a clean, documented handover to yours.",
    deliverable: "Runbooks, docs & support",
  },
];

export default function ProcessSteps() {
  return (
    <section className="section section-alt process-v2">
      <div className="container process-layout">
        <Reveal className="process-intro">
          <span className="eyebrow">How we deliver</span>
          <h2>
            From first call to <em>production</em>.
          </h2>
          <p>
            Every engagement follows the same four phases, so you always know what's happening,
            what's next, and exactly what you'll get at each step.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Start with a discovery call <ArrowRight className="btn-arrow" size={16} />
          </Link>
        </Reveal>

        <ol className="process-list">
          {STEPS.map((step, i) => (
            <Reveal as="li" className="process-item" key={step.title} delay={i * 80}>
              <span className="process-num">{String(i + 1).padStart(2, "0")}</span>
              <div className="process-body spotlight">
                <div className="process-title">
                  <IconTile icon={step.icon} size="sm" />
                  <h3>{step.title}</h3>
                </div>
                <p>{step.description}</p>
                <span className="process-deliverable">{step.deliverable}</span>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
