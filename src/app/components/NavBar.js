import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar
      className="py-3 navigation"
      collapseOnSelect
      expand="lg"
      fixed="top"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand className="nav-links" href="#home">
          Nalu Furniture Center
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" />
          <Nav>
            <Nav.Link className="nav-links" href="#deets">
              Home
            </Nav.Link>
            <Nav.Link className="nav-links" href="#m">
              Interior
            </Nav.Link>
            <Nav.Link className="nav-links" href="#m2">
              Products
            </Nav.Link>
            <Nav.Link className="nav-links" href="#m3">
              About
            </Nav.Link>
            <Nav.Link className="nav-links" href="#m4">
              Contacts
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
