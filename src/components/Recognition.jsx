import { ArrowUpRight, BadgeCheck } from "lucide-react";
import Reveal from "./Reveal";

// PLACEHOLDER: replace with the review platforms you're actually listed on.
const PROFILES = [
  {
    name: "TrustRadar",
    description: "Verified reviews and delivery track record from clients we've shipped for.",
    href: "#",
  },
  {
    name: "PeerScope",
    description: "Independent research profile covering our services, focus areas, and client feedback.",
    href: "#",
  },
];

export default function Recognition() {
  return (
    <section className="section section-alt recognition">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Recognition</span>
          <h2>
            Recognized on <em>independent</em> research platforms
          </h2>
          <p className="recognition-sub">
            Our delivery record and client feedback are listed publicly on the platforms
            buyers use to vet technology partners.
          </p>
        </Reveal>

        <div className="recognition-grid">
          {PROFILES.map((p, i) => (
            <Reveal className="recognition-card spotlight" key={p.name} delay={i * 80}>
              <span className="pill-solid">
                <BadgeCheck size={14} aria-hidden="true" /> Verified Profile
              </span>
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <a href={p.href} className="link-arrow">
                View {p.name} profile <ArrowUpRight size={16} />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
