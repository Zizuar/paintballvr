import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import MainBody from "./MainBody";
import SectionHeader from "./SectionHeader";

function HeroBottomSection(props) {
  return (
    <MainBody
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className="text-center">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={1}
          spaced={true}
        />
        <LinkContainer to={props.buttonPath}>
          <Button variant={props.buttonColor} size="lg">
            {props.buttonText}
          </Button>
        </LinkContainer>
      </Container>
    </MainBody>
  );
}

export default HeroBottomSection;
