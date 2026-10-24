import PageHero from "./PageHero";
import { SITE, mailto } from "../data/site";
import { slugify } from "../data/services";

// Shared layout for Privacy / Terms: sticky contents list beside numbered sections.
export default function LegalPage({ title, sub, updated, sections, contactLead }) {
  const withIds = sections.map((s, i) => ({ ...s, number: i + 1, id: slugify(s.title) }));

  return (
    <>
      <PageHero breadcrumb={title} title={title} sub={sub} className="page-hero-compact">
        <span className="legal-updated">Last updated: {updated}</span>
      </PageHero>

      <section className="legal-section">
        <div className="container legal-layout">
          <nav className="legal-toc" aria-label="Contents">
            <span className="article-toc-title">Contents</span>
            <ol>
              {withIds.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.title}</a>
                </li>
              ))}
              <li>
                <a href="#contact-us">Contact us</a>
              </li>
            </ol>
          </nav>

          <div className="legal-body">
            {withIds.map((s) => (
              <div className="legal-block" id={s.id} key={s.id}>
                <h2>
                  <span className="legal-number">{s.number}.</span> {s.title}
                </h2>
                {s.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {s.list && (
                  <ul className="legal-list">
                    {s.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div className="legal-block legal-contact" id="contact-us">
              <h2>Contact us</h2>
              <p>
                {contactLead} Email us at{" "}
                <a href={mailto()} className="legal-link">
                  {SITE.email}
                </a>{" "}
                and we'll respond {SITE.responseTime}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
