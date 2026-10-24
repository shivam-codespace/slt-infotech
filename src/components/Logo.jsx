import { useId } from "react";

export default function Logo({ className }) {
  const gradId = useId();

  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="SLT Info Tech logo"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#c9d4ff" />
          <stop offset="100%" stopColor="#e9c9ff" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="10" fill={`url(#${gradId})`} />
      <rect x="5" y="22" width="11" height="11" rx="3" fill="#05060a" />
      <rect x="15.5" y="13" width="11" height="11" rx="3" fill="#05060a" opacity="0.72" />
      <rect x="26" y="4" width="11" height="11" rx="3" fill="#05060a" opacity="0.45" />
    </svg>
  );
}
