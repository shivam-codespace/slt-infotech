import { Link } from "react-router-dom";
import { ArrowRight, CircleCheck } from "lucide-react";
import Reveal from "./Reveal";

const BRIEF = [
  "Who the system serves, and who uses it day to day",
  "What currently slows them down",
  "Which tools, data, and integrations are already in place",
  "Any constraints — compliance, budget, or deadlines",
  "What success looks like six months after launch",
];

export default function FirstCallInfo() {
  return (
    <section className="section section-alt first-call">
      <div className="container first-call-grid">
        <Reveal>
          <span className="eyebrow">Before you book</span>
          <h2>
            What to expect from the <em>first</em> conversation
          </h2>
          <p>
            Come with the workflow, product idea, or system constraint you want to solve.
            We'll talk through who uses it, what data and integrations are involved, and
            what outcome actually matters. You should leave with a clearer sense of scope
            and a practical next step — and if it's not a fit, we'll say so directly.
          </p>
          <p>
            From there we can sketch a phased plan covering discovery, design, engineering,
            launch, and ongoing support. Early-stage ideas and existing production systems
            are both welcome.
          </p>
        </Reveal>

        <Reveal className="brief-card" delay={100}>
          <h3>A useful starting brief</h3>
          <ul>
            {BRIEF.map((item) => (
              <li key={item}>
                <CircleCheck size={18} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <Link to="/start-collaboration" className="link-arrow">
            Prefer to write it down? Send a brief <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
