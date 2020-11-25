import React, { useState } from "react";
import { Link } from "react-router-dom";

import { HeaderBorder, Logo } from "./Navigation.styled";
import { Button, Navbar, Form, FormControl, Nav, Badge } from "react-bootstrap";
import { delToken } from "../../store";
import { useAppContext } from "../../store";
import InputModal from "../../components/InputModal/InputModal";

const Navigation = () => {
  const [modalShow, setModalShow] = useState(false);
  const { store, dispatch } = useAppContext();

  const ModalShowOpen = () => {
    setModalShow(true);
  };

  const ModalShowClose = () => {
    setModalShow(false);
  };

  const loginBtn = () => {
    console.log("login btn click");
    setModalShow(true);
  };

  return (
    <HeaderBorder>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/home">
          <Badge variant="secondary">Man's Beauty</Badge>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/hair">hair</Nav.Link>
            <Nav.Link href="/dress">dress</Nav.Link>
            {store.isAuthenticated ? (
              <>
                <Nav.Link href="/mypage">Mypage</Nav.Link>
                <Nav.Link href="/mypage">SignOut</Nav.Link>
              </>
            ) : (
              <Nav.Link onClick={loginBtn}>SignIn</Nav.Link>
            )}
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      {modalShow && (
        <InputModal
          isOpen={ModalShowOpen}
          close={ModalShowClose}
          textData="login"
        ></InputModal>
      )}
    </HeaderBorder>
  );
};

export default Navigation;
