import { combineReducers } from "redux";
import note from "./post";
import usertoken from "./usertoken";

export default combineReducers({
  note,
  usertoken,
  // 다른 리듀서를 만들게되면 여기에 넣어줌..
});
