import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const Navbarr = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand><img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/logo/logo.png.webp" alt="" /></Navbar.Brand>   

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="me-5">Home</Nav.Link> 
            
            <Nav.Link href="/" className="me-5">About</Nav.Link>   
              

            <Nav.Link href="/about" className="me-5">Service</Nav.Link>
          
            <Nav.Link href="/blog" className="me-5">Blog</Nav.Link>
            <Nav.Link href="/contact" className="me-5">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>   

  );
};

export default   
 Navbarr;