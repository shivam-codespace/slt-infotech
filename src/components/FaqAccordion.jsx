import { useId, useState } from "react";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";

const DEFAULT_FAQS = [
  {
    q: "What industries do you typically work with?",
    a: "We've shipped production systems across healthcare, fintech, enterprise SaaS, Web3, and professional services. We stay technology-first rather than industry-locked — we look at the underlying business problem and pick the right architecture from there.",
  },
  {
    q: "Do you work with early-stage startups or only enterprise clients?",
    a: "Both. Early-stage teams usually need a working prototype fast, while enterprise teams need integration with existing systems and stricter compliance. We scope the engagement differently depending on which one you are.",
  },
  {
    q: "What engagement models are available?",
    a: "Fixed-scope project delivery, embedded team augmentation, and ongoing managed support after launch. Most clients start with a scoped project and move to managed support once the system is live.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Yes — our managed services team handles monitoring, incident response, and incremental improvements after go-live, so the same people who built the system stay accountable for running it.",
  },
  {
    q: "Who owns the code and infrastructure?",
    a: "You do. Code lives in your repositories, infrastructure runs in your cloud accounts, and documentation is handed over as we go — so you can operate independently whenever you choose.",
  },
  {
    q: "How quickly can you start?",
    a: "It depends on scope and team availability. After a discovery call we send a written proposal with a proposed start date; once it's agreed, we schedule kickoff around your team.",
  },
];

export default function FaqAccordion({
  heading = (
    <>
      Common questions about <em>working</em> with us
    </>
  ),
  sub = "Practical answers about team structure, engagement models, and support.",
  faqs = DEFAULT_FAQS,
}) {
  const [openIndex, setOpenIndex] = useState(0);
  const baseId = useId();

  return (
    <section className="section section-alt faq-section">
      <div className="container faq-layout">
        <Reveal className="faq-intro">
          <span className="eyebrow">FAQ</span>
          <h2>{heading}</h2>
          <p className="faq-sub">{sub}</p>
        </Reveal>

        <Reveal className="faq-list" delay={100}>
          {faqs.map((item, i) => {
            const open = i === openIndex;
            const answerId = `${baseId}-a${i}`;
            return (
              <div className={open ? "faq-item open" : "faq-item"} key={item.q}>
                <h3 className="faq-heading">
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => setOpenIndex(open ? -1 : i)}
                    aria-expanded={open}
                    aria-controls={answerId}
                  >
                    <span className="faq-index">{String(i + 1).padStart(2, "0")}</span>
                    <span className="faq-q-text">{item.q}</span>
                    <span className="faq-toggle" aria-hidden="true">
                      <Plus size={16} />
                    </span>
                  </button>
                </h3>
                <div className="faq-answer-wrap" id={answerId} role="region" hidden={!open}>
                  <p className="faq-answer">{item.a}</p>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
