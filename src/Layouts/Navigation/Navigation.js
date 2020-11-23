import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { HeaderBorder, Logo } from "./Navigation.styled";
import { Button, Navbar, Form, FormControl, Nav, Badge } from "react-bootstrap";

const Navigation = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="/home">
          <Badge variant="secondary">Man's Style</Badge>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/sale">sale</Nav.Link>
          <Nav.Link href="/popularity">popularity</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar>
    </>
  );
};

export default Navigation;
