import { createStore } from "redux";
import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import skills from "./components/skills.js";
import recentWorks from "./components/recentWorks.js";
import certifications from "./components/certifications.js";
const reducers = combineReducers({
  skills,
  recentWorks,
  certifications,
});
export default createStore(reducers, applyMiddleware(thunk, logger));
