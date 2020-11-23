import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { HeaderBorder, Logo } from "./Navigation.styled";
import {
  Button,
  Navbar,
  Form,
  FormControl,
  Nav,
  Badge,
  NavDropdown,
} from "react-bootstrap";

const Navigation = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <Badge variant="secondary">Man's Beauty</Badge>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/sale">sale</Nav.Link>
            <Nav.Link href="/popularity">popularity</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
