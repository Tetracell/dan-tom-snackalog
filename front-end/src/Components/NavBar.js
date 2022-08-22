import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";



export const NavBar = () => {
  return (
    <div>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="NBB" href="/snacks"><h1>Snacks</h1></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand className="NBB" href="/"><h3>Home</h3></Navbar.Brand>
          <br/><br/><br/>
          <Navbar.Brand className="NBB" href="/snacks/new"><h3 >New Snack</h3></Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};



