// Company-wide details reused across the site (header, footer, contact,
// legal pages). Anything marked PLACEHOLDER must be replaced with real
// details before launch.

export const SITE = {
  name: "SLT Info Tech",
  tagline:
    "We modernize businesses through AI, cloud, automation, and scalable digital systems — one senior-led team from strategy through long-term support.",
  email: "hello@example.com", // PLACEHOLDER: real inbox
  location: "San Francisco Bay Area", // PLACEHOLDER: confirm office location
  responseTime: "within one business day",
  socials: [
    { label: "LinkedIn", icon: "linkedin", href: "#" }, // PLACEHOLDER: company page URL
    { label: "X", icon: "x", href: "#" }, // PLACEHOLDER: profile URL
  ],
  // PLACEHOLDER: links to real third-party review profiles
  reviewBadges: [
    { label: "Reviewed 4.9/5", href: "#" },
    { label: "Top Rated 2026", href: "#" },
  ],
  founders: [
    { name: "Maya Chen", initials: "MC" }, // PLACEHOLDER
    { name: "Diego Ruiz", initials: "DR" }, // PLACEHOLDER
  ],
};

// Headline numbers, reused across pages so they always match.
// PLACEHOLDER: confirm each figure is accurate before launch.
export const STATS = {
  platforms: { value: "15+", label: "Production platforms built" },
  aiSystems: { value: "50+", label: "AI & automation systems shipped" },
  mobileApps: { value: "10+", label: "Mobile apps launched" },
  satisfaction: { value: "98%", label: "Client satisfaction" },
  opsOverhead: { value: "35%", label: "Avg. ops overhead cut" },
  setupTime: { value: "50%", label: "Faster setup time" },
};

export const mailto = (subject) =>
  `mailto:${SITE.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
