import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, CalendarClock, CircleCheck, LoaderCircle, Mail, X } from "lucide-react";
import Logo from "../components/Logo";
import PageHero from "../components/PageHero";
import usePageMeta from "../hooks/usePageMeta";
import { PRODUCTS } from "../data/products";
import { SERVICES } from "../data/services";
import { SITE, mailto } from "../data/site";

const SERVICE_OPTIONS = [...SERVICES.map((s) => ({ label: s.title, slug: s.slug })), { label: "Not sure yet", slug: "not-sure" }];

const BUDGETS = ["Under $25k", "$25k – $75k", "$75k – $150k", "$150k+", "Not sure yet"];

const TIMELINES = ["ASAP", "Within 1 month", "1–3 months", "3+ months", "Just exploring"];

const MESSAGE_MAX = 5000;

const STEPS = [
  { title: "We read every submission", body: `A founder or senior lead reviews your message and replies ${SITE.responseTime}.` },
  { title: "We reply with next steps", body: "Usually a few scoping questions, or a direct invite to book a call." },
  { title: "We scope before we commit", body: "You get a clear written proposal before anything is billed." },
];

const initialForm = {
  name: "",
  email: "",
  company: "",
  phone: "",
  budget: "",
  timeline: "",
  message: "",
  website: "", // honeypot — real visitors never see or fill this
};

export default function StartCollaboration() {
  usePageMeta(
    "Start a Collaboration",
    "Tell SLT Info Tech what you're building. A senior lead reviews every inquiry and replies within one business day."
  );
  const [params] = useSearchParams();
  const [services, setServices] = useState(() => {
    const preselected = SERVICE_OPTIONS.find((o) => o.slug === params.get("service"));
    return preselected ? [preselected.label] : [];
  });
  const [preferredTime, setPreferredTime] = useState(() => (params.get("slot") || "").slice(0, 200));
  const [form, setForm] = useState(() => {
    const product = PRODUCTS.find((p) => p.slug === params.get("product"));
    return product ? { ...initialForm, message: `I'd like a demo of ${product.name}.

` } : initialForm;
  });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const [firstName, setFirstName] = useState("");

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function toggleService(label) {
    setServices((current) =>
      current.includes(label) ? current.filter((s) => s !== label) : [...current, label]
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      setErrorMsg("Name, email, and project details are required.");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/start-collaboration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, projectType: services.join(", "), preferredTime }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong sending your message.");
      }

      setFirstName(form.name.trim().split(/\s+/)[0]);
      setStatus("success");
      setForm(initialForm);
      setServices([]);
      setPreferredTime("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    }
  }

  return (
    <>
      <PageHero
        breadcrumb="Start Collaboration"
        title={
          <>
            Tell us what you’re <em>building</em>.
          </>
        }
        sub="Share a few details about your project and the right person on our team will follow up directly — no sales queue, no account handoffs."
        className="page-hero-compact"
      />

      <section className="collab-section">
        <div className="container">
          <div className="collab-grid">
            <aside className="collab-side">
              <Logo className="brand-mark" />
              <span className="booking-brand">What happens next</span>

              <ol className="collab-steps">
                {STEPS.map((step, i) => (
                  <li className="collab-step" key={step.title}>
                    <span className="collab-step-index">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h4>{step.title}</h4>
                      <p>{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="collab-side-footer">
                <span className="info-label">Prefer a call instead?</span>
                <Link to="/contact#booking" className="link-arrow">
                  Book time on our calendar <ArrowRight size={15} />
                </Link>
                <span className="info-label">Or email us directly</span>
                <a href={mailto()} className="link-arrow">
                  <Mail size={15} aria-hidden="true" /> {SITE.email}
                </a>
              </div>
            </aside>

            {status === "success" ? (
              <div className="collab-success" role="status">
                <span className="collab-success-icon" aria-hidden="true">
                  <CircleCheck size={30} />
                </span>
                <h2>Thanks{firstName ? `, ${firstName}` : ""} — your message is in.</h2>
                <p>
                  A senior lead will read it and reply {SITE.responseTime}, usually with a few
                  scoping questions or an invitation to a call. Keep an eye on your inbox (and
                  spam folder, just in case).
                </p>
                <div className="collab-success-actions">
                  <Link to="/projects" className="btn btn-outline">
                    Browse our work
                  </Link>
                  <button type="button" className="btn btn-primary" onClick={() => setStatus("idle")}>
                    Send another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form className="collab-form" onSubmit={handleSubmit}>
                <div className="form-row two">
                  <div className="form-field">
                    <label htmlFor="name">Full name *</label>
                    <input id="name" type="text" autoComplete="name" maxLength={120} value={form.name} onChange={update("name")} placeholder="Jordan Lee" required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Work email *</label>
                    <input id="email" type="email" autoComplete="email" maxLength={254} value={form.email} onChange={update("email")} placeholder="jordan@company.com" required />
                  </div>
                </div>

                <div className="form-row two">
                  <div className="form-field">
                    <label htmlFor="company">Company</label>
                    <input id="company" type="text" autoComplete="organization" maxLength={160} value={form.company} onChange={update("company")} placeholder="Company name" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="phone">Phone (optional)</label>
                    <input id="phone" type="tel" autoComplete="tel" maxLength={40} value={form.phone} onChange={update("phone")} placeholder="+1 (555) 000-0000" />
                  </div>
                </div>

                <fieldset className="chip-fieldset">
                  <legend>What do you need help with?</legend>
                  <div className="chip-group">
                    {SERVICE_OPTIONS.map((option) => (
                      <label className="chip-check" key={option.slug}>
                        <input
                          type="checkbox"
                          checked={services.includes(option.label)}
                          onChange={() => toggleService(option.label)}
                        />
                        <span>{option.label}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div className="form-row two">
                  <div className="form-field">
                    <label htmlFor="budget">Budget range</label>
                    <select id="budget" value={form.budget} onChange={update("budget")}>
                      <option value="">Select a range</option>
                      {BUDGETS.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-field">
                    <label htmlFor="timeline">Timeline</label>
                    <select id="timeline" value={form.timeline} onChange={update("timeline")}>
                      <option value="">Select a timeline</option>
                      {TIMELINES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {preferredTime ? (
                  <div className="slot-pill">
                    <CalendarClock size={18} aria-hidden="true" />
                    <span>
                      <strong>Preferred call time:</strong> {preferredTime}
                    </span>
                    <button type="button" aria-label="Remove preferred call time" onClick={() => setPreferredTime("")}>
                      <X size={16} />
                    </button>
                  </div>
                ) : (
                  <Link to="/contact#booking" className="form-aside-link">
                    <CalendarClock size={16} aria-hidden="true" /> Want to talk live? Pick a call time
                  </Link>
                )}

                <div className="form-field">
                  <div className="form-label-row">
                    <label htmlFor="message">Project details *</label>
                    <span className="char-count" aria-live="polite">
                      {form.message.length.toLocaleString()} / {MESSAGE_MAX.toLocaleString()}
                    </span>
                  </div>
                  <textarea
                    id="message"
                    rows={6}
                    maxLength={MESSAGE_MAX}
                    value={form.message}
                    onChange={update("message")}
                    placeholder="What are you trying to build or fix? Include any context on current systems, goals, or constraints."
                    required
                  />
                </div>

                <div className="hp-field" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input id="website" type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={update("website")} />
                </div>

                {status === "error" && (
                  <p className="form-status error" role="alert">
                    {errorMsg}
                  </p>
                )}

                <div className="form-submit-row">
                  <button type="submit" className="btn btn-primary btn-lg" disabled={status === "submitting"}>
                    {status === "submitting" ? (
                      <>
                        <LoaderCircle className="spin" size={18} aria-hidden="true" /> Sending…
                      </>
                    ) : (
                      <>
                        Send Inquiry <ArrowRight className="btn-arrow" size={18} />
                      </>
                    )}
                  </button>
                  <p className="form-note">
                    We'll only use your details to respond to this inquiry. See our{" "}
                    <Link to="/privacy">Privacy Policy</Link>.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
