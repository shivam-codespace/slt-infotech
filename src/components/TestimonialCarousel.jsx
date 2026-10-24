import { useEffect, useState } from "react";
import { Quote } from "lucide-react";
import SectionHeading from "./SectionHeading";

// PLACEHOLDER: replace with real, attributable client testimonials.
const TESTIMONIALS = [
  {
    quote:
      "They rebuilt our patient-matching engine in ten weeks. Support tickets dropped by a third in the first month alone.",
    pull: "It feels like the future of clinical collaboration brought into the real world.",
    name: "Elena Ford",
    role: "Founder, Nova Health",
    initials: "EF",
  },
  {
    quote:
      "The team plugged straight into our stack and shipped a working prototype before our next board meeting.",
    pull: "It feels like having an extra engineering team on call.",
    name: "Marcus Webb",
    role: "CTO, Cedar & Vine",
    initials: "MW",
  },
  {
    quote:
      "Our onboarding flow used to take fifteen minutes. Now it's under three, and support load is way down.",
    pull: "It feels like a complete customer engagement ecosystem.",
    name: "Priya Nandan",
    role: "COO, Loopwave",
    initials: "PN",
  },
  {
    quote: "Clear communication, no scope creep, and the platform hasn't gone down once since launch.",
    pull: "It feels like a personal advisor at every stage of the build.",
    name: "Tomas Reyes",
    role: "Founder, Ridgeline Analytics",
    initials: "TR",
  },
];

const INTERVAL = 7000;

export default function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = TESTIMONIALS.length;
  const reduceMotion =
    typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const autoplay = !paused && !reduceMotion;

  useEffect(() => {
    if (!autoplay) return;
    const id = setTimeout(() => setActive((a) => (a + 1) % total), INTERVAL);
    return () => clearTimeout(id);
  }, [active, autoplay, total]);

  const t = TESTIMONIALS[active];

  return (
    <section className="section section-alt testimonials-v2">
      <div className="container">
        <SectionHeading
          center
          eyebrow="Client stories"
          title={
            <>
              Teams that <em>ship</em> with us.
            </>
          }
        />

        <div
          className="quote-shell"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <Quote className="quote-icon" size={44} aria-hidden="true" />
          <figure className="quote-feature" key={active} aria-live="polite">
            <blockquote className="quote-big">{t.pull}</blockquote>
            <p className="quote-context">“{t.quote}”</p>
            <figcaption className="quote-person">
              <span className="quote-avatar" aria-hidden="true">
                {t.initials}
              </span>
              <span>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </span>
            </figcaption>
          </figure>

          <div className="quote-tabs" role="group" aria-label="Choose a testimonial">
            {TESTIMONIALS.map((x, i) => (
              <button
                type="button"
                key={x.name}
                className={i === active ? "quote-tab active" : "quote-tab"}
                aria-pressed={i === active}
                onClick={() => setActive(i)}
              >
                <span className="quote-tab-avatar" aria-hidden="true">
                  {x.initials}
                </span>
                <span className="quote-tab-text">
                  <strong>{x.name}</strong>
                  <small>{x.role}</small>
                </span>
                {i === active && autoplay && (
                  <span className="quote-tab-progress" key={active} style={{ "--dur": `${INTERVAL}ms` }} />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
