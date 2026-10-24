import { Fragment, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import Backdrop from "./Backdrop";
import HeroMockup from "./HeroMockup";
import ParticleField from "./ParticleField";
import { STATS } from "../data/site";
import { TEAM } from "../data/team";

const TITLE = [
  { word: "Engineering" },
  { word: "the" },
  { word: "intelligent", accent: true },
  { word: "enterprise." },
];

// Tilts the product mockup back in 3D and flattens it as it scrolls into view.
function useScrollTilt(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      el.style.setProperty("--p", "1");
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const top = el.getBoundingClientRect().top;
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh - top) / (vh * 0.7)));
      el.style.setProperty("--p", p.toFixed(3));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ref]);
}

export default function HomeHero() {
  const stageRef = useRef(null);
  useScrollTilt(stageRef);

  return (
    <section className="home-hero on-light" id="top">
      <Backdrop />
      <ParticleField count={44} />

      <div className="container home-hero-inner">
        <Link to="/services#artificial-intelligence" className="hero-badge hero-fade" style={{ "--d": "0ms" }}>
          <span className="hero-badge-tag">AI</span>
          Production AI, not prototypes
          <ArrowRight size={15} aria-hidden="true" />
        </Link>

        <h1 className="hero-title">
          {TITLE.map(({ word, accent }, i) => {
            const Word = accent ? "em" : "span";
            return (
              <Fragment key={word}>
                <Word className="word" style={{ "--i": i }}>
                  {word}
                </Word>
                {i < TITLE.length - 1 && " "}
              </Fragment>
            );
          })}
        </h1>

        <p className="hero-sub hero-fade" style={{ "--d": "420ms" }}>
          SLT Info Tech designs, builds, and runs AI systems, cloud platforms, and modern
          software — one senior-led team from the first call to production.
        </p>

        <div className="hero-actions hero-fade" style={{ "--d": "520ms" }}>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Book a strategy call <ArrowRight className="btn-arrow" size={18} />
          </Link>
          <Link to="/projects" className="btn btn-outline btn-lg">
            Explore our work
          </Link>
        </div>

        <div className="hero-proof hero-fade" style={{ "--d": "620ms" }}>
          <span className="avatar-stack" aria-hidden="true">
            {TEAM.slice(0, 4).map((m) => (
              <span key={m.name}>{m.initials}</span>
            ))}
          </span>
          <span className="hero-proof-text">
            <strong>Senior engineers, not account managers</strong>
            <span>
              <Star size={14} aria-hidden="true" /> {STATS.satisfaction.value} client satisfaction
            </span>
          </span>
        </div>
      </div>

      <div className="container mockup-stage hero-fade" style={{ "--d": "700ms" }} ref={stageRef}>
        <HeroMockup />
      </div>
    </section>
  );
}
