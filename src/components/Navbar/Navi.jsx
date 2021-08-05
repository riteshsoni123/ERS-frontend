import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navi.scss";
import logo from "./logo.webp";

const Navi = () => {
    return (
        <Navbar  expand="lg" className="nav-size nav-color">
            <Container>
                <Navbar.Brand href="#home"><img className="animate-logo logo-size " src={logo} alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto block">
                        <Nav.Link href="/" className="Nav_text nav_container">Home</Nav.Link>
                        <Nav.Link href="/team" className="Nav_text nav_container">Team</Nav.Link>
                        <Nav.Link href="/events" className="Nav_text nav_container">Events</Nav.Link>
                        <Nav.Link href="/gallery" className="Nav_text  nav_container">Gallery</Nav.Link>
                        <Nav.Link href="/events" className="Nav_text nav_container">Events</Nav.Link>
                        <Nav.Link href="/new" className="Nav_text nav_container">What's New</Nav.Link>
                        <Nav.Link href="/new" ><button type="button" class="btn btn-danger btn-size">Sign In</button></Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Navi;