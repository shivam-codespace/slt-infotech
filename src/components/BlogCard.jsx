import { Link } from "react-router-dom";
import { ArrowRight, CodeXml, Compass, Sparkles } from "lucide-react";
import { formatDate } from "../data/posts";

const CATEGORY_ICONS = { AI: Sparkles, Engineering: CodeXml, Product: Compass };

export function BlogCover({ category, large = false }) {
  const Icon = CATEGORY_ICONS[category] || Sparkles;
  return (
    <div className={`blog-cover blog-cover-${category.toLowerCase()}${large ? " large" : ""}`} aria-hidden="true">
      <span className="blog-cover-grid" />
      <span className="blog-cover-icon">
        <Icon size={large ? 30 : 24} strokeWidth={1.5} />
      </span>
    </div>
  );
}

export default function BlogCard({ post, featured = false }) {
  return (
    <Link to={`/blog/${post.slug}`} className={featured ? "blog-card featured spotlight" : "blog-card spotlight"}>
      <BlogCover category={post.category} large={featured} />
      <div className="blog-card-body">
        <div className="blog-card-top">
          <span className="blog-tag">{post.category}</span>
          {featured && <span className="blog-latest">Latest article</span>}
        </div>
        {featured ? <h2>{post.title}</h2> : <h3>{post.title}</h3>}
        <p>{post.excerpt}</p>
        <div className="blog-meta">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden="true">·</span>
          <span>{post.readTime}</span>
          <span className="blog-read">
            Read <ArrowRight size={15} aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
}
