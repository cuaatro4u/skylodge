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
            <Nav.Link to="#about">About Us</Nav.Link>
            <Nav.Link href="#link">Our Menu</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
