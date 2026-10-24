import { useEffect, useState } from "react";

export default function ImageFadeSlider({ slides, interval = 3500 }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (paused || reduceMotion) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, interval);
    return () => clearInterval(id);
  }, [slides.length, interval, paused]);

  return (
    <div
      className="fade-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map(({ caption, bg, icon: Icon }, i) => (
        <div
          key={caption}
          className="fade-slide"
          style={{ background: bg, opacity: i === index ? 1 : 0 }}
          aria-hidden={i !== index}
        >
          {Icon && <Icon className="fade-slide-icon" size={56} strokeWidth={1.25} aria-hidden="true" />}
          <span className="fade-slide-caption">{caption}</span>
        </div>
      ))}
      <div className="fade-slider-dots">
        {slides.map((slide, i) => (
          <button
            type="button"
            key={slide.caption}
            className={i === index ? "dot active" : "dot"}
            aria-label={`Show ${slide.caption}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
