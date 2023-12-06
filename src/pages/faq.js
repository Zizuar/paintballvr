import React from "react";
import Meta from "./../components/Meta";
import FaqSection from "./../components/FaqSection";
import CtaSection from "./../components/CtaSection";

function FaqPage(props) {
  return (
    <>
      <Meta title="Faq" />
      <FaqSection
        bg="secondary"
        textColor="light"
        size="md"
        bgImage="https://imagedelivery.net/Or463Bai7YZHXLuNOJaOCQ/9c76dd94-a887-4884-8b04-b3c32362d700/public?auto=format&fit=contain&w=400&h=100&q=80"
        bgImageOpacity={0.3}
        title="Frequently Asked Questions"
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

export default FaqPage;
