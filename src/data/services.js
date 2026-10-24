import {
  BrainCircuit,
  Building,
  ChartColumnIncreasing,
  Cloud,
  CodeXml,
  Compass,
  LifeBuoy,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

export const slugify = (label) =>
  label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const SERVICE_GROUPS = [
  {
    label: "Product & Engineering",
    services: [
      {
        icon: BrainCircuit,
        title: "Artificial Intelligence",
        short: "Copilots, agents, and assistants grounded in your own data.",
        description:
          "Designing and deploying practical AI systems that improve decisions, automate repetitive work, and extend what your team can handle — with the evaluation and guardrails production use demands.",
        items: [
          "AI strategy & use-case selection",
          "Copilots & knowledge assistants",
          "Workflow automation agents",
          "Retrieval (RAG) over your data",
          "Evaluation, guardrails & monitoring",
        ],
        outcome: "A production AI feature — not a demo — with real usage data and a plan to improve it.",
      },
      {
        icon: CodeXml,
        title: "Software Engineering",
        short: "Custom platforms, web apps, and APIs built to be maintained.",
        description:
          "Building reliable custom software around complex business rules and workflows — designed with your users, covered by tests, and documented so your own team can take it over.",
        items: [
          "Custom software platforms",
          "Web applications & portals",
          "API design & development",
          "Systems integration",
          "Legacy application modernization",
        ],
        outcome: "A maintainable codebase, test coverage, and documentation your own team can pick up.",
      },
      {
        icon: Smartphone,
        title: "Mobile App Development",
        short: "Native and cross-platform apps your users keep coming back to.",
        description:
          "Designing and building native and cross-platform mobile experiences that put your product in your users' hands — fast, accessible, and ready for the app stores.",
        items: [
          "iOS & Android development",
          "Cross-platform apps",
          "Mobile UI/UX design",
          "Release automation & app-store delivery",
          "Mobile maintenance & monitoring",
        ],
        outcome: "An app store–ready build plus the design system and CI pipeline to keep shipping updates.",
      },
    ],
  },
  {
    label: "Cloud, Data & Platforms",
    services: [
      {
        icon: Cloud,
        title: "Cloud & Infrastructure",
        short: "Migrations, infrastructure as code, and lower cloud bills.",
        description:
          "Modernizing infrastructure for scalability, reliability, and security — with automated deployments and cost controls built in rather than bolted on.",
        items: [
          "Cloud migration (AWS, Azure, GCP)",
          "Infrastructure as code",
          "DevOps & CI/CD pipelines",
          "Cloud cost optimization",
          "Architecture & reliability reviews",
        ],
        outcome: "Infrastructure as code, automated deploys, and a lower cloud bill with no single point of failure.",
      },
      {
        icon: Building,
        title: "Enterprise Systems",
        short: "ERP, CRM, and HCM platforms that share data cleanly.",
        description:
          "Implementing and connecting the systems that run core operations, customers, and people — configured around your processes instead of forcing workarounds.",
        items: [
          "ERP implementations",
          "CRM implementations",
          "HCM implementations",
          "Platform integrations & data sync",
        ],
        outcome: "Systems that share data cleanly instead of requiring manual exports between tools.",
      },
      {
        icon: ChartColumnIncreasing,
        title: "Data & Analytics",
        short: "Reliable pipelines and dashboards leadership trusts.",
        description:
          "Turning fragmented operational data into reliable pipelines, a single source of truth, and reporting people actually use to make decisions.",
        items: [
          "Data engineering & pipelines",
          "Data warehousing",
          "Business intelligence",
          "Executive dashboards",
          "Data quality & governance",
        ],
        outcome: "Dashboards leadership actually trusts, backed by pipelines that don't break on schema changes.",
      },
    ],
  },
  {
    label: "Transformation & Operations",
    services: [
      {
        icon: Compass,
        title: "Digital Transformation",
        short: "Sequenced roadmaps with owners and dates — not just decks.",
        description:
          "Helping organizations modernize technology, simplify processes, and adopt new ways of working — with change management that makes it stick.",
        items: [
          "Technology strategy & roadmaps",
          "Process optimization",
          "Operating model design",
          "Change management & adoption",
        ],
        outcome: "A sequenced roadmap, not just a strategy deck — with owners and dates attached to each step.",
      },
      {
        icon: LifeBuoy,
        title: "Managed Services",
        short: "Monitoring, support, and monthly improvements after launch.",
        description:
          "Ongoing support, maintenance, and optimization across applications, infrastructure, and AI systems — from the team that knows how they were built.",
        items: [
          "Application support & maintenance",
          "Cloud operations & monitoring",
          "AI system management",
          "Continuous improvement",
        ],
        outcome: "A team on call for incidents and a backlog of improvements shipped every month, not just uptime.",
      },
      {
        icon: ShieldCheck,
        title: "Cybersecurity",
        short: "Risk assessments with the fixes implemented, not just reported.",
        description:
          "Protecting systems, data, and access through proactive security controls, identity-first architecture, and ongoing monitoring.",
        items: [
          "Security assessments",
          "Zero trust architecture",
          "Identity & access management",
          "Managed security & monitoring",
        ],
        outcome: "A prioritized risk report and the fixes implemented — not just a findings PDF.",
      },
    ],
  },
];

export const SERVICES = SERVICE_GROUPS.flatMap((group) =>
  group.services.map((service) => ({ ...service, slug: slugify(service.title), group: group.label }))
);

// Review so this matches the tools your team actually uses.
export const TECH_STACK = [
  { label: "AI & Machine Learning", items: ["OpenAI", "Anthropic Claude", "Azure OpenAI", "LangChain", "LlamaIndex", "PyTorch", "pgvector"] },
  { label: "Web & Mobile", items: ["React", "Next.js", "TypeScript", "React Native", "Flutter", "Swift", "Kotlin"] },
  { label: "Backend & APIs", items: ["Node.js", "Python", ".NET", "Java", "Go", "GraphQL", "REST"] },
  { label: "Cloud & DevOps", items: ["AWS", "Microsoft Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform", "GitHub Actions"] },
  { label: "Data & Analytics", items: ["PostgreSQL", "Snowflake", "Databricks", "BigQuery", "dbt", "Power BI", "Tableau"] },
  { label: "Enterprise Platforms", items: ["Zoho", "Salesforce", "Microsoft Dynamics 365", "SAP", "Workday", "ServiceNow"] },
];
