import React from "react";
import {Navbar,Nav,Container} from "react-bootstrap";
import "./Navi.scss";

const Navi=()=>{
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Logo goes here</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto block">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/team">Team</Nav.Link>
                        <Nav.Link href="/events">Events</Nav.Link>
                        <Nav.Link href="/gallery">Gallery</Nav.Link>
                        <Nav.Link href="/new">What's New</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Navi;