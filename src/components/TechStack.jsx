import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { TECH_STACK } from "../data/services";

export default function TechStack() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Technology"
          title={
            <>
              Proven tools, chosen for the <em>problem</em>.
            </>
          }
          sub="We're technology-first, not vendor-locked. These are the platforms we use most — we'll recommend whatever fits your stack, team, and budget best."
        />

        <div className="stack-grid">
          {TECH_STACK.map((group, i) => (
            <Reveal className="stack-card spotlight" key={group.label} delay={(i % 3) * 70}>
              <h3>{group.label}</h3>
              <ul className="stack-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
