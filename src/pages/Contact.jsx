import PageHero from "../components/PageHero";
import ContactInfo from "../components/ContactInfo";
import BookingWidget from "../components/BookingWidget";
import FirstCallInfo from "../components/FirstCallInfo";
import usePageMeta from "../hooks/usePageMeta";
import { SITE } from "../data/site";

export default function Contact() {
  usePageMeta(
    "Contact",
    "Book a 30-minute discovery call with a senior lead at SLT Info Tech, or email us — we reply within one business day."
  );

  return (
    <>
      <PageHero
        breadcrumb="Contact"
        title={
          <>
            Let’s talk about what you’re <em>building</em>.
          </>
        }
        sub={`Book a 30-minute discovery call with a senior lead below, or reach out by email. We follow up ${SITE.responseTime}.`}
        className="page-hero-compact"
      />
      <ContactInfo />
      <BookingWidget />
      <FirstCallInfo />
    </>
  );
}
