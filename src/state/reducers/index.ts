import { combineReducers } from "@reduxjs/toolkit";
import issReducer from "./issReducer";

const rootReducer = combineReducers({
  iss: issReducer,
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
