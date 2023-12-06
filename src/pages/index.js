import React from "react";
import Meta from "./../components/Meta";
import HeroSection from "./../components/HeroSection";
import LeaguesSection from "./../components/LeaguesSection";
import AssociatedSection from "./../components/AssociatedSection";
import HeroBottomSection from "./../components/HeroBottomSection";

function IndexPage(props) {
  return (
    <>
      <Meta />
      <HeroSection
        bg="secondary"
        textColor="light"
        size="sm"
        bgImage="https://imagedelivery.net/Or463Bai7YZHXLuNOJaOCQ/2e576b41-053b-466c-918c-e562d6518000/public?auto=format&fit=crop&w=1600&h=800&q=80"
        bgImageOpacity={0.68}
        title="Virtual Reality Paintball Leagues"
        subtitle="Quickly join the community by jumping in to a discord."
        buttonText="Discord Servers"
        buttonColor="warning"
        buttonPath="/discord"
      />
      <LeaguesSection
        bg="secondary"
        textColor="light"
        size="md"
        bgImage="https://imagedelivery.net/Or463Bai7YZHXLuNOJaOCQ/6f9dde08-1a0b-463d-2133-44b71ebb6c00/public?auto=format&fit=crop&w=1600&h=800&q=80"
        bgImageOpacity={0.8}
        title="Leagues"
        subtitle="Select a league to proceed to their specific site."
      />
      <AssociatedSection
        bg="light"
        textColor="dark"
        size="sm"
        bgImage=""
        bgImageOpacity={1}
        title="Sponsors & Associates"
        subtitle=""
      />
      <HeroBottomSection
        bg="secondary"
        textColor="info"
        size="md"
        bgImage="https://imagedelivery.net/Or463Bai7YZHXLuNOJaOCQ/cdad3fb7-c643-4f89-9aa7-413763558200/public?auto=format&fit=crop&w=1600&h=800&q=80"
        bgImageOpacity={0.5}
        title=" "
        subtitle=" "
        buttonText=" "
        buttonColor="transparent"
        buttonPath="/"
      />
    </>
  );
}

export default IndexPage;
