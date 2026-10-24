import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Briefcase, Layers, Mail } from "lucide-react";
import IconTile from "../components/IconTile";
import PageHero from "../components/PageHero";
import usePageMeta from "../hooks/usePageMeta";

const LINKS = [
  { icon: Layers, title: "Services", text: "What we build and how we work", to: "/services" },
  { icon: Briefcase, title: "Projects", text: "Production systems we've shipped", to: "/projects" },
  { icon: BookOpen, title: "Blog", text: "Notes on AI, cloud, and delivery", to: "/blog" },
  { icon: Mail, title: "Contact", text: "Book a call with a senior lead", to: "/contact" },
];

export default function NotFound() {
  usePageMeta("Page not found");

  return (
    <PageHero
      eyebrow="404"
      title={
        <>
          We couldn’t find <em>that</em> page.
        </>
      }
      sub="The link may be out of date, or the page may have moved. Here are a few good places to start instead."
      actions={
        <Link to="/" className="btn btn-primary btn-lg">
          Back to home <ArrowRight className="btn-arrow" size={18} />
        </Link>
      }
      className="not-found"
    >
      <div className="not-found-links">
        {LINKS.map((l) => (
          <Link key={l.to} to={l.to} className="info-card is-link spotlight">
            <IconTile icon={l.icon} />
            <span className="info-text">
              <strong>{l.title}</strong>
              <span className="info-desc">{l.text}</span>
            </span>
            <ArrowRight className="info-arrow" size={16} aria-hidden="true" />
          </Link>
        ))}
      </div>
    </PageHero>
  );
}
