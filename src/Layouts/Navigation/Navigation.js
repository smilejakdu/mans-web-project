import React, {useState} from "react";
import {Link} from "react-router-dom";

import {HeaderBorder, Logo} from "./Navigation.styled";
import {Button, Navbar, Form, FormControl, Nav, Badge} from "react-bootstrap";
import InputModal from "../../components/InputModal/InputModal";

// redux
import {useSelector, useDispatch} from "react-redux";


const Navigation = () => {
    const [modalShow, setModalShow] = useState(false);
    const {isLoggedIn} = useSelector(state => state.usertoken);
    console.log(isLoggedIn);

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
                <Navbar.Brand href="/django">
                    <Badge variant="secondary">python community</Badge>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/django">Django</Nav.Link>
                        <Nav.Link href="/flask">Flask</Nav.Link>
                        <Nav.Link href="/mldl">ML & DL</Nav.Link>
                        {isLoggedIn ? (
                            <>
                                <Nav.Link href="/mypage">Mypage</Nav.Link>
                                <Nav.Link
                                    onClick={(e) => {
                                        e.preventDefault();
                                        // dispatch(delToken());
                                    }}
                                >
                                    SignOut
                                </Nav.Link>
                            </>
                        ) : (
                            <Nav.Link onClick={loginBtn}>SignIn</Nav.Link>
                        )}
                    </Nav>
                    <Form inline>
                        <Nav.Link href="/write" className="outline-success">
                            write
                        </Nav.Link>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
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

