import { Lightbulb, MessagesSquare, ShieldCheck, Users } from "lucide-react";
import Reveal from "./Reveal";

const STEPS = [
  {
    label: "Planning",
    icon: Lightbulb,
    title: "Business-first planning",
    description:
      "We start with the business objective, current systems, and constraints before recommending any technology.",
    tags: ["Discovery", "Scoping", "Roadmap"],
  },
  {
    label: "Execution",
    icon: Users,
    title: "Senior-led execution",
    description:
      "Projects are guided by experienced product and engineering leads who stay involved through delivery, not just kickoff.",
    tags: ["Design", "Engineering", "Reviews"],
  },
  {
    label: "Operations",
    icon: ShieldCheck,
    title: "Built for production",
    description:
      "We design around performance, security, and long-term operation instead of treating launch as the finish line.",
    tags: ["Security", "Performance", "Monitoring"],
  },
  {
    label: "Collaboration",
    icon: MessagesSquare,
    title: "Transparent collaboration",
    description:
      "You get clear milestones, regular progress updates, shared documentation, and visibility into technical decisions.",
    tags: ["Milestones", "Docs", "Visibility"],
  },
];

export default function ProcessTimeline() {
  return (
    <section className="section section-alt process-section">
      <div className="container">
        <Reveal className="process-heading">
          <span className="eyebrow">How we work</span>
          <h2>
            Clear delivery from strategy to <em>launch</em>
          </h2>
        </Reveal>

        <div className="timeline">
          {STEPS.map(({ icon: Icon, ...step }, i) => {
            const side = i % 2 === 0 ? "left" : "right";
            return (
              <Reveal className={`timeline-row ${side}`} key={step.label}>
                <div className="timeline-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <div className="timeline-tags">
                    {step.tags.map((t) => (
                      <span key={t} className="timeline-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="timeline-node">
                  <span className="timeline-icon" aria-hidden="true">
                    <Icon size={20} strokeWidth={1.75} />
                  </span>
                </div>
                <div className="timeline-number">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <small>{step.label}</small>
                </div>
              </Reveal>
            );
          })}
          <div className="timeline-end" />
        </div>

        <p className="timeline-caption">From first conversation to running in production.</p>
      </div>
    </section>
  );
}
