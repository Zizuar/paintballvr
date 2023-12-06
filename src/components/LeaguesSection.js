import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import MainBody from "./MainBody";
import SectionHeader from "./SectionHeader";
import AspectRatio from "./AspectRatio";
import { Link } from "./../util/router";
import "./LeaguesSection.scss";

function LeaguesSection(props) {
  const items = [
    {
      title: "",
      body: "The Original RecRoom Paintball League",
      image:
        "https://imagedelivery.net/Or463Bai7YZHXLuNOJaOCQ/e021110c-0365-436e-911d-7ead9355ad00/public?auto=format&fit=cover&w=100&h=100&q=80",
      href: "https://pbl.paintballvr.net",
    },
    {
      title: "",
      body: "Classic Teleport Paintball League",
      image:
        "https://imagedelivery.net/Or463Bai7YZHXLuNOJaOCQ/d5a46dd2-3cd2-4059-743c-7df84997d900/public?auto=format&fit=cover&w=100&h=100&q=80",
      href: "https://ctpl.paintballvr.net",
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
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
        />
        <Card bg="transparent">
          <Row className="no-gutters overflow-hidden">
            {items.map((item, index) => (
              <Col
                xs={12}
                lg={6}
                style={{
                  display: "flex",
                  alignItems: "stretch",
                  justifyContent: "center",
                }}
                key={index}
              >
                <div className="LeaguesSection__item has-text-centered">
                  <div className="LeaguesSection__image-container">
                    <AspectRatio ratio={4 / 4}>
                      <Link to={item.href}>
                        <Image src={item.image} alt={item.title} fluid={true} />
                      </Link>
                    </AspectRatio>
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Card>
      </Container>
    </MainBody>
  );
}

export default LeaguesSection;
