import { combineReducers } from "redux";

import { reduce as HelloFlexReducer } from "./HelloFlexState";

// Register your redux store under a unique namespace
export const namespace = "tfrels-sample";

// Combine the reducers
export default combineReducers({
  helloFlex: HelloFlexReducer,
});
