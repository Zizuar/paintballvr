import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import MainBody from "./MainBody";
import SectionHeader from "./SectionHeader";
import Avatar from "./Avatar";

function BiosSection(props) {
  const items = [
    {
      avatar:
        "https://imagedelivery.net/Or463Bai7YZHXLuNOJaOCQ/30ce57e1-cc61-42e1-caf4-f11b7e716d00/public",
      name: "FSO",
      role: "League Broadcasting",
      bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo.",
    },
    {
      avatar:
        "https://imagedelivery.net/Or463Bai7YZHXLuNOJaOCQ/7c5972e7-3e73-4e5b-18f4-c7dd6beeac00/public",
      name: "PBL",
      role: "The Original League",
      bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam! Labore reprehenderit beatae magnam animi!",
    },
    {
      avatar:
        "https://imagedelivery.net/Or463Bai7YZHXLuNOJaOCQ/d5a46dd2-3cd2-4059-743c-7df84997d900/public",
      name: "CTPL",
      role: "Classic Teleport Locomotion",
      bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam! Labore reprehenderit beatae magnam animi!",
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
          {items.map((item, index) => (
            <Col
              xs={12}
              md={6}
              lg={4}
              className="py-3 d-flex align-items-stretch"
              key={index}
            >
              <Card bg="light">
                <Card.Body className="d-flex flex-column text-center align-items-center p-4">
                  <Avatar src={item.avatar} alt={item.name} size="128px" />
                  <h6 className="font-weight-bold mb-0 mt-4">{item.name}</h6>
                  <small>{item.role}</small>
                  <Card.Text className="mt-4">{item.bio}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </MainBody>
  );
}

export default BiosSection;
