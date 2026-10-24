import { Link } from "react-router-dom";
import { ArrowRight, Clock, ShieldCheck } from "lucide-react";
import Backdrop from "./Backdrop";
import Reveal from "./Reveal";
import { SITE } from "../data/site";

export default function CtaBanner({
  heading = (
    <>
      Let’s build something <em>extraordinary</em>.
    </>
  ),
  subtext = "We architect intelligent systems powered by AI, cloud, automation, and modern engineering to help ambitious companies innovate, scale, and transform digitally.",
  buttonText = "Start Collaboration",
  to = "/start-collaboration",
  href,
  secondary = { label: "Book a call", to: "/contact" },
}) {
  const primary = (
    <>
      {buttonText} <ArrowRight className="btn-arrow" size={18} />
    </>
  );

  return (
    <section className="cta-section">
      <div className="container">
        <Reveal className="cta-card on-dark">
          <Backdrop aurora={false} />
          <div className="cta-glow" aria-hidden="true" />
          <div className="cta-content">
            <span className="eyebrow">Let's talk</span>
            <h2>{heading}</h2>
            <p>{subtext}</p>
            <div className="cta-actions">
              {href ? (
                <a href={href} className="btn btn-primary btn-lg">
                  {primary}
                </a>
              ) : (
                <Link to={to} className="btn btn-primary btn-lg">
                  {primary}
                </Link>
              )}
              {secondary && (
                <Link to={secondary.to} className="btn btn-glass btn-lg">
                  {secondary.label}
                </Link>
              )}
            </div>
            <ul className="cta-assurances">
              <li>
                <Clock size={15} aria-hidden="true" /> Reply {SITE.responseTime}
              </li>
              <li>
                <ShieldCheck size={15} aria-hidden="true" /> Your details stay confidential
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
