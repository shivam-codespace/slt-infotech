import { BadgeCheck, Cloud, Handshake, Network } from "lucide-react";
import Reveal from "./Reveal";

// Confirm each partnership and its tier is current.
const PARTNERS = [
  { name: "Microsoft Azure", category: "Cloud Partner", icon: Cloud },
  { name: "AWS", category: "Cloud Partner", icon: Cloud },
  { name: "Zoho", category: "Solutions Partner", icon: Handshake },
  { name: "Tata Teleservices", category: "IT Services Partner", icon: Network },
];

export default function Partners() {
  return (
    <section className="section partners-v2">
      <div className="container">
        <Reveal className="partners-strip">
          <div className="partners-intro">
            <span className="eyebrow">Technology partners</span>
            <h2>
              Backed by partnerships that <em>matter</em>.
            </h2>
            <p>
              We deliver on the platforms our clients already trust — with partner status
              across cloud, SaaS, and telecom.
            </p>
          </div>
          <div className="partner-grid">
            {PARTNERS.map(({ name, category, icon: Icon }) => (
              <div className="partner-badge spotlight" key={name}>
                <span className="partner-icon" aria-hidden="true">
                  <Icon size={20} strokeWidth={1.75} />
                </span>
                <span className="partner-name">{name}</span>
                <span className="partner-category">
                  <BadgeCheck size={14} aria-hidden="true" />
                  {category}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
