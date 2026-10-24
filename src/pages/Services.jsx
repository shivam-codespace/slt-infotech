import ServicesHero from "../components/ServicesHero";
import ServicesGrid from "../components/ServicesGrid";
import TechStack from "../components/TechStack";
import EngagementModels from "../components/EngagementModels";
import FaqAccordion from "../components/FaqAccordion";
import CtaBanner from "../components/CtaBanner";
import usePageMeta from "../hooks/usePageMeta";

const SERVICE_FAQS = [
  {
    q: "How do you scope a new engagement?",
    a: "We start with a short discovery call to understand the business objective and current systems, then come back with a written scope, timeline, and fixed or capacity-based estimate — before any work begins.",
  },
  {
    q: "Can you work across more than one discipline at once?",
    a: "Yes — most engagements span two or three disciplines (for example cloud migration plus data engineering). One accountable team plans across all of them instead of coordinating separate vendors.",
  },
  {
    q: "What if our needs change after an engagement starts?",
    a: "Scope changes go through a short change-order process so timeline and cost stay predictable. For embedded-team and retainer engagements, capacity simply flexes month to month.",
  },
  {
    q: "Do you take over systems built by another team?",
    a: "Regularly. We run a short technical audit first so you know what you're inheriting, then fold ongoing support into a managed retainer once we're up to speed.",
  },
  {
    q: "Will we be locked into your tools or hosting?",
    a: "No. We build on your cloud accounts and repositories using widely adopted, well-documented technology, and hand over documentation as we go — so your team or another partner can take over at any time.",
  },
];

export default function Services() {
  usePageMeta(
    "Services",
    "AI, software engineering, mobile, cloud, enterprise systems, data, transformation, managed services, and cybersecurity — delivered by one accountable, senior-led team."
  );

  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <EngagementModels />
      <TechStack />
      <FaqAccordion
        heading={
          <>
            Common questions about our <em>services</em>
          </>
        }
        sub="Practical answers about scoping, engagement models, and ownership."
        faqs={SERVICE_FAQS}
      />
      <CtaBanner
        heading={
          <>
            Not sure which discipline you <em>need</em> yet?
          </>
        }
        subtext="Tell us what's slowing your team down and we'll recommend a scope — no obligation."
        buttonText="Talk to a Specialist"
      />
    </>
  );
}
