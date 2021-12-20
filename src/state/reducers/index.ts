import { combineReducers } from "@reduxjs/toolkit";
import issReducer from "./issReducer";
import polyLineReducer from "./polyLineReducer";
import timeControlReducer from "./timeControlReducer";

const rootReducer = combineReducers({
  iss: issReducer,
  polyLine: polyLineReducer,
  timeControl: timeControlReducer,
});

export default rootReducer;
