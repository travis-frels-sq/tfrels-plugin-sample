import { combineReducers } from "redux";

// Register your redux store under a unique namespace
export const namespace = "tfrels-sample";

const initState = { macros: [] };

const sampleReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOAD_MACROS":
      return { ...state, macros: action.payload };
    case "CLEAR_MACROS":
      return { ...state, macros: [] };
    default:
      return state;
  }
};

// Combine the reducers
export default combineReducers({
  SampleData: sampleReducer,
});
