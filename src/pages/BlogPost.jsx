import { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Info } from "lucide-react";
import Backdrop from "../components/Backdrop";
import BlogCard from "../components/BlogCard";
import Logo from "../components/Logo";
import ReadingProgress from "../components/ReadingProgress";
import Reveal from "../components/Reveal";
import NotFound from "./NotFound";
import usePageMeta from "../hooks/usePageMeta";
import { POSTS, formatDate, getPost } from "../data/posts";
import { slugify } from "../data/services";

// List items written as "Lead phrase — explanation" get the lead in bold.
function ListItem({ text }) {
  const split = text.indexOf(" — ");
  if (split === -1 || split > 60) return <li>{text}</li>;
  return (
    <li>
      <strong>{text.slice(0, split)}</strong>
      {text.slice(split)}
    </li>
  );
}

function Block({ block }) {
  switch (block.type) {
    case "h2":
      return <h2 id={slugify(block.text)}>{block.text}</h2>;
    case "h3":
      return <h3>{block.text}</h3>;
    case "ul":
    case "ol": {
      const List = block.type;
      return (
        <List>
          {block.items.map((item) => (
            <ListItem key={item} text={item} />
          ))}
        </List>
      );
    }
    case "quote":
      return <blockquote>{block.text}</blockquote>;
    case "callout":
      return (
        <aside className="article-callout">
          <Info size={20} aria-hidden="true" />
          <div>
            <strong>{block.title}</strong>
            <p>{block.text}</p>
          </div>
        </aside>
      );
    default:
      return <p>{block.text}</p>;
  }
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);
  const articleRef = useRef(null);
  usePageMeta(post ? post.title : "Page not found", post?.excerpt);

  if (!post) return <NotFound />;

  const headings = post.body.filter((b) => b.type === "h2");
  // Related posts: same topic first, then the most recent others.
  const related = POSTS.filter((p) => p.slug !== post.slug)
    .sort((a, b) => (b.category === post.category) - (a.category === post.category))
    .slice(0, 3);

  return (
    <>
      <ReadingProgress targetRef={articleRef} />
      <article ref={articleRef}>
        <header className="page-hero article-hero">
          <Backdrop />
          <div className="container page-hero-inner article-hero-inner">
            <Link to="/blog" className="article-back">
              <ArrowLeft size={16} aria-hidden="true" /> All articles
            </Link>
            <span className="blog-tag">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="page-hero-sub">{post.excerpt}</p>
            <div className="article-meta">
              <span className="article-author">
                <Logo className="article-author-mark" />
                <span>
                  <strong>{post.author.name}</strong>
                  <span>{post.author.role}</span>
                </span>
              </span>
              <span className="article-meta-details">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span aria-hidden="true">·</span>
                <span>{post.readTime}</span>
              </span>
            </div>
          </div>
        </header>

        <div className="container article-layout">
          <div className="article-body">
            {post.body.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>

          <aside className="article-aside">
            <nav className="article-toc" aria-label="In this article">
              <span className="article-toc-title">In this article</span>
              <ul>
                {headings.map((h) => (
                  <li key={h.text}>
                    <a href={`#${slugify(h.text)}`}>{h.text}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="article-aside-cta">
              <strong>Working on something similar?</strong>
              <p>Talk it through with a senior lead — no sales pitch.</p>
              <Link to="/start-collaboration" className="link-arrow">
                Start a conversation <ArrowRight size={15} />
              </Link>
            </div>
          </aside>
        </div>
      </article>

      <section className="section section-alt">
        <div className="container">
          <Reveal className="section-heading split">
            <div>
              <span className="eyebrow">Keep Reading</span>
              <h2>
                More from the <em>blog</em>
              </h2>
            </div>
            <Link to="/blog" className="btn btn-outline">
              All articles
            </Link>
          </Reveal>
          <div className="blog-grid">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 70}>
                <BlogCard post={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
