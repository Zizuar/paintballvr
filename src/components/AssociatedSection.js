import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MainBody from "./MainBody";
import SectionHeader from "./SectionHeader";
import { Link } from "./../util/router";

function AssociatedSection(props) {
  const items = [
    {
      name: "Future Sports Organization",
      image:
        "https://imagedelivery.net/Or463Bai7YZHXLuNOJaOCQ/30ce57e1-cc61-42e1-caf4-f11b7e716d00/public",
      width: "140px",
      href: "https://fso.gg",
    },
    {
      name: "RecRoom",
      image:
        "https://imagedelivery.net/Or463Bai7YZHXLuNOJaOCQ/9a89789b-7a0d-49c5-ce09-9039828e6800/public",
      width: "140px",
      href: "https://www.recroom.com",
    },
    {
      name: "XLR8tor Designs",
      image:
        "https://imagedelivery.net/Or463Bai7YZHXLuNOJaOCQ/6f151e0a-2f00-4b7d-e5a9-d3e8004cf200/public",
      width: "135px",
      href: "https://xlr8tor.com",
    },
    {
      name: "VR & Pancakes",
      image:
        "https://imagedelivery.net/Or463Bai7YZHXLuNOJaOCQ/18b1bc26-577b-4299-944b-fc20f73c2800/public",
      width: "130px",
      href: "https://www.vrandpancakes.tv",
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
        <Row className="justify-content-center">
          {items.map((item, index) => (
            <Col md="auto" className="py-3 px-4" key={index}>
              <Link to={item.href}>
                <div className="align-bottom">
                  <img src={item.image} width={item.width} alt={item.name} />
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </MainBody>
  );
}

export default AssociatedSection;
