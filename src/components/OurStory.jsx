import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { STATS } from "../data/site";

export default function OurStory() {
  return (
    <section className="section section-alt our-story">
      <div className="container">
        <Reveal>
          <span className="eyebrow">Our story</span>
          <h2>
            Why we <em>started</em> SLT Info Tech
          </h2>
        </Reveal>

        <div className="our-story-grid">
          <Reveal as="p" className="story-lead">
            We started SLT Info Tech because too many organizations were stuck — running on
            disconnected tools, manual processes, and software that had quietly outgrown
            what it was built for.
          </Reveal>

          <Reveal className="story-body" delay={100}>
            <p>
              That pattern showed up everywhere we looked: healthcare, fintech, enterprise
              SaaS, Web3, and professional services. Teams knew what they needed but couldn't
              find a partner who combined strategy, engineering, and infrastructure under one
              roof — so they ended up coordinating three vendors and owning none of the result.
            </p>
            <p>
              {/* PLACEHOLDER: client names below should match real, approved references. */}
              Across {STATS.platforms.value} production platforms and {STATS.aiSystems.value} AI and
              automation systems shipped, we've helped Nova Health redesign how medical
              professionals collaborate, helped Loopwave consolidate scattered tools into a
              single conversational layer, and gave Cedar & Vine the infrastructure to run
              creator campaigns at scale.
            </p>
            <blockquote>
              We choose the right technology for each problem, and build systems that keep
              running long after launch — then stay accountable for them.
            </blockquote>
            <Link to="/team" className="link-arrow">
              Meet the team <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
