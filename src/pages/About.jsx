import AboutHero from "../components/AboutHero";
import OurStory from "../components/OurStory";
import MissionBand from "../components/MissionBand";
import ValuesCards from "../components/ValuesCards";
import ProcessTimeline from "../components/ProcessTimeline";
import ComparisonTable from "../components/ComparisonTable";
import SelectedWork from "../components/SelectedWork";
import WorkspaceGallery from "../components/WorkspaceGallery";
import Recognition from "../components/Recognition";
import FaqAccordion from "../components/FaqAccordion";
import CtaBanner from "../components/CtaBanner";
import usePageMeta from "../hooks/usePageMeta";

export default function About() {
  usePageMeta(
    "About Us",
    "Why SLT Info Tech exists, how we work, and what we value — a senior-led team that modernizes the systems businesses rely on."
  );

  return (
    <>
      <AboutHero />
      <OurStory />
      <MissionBand />
      <ProcessTimeline />
      <ValuesCards />
      <WorkspaceGallery />
      <ComparisonTable />
      <Recognition />
      <SelectedWork />
      <FaqAccordion />
      <CtaBanner />
    </>
  );
}
