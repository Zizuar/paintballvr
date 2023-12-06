import React from "react";
import "./../styles/global.scss";
import NavbarCustom from "./../components/NavbarCustom";
import IndexPage from "./index";
import AboutPage from "./about";
import FaqPage from "./faq";
import ContactPage from "./contact";
import DiscordPage from "./discord";
import { Switch, Route, Router } from "./../util/router";
import NotFoundPage from "./404";
import Footer from "./../components/Footer";
import "./../util/analytics";

function App(props) {
  return (
    <Router>
      <>
        <NavbarCustom
          bg="info"
          variant="dark"
          expand="md"
          logo="https://imagedelivery.net/Or463Bai7YZHXLuNOJaOCQ/78391565-23a5-419d-81cc-848c42452100/public?auto=format&fit=contain&w=400&h=100&q=80"
        />

        <Switch>
          <Route exact path="/" component={IndexPage} />

          <Route exact path="/about" component={AboutPage} />

          <Route exact path="/faq" component={FaqPage} />

          <Route exact path="/contact" component={ContactPage} />

          <Route exact path="/discord" component={DiscordPage} />

          <Route component={NotFoundPage} />
        </Switch>

        <Footer
          bg="secondary"
          textColor="light"
          size="sm"
          bgImage=""
          bgImageOpacity={1}
          description="VR e-Sports Leagues, Music, & Games"
          copyright={`© ${new Date().getFullYear()} xlr8TOR Designs`}
          logo="https://imagedelivery.net/Or463Bai7YZHXLuNOJaOCQ/78391565-23a5-419d-81cc-848c42452100/public?auto=format&fit=contain&w=400&h=100&q=80"
        />
      </>
    </Router>
  );
}

export default App;
