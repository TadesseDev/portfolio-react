import { createStore } from "redux";
import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import skills from "./components/skills.js";
import recentWorks from "./components/recentWorks.js";
import certifications from "./components/certifications.js";
import testimonials from "./components/testimonials.js";

const reducers = combineReducers({
  skills,
  recentWorks,
  certifications,
  testimonials
});
export default createStore(reducers, applyMiddleware(thunk, logger));
