import { Link, useParams } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check, Monitor, Plug, Users } from "lucide-react";
import Backdrop from "../components/Backdrop";
import CtaBanner from "../components/CtaBanner";
import FaqAccordion from "../components/FaqAccordion";
import IconTile from "../components/IconTile";
import ProductVisual from "../components/ProductVisual";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import NotFound from "./NotFound";
import usePageMeta from "../hooks/usePageMeta";
import { PRODUCTS, getProduct } from "../data/products";

export default function ProductDetail() {
  const { slug } = useParams();
  const p = getProduct(slug);
  usePageMeta(p ? p.name : "Page not found", p?.summary);

  if (!p) return <NotFound />;

  const demo = `/start-collaboration?product=${p.slug}`;
  const others = PRODUCTS.filter((o) => o.slug !== p.slug);
  const facts = [
    { icon: Users, label: "Built for", items: p.audience },
    { icon: Monitor, label: "Available on", items: p.platforms },
    { icon: Plug, label: "Integrates with", items: p.integrations },
  ];

  return (
    <>
      <section className="page-hero product-hero">
        <Backdrop />
        <div className="container product-hero-grid">
          <div className="page-hero-inner">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link to="/products">Products</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{p.short}</span>
            </nav>
            <div className="product-hero-label">
              <IconTile icon={p.icon} />
              <span>{p.name}</span>
            </div>
            <h1>
              {p.titleAccent.before} <em>{p.titleAccent.accent}</em>
              {p.titleAccent.after}
            </h1>
            <p className="page-hero-sub">{p.summary}</p>
            <div className="page-hero-actions">
              <Link to={demo} className="btn btn-primary btn-lg">
                Request a demo <ArrowRight className="btn-arrow" size={18} />
              </Link>
              <a href="#features" className="btn btn-outline btn-lg">
                See features
              </a>
            </div>
          </div>
          <div className="product-hero-stage">
            <ProductVisual slug={p.slug} />
          </div>
        </div>
      </section>

      <section className="section product-highlights-section">
        <div className="container product-highlights">
          {p.highlights.map((h, i) => (
            <Reveal className="product-highlight" key={h} delay={i * 80}>
              <span className="product-highlight-check" aria-hidden="true">
                <Check size={16} strokeWidth={3} />
              </span>
              <p>{h}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section-alt" id="features">
        <div className="container">
          <SectionHeading
            eyebrow="Features"
            title={
              <>
                Everything you need, <em>in one place</em>.
              </>
            }
            sub={p.tagline}
          />
          <div className="product-features">
            {p.features.map((f, i) => (
              <Reveal className="product-feature spotlight" key={f.title} delay={(i % 4) * 60}>
                <IconTile icon={f.icon} size="sm" />
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            center
            eyebrow="How it works"
            title={
              <>
                From kickoff to <em>rollout</em>.
              </>
            }
            sub="Our engineers configure, integrate, and roll out the product with your team — then stay on for support."
          />
          <ol className={`product-steps steps-${p.steps.length}`}>
            {p.steps.map((s, i) => (
              <Reveal as="li" className="product-step" key={s.title} delay={i * 90}>
                <span className="product-step-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container product-facts">
          {facts.map(({ icon: Icon, label, items }, i) => (
            <Reveal className="product-fact" key={label} delay={i * 80}>
              <span className="product-fact-label">
                <Icon size={16} aria-hidden="true" /> {label}
              </span>
              <ul className="tag-list">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <FaqAccordion
        heading={
          <>
            {p.short} <em>questions</em>, answered
          </>
        }
        sub={`What teams usually ask before rolling out ${p.name}.`}
        faqs={p.faqs}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="More products"
            title={
              <>
                Works even better <em>together</em>.
              </>
            }
            action={
              <Link to="/products" className="btn btn-outline">
                All products <ArrowRight className="btn-arrow" size={16} />
              </Link>
            }
          />
          <div className="product-others">
            {others.map((o, i) => (
              <Reveal key={o.slug} delay={i * 60}>
                <Link to={`/products/${o.slug}`} className="product-other spotlight">
                  <IconTile icon={o.icon} />
                  <span className="product-other-text">
                    <strong>{o.name}</strong>
                    <small>{o.tagline}</small>
                  </span>
                  <ArrowUpRight className="product-other-arrow" size={18} aria-hidden="true" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        heading={
          <>
            See {p.short} working on <em>your</em> data.
          </>
        }
        subtext="Book a guided demo with a product specialist — tailored to your team, processes, and existing systems."
        buttonText="Request a demo"
        to={demo}
      />
    </>
  );
}
