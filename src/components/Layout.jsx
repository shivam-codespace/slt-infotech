import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import FloatingContact from "./FloatingContact";
import ScrollManager from "./ScrollManager";

// Feeds the pointer position to `.spotlight` cards so their glow follows the cursor.
function useSpotlight() {
  useEffect(() => {
    function onMove(e) {
      const card = e.target.closest?.(".spotlight");
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      card.style.setProperty("--my", `${e.clientY - rect.top}px`);
    }
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);
}

export default function Layout() {
  useSpotlight();

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <ScrollManager />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
