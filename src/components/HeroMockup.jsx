import {
  Bot,
  CircleCheck,
  Cloud,
  Database,
  LayoutDashboard,
  Lock,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

// Illustrative product UI for the hero — decorative, not real client data.
const KPIS = [
  { label: "Tickets auto-resolved", value: "12,480", delta: "+18.2%" },
  { label: "Avg. handling time", value: "1m 42s", delta: "−36%" },
  { label: "p95 latency", value: "184 ms", delta: "−22 ms" },
  { label: "Uptime · 30 days", value: "99.98%", delta: "SLA met" },
];

const AGENT_SERIES = [22, 30, 27, 38, 34, 46, 42, 55, 50, 63, 58, 70, 66, 80, 76, 92];
const MANUAL_SERIES = [30, 31, 29, 32, 30, 31, 28, 29, 27, 28, 26, 27, 25, 26, 24, 25];
const W = 560;
const H = 170;
const PAD = 8;

// Smooth curve through the points (Catmull-Rom converted to cubic Béziers).
function curve(data, min, max) {
  const pts = data.map((v, i) => [
    PAD + (i * (W - PAD * 2)) / (data.length - 1),
    H - PAD - ((v - min) / (max - min)) * (H - PAD * 2),
  ]);
  let d = `M${pts[0][0]},${pts[0][1].toFixed(1)}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] || p2;
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C${c1[0].toFixed(1)},${c1[1].toFixed(1)} ${c2[0].toFixed(1)},${c2[1].toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
  }
  const last = pts[pts.length - 1];
  return { line: d, area: `${d} L${last[0]},${H} L${pts[0][0]},${H} Z`, last };
}

const agent = curve(AGENT_SERIES, 15, 95);
const manual = curve(MANUAL_SERIES, 15, 95);
const SIDEBAR = [LayoutDashboard, Bot, Workflow, Cloud, Database, ShieldCheck];

export default function HeroMockup() {
  return (
    <div className="mockup" aria-hidden="true">
      <div className="mockup-window">
        <div className="mockup-bar">
          <span className="mockup-dots">
            <i />
            <i />
            <i />
          </span>
          <span className="mockup-url">
            <Lock size={11} /> app.slt-platform.io / production
          </span>
          <span className="mockup-status">
            <span className="pulse-dot" /> All systems normal
          </span>
        </div>

        <div className="mockup-body">
          <aside className="mockup-side">
            {SIDEBAR.map((Icon, i) => (
              <span key={i} className={i === 0 ? "active" : undefined}>
                <Icon size={16} strokeWidth={1.75} />
              </span>
            ))}
          </aside>

          <div className="mockup-main">
            <div className="mockup-head">
              <div>
                <small>Operations overview</small>
                <strong>Customer support automation</strong>
              </div>
              <div className="mockup-tabs">
                <span className="on">24h</span>
                <span>7d</span>
                <span>30d</span>
              </div>
            </div>

            <div className="mockup-kpis">
              {KPIS.map((k) => (
                <div className="mockup-kpi" key={k.label}>
                  <small>{k.label}</small>
                  <strong>{k.value}</strong>
                  <span>{k.delta}</span>
                </div>
              ))}
            </div>

            <div className="mockup-grid">
              <div className="mockup-card mockup-chart">
                <div className="mockup-card-head">
                  <strong>Requests resolved</strong>
                  <span className="mockup-legend">
                    <i className="a" /> AI agents <i className="b" /> Manual
                  </span>
                </div>
                <svg viewBox={`0 0 ${W} ${H}`}>
                  <defs>
                    <linearGradient id="mk-area" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#5b6cff" stopOpacity="0.28" />
                      <stop offset="100%" stopColor="#5b6cff" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="mk-line" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#8f9bff" />
                      <stop offset="100%" stopColor="#9b6bff" />
                    </linearGradient>
                  </defs>
                  {[0.25, 0.5, 0.75].map((f) => (
                    <line key={f} x1="0" x2={W} y1={H * f} y2={H * f} className="mk-gridline" />
                  ))}
                  <path d={agent.area} fill="url(#mk-area)" />
                  <path d={manual.line} className="mk-manual" />
                  <path d={agent.line} className="mk-agent" stroke="url(#mk-line)" />
                  <circle cx={agent.last[0]} cy={agent.last[1]} r="5" className="mk-dot" />
                  <circle cx={agent.last[0]} cy={agent.last[1]} r="11" className="mk-dot-ring" />
                </svg>
              </div>

              <div className="mockup-card mockup-chat">
                <div className="mockup-card-head">
                  <strong>
                    <Sparkles size={14} /> Ops copilot
                  </strong>
                </div>
                <div className="bubble user">Which invoices failed to sync with the ERP last night?</div>
                <div className="bubble agent">
                  Three — all from one vendor whose tax ID changed. I've drafted the fix for your review.
                </div>
                <div className="mockup-sources">
                  <span>erp_sync.log</span>
                  <span>vendors.csv</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mockup-float mockup-float-a">
        <span className="mockup-float-icon ok">
          <CircleCheck size={18} />
        </span>
        <span>
          <strong>Deploy succeeded</strong>
          <small>main → production · 2 min ago</small>
        </span>
      </div>
      <div className="mockup-float mockup-float-b">
        <span className="mockup-float-icon">
          <ShieldCheck size={18} />
        </span>
        <span>
          <strong>Security scan passed</strong>
          <small>0 critical · 0 high findings</small>
        </span>
      </div>
    </div>
  );
}
