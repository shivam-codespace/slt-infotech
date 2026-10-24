import { Link } from "react-router-dom";
import { ArrowUp, Mail, MapPin, Star } from "lucide-react";
import SocialIcon from "./SocialIcon";
import { PRODUCTS } from "../data/products";
import { SERVICES } from "../data/services";
import { SITE, mailto } from "../data/site";

const COLUMNS = [
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Team", to: "/team" },
      { label: "Careers", to: "/careers" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "All Services", to: "/services" },
      ...SERVICES.map((s) => ({ label: s.title, to: `/services#${s.slug}` })),
    ],
  },
  {
    title: "Products",
    links: [
      { label: "All Products", to: "/products" },
      ...PRODUCTS.map((p) => ({ label: p.name, to: `/products/${p.slug}` })),
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Industries", to: "/industries" },
      { label: "Projects", to: "/projects" },
      { label: "Blog", to: "/blog" },
      { label: "Engagement Models", to: "/services#engagement-models" },
      { label: "Start a Project", to: "/start-collaboration" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms of Service", to: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-hero">
        <div className="footer-hero-glow" aria-hidden="true" />
        <div className="container">
          <p className="footer-wordmark" aria-hidden="true">
            SLT INFO TECH
          </p>
          <p className="footer-tagline">{SITE.tagline}</p>

          <div className="footer-contact-row">
            <div className="footer-contact">
              <a className="footer-email" href={mailto()}>
                <Mail size={18} aria-hidden="true" />
                {SITE.email}
              </a>
              <p className="footer-location">
                <MapPin size={15} aria-hidden="true" />
                {SITE.location}
              </p>
            </div>
            <div className="founder-block">
              <span className="founder-label">Founders</span>
              <div className="founder-avatars">
                {SITE.founders.map((f) => (
                  <span key={f.name} className="founder-chip">
                    <span className="founder-avatar">{f.initials}</span>
                    {f.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="footer-badges-row">
            <div className="find-us">
              <span>Find us on</span>
              {SITE.reviewBadges.map((b) => (
                <a key={b.label} href={b.href} className="badge-pill">
                  <Star size={13} aria-hidden="true" /> {b.label}
                </a>
              ))}
            </div>
            <div className="social-links">
              {SITE.socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label}>
                  <SocialIcon name={s.icon} />
                </a>
              ))}
              <a href={mailto()} aria-label="Email">
                <Mail size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-bottom-area">
        <div className="footer-top">
          {COLUMNS.map((col) => (
            <nav className="footer-col" key={col.title} aria-label={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </span>
          <button
            type="button"
            className="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back to top <ArrowUp size={15} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
