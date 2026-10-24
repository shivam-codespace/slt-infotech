import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CalendarDays, Layers, Mail, MessageCircle, Rocket, X } from "lucide-react";
import { mailto } from "../data/site";

const OPTIONS = [
  { label: "Book a discovery call", to: "/contact#booking", icon: CalendarDays },
  { label: "Start a project", to: "/start-collaboration", icon: Rocket },
  { label: "Engagement models & pricing", to: "/services#engagement-models", icon: Layers },
  { label: "Email us", href: mailto("Question from the website"), icon: Mail },
];

export default function FloatingContact() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    // pointerdown (not click) so the check runs before React re-renders and
    // swaps the button icon, which would detach the original event target.
    function onPointerDownOutside(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    }
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDownOutside);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDownOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="floating-contact" ref={wrapRef}>
      {open && (
        <div className="floating-menu" id="floating-menu">
          <span className="floating-menu-title">How can we help?</span>
          {OPTIONS.map(({ label, to, href, icon: Icon }) => {
            const content = (
              <>
                <Icon size={17} strokeWidth={1.75} aria-hidden="true" />
                {label}
              </>
            );
            return to ? (
              <Link key={label} to={to} className="floating-option" onClick={() => setOpen(false)}>
                {content}
              </Link>
            ) : (
              <a key={label} href={href} className="floating-option" onClick={() => setOpen(false)}>
                {content}
              </a>
            );
          })}
        </div>
      )}
      <button
        type="button"
        className={open ? "floating-main open" : "floating-main"}
        aria-label={open ? "Close quick contact" : "Quick contact"}
        aria-expanded={open}
        aria-controls="floating-menu"
        onClick={() => setOpen((o) => !o)}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  );
}
