import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { PROJECTS } from "../data/projects";

export default function SelectedWork() {
  const shown = [PROJECTS[0], PROJECTS[1], PROJECTS[3], PROJECTS[4]];

  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Selected work"
          title={
            <>
              Recent projects we’ve <em>shipped</em>.
            </>
          }
          sub="A closer look at production systems we designed, built, and delivered."
          action={
            <Link to="/projects" className="btn btn-outline">
              View all projects
            </Link>
          }
        />

        <div className="work-grid">
          {shown.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 80}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
