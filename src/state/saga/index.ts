import { all, fork } from "redux-saga/effects";
import { ISSSaga } from "./ISSSaga";

function* rootSaga() {
  yield all([fork(ISSSaga)]);
}

export default rootSaga;
