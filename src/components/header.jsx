import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="white" className="shadow-sm">
      <Container className="justify-content-center">
        <Navbar.Brand className="fw-bold fs-3 text-primary">
          MediConnect Practice
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
