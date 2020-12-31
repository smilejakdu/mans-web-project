import React, {useState, useEffect, useCallback} from "react";
import {Link, useHistory} from "react-router-dom";

import {HeaderBorder, Logo} from "./Navigation.styled";
import {Button, Navbar, Form, FormControl, Nav, Badge} from "react-bootstrap";
import InputModal from "../../components/InputModal/InputModal";
import Axios from "axios";
// redux
import {useSelector, useDispatch} from "react-redux";
import {getUserToken, delUserToken} from "../../modules/usertoken";

const Navigation = () => {
    const [modalShow, setModalShow] = useState(false);
    const {isLoggedIn, userName} = useSelector(state => state.usertoken);
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            Axios
                .get("/accounts/token", {
                    headers: {
                        Authorization: `${token}`,
                    },
                })
                .then(res => {
                    let {
                        data: {data},
                    } = res;
                    dispatch(getUserToken({
                        userToken: token,
                        userName: data,
                        isLoggedIn: true,
                    }));
                }).catch(err => {
                console.log("err : ", err);
            })
        }
    }, []);

    const ModalShowOpen = () => {
        setModalShow(true);
    };

    const ModalShowClose = () => {
        setModalShow(false);
    };

    const loginBtn = useCallback(() => {
        console.log("login btn click");
        setModalShow(true);
    }, []);

    const logoutBtn = useCallback(() => {
        localStorage.removeItem("token")
        dispatch(delUserToken());
    }, []);

    return (
        <HeaderBorder>
            <Navbar bg="light" expand="lg">
                {isLoggedIn ? (
                    <Navbar.Brand href="/django">
                        <Badge variant="secondary">{userName}</Badge>
                    </Navbar.Brand>
                ) : (
                    <Navbar.Brand href="/django">
                        <Badge variant="secondary">python community</Badge>
                    </Navbar.Brand>
                )
                }
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
                                    onClick={logoutBtn}
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

