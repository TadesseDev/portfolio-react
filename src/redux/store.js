import { createStore } from "redux";
import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import skills from "./components/skills.js";
import recentWorks from "./components/recentWorks.js";
const reducers = combineReducers({
  skills,
  recentWorks,
});
export default createStore(reducers, applyMiddleware(thunk, logger));
