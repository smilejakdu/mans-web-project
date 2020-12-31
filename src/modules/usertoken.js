import {createAction, handleActions} from "redux-actions";

const GET_TOKEN = "usertoken/GET_TOKEN";
const DEL_TOKEN = "usertoken/DEL_TOKEN";

export const getUserToken = createAction(GET_TOKEN, (token) => token);
export const delUserToken = createAction(DEL_TOKEN, (token) => token);

const initialState = {
    userToken: '',
    isLoggedIn: false,
    userName: '',
};

export default handleActions(
    {
        [GET_TOKEN]: (state, action) => ({
            ...state,
            isLoggedIn: action.payload.isLoggedIn,
            userName: action.payload.userName,
            userToken: action.payload.userToken,
        }),
        [DEL_TOKEN]: (state, action) => ({
            ...state,
            isLoggedIn: false,
            userName: '',
            userToken: '',
        }),
    },
    initialState
);

