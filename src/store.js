// 토큰을 저장하거나 불러오거나 하기 위한 context를 관리하기 위한 파일

import { createContext, useContext } from "react";
import useReducerWithSideEffects, {
  UpdateWithSideEffect,
} from "use-reducer-with-side-effects";
import { getStorageItem, setStorageItem } from "./util/localstorage";
// 프로젝트 전체에서 공유하고 싶은 값이 있을 때 - 공유 객체

const AppContext = createContext();

// 1. 액션 타입, 2. 액션 함수, 3. 리듀서 -> state, dispatch
const SET_TOKEN = "app/set_token";
const DEL_TOKEN = "app/del_token";

export const setToken = (token) => ({ type: SET_TOKEN, payload: token });
export const delToken = () => ({ type: DEL_TOKEN });

const reducer = (prevState, action) => {
  const { type } = action; // 1. 토큰을 저장해라, 2. 토큰을 삭제해라
  if (type === SET_TOKEN) {
    // 토큰을 저장
    const { payload: jwtToken } = action;
    const newState = { ...prevState, jwtToken, isAuthenticated: true };
    return UpdateWithSideEffect(newState, (state, dispath) => {
      // 로컬 스토리지에 토큰 저장
      setStorageItem("jwtToken", jwtToken);
    });
  } else if (type === DEL_TOKEN) {
    // 토큰을 삭제
    const newState = { ...prevState, jwtToken: "", isAuthenticated: false };
    return UpdateWithSideEffect(newState, (state, dispath) => {
      // 로컬 스토리지에 토큰 삭제
      setStorageItem("jwtToken", "");
    });
  }
  return prevState;
};

export const AppProvider = ({ children }) => {
  const jwtToken = getStorageItem("jwtToken", "");
  const [store, dispatch] = useReducerWithSideEffects(reducer, {
    jwtToken,
    isAuthenticated: jwtToken.length > 0,
  });
  console.log(store.isAuthenticated);
  return (
    <AppContext.Provider value={{ store, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
