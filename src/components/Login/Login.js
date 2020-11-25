import React, { useState } from "react";
import { Container, InputForm, Input, Button } from "./Login.styled";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import { setToken } from "../../store";
import { useAppContext } from "store";

const Login = () => {
  const { store, dispatch } = useAppContext();
  const history = useHistory();

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log("form data 확인", JSON.stringify(formData));

    try {
      const response = await Axios.post("/accounts/token/", formData);
      // 로그인 완료 후 처리
      const {
        data: { token: jwtToken },
      } = response;
      console.log("토큰 확인 ", jwtToken);
      // 토큰 저장!!
      dispatch(setToken(jwtToken));
      history.push("/home");
    } catch (e) {
      if (e.response) {
        const { data } = e.response;
        console.error(data);
      }
    }
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div class="form-group">
          <label>User Name</label>
          <input
            type="text"
            class="form-control"
            name="username"
            onKeyPress={handleKeyPress}
          />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input
            type="password"
            class="form-control"
            name="password"
            onKeyPress={handleKeyPress}
          />
        </div>

        <button type="submit" class="btn btn-primary">
          SignIn
        </button>
      </form>
    </div>
  );
};

export default Login;
