import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";

function NavbarCustom(props) {
  return (
    <Navbar bg={props.bg} variant={props.variant} expand={props.expand}>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              className="d-inline-block align-top"
              src={props.logo}
              alt="Logo"
              height="35"
            />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbar-nav" className="border-0" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end" />
      </Container>
    </Navbar>
  );
}

export default NavbarCustom;
