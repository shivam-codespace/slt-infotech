import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import IconTile from "./IconTile";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { PRODUCTS } from "../data/products";

export default function ProductsPreview() {
  return (
    <section className="section section-alt">
      <div className="container">
        <SectionHeading
          eyebrow="Our products"
          title={
            <>
              Ready-to-deploy <em>platforms</em>.
            </>
          }
          sub="Proven products for field teams, IT, privacy compliance, and HR — configured and integrated by our engineers."
          action={
            <Link to="/products" className="btn btn-outline">
              All products <ArrowRight className="btn-arrow" size={16} />
            </Link>
          }
        />
        <div className="products-preview">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 60}>
              <Link to={`/products/${p.slug}`} className="product-card spotlight">
                <div className="product-card-top">
                  <IconTile icon={p.icon} />
                  <ArrowUpRight className="product-card-arrow" size={18} aria-hidden="true" />
                </div>
                <span className="product-card-cat">{p.category}</span>
                <h3>{p.name}</h3>
                <p>{p.tagline}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
