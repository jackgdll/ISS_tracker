import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchISSFailure, fetchISSSuccess } from "../actionCreators";
import { IISSData, issTypes } from "../types";

export const getISSData = () =>
  axios.get<IISSData>("http://api.open-notify.org/iss-now.json", {headers: {'Content-Security-Policy': 'upgrade-insecure-requests'}});

export function* fetchISSDataSaga(): Generator {
  try {
    const res: any = yield call(getISSData);
    yield put(
      fetchISSSuccess({
        data: res.data,
      })
    );
  } catch (e: any) {
    yield put(
      fetchISSFailure({
        error: e.message,
      })
    );
  }
}

export function* ISSSaga() {
  yield all([takeLatest(issTypes.FETCH_ISS_REQUEST, fetchISSDataSaga)]);
}
