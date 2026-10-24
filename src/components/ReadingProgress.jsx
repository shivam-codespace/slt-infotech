import { useEffect, useRef } from "react";

// Thin bar under the header that fills as the reader scrolls through an article.
export default function ReadingProgress({ targetRef }) {
  const barRef = useRef(null);

  useEffect(() => {
    let raf = 0;
    function update() {
      raf = 0;
      const el = targetRef.current;
      const bar = barRef.current;
      if (!el || !bar) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const progress = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 1;
      bar.style.transform = `scaleX(${progress})`;
    }
    function onScroll() {
      if (!raf) raf = requestAnimationFrame(update);
    }
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [targetRef]);

  return (
    <div className="reading-progress" aria-hidden="true">
      <div className="reading-progress-bar" ref={barRef} />
    </div>
  );
}
