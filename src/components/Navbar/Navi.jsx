import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Navi.scss";
import logo from "./logo.webp";

const Navi = () => {
  return (
    <Navbar expand="lg" className="nav">
      <Navbar.Brand href="/">
        <img className="nav__logo nav__logo-animate" src={logo} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav__links">
          <Nav.Link href="#home" className="nav__links-text">
            Home
          </Nav.Link>
          <Nav.Link href="#team" className="nav__links-text">
            Team
          </Nav.Link>
          <Nav.Link href="#events" className="nav__links-text">
            Events
          </Nav.Link>
          <Nav.Link href="#gallery" className="nav__links-text">
            Gallery
          </Nav.Link>
          <Nav.Link href="#whatsNew" className="nav__links-text">
            What's New
          </Nav.Link>
        </Nav>
        <button type="button" className="nav__btn">
          Sign In
        </button>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Navi;
