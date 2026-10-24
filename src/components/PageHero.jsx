import { Link } from "react-router-dom";
import Backdrop from "./Backdrop";

// Concentric rings with orbiting dots — the decorative motif for inner pages.
function Orbit() {
  return (
    <div className="orbit" aria-hidden="true">
      <span className="orbit-ring r1">
        <i />
      </span>
      <span className="orbit-ring r2">
        <i />
        <i />
      </span>
      <span className="orbit-ring r3">
        <i />
      </span>
      <span className="orbit-core" />
    </div>
  );
}

// Shared hero for inner pages: breadcrumb or eyebrow pill, title, intro, actions.
export default function PageHero({ breadcrumb, eyebrow, title, sub, actions, children, className = "" }) {
  return (
    <section className={`page-hero ${className}`.trim()}>
      <Backdrop />
      <Orbit />
      <div className="container page-hero-inner">
        {breadcrumb && (
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{breadcrumb}</span>
          </nav>
        )}
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {sub && <p className="page-hero-sub">{sub}</p>}
        {actions && <div className="page-hero-actions">{actions}</div>}
        {children}
      </div>
    </section>
  );
}
