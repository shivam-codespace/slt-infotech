import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowRight, ChevronDown, Mail } from "lucide-react";
import Logo from "./Logo";
import { SERVICE_GROUPS, slugify } from "../data/services";
import { SITE, mailto } from "../data/site";

const NAV_LINKS = [
  { label: "Products", to: "/products" },
  { label: "Industries", to: "/industries" },
  { label: "About Us", to: "/about" },
  { label: "Team", to: "/team" },
  { label: "Careers", to: "/careers" },
  { label: "Projects", to: "/projects" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const navClass = ({ isActive }) => (isActive ? "active" : undefined);

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Any navigation (link click, back/forward, hash change) closes the menus.
  const [lastLocationKey, setLastLocationKey] = useState(location.key);
  if (location.key !== lastLocationKey) {
    setLastLocationKey(location.key);
    setMenuOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }

  const openServices = () => setServicesOpen(true);
  const closeServices = () => setServicesOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.classList.add("menu-open");
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen && !servicesOpen) return;
    function onKey(e) {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setServicesOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen, servicesOpen]);

  return (
    <header className={scrolled || menuOpen ? "site-header scrolled" : "site-header"}>
      <div className="container header-shell">
        <div className="header-inner">
          <Link to="/" className="brand" aria-label={`${SITE.name} home`}>
            <Logo className="brand-mark" />
            <span className="brand-name">{SITE.name}</span>
          </Link>

          <nav className="nav-links" aria-label="Main">
            <div
              className="nav-dropdown"
              onMouseEnter={openServices}
              onMouseLeave={closeServices}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) closeServices();
              }}
            >
              <NavLink to="/services" className={navClass}>
                Services
              </NavLink>
              <button
                type="button"
                className="nav-dropdown-toggle"
                aria-expanded={servicesOpen}
                aria-controls="services-menu"
                aria-label="Show services menu"
                onClick={() => (servicesOpen ? closeServices() : openServices())}
              >
                <ChevronDown className={servicesOpen ? "chevron open" : "chevron"} size={15} />
              </button>

              {servicesOpen && (
                <div className="dropdown-panel" id="services-menu">
                  <div className="dropdown-panel-inner">
                    <div className="dropdown-groups">
                      {SERVICE_GROUPS.map((group) => (
                        <div className="dropdown-group" key={group.label}>
                          <span className="dropdown-group-label">{group.label}</span>
                          {group.services.map(({ icon: Icon, title, short }) => (
                            <Link key={title} to={`/services#${slugify(title)}`} className="dropdown-item">
                              <span className="dropdown-item-icon" aria-hidden="true">
                                <Icon strokeWidth={1.75} />
                              </span>
                              <span>
                                <strong>{title}</strong>
                                <small>{short}</small>
                              </span>
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                    <div className="dropdown-footer">
                      <span>Not sure where to start? We'll recommend a scope.</span>
                      <div className="dropdown-footer-links">
                        <Link to="/services#engagement-models">Engagement models</Link>
                        <Link to="/services" className="link-arrow">
                          All services <ArrowRight size={15} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {NAV_LINKS.map((link) => (
              <NavLink key={link.to} to={link.to} className={navClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <Link to="/start-collaboration" className="btn btn-primary btn-sm desktop-only">
            Start a project <ArrowRight className="btn-arrow" size={16} />
          </Link>

          <button
            type="button"
            className={menuOpen ? "menu-toggle open" : "menu-toggle"}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-menu" id="mobile-menu">
            <nav className="mobile-menu-inner" aria-label="Mobile">
              <button
                type="button"
                className="mobile-nav-link"
                aria-expanded={mobileServicesOpen}
                onClick={() => setMobileServicesOpen((o) => !o)}
              >
                Services
                <ChevronDown className={mobileServicesOpen ? "chevron open" : "chevron"} size={18} />
              </button>
              {mobileServicesOpen && (
                <div className="mobile-services-list">
                  <Link to="/services" className="mobile-services-all">
                    All services <ArrowRight size={15} />
                  </Link>
                  {SERVICE_GROUPS.flatMap((group) => group.services).map(({ icon: Icon, title }) => (
                    <Link key={title} to={`/services#${slugify(title)}`}>
                      <Icon size={17} strokeWidth={1.75} aria-hidden="true" />
                      {title}
                    </Link>
                  ))}
                </div>
              )}

              {NAV_LINKS.map((link) => (
                <NavLink key={link.to} to={link.to} className="mobile-nav-link">
                  {link.label}
                  <ArrowRight size={16} aria-hidden="true" />
                </NavLink>
              ))}

              <div className="mobile-menu-footer">
                <Link to="/start-collaboration" className="btn btn-primary">
                  Start Collaboration <ArrowRight className="btn-arrow" size={16} />
                </Link>
                <a href={mailto()} className="mobile-menu-email">
                  <Mail size={16} aria-hidden="true" /> {SITE.email}
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
