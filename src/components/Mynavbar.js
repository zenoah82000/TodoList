import React, { useState, useEffect } from 'react';
import { Navbar,Nav,NavDropdown } from 'react-bootstrap';



function Mynavbar(props) {
  return (
    
    <Navbar bg="light" expand="lg" >
        <div className="container">
            <Navbar.Brand href="#home">Nav-Bar</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#link">Link1</Nav.Link>
                  <Nav.Link href="#link">Link2</Nav.Link>
                  {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown> */}
                </Nav>
                {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form> */}
            </Navbar.Collapse>
        </div>
    </Navbar>
  );
}

export default Mynavbar;
