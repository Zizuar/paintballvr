import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import MainBody from "./MainBody";
import SectionHeader from "./SectionHeader";
import "./ServerSection.scss";

function ServerSection(props) {
  const plans = [
    {
      id: "fso",
      name: "FSO V-Sports",
      src: "https://discordapp.com/widget?id=424341891820027954&amp;theme=dark",
    },
    {
      id: "pbl",
      name: "PBL ",
      src: "https://discord.com/widget?id=354702516484833293&theme=dark",
    },
    {
      id: "ctpl",
      name: "CTPL",
      src: "https://discord.com/widget?id=591400091185709057&theme=dark",
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
        <Row className="justify-content-center">
          {plans.map((plan, index) => (
            <Col
              md={12}
              lg={4}
              className="py-3 d-flex align-items-stretch"
              key={index}
            >
              <Card className="w-100" bg="secondary">
                <Card.Body className="d-flex flex-column p-2">
                  <h5 className="font-weight-bold mb-4 text-light">
                    {plan.name}
                  </h5>
                  <iframe
                    className="ServerSection__widget"
                    src={plan.src}
                    width={270}
                    height={500}
                    sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                  />
                  <Button
                    variant="info"
                    size="md"
                    block={true}
                    href={`https://${plan.id}.paintballvr.net/`}
                    className="mt-auto"
                  >
                    League Website
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </MainBody>
  );
}

export default ServerSection;
