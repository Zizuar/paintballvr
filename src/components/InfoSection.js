import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MainBody from "./MainBody";
import SectionHeader from "./SectionHeader";
import "./InfoSection.scss";

function InfoSection(props) {
  const items = [
    {
      question: "Integer ornare neque mauris?",
      answer:
        "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus. Suspendisse ut tincidunt eros. In velit mi, rhoncus dictum neque a, tincidunt lobortis justo.",
    },
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Nunc nulla mauris, laoreet vel cursus lacinia, consectetur sit amet tellus. Suspendisse ut tincidunt eros. In velit mi, rhoncus dictum neque a, tincidunt lobortis justo.",
    },
    {
      question: "Suspendisse ut tincidunt?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis, metus et mattis ullamcorper. Suspendisse ut tincidunt eros. In velit mi, rhoncus dictum neque a, tincidunt lobortis justo.",
    },
    {
      question: "Ut enim ad minim veniam?",
      answer:
        "Suspendisse ut tincidunt eros. In velit mi, rhoncus dictum neque a, tincidunt lobortis justo.",
    },
  ];

  return (
    <MainBody
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
          className="text-center"
        />
        <Row className="pt-4">
          {items.map((item, index) => (
            <Col xs={12} md={6} key={index}>
              <article className="InfoSection__faq-item">
                <h4>{item.question}</h4>
                <p>{item.answer}</p>
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </MainBody>
  );
}

export default InfoSection;
