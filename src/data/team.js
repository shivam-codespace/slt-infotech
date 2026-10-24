import { CodeXml, Compass, LifeBuoy, PenTool } from "lucide-react";

// PLACEHOLDER: replace with the real team (names, roles, LinkedIn URLs).
export const TEAM = [
  { name: "Maya Chen", role: "Co-Founder & CEO", dept: "Leadership", initials: "MC", focus: "Client strategy and engagement oversight", linkedin: "#" },
  { name: "Diego Ruiz", role: "Co-Founder & CTO", dept: "Leadership", initials: "DR", focus: "Architecture and engineering standards", linkedin: "#" },
  { name: "Sofia Alvarez", role: "Principal Engineer", dept: "Engineering", initials: "SA", focus: "Platform architecture and code quality", linkedin: "#" },
  { name: "Kenji Watanabe", role: "AI/ML Engineer", dept: "Engineering", initials: "KW", focus: "LLM applications, retrieval, and evaluation", linkedin: "#" },
  { name: "Amara Okafor", role: "Cloud Architect", dept: "Engineering", initials: "AO", focus: "Cloud architecture and infrastructure as code", linkedin: "#" },
  { name: "Ravi Menon", role: "Engineering Manager", dept: "Engineering", initials: "RM", focus: "Delivery process and team health", linkedin: "#" },
  { name: "Liam Foster", role: "Product Designer", dept: "Design", initials: "LF", focus: "Product flows and interface design", linkedin: "#" },
  { name: "Nina Kovac", role: "UX Researcher", dept: "Design", initials: "NK", focus: "User research and usability testing", linkedin: "#" },
];

export const STAFFING = [
  {
    icon: Compass,
    title: "An accountable lead",
    description:
      "A senior lead owns your engagement from the first call through launch — one point of contact who knows every decision.",
  },
  {
    icon: CodeXml,
    title: "Senior, hands-on engineers",
    description:
      "Engineers matched to your stack. The people in the scoping call are the people writing the code.",
  },
  {
    icon: PenTool,
    title: "Design where users are involved",
    description:
      "Designers and researchers join when real users are affected, so flows are tested before they're built.",
  },
  {
    icon: LifeBuoy,
    title: "Continuity after launch",
    description:
      "The same team stays on for support and improvements, so nothing gets lost in a handoff.",
  },
];
