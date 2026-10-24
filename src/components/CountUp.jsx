import { useEffect, useRef, useState } from "react";

const NUMBER = /^(\D*)(\d+)(.*)$/;

function canAnimate(value) {
  return (
    NUMBER.test(value) &&
    typeof window !== "undefined" &&
    "IntersectionObserver" in window &&
    !window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
  );
}

// Counts a stat like "98%" or "15+" up from zero the first time it scrolls into view.
export default function CountUp({ value, duration = 1400, className }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(() =>
    canAnimate(value) ? value.replace(NUMBER, "$10$3") : value
  );

  useEffect(() => {
    if (!canAnimate(value)) return;
    const [, prefix, num, suffix] = NUMBER.exec(value);
    const target = Number(num);
    let raf;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          setDisplay(`${prefix}${Math.round(target * eased)}${suffix}`);
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    io.observe(ref.current);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return (
    <strong ref={ref} className={className}>
      <span aria-hidden="true">{display}</span>
      <span className="sr-only">{value}</span>
    </strong>
  );
}
