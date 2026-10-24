import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, sub, action, center = false, id }) {
  const classes = ["section-heading", center && "center", action && "split"].filter(Boolean).join(" ");
  return (
    <Reveal className={classes}>
      <div>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2 id={id}>{title}</h2>
        {sub && <p>{sub}</p>}
      </div>
      {action}
    </Reveal>
  );
}
