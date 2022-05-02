import {combineReducers} from "redux";
import {loadedData} from "./loaded-data/loaded-data";
import {appState} from "./app-state/app-state";
import {user} from "./user/user";

export const NameSpace = {
  DATA: `DATA`,
  APP_STATE: `APP_STATE`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.DATA]: loadedData,
  [NameSpace.APP_STATE]: appState,
  [NameSpace.USER]: user,
});
