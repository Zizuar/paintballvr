import React from "react";
import Meta from "./../components/Meta";
import ServerSection from "./../components/ServerSection";

function DiscordPage(props) {
  return (
    <>
      <Meta title="Discord" />
      <ServerSection
        bg="light"
        textColor="dark"
        size="sm"
        bgImage=""
        bgImageOpacity={1}
        title="Our Discord Communities"
        subtitle="Choose one or choose them all! Each offers different experinces and interactions."
      />
    </>
  );
}

export default DiscordPage;
