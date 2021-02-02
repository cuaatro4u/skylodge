import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavbarComponent() {
  return (
    <Navbar fixed="top" expand="lg" className="shadow">
      <Container>
        <Navbar.Brand href="/">Sky Lodge</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#specialmenu">Our Menu</Nav.Link>
            <Nav.Link href="#map">Contact Us</Nav.Link>
          </Nav>
          <div id="google_translate_element"></div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
