import { Check, CircleCheck, Clock, Laptop, MapPin, Smartphone, TriangleAlert } from "lucide-react";

// Decorative product UI previews (illustrative data only).

function TrackingVisual() {
  return (
    <div className="pv pv-tracking">
      <svg className="pv-map" viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="pv-route" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#5b6cff" />
            <stop offset="100%" stopColor="#c46bff" />
          </linearGradient>
        </defs>
        {[30, 80, 130, 180].map((y) => (
          <line key={`h${y}`} x1="0" x2="320" y1={y} y2={y} className="pv-street" />
        ))}
        {[40, 110, 190, 260].map((x) => (
          <line key={`v${x}`} y1="0" y2="200" x1={x} x2={x} className="pv-street" />
        ))}
        <path d="M40 170 L40 130 L110 130 L110 80 L190 80 L190 30 L260 30" className="pv-route" stroke="url(#pv-route)" />
        {[
          [40, 170],
          [110, 130],
          [190, 80],
        ].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="5" className="pv-stop" />
        ))}
        <circle cx="260" cy="30" r="14" className="pv-pulse" />
        <circle cx="260" cy="30" r="6" className="pv-live" />
      </svg>
      <div className="pv-chip pv-chip-tl">
        <MapPin size={14} /> 4 visits · 38.2 km today
      </div>
      <div className="pv-chip pv-chip-br ok">
        <CircleCheck size={14} /> Visit verified · OTP + photo
      </div>
    </div>
  );
}

function MdmVisual() {
  const rows = [
    { icon: Laptop, name: "MacBook Pro", meta: "macOS 15 · Encrypted", ok: true },
    { icon: Smartphone, name: "Pixel 8", meta: "Android 15 · Work profile", ok: true },
    { icon: Laptop, name: "ThinkPad X1", meta: "Windows 11 · Update pending", ok: false },
    { icon: Smartphone, name: "iPhone 15", meta: "iOS 18 · Supervised", ok: true },
  ];
  return (
    <div className="pv pv-panel">
      <div className="pv-head">
        <strong>Fleet compliance</strong>
        <span className="pv-pill">96%</span>
      </div>
      <div className="pv-bar">
        <span style={{ width: "96%" }} />
      </div>
      <ul className="pv-rows">
        {rows.map(({ icon: Icon, name, meta, ok }) => (
          <li key={name}>
            <span className="pv-row-icon">
              <Icon size={15} />
            </span>
            <span className="pv-row-text">
              <strong>{name}</strong>
              <small>{meta}</small>
            </span>
            <span className={ok ? "pv-status ok" : "pv-status warn"}>
              {ok ? <Check size={12} strokeWidth={3} /> : <TriangleAlert size={12} />}
              {ok ? "Compliant" : "Action"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AssetVisual() {
  const stages = ["Procure", "Deploy", "In use", "Recover", "Retire"];
  return (
    <div className="pv pv-panel">
      <div className="pv-head">
        <strong>LT-0482 · MacBook Air</strong>
        <span className="pv-pill">In use</span>
      </div>
      <div className="pv-stages">
        {stages.map((s, i) => (
          <span key={s} className={i < 2 ? "done" : i === 2 ? "active" : undefined}>
            <i>{i < 2 ? <Check size={11} strokeWidth={3} /> : null}</i>
            {s}
          </span>
        ))}
      </div>
      <dl className="pv-facts">
        <div>
          <dt>Assigned to</dt>
          <dd>Engineering · Pune</dd>
        </div>
        <div>
          <dt>Warranty</dt>
          <dd>Until Mar 2028</dd>
        </div>
        <div>
          <dt>Last check-in</dt>
          <dd>2 hours ago</dd>
        </div>
      </dl>
    </div>
  );
}

function DpdpVisual() {
  const consents = [
    { label: "Service updates", note: "Required to deliver your account", on: true, locked: true },
    { label: "Product analytics", note: "Helps us improve the app", on: true },
    { label: "Marketing messages", note: "Offers and newsletters", on: false },
  ];
  return (
    <div className="pv pv-panel">
      <div className="pv-head">
        <strong>Manage your consent</strong>
        <span className="pv-pill">DPDP</span>
      </div>
      <ul className="pv-consents">
        {consents.map((c) => (
          <li key={c.label}>
            <span className="pv-row-text">
              <strong>{c.label}</strong>
              <small>{c.note}</small>
            </span>
            <span className={c.on ? "pv-toggle on" : "pv-toggle"} data-locked={c.locked ? "" : undefined}>
              <i />
            </span>
          </li>
        ))}
      </ul>
      <div className="pv-request">
        <Clock size={14} /> Erasure request #1042 · respond within 5 days
      </div>
    </div>
  );
}

function HrmsVisual() {
  const checks = ["Attendance synced", "Statutory deductions computed", "Payslips generated"];
  return (
    <div className="pv pv-panel">
      <div className="pv-head">
        <strong>Payroll · October</strong>
        <span className="pv-pill">Ready</span>
      </div>
      <div className="pv-payroll">
        <div>
          <small>Employees</small>
          <strong>1,248</strong>
        </div>
        <div>
          <small>Net pay</small>
          <strong>₹4.82 Cr</strong>
        </div>
      </div>
      <ul className="pv-checks">
        {checks.map((c) => (
          <li key={c}>
            <CircleCheck size={15} /> {c}
          </li>
        ))}
      </ul>
      <div className="pv-request">
        <Clock size={14} /> 3 leave requests waiting for approval
      </div>
    </div>
  );
}

const VISUALS = {
  "field-force-tracking": TrackingVisual,
  "mobile-device-management": MdmVisual,
  "it-asset-management": AssetVisual,
  "dpdp-compliance-engine": DpdpVisual,
  hrms: HrmsVisual,
};

export default function ProductVisual({ slug }) {
  const Visual = VISUALS[slug];
  return Visual ? (
    <div className="pv-wrap" aria-hidden="true">
      <Visual />
    </div>
  ) : null;
}
