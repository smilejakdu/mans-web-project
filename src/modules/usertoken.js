import { createAction, handleActions } from "redux-actions";

const GET_TOKEN = "usertoken/GET_TOKEN";
const DEL_TOKEN = "usertoken/DEL_TOKEN";

export const getUserToken = createAction(GET_TOKEN, (token) => token);
export const delUserToken = createAction(DEL_TOKEN, (token) => token);

const initialState = {
  userToken: null,
};

export default handleActions(
  {
    [GET_TOKEN]: (state, action) => {
      const { token } = action;
      console.log(token);
      return (state.userToken = token);
    },
    [DEL_TOKEN]: (state, action) => ({
      ...state,
      userToken: null,
    }),
  },
  initialState
);
