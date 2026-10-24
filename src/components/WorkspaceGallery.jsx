import { Coffee, Laptop, LayoutDashboard, Presentation } from "lucide-react";
import ImageFadeSlider from "./ImageFadeSlider";
import Reveal from "./Reveal";
import { SITE } from "../data/site";

// PLACEHOLDER: swap the gradient slides for real studio photos when available.
const SLIDES = [
  { caption: "Engineering floor", icon: Laptop, bg: "linear-gradient(135deg, #1f2937, #374151)" },
  { caption: "Client workshop room", icon: Presentation, bg: "linear-gradient(135deg, #0f172a, #1e293b)" },
  { caption: "Product review space", icon: LayoutDashboard, bg: "linear-gradient(135deg, #3b2f1d, #57432a)" },
  { caption: "Team collaboration area", icon: Coffee, bg: "linear-gradient(135deg, #1c1408, #3a2a0c)" },
];

export default function WorkspaceGallery() {
  return (
    <section className="section section-alt workspace-section">
      <div className="container workspace-grid">
        <Reveal>
          <ImageFadeSlider slides={SLIDES} />
        </Reveal>

        <Reveal delay={100}>
          <span className="eyebrow">Where we work</span>
          <h2>
            Built for <em>focused</em>, senior-led delivery
          </h2>
          <p>
            Our team works out of a {SITE.location} studio designed for deep
            engineering work and close client collaboration — from architecture reviews to
            hands-on workshops with the teams we build for. Many of our engineers work
            remotely, so we're set up to collaborate across time zones from day one.
          </p>
          <ul className="workspace-list">
            <li>Dedicated rooms for client workshops and demos</li>
            <li>Open engineering floor for cross-team pairing</li>
            <li>On-site space for product and design reviews</li>
            <li>Remote-first tooling, so distributed teams stay in sync</li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
