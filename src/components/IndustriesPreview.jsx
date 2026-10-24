import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import IconTile from "./IconTile";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { INDUSTRIES } from "../data/industries";

export default function IndustriesPreview() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Industries"
          title={
            <>
              Built for <em>regulated</em>, high‑volume industries.
            </>
          }
          sub="We apply AI and modern engineering where workflows repeat, data already exists, and outcomes can be measured."
          action={
            <Link to="/industries" className="btn btn-outline">
              Explore industries
            </Link>
          }
        />

        <div className="industry-chips">
          {INDUSTRIES.slice(0, 8).map((ind, i) => (
            <Reveal key={ind.title} delay={(i % 4) * 60}>
              <Link to="/industries" className="industry-chip spotlight">
                <IconTile icon={ind.icon} size="sm" />
                <span>{ind.title}</span>
                <ArrowRight className="industry-chip-arrow" size={16} aria-hidden="true" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
