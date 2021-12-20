import { combineReducers } from "@reduxjs/toolkit";
import issReducer from "./issReducer";
import polyLineReducer from "./polyLineReducer";

const rootReducer = combineReducers({
  iss: issReducer,
  polyLine: polyLineReducer,
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
