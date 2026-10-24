import LegalPage from "../components/LegalPage";
import usePageMeta from "../hooks/usePageMeta";
import { SITE } from "../data/site";

// Plain-language terms. Have them reviewed by counsel for your jurisdiction before launch.
const SECTIONS = [
  {
    title: "Using this site",
    body: [
      "By using this website, you agree to use it for lawful purposes only and not to misuse any content, forms, or booking tools provided here — including by submitting automated, false, or abusive requests.",
    ],
  },
  {
    title: "Engagements and proposals",
    body: [
      "Information submitted through the Start Collaboration form or booking tool is a request for discussion, not a binding commitment from either party. A project only begins once both sides agree to a written scope.",
      "Pricing, timelines, and deliverables mentioned on this site are illustrative. Final terms are confirmed in a signed statement of work, which takes precedence over anything on this site.",
    ],
  },
  {
    title: "Intellectual property",
    body: [
      `The content, design, and branding on this site belong to ${SITE.name} and may not be copied or reused without permission. Logos and names of partners or clients referenced here remain the property of their respective owners.`,
      "Ownership of work we deliver for clients is set out in each engagement's statement of work.",
    ],
  },
  {
    title: "Confidentiality",
    body: [
      "Project details you share with us are treated as confidential and used only to evaluate and deliver the engagement you've inquired about.",
    ],
  },
  {
    title: "Third-party links",
    body: [
      "This site may link to third-party websites, such as partner or review platforms. We aren't responsible for their content, policies, or practices.",
    ],
  },
  {
    title: "Limitation of liability",
    body: [
      "This site and its content are provided as-is. We make reasonable efforts to keep information accurate and the site available, but we aren't liable for losses arising from its use beyond what's required by law.",
    ],
  },
  {
    title: "Changes to these terms",
    body: [
      "We may update these terms from time to time. Continued use of the site after an update means you accept the revised terms.",
    ],
  },
];

export default function Terms() {
  usePageMeta("Terms of Service", `The terms that apply when you use the ${SITE.name} website or submit an inquiry.`);

  return (
    <LegalPage
      title="Terms of Service"
      sub={`The terms that apply when you use this website or submit an inquiry to ${SITE.name}.`}
      updated="October 2026"
      sections={SECTIONS}
      contactLead="Questions about these terms?"
    />
  );
}
