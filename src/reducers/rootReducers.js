import casesReducer from "./casesReducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  cases: casesReducer,
});
export default rootReducers;
