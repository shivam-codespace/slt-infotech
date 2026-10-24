import { Link } from "react-router-dom";
import { ArrowRight, Clock, Mail, MapPin, Send } from "lucide-react";
import IconTile from "./IconTile";
import Reveal from "./Reveal";
import { SITE, mailto } from "../data/site";

export default function ContactInfo() {
  const cards = [
    { icon: Mail, label: "Email", value: SITE.email, href: mailto() },
    { icon: MapPin, label: "Location", value: SITE.location },
    { icon: Clock, label: "Response time", value: `We reply ${SITE.responseTime}` },
    { icon: Send, label: "Prefer writing?", value: "Send a project brief", to: "/start-collaboration" },
  ];

  return (
    <section className="contact-info">
      <div className="container contact-info-grid">
        {cards.map(({ icon, label, value, href, to }, i) => {
          const body = (
            <>
              <IconTile icon={icon} />
              <span className="info-text">
                <span className="info-label">{label}</span>
                <strong>{value}</strong>
              </span>
              {(href || to) && <ArrowRight className="info-arrow" size={16} aria-hidden="true" />}
            </>
          );
          return (
            <Reveal key={label} delay={i * 60}>
              {to ? (
                <Link to={to} className="info-card is-link spotlight">
                  {body}
                </Link>
              ) : href ? (
                <a href={href} className="info-card is-link spotlight">
                  {body}
                </a>
              ) : (
                <div className="info-card spotlight">{body}</div>
              )}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
