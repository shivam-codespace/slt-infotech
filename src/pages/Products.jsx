import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";
import IconTile from "../components/IconTile";
import ProductVisual from "../components/ProductVisual";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import usePageMeta from "../hooks/usePageMeta";
import { PRODUCTS, PRODUCT_PROMISES } from "../data/products";

export default function Products() {
  usePageMeta(
    "Products",
    "SLT Info Tech products: field force tracking, mobile device management, IT asset management, DPDP compliance, and HRMS — implemented and supported by our own engineers."
  );

  return (
    <>
      <PageHero
        eyebrow="Products"
        title={
          <>
            Software products, <em>ready</em> to deploy.
          </>
        }
        sub="Proven platforms for field teams, IT, privacy compliance, and HR — configured for your processes, integrated with your systems, and supported by the engineers who set them up."
        actions={
          <>
            <Link to="/start-collaboration" className="btn btn-primary btn-lg">
              Request a demo <ArrowRight className="btn-arrow" size={18} />
            </Link>
            <a href="#product-list" className="btn btn-outline btn-lg">
              Browse products
            </a>
          </>
        }
      >
        <nav className="product-jump" aria-label="Products">
          {PRODUCTS.map(({ slug, short, icon: Icon }) => (
            <a key={slug} href={`#${slug}`}>
              <Icon size={16} strokeWidth={1.75} aria-hidden="true" />
              {short}
            </a>
          ))}
        </nav>
      </PageHero>

      <section className="section product-list" id="product-list">
        <div className="container">
          {PRODUCTS.map((p, i) => (
            <Reveal as="article" className={i % 2 ? "product-row flip" : "product-row"} id={p.slug} key={p.slug}>
              <div className="product-row-copy">
                <div className="product-row-label">
                  <IconTile icon={p.icon} />
                  <span>{p.category}</span>
                </div>
                <h2>{p.name}</h2>
                <p className="product-row-tagline">{p.tagline}</p>
                <p className="product-row-summary">{p.summary}</p>
                <ul className="product-row-points">
                  {p.highlights.map((h) => (
                    <li key={h}>
                      <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="product-row-actions">
                  <Link to={`/products/${p.slug}`} className="btn btn-primary">
                    Explore {p.short} <ArrowRight className="btn-arrow" size={16} />
                  </Link>
                  <Link to={`/start-collaboration?product=${p.slug}`} className="link-arrow">
                    Request a demo <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
              <Link to={`/products/${p.slug}`} className="product-row-stage" tabIndex={-1} aria-hidden="true">
                <ProductVisual slug={p.slug} />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            eyebrow="Why our products"
            title={
              <>
                Products with a <em>team</em> behind them.
              </>
            }
            sub="You don't just get a licence. You get the engineers who configure it, connect it to your systems, and keep improving it."
          />
          <div className="principles-grid">
            {PRODUCT_PROMISES.map((item, i) => (
              <Reveal className="principle-card spotlight" key={item.title} delay={i * 70}>
                <IconTile icon={item.icon} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        heading={
          <>
            See a product working on <em>your</em> data.
          </>
        }
        subtext="Book a guided demo tailored to your team, processes, and existing systems."
        buttonText="Request a demo"
      />
    </>
  );
}
