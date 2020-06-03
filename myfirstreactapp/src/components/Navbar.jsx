import React, {Component} from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import '../App.css';


const NavBar = () => {
    return (
 <Navbar className = "nav" expand="lg">
  <Navbar.Brand href="#home">Strive Bookstore</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#">Home</Nav.Link>
      <Nav.Link href="#">About</Nav.Link>
      <Nav.Link href="#">Browse</Nav.Link>
      
      </Nav>
     </Navbar.Collapse>
</Navbar>
    )
}



export default NavBar;



