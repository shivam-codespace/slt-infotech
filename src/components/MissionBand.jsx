import { Compass, Workflow } from "lucide-react";
import IconTile from "./IconTile";
import Reveal from "./Reveal";

const ITEMS = [
  {
    icon: Compass,
    label: "Our mission",
    text: "Help organizations replace fragmented, outgrown systems with software that's secure, scalable, and built for how the business actually operates.",
  },
  {
    icon: Workflow,
    label: "How we operate",
    text: "Our AI, cloud, and engineering teams work as one connected group — so strategy, delivery, and long-term support never lose context handing off between teams.",
  },
];

export default function MissionBand() {
  return (
    <section className="section mission-band">
      <div className="container mission-grid">
        {ITEMS.map((item, i) => (
          <Reveal className="mission-card spotlight" key={item.label} delay={i * 100}>
            <IconTile icon={item.icon} />
            <span className="eyebrow">{item.label}</span>
            <p>{item.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
