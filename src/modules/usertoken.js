import {createAction, handleActions} from "redux-actions";

const GET_TOKEN = "usertoken/GET_TOKEN";
const DEL_TOKEN = "usertoken/DEL_TOKEN";

export const getUserToken = createAction(GET_TOKEN, (token) => token);
export const delUserToken = createAction(DEL_TOKEN, (token) => token);

const initialState = {
    userToken: '',
    isLoggedIn: false,
};

export default handleActions(
    {
        [GET_TOKEN]: (state, action) => ({
            ...state,
            isLoggedIn: true,
            userToken: action.userToken,
        }),
        [DEL_TOKEN]: (state, action) => ({
            ...state,
            userToken: '',
        }),
    },
    initialState
);

