import {
  Car,
  Clapperboard,
  Eye,
  Factory,
  HeartPulse,
  Hotel,
  House,
  Landmark,
  Lock,
  Network,
  Scale,
  ShieldCheck,
  ShoppingCart,
  Store,
  Truck,
  Umbrella,
} from "lucide-react";

export const INDUSTRIES = [
  {
    icon: Landmark,
    title: "Banking & Finance",
    description:
      "Systems for credit analysis, fraud detection, and investment decisions that need to be fast, accurate, and explainable.",
    useCases: ["Fraud detection", "Credit decisioning", "Regulatory reporting"],
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Patient portals, telehealth platforms, and clinical dashboards integrated with the health data standards providers already use.",
    useCases: ["Patient intake", "Telehealth", "Clinical dashboards"],
  },
  {
    icon: Store,
    title: "Retail",
    description:
      "Customer behavior analysis, inventory management, and personalization built for high-volume retail workflows.",
    useCases: ["Demand forecasting", "Personalization", "Store operations"],
  },
  {
    icon: Truck,
    title: "Supply Chain & Logistics",
    description:
      "Shipment tracking, demand forecasting, and invoice automation that keep supply chains visible end to end.",
    useCases: ["Shipment tracking", "Route planning", "Invoice automation"],
  },
  {
    icon: Umbrella,
    title: "Insurance",
    description:
      "Claims intake, risk-assessment support, and self-service tools that speed up policyholder workflows.",
    useCases: ["Claims triage", "Underwriting support", "Policyholder self-service"],
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Predictive maintenance, quality inspection, and production optimization for plant operations.",
    useCases: ["Predictive maintenance", "Visual inspection", "Production planning"],
  },
  {
    icon: Car,
    title: "Automotive",
    description:
      "Route optimization, predictive maintenance, and service workflows for fleet and dealer operations.",
    useCases: ["Fleet telematics", "Service scheduling", "Dealer CRM"],
  },
  {
    icon: Hotel,
    title: "Hospitality",
    description:
      "Guest personalization, operations support, and booking tools that lift conversion and cut manual work.",
    useCases: ["Booking engines", "Guest messaging", "Revenue reporting"],
  },
  {
    icon: House,
    title: "Real Estate",
    description:
      "Valuation support, pricing tools, and CRM automation built for brokerages and property managers.",
    useCases: ["Valuation models", "Lead routing", "Tenant portals"],
  },
  {
    icon: Clapperboard,
    title: "Media & Entertainment",
    description:
      "Content workflows, audience personalization, and recommendation systems that grow engagement.",
    useCases: ["Recommendations", "Content operations", "Audience analytics"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Personalization, demand forecasting, and inventory automation that lift conversion rates.",
    useCases: ["Product search", "Inventory sync", "Checkout optimization"],
  },
  {
    icon: Scale,
    title: "Legal",
    description:
      "Research assistance, contract analysis, and compliance monitoring built for legal teams.",
    useCases: ["Contract review", "Legal research", "Compliance monitoring"],
  },
];

export const REGULATED_PRINCIPLES = [
  {
    icon: ShieldCheck,
    title: "Compliance by design",
    description:
      "We design to the frameworks your sector works under — such as HIPAA, PCI DSS, SOC 2, and GDPR — and document the controls for your auditors.",
  },
  {
    icon: Eye,
    title: "Explainable, reviewable AI",
    description:
      "Models that inform credit, claims, or clinical decisions keep a human in the loop, log their inputs, and show why each recommendation was made.",
  },
  {
    icon: Lock,
    title: "Data stays where it should",
    description:
      "Data residency, encryption, and least-privilege access are decided during architecture — not retrofitted the week before launch.",
  },
  {
    icon: Network,
    title: "Built around what you run",
    description:
      "We integrate with the systems already in place — core banking, EHRs over FHIR and HL7, ERPs, and CRMs — instead of asking you to replace them.",
  },
];
