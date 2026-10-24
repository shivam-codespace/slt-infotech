import LegalPage from "../components/LegalPage";
import usePageMeta from "../hooks/usePageMeta";
import { SITE } from "../data/site";

// Plain-language policy. Have it reviewed by counsel for your jurisdiction before launch.
const SECTIONS = [
  {
    title: "Information we collect",
    body: [
      "We collect information you give us directly when you fill out the Start Collaboration form, request a call, or email us. That can include:",
    ],
    list: [
      "Your name, work email, company, and phone number",
      "The services, budget range, timeline, and preferred call time you select",
      "Project details and anything else you choose to tell us",
    ],
  },
  {
    title: "Information collected automatically",
    body: [
      "Like most websites, our hosting provider records limited technical information — such as browser type, device type, and the pages requested — to deliver the site, keep it secure, and keep it running reliably.",
      "This website does not set advertising or cross-site tracking cookies. If we add analytics in the future, we'll use it only in aggregate to understand which pages are useful, and we'll update this policy first.",
    ],
  },
  {
    title: "How we use your information",
    body: [
      "We use the information you submit to respond to your inquiry, scope potential engagements, and schedule calls.",
      "We do not sell your information, and we do not use it for advertising. Project details you share are used only to evaluate and deliver the work you've asked about.",
    ],
  },
  {
    title: "How we store and protect it",
    body: [
      "Submissions are sent directly to our team's inbox over an encrypted connection, and access is limited to the people who need it to respond to you or deliver your project.",
    ],
  },
  {
    title: "How long we keep it",
    body: [
      "We keep inquiry records only as long as needed to respond to you or deliver an active engagement, then remove them. If we work together, project records are kept for as long as our agreement and applicable law require.",
    ],
  },
  {
    title: "Sharing with third parties",
    body: [
      "We don't share your information with third parties for their own marketing purposes. We may share it with service providers who help us operate — for example, email delivery and website hosting — who are bound by confidentiality obligations and may only use it to provide their service to us.",
      "We may also disclose information if required by law, or to protect the rights and safety of our clients, our team, or others.",
    ],
  },
  {
    title: "Your choices and rights",
    body: [
      `You can ask us what information we hold about you, ask us to correct it, or ask us to delete it at any time by emailing ${SITE.email}. Depending on where you live, you may have additional rights under local data protection laws, and we'll honor them.`,
    ],
  },
  {
    title: "Children's privacy",
    body: [
      "This website is intended for business audiences and isn't directed at children. We don't knowingly collect information from anyone under 16.",
    ],
  },
  {
    title: "Changes to this policy",
    body: [
      "If we make material changes to how we handle your information, we'll update this page and the revision date above.",
    ],
  },
];

export default function Privacy() {
  usePageMeta("Privacy Policy", `How ${SITE.name} collects, uses, and protects the information you share with us.`);

  return (
    <LegalPage
      title="Privacy Policy"
      sub={`How ${SITE.name} collects, uses, and protects the information you share with us — in plain language.`}
      updated="October 2026"
      sections={SECTIONS}
      contactLead="Questions about this policy, or want to exercise your rights?"
    />
  );
}
