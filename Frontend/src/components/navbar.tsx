// src/components/Navbar.tsx

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg" className='p-0'>
      <Container fluid className='p.0'> 
        <Navbar.Brand as={Link} to="/">E-commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/AddProduct">Add Product</Nav.Link>
            <Nav.Link as={Link} to="/">Log out</Nav.Link>
          </Nav>
      </Container>
      <style>
        {`
          .container-fluid {
            padding: 0;
          }
        `}
      </style>
    </Navbar>
  );
};

export default NavigationBar;
