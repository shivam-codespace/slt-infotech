import { BrainCircuit, Check, FileText, KeyRound, UserCheck, X } from "lucide-react";
import Logo from "./Logo";
import Reveal from "./Reveal";

const ROWS = [
  {
    icon: UserCheck,
    focus: "Senior involvement",
    us: "Founders and senior specialists stay involved from discovery through delivery.",
    them: "Senior leaders sell the project, then delivery moves to a separate account team.",
  },
  {
    icon: BrainCircuit,
    focus: "AI-native capability",
    us: "AI, automation, data, cloud, and engineering are planned as one connected system.",
    them: "AI is bolted on as a separate service or layered onto an existing delivery model.",
  },
  {
    icon: FileText,
    focus: "Pricing model",
    us: "Milestones tied to working outcomes, agreed before work starts.",
    them: "Hourly or time-and-materials billing, regardless of outcome.",
  },
  {
    icon: KeyRound,
    focus: "Ownership after launch",
    us: "You keep the code, infrastructure, and documentation — no lock-in.",
    them: "Systems often stay dependent on the agency's tooling or ongoing retainer.",
  },
];

export default function ComparisonTable() {
  return (
    <section className="section comparison-section">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Comparison</span>
          <h2>
            Why we <em>stand out</em>
          </h2>
          <p className="comparison-sub">
            We believe in outcomes over billed hours. Here's how our approach compares to
            traditional software agencies.
          </p>
        </Reveal>

        <Reveal className="comparison-table" role="table" aria-label="SLT Info Tech compared with traditional agencies">
          <div className="comparison-head" role="row">
            <span role="columnheader">Focus Area</span>
            <span className="comparison-head-us" role="columnheader">
              <Logo className="brand-mark" /> SLT Info Tech
            </span>
            <span role="columnheader">Traditional Agencies</span>
          </div>

          {ROWS.map(({ icon: Icon, ...row }) => (
            <div className="comparison-row" key={row.focus} role="row">
              <span className="comparison-focus" role="rowheader">
                <Icon className="comparison-icon" size={18} strokeWidth={1.75} aria-hidden="true" />
                {row.focus}
              </span>
              <span className="comparison-us" role="cell">
                <span className="check-badge" aria-hidden="true">
                  <Check size={12} strokeWidth={3} />
                </span>
                {row.us}
              </span>
              <span className="comparison-them" role="cell">
                <span className="x-badge" aria-hidden="true">
                  <X size={12} strokeWidth={3} />
                </span>
                {row.them}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
