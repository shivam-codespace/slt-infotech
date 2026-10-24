import HomeHero from "../components/HomeHero";
import LogoMarquee from "../components/LogoMarquee";
import ServicesOverview from "../components/ServicesOverview";
import ProductsPreview from "../components/ProductsPreview";
import Metrics from "../components/Metrics";
import FeaturedWork from "../components/FeaturedWork";
import ProcessSteps from "../components/ProcessSteps";
import IndustriesPreview from "../components/IndustriesPreview";
import TestimonialCarousel from "../components/TestimonialCarousel";
import Partners from "../components/Partners";
import CtaBanner from "../components/CtaBanner";
import usePageMeta from "../hooks/usePageMeta";

export default function Home() {
  usePageMeta(
    null,
    "SLT Info Tech builds production AI systems, modernizes enterprise software, and runs cloud platforms — one senior-led team from strategy through long-term support."
  );

  return (
    <>
      <HomeHero />
      <LogoMarquee />
      <ServicesOverview />
      <ProductsPreview />
      <Metrics />
      <FeaturedWork />
      <ProcessSteps />
      <IndustriesPreview />
      <TestimonialCarousel />
      <Partners />
      <CtaBanner />
    </>
  );
}
