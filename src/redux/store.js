import { createStoreHook } from "react-redux";
import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import skills from "./components/skills.js";
const reducers = combineReducers({
  skills,
});
export default createStoreHook(reducers, applyMiddleware(thunk, logger));
