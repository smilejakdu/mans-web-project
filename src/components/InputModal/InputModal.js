import React, {useState, useCallback} from "react";
import {
    ModalBody,
    ModalOverlay,
    ModalButtonWrap,
    Input,
    LoginRegisterBtn,
} from "./InputModal.styled";
import {useHistory} from "react-router-dom";
import Axios from "axios";
import {useSelector, useDispatch} from "react-redux"
import {getUserToken} from '../../modules/usertoken';

const InputModal = ({isOpen, close, textData}) => {
    const [text, setText] = useState(textData);
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRePassword] = useState("");

    const dispatch = useDispatch();
    const history = useHistory();


    const onClickBtn = useCallback(() => {

        if (text === "login") {
            let data = {
                username: username,
                password: password,
            };
            Axios.post("/accounts/login/", data)
                .then((res) => {
                    let {
                        data: {data: jwtToken},
                    } = res;
                    dispatch(getUserToken({
                        userToken: jwtToken,
                        userName: username,
                        isLoggedIn: true,
                    }));
                    localStorage.setItem("token", jwtToken);
                    setUserName("");
                    setPassword("");
                    close();
                })
                .catch((err) => {
                    console.log(err);
                    alert("비밀번호와 아이디");
                });
        } else if (text === "signup") {
            let data = {
                username: username,
                password: password,
                repassword: repassword,
            };
            Axios.post("/accounts/signup/", data)
                .then((res) => {
                    console.log(res);
                    setUserName("");
                    setPassword("");
                    setRePassword("");
                    close();
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    })


    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            onClickBtn();
        }
    };

    return (
        <>
            {isOpen ? (
                <div>
                    <ModalOverlay onClick={close}/>
                    <ModalBody>
                        <p className="title">{text}</p>
                        <div className="content">
                            {text === "login" ? (
                                <div>
                                    <div>
                                        <Input
                                            type="text"
                                            placeholder="username"
                                            onChange={(e) => setUserName(e.target.value)}
                                            value={username}
                                            onKeyPress={handleKeyPress}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            type="password"
                                            placeholder="password"
                                            onChange={(e) => setPassword(e.target.value)}
                                            value={password}
                                            onKeyPress={handleKeyPress}
                                            required
                                        />
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <div>
                                        <Input
                                            type="text"
                                            placeholder="username"
                                            onChange={(e) => setUserName(e.target.value)}
                                            value={username}
                                            onKeyPress={handleKeyPress}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            type="password"
                                            placeholder="password"
                                            onChange={(e) => setPassword(e.target.value)}
                                            value={password}
                                            onKeyPress={handleKeyPress}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            type="password"
                                            placeholder="repassword"
                                            onChange={(e) => setRePassword(e.target.value)}
                                            value={repassword}
                                            onKeyPress={handleKeyPress}
                                            required
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                        <div>
                            <LoginRegisterBtn onClick={onClickBtn}>button</LoginRegisterBtn>
                        </div>
                        <ModalButtonWrap>
                            {text === "login" ? (
                                <p onClick={() => setText("signup")}>
                                    계정이 필요하신가요? 지금 가입하기
                                </p>
                            ) : (
                                <p onClick={() => setText("login")}>로그인하기</p>
                            )}
                        </ModalButtonWrap>
                    </ModalBody>
                </div>
            ) : null}
        </>
    );
};

export default InputModal;
