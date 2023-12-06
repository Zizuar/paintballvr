import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MainBody from "./MainBody";

function StatsSection(props) {
  const items = [
    {
      title: "Members",
      stat: "1.5k +",
    },
    {
      title: "Seasons",
      stat: "14",
    },
    {
      title: "Golden prizes",
      stat: "98",
    },
    {
      title: "coin prizes",
      stat: "500k +",
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
      <Container className="text-center">
        <Row className="justify-content-center">
          {items.map((item, index) => (
            <Col xs={12} md={3} className="py-3 px-4" key={index}>
              <div>
                <small className="text-uppercase">{item.title}</small>
                <h2 className="mt-2">{item.stat}</h2>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </MainBody>
  );
}

export default StatsSection;
