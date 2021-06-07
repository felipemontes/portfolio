import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./css/Navbar.css";

export default function Navigation() {
  return (
    <Navbar variant="light" expand="lg" className="navbar">
      <Navbar.Brand href="#home" className="logo-text">
        FL
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="justify-content-end main-navbar "
      >
        <Nav style={{ textAlign: "center" }}>
          <Nav.Link href="/" className="nav-item underline">
            Inicio
          </Nav.Link>
          <Nav.Link href="/services" className="nav-item underline">
            Servicios
          </Nav.Link>
          <Nav.Link href="/about" className="nav-item underline">
            Acerca de mi
          </Nav.Link>
          <Nav.Link href="/links" className="nav-item underline">
            Links
          </Nav.Link>
        </Nav>
        <div class="underbar"></div>
      </Navbar.Collapse>
    </Navbar>
  );
}
