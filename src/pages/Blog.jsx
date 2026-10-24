import { useState } from "react";
import PageHero from "../components/PageHero";
import CtaBanner from "../components/CtaBanner";
import BlogCard from "../components/BlogCard";
import Reveal from "../components/Reveal";
import usePageMeta from "../hooks/usePageMeta";
import { POSTS } from "../data/posts";

const CATEGORIES = ["All", ...new Set(POSTS.map((p) => p.category))];

export default function Blog() {
  usePageMeta(
    "Blog",
    "Practical notes on AI, cloud, engineering, and delivery from the SLT Info Tech team — written by the people building the systems."
  );
  const [filter, setFilter] = useState("All");
  const [featured, ...rest] = POSTS;
  const shown = filter === "All" ? rest : POSTS.filter((p) => p.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={
          <>
            Notes on engineering, AI, and <em>delivery</em>.
          </>
        }
        sub="Field notes from the projects we're shipping — practical guidance on AI, cloud, security, and scoping, written by the people doing the work."
      />

      <section className="section blog-section">
        <div className="container">
          {filter === "All" && (
            <Reveal className="blog-featured-wrap">
              <BlogCard post={featured} featured />
            </Reveal>
          )}

          <div className="filter-tabs" role="group" aria-label="Filter by topic">
            {CATEGORIES.map((c) => (
              <button
                type="button"
                key={c}
                className={filter === c ? "filter-tab active" : "filter-tab"}
                aria-pressed={filter === c}
                onClick={() => setFilter(c)}
              >
                {c}
                <span className="filter-count">
                  {c === "All" ? POSTS.length : POSTS.filter((p) => p.category === c).length}
                </span>
              </button>
            ))}
          </div>

          <div className="blog-grid">
            {shown.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 70}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        heading={
          <>
            Facing one of these problems <em>right now</em>?
          </>
        }
        subtext="Talk it through with the people who wrote these notes. We'll tell you what we'd do — and whether we're the right team to help."
        buttonText="Start a Conversation"
      />
    </>
  );
}
