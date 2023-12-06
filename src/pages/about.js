import React from "react";
import Meta from "./../components/Meta";
import CarouselSection from "./../components/CarouselSection";
import InfoSection from "./../components/InfoSection";
import StatsSection from "./../components/StatsSection";
import BiosSection from "./../components/BiosSection";
import CtaSection from "./../components/CtaSection";

function AboutPage(props) {
  return (
    <>
      <Meta title="About" description="Learn about our company and team" />
      <CarouselSection
        items={[
          {
            image:
              "https://imagedelivery.net/Or463Bai7YZHXLuNOJaOCQ/c51195d0-f459-4afb-0119-bbac41c8dc00/public?auto=format&fit=crop&w=1200&h=600&q=80",
            caption: "",
          },
          {
            image:
              "https://imagedelivery.net/Or463Bai7YZHXLuNOJaOCQ/551aec45-f6a7-468e-71e3-6739d79c7600/public?auto=format&fit=crop&w=1200&height=600&q=80",
            caption: "",
          },
          {
            image:
              "https://imagedelivery.net/Or463Bai7YZHXLuNOJaOCQ/f78e855f-b39e-406e-4a93-9b4178d59900/public?auto=format&fit=crop&w=1200&h=600&q=80",
            caption: "",
          },
          {
            image:
              "https://imagedelivery.net/Or463Bai7YZHXLuNOJaOCQ/38191582-43ff-43e3-83aa-b4b4e8856a00/public?auto=format&fit=crop&w=1200&height=600&q=80",
            caption: "",
          },
        ]}
      />
      <InfoSection
        bg="secondary"
        textColor="light"
        size="sm"
        bgImage=""
        bgImageOpacity={1}
        title="About The Leagues"
        subtitle="VR Paintball leagues have been running in RecRoom since 2017. It wasn't until 2021 when the RRSL program was formed by the dev team that any were officialy recognized. Since then there have been more than a dozen officially sponsored leagues in RecRoom. The PBL and CTPL were two of the original leagues which began prior to official sponsorship & later became founding member of the RecRoom Sponsored Leagues program."
      />
      <StatsSection
        bg="light"
        textColor="dark"
        size="sm"
        bgImage=""
        bgImageOpacity={1}
      />
      <BiosSection
        bg="secondary"
        textColor="dark"
        size="sm"
        bgImage=""
        bgImageOpacity={1}
        title="Organization Bio's"
        subtitle=""
      />
      <CtaSection
        bg="info"
        textColor="light"
        size="sm"
        bgImage=""
        bgImageOpacity={1}
        title="Ready to get started?"
        subtitle=""
        buttonText="Get Started"
        buttonColor="warning"
        buttonPath="/discord"
      />
    </>
  );
}

export default AboutPage;
