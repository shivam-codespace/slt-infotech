import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { PROJECTS } from "../data/projects";

export default function FeaturedWork() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Featured work"
          title={
            <>
              Built to perform, <em>designed</em> to scale.
            </>
          }
          sub="Production systems we've designed, built, and shipped for teams in healthcare, AI, and Web3."
          action={
            <Link to="/projects" className="btn btn-outline">
              View all projects
            </Link>
          }
        />

        <div className="work-grid">
          {PROJECTS.slice(0, 4).map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 80}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
