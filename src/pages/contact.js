import React from "react";
import Meta from "./../components/Meta";
import ContactSection from "./../components/ContactSection";

function ContactPage(props) {
  return (
    <>
      <Meta title="Contact" />
      <ContactSection
        bg="secondary"
        textColor="white"
        size="md"
        bgImage="https://imagedelivery.net/Or463Bai7YZHXLuNOJaOCQ/89e0efe1-52f7-4c85-215e-1458f4758a00/public"
        bgImageOpacity={0.5}
        title="Contact Us"
        subtitle=""
        buttonText="Send message"
        buttonColor="info"
        showNameField={true}
      />
    </>
  );
}

export default ContactPage;
