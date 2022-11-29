import { createStoreHook } from "react-redux";
import { combineReducers } from "redux";
import skills from "./components/skills.js";
const reducers = combineReducers({
  skills,
});
export default createStoreHook(reducers);
