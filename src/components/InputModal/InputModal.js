import React, { useState, useEffect } from "react";
import {
  ModalBody,
  ModalOverlay,
  ModalButtonWrap,
  Input,
  LoginRegisterBtn,
} from "./InputModal.styled";
import { useHistory } from "react-router-dom";
import Axios from "axios";

const InputModal = ({ isOpen, close, textData }) => {
  const [text, setText] = useState(textData);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");

  const history = useHistory();

  const onClickBtn = () => {
    if (text === "login") {
      let data = {
        email: email,
        password: password,
      };
      Axios.post("/users/signin", data)
        .then((res) => {
          let {
            data: { access },
          } = res;
          console.log("access : ", access);
          localStorage.setItem("token", access);
          setEmail("");
          setPassword("");
          history.push("/");
        })
        .catch((err) => {
          console.log(err);
          alert("비밀번호와 아이디");
        });
    } else if (text === "signup") {
      let data = {
        email: email,
        password: password,
        repassword: repassword,
      };
      Axios.post("/users/signup", data)
        .then((res) => {
          console.log(res);
          setEmail("");
          setPassword("");
          setRePassword("");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onClickBtn();
    }
  };

  return (
    <>
      {isOpen ? (
        <div>
          <ModalOverlay onClick={close} />
          <ModalBody>
            <p className="title">{text}</p>
            <div className="content">
              {text === "login" ? (
                <div>
                  <div>
                    <Input
                      type="text"
                      placeholder="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      onKeyPress={handleKeyPress}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
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
                      placeholder="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      onKeyPress={handleKeyPress}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      placeholder="password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      onKeyPress={handleKeyPress}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
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
