const PATTERNS = {
  Healthcare: (color) => (
    <>
      <circle cx="330" cy="50" r="85" fill={color} opacity="0.12" />
      <path
        d="M20 140 H110 L130 95 L160 185 L185 140 H380"
        fill="none"
        stroke={color}
        strokeOpacity="0.55"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  AI: (color) => (
    <>
      <circle cx="60" cy="200" r="90" fill={color} opacity="0.1" />
      <g stroke={color} strokeOpacity="0.4" strokeWidth="1.2" fill="none">
        <path d="M30 40 L120 90 L210 50 L300 110 L370 70" />
        <path d="M20 160 L100 130 L190 180 L280 150 L380 200" />
        <path d="M120 90 L190 180" />
        <path d="M210 50 L280 150" />
      </g>
      <g fill={color} fillOpacity="0.9">
        {[
          [30, 40], [120, 90], [210, 50], [300, 110], [370, 70],
          [20, 160], [100, 130], [190, 180], [280, 150], [380, 200],
        ].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3.5" />
        ))}
      </g>
    </>
  ),
  Web3: (color) => (
    <>
      <circle cx="320" cy="60" r="70" fill={color} opacity="0.12" />
      <g fill="none" stroke={color} strokeOpacity="0.5" strokeWidth="2">
        <circle cx="130" cy="140" r="46" />
        <circle cx="190" cy="110" r="46" />
        <circle cx="190" cy="170" r="46" />
      </g>
    </>
  ),
  Fintech: (color) => (
    <>
      <circle cx="60" cy="50" r="80" fill={color} opacity="0.1" />
      <g fill={color} fillOpacity="0.45">
        <rect x="40" y="150" width="26" height="60" rx="4" />
        <rect x="80" y="110" width="26" height="100" rx="4" />
        <rect x="120" y="135" width="26" height="75" rx="4" />
        <rect x="160" y="85" width="26" height="125" rx="4" />
        <rect x="200" y="125" width="26" height="85" rx="4" />
      </g>
    </>
  ),
};

export default function ProjectArt({ category, color }) {
  const render = PATTERNS[category] || PATTERNS.AI;
  return (
    <svg className="work-art" viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {render(color)}
    </svg>
  );
}
