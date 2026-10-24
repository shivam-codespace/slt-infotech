import { Gauge, Globe, Handshake, Layers, Target, Users } from "lucide-react";

// PLACEHOLDER: confirm open roles, requirements, perks, and the hiring process.
export const ROLES = [
  {
    title: "Senior Full-Stack Engineer",
    dept: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "Own features end to end across a React frontend and a Node/Python backend, working directly with clients' engineering teams.",
    responsibilities: [
      "Design, build, and ship features across React front ends and Node.js or Python services",
      "Join client conversations to shape requirements and explain technical trade-offs",
      "Write tests, review code, and keep documentation current",
      "Harden systems for production — performance, security, and observability",
    ],
    requirements: [
      "5+ years building production web applications",
      "Strong TypeScript and React, plus solid backend experience in Node.js or Python",
      "Experience with a major cloud provider (AWS, Azure, or GCP)",
      "Comfort working directly with non-technical stakeholders",
    ],
  },
  {
    title: "AI/ML Engineer",
    dept: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "Build retrieval-augmented systems and fine-tuned models for production use cases, from prototype through deployment.",
    responsibilities: [
      "Build retrieval pipelines, agents, and LLM-backed features for client products",
      "Design evaluation sets and monitoring so quality is measured, not assumed",
      "Work with data engineers on ingestion, chunking, and permissions",
      "Take prototypes through production deployment and ongoing support",
    ],
    requirements: [
      "3+ years in ML or applied AI engineering, with shipped production systems",
      "Strong Python; experience with LLM APIs, vector search, and evaluation tooling",
      "A clear grasp of cost, latency, and privacy trade-offs in AI systems",
      "Clear written communication — you'll explain model behavior to clients",
    ],
  },
  {
    title: "Cloud Infrastructure Engineer",
    dept: "Engineering",
    location: "San Francisco Bay Area",
    type: "Full-time",
    description:
      "Design and operate cloud environments — IaC, CI/CD, observability — for client platforms running at scale.",
    responsibilities: [
      "Design landing zones and infrastructure as code for new and migrating workloads",
      "Build CI/CD pipelines and deployment automation",
      "Set up monitoring, alerting, and incident runbooks",
      "Lead cost and reliability reviews for client environments",
    ],
    requirements: [
      "4+ years operating production infrastructure on AWS or Azure",
      "Hands-on Terraform (or similar), containers, and Kubernetes",
      "Experience with observability tooling and on-call practices",
      "Security-first habits: least privilege, secrets management, audit logging",
    ],
  },
  {
    title: "Product Designer",
    dept: "Design",
    location: "Remote",
    type: "Contract",
    description:
      "Translate ambiguous problems into clear flows and interfaces, partnering closely with engineering from day one.",
    responsibilities: [
      "Run discovery sessions and turn findings into flows, wireframes, and prototypes",
      "Design production-ready interfaces and contribute to design systems",
      "Pair with engineers through implementation and QA",
      "Test with real users and iterate on what you learn",
    ],
    requirements: [
      "A portfolio of shipped web or mobile products",
      "Strong interaction design and systems thinking",
      "Fluency in Figma and comfort with prototyping",
      "Experience designing complex, data-heavy workflows",
    ],
  },
  {
    title: "Delivery Operations Lead",
    dept: "Operations",
    location: "San Francisco Bay Area",
    type: "Full-time",
    description:
      "Keep engagements on scope and on schedule — resourcing, timelines, and client communication across active projects.",
    responsibilities: [
      "Plan staffing and timelines across active engagements",
      "Run milestone reviews and keep scope, risks, and decisions documented",
      "Be a steady point of contact for client stakeholders",
      "Improve our delivery playbooks as the team grows",
    ],
    requirements: [
      "4+ years in delivery, program, or project management at a software firm or agency",
      "Comfort with technical conversations and agile delivery",
      "Excellent written communication and follow-through",
      "Experience running fixed-scope and retainer engagements",
    ],
  },
];

export const PERKS = [
  {
    icon: Handshake,
    title: "Direct client work",
    description: "No account-manager layer. You talk to the people you're building for and hear how your work lands.",
  },
  {
    icon: Target,
    title: "Outcomes over timesheets",
    description: "We price by milestones, not hours — so you're measured on what ships, not how long you looked busy.",
  },
  {
    icon: Users,
    title: "Senior peers",
    description: "Work alongside people who've run production systems, and get thoughtful code review on everything you ship.",
  },
  {
    icon: Globe,
    title: "Remote-friendly",
    description: "Most roles are remote, with a Bay Area studio for workshops, reviews, and the occasional whiteboard session.",
  },
  {
    icon: Layers,
    title: "A modern stack",
    description: "AI, cloud, data, and mobile work across industries — you won't spend years maintaining one legacy system.",
  },
  {
    icon: Gauge,
    title: "A sustainable pace",
    description: "We scope before we commit, which means fewer fire drills and more time to build things properly.",
  },
];

export const HIRING_STEPS = [
  { title: "Intro conversation", description: "A 30-minute call with a founder or senior lead about your experience and what you're looking for." },
  { title: "Technical deep-dive", description: "A conversation about systems you've built — the decisions, trade-offs, and what you'd do differently." },
  { title: "Working session", description: "A short paired session on a realistic problem. No take-home marathons, no trick puzzles." },
  { title: "Offer", description: "We move quickly once there's a fit — and if there isn't, we'll tell you directly." },
];
