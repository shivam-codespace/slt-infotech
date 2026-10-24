import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const VALUES = [
  {
    title: "Own the outcome",
    description:
      "Every milestone is tied to a working result, not hours logged. We stay accountable for delivery, not just effort.",
  },
  {
    title: "Build for production",
    description:
      "Security, performance, and maintainability shape the system from day one — launch is the start, not the finish line.",
  },
  {
    title: "Leave clients in control",
    description:
      "You keep your code, your infrastructure, and your documentation — with the ability to operate independently, without lock-in.",
  },
  {
    title: "Senior from the first call",
    description:
      "The people who scope your project are the people who build it. No hand-off from a sales team to a junior bench.",
  },
  {
    title: "Say it plainly",
    description:
      "Honest estimates, clear milestones, and early warnings when something changes. If it's not a fit, we'll tell you directly.",
  },
  {
    title: "Secure by default",
    description:
      "Least-privilege access, encrypted data, and audit trails are part of the design — not a checklist the week before launch.",
  },
];

export default function ValuesCards() {
  return (
    <section className="section values-section">
      <div className="container">
        <SectionHeading
          eyebrow="What we value"
          title={
            <>
              The principles behind <em>every</em> engagement.
            </>
          }
          sub="Six commitments that shape how we scope, build, and support the systems we're trusted with."
        />
        <div className="values-grid">
          {VALUES.map((v, i) => (
            <Reveal className="value-card spotlight" key={v.title} delay={(i % 3) * 70}>
              <span className="value-index">{String(i + 1).padStart(2, "0")}</span>
              <h3>{v.title}</h3>
              <p>{v.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
