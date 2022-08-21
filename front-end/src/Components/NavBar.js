import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";



export const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/"><h1>Snacks</h1></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/snacks/new"><h3>New Snack</h3></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};



