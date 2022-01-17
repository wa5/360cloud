import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navbar1() {
    return (
        <>
            <Navbar bg="warning" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">
                                <Link to="/">Home</Link>
                            </Nav.Link>
                            <Nav.Link href="#link">
                                <Link to="/login">login</Link>
                            </Nav.Link>
                            <Nav.Link href="#link">
                                <Link to="/single">single</Link>
                            </Nav.Link>
                            <Nav.Link href="#link">
                                <Link to="/curd">curd</Link>
                            </Nav.Link>
                            <Nav.Link href="#link">
                                <Link to="/hook">hooks</Link>
                            </Nav.Link>
                            <Nav.Link href="#link">
                                <Link to="/webcamp">webcamp</Link>
                            </Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Navbar1;
