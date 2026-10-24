import { Link } from "react-router-dom";
import { ArrowRight, Check, Target } from "lucide-react";
import IconTile from "./IconTile";
import Reveal from "./Reveal";
import { SERVICE_GROUPS, slugify } from "../data/services";

export default function ServicesGrid() {
  return (
    <section className="section services-directory" id="services">
      <div className="container">
        <nav className="services-quicknav" aria-label="Service groups">
          <span className="services-quicknav-label">Jump to</span>
          {SERVICE_GROUPS.map((group) => (
            <a key={group.label} href={`#${slugify(group.label)}`} className="filter-tab">
              {group.label}
            </a>
          ))}
        </nav>

        {SERVICE_GROUPS.map((group) => (
          <div className="service-group" id={slugify(group.label)} key={group.label}>
            <div className="service-group-head">
              <span className="group-label">{group.label}</span>
              <span className="service-group-line" aria-hidden="true" />
            </div>
            <div className="services-grid">
              {group.services.map((service, i) => (
                <Reveal
                  as="article"
                  className="service-card spotlight"
                  id={slugify(service.title)}
                  key={service.title}
                  delay={i * 70}
                >
                  <div className="service-card-head">
                    <IconTile icon={service.icon} />
                    <h3>{service.title}</h3>
                  </div>
                  <p>{service.description}</p>
                  <ul className="service-checklist">
                    {service.items.map((item) => (
                      <li key={item}>
                        <Check className="check" size={16} strokeWidth={2.5} aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="service-outcome">
                    <Target size={16} aria-hidden="true" />
                    <span>
                      <strong>What you get: </strong>
                      {service.outcome}
                    </span>
                  </p>
                  <Link
                    to={`/start-collaboration?service=${slugify(service.title)}`}
                    className="link-arrow service-card-link"
                  >
                    Discuss this service <ArrowRight size={16} />
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
