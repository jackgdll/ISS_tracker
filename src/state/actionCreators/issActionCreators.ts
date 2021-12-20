import {
  FetchISSFailure,
  FetchISSFailurePayload,
  FetchISSRequest,
  FetchISSSuccess,
  FetchISSSuccessPayload,
  ISSTypes,
} from "../types";

export const fetchISSRequest = (): FetchISSRequest => ({
  type: ISSTypes.FETCH_ISS_REQUEST,
});

export const fetchISSSuccess = (
  payload: FetchISSSuccessPayload
): FetchISSSuccess => ({
  type: ISSTypes.FETCH_ISS_SUCCESS,
  payload,
});

export const fetchISSFailure = (
  payload: FetchISSFailurePayload
): FetchISSFailure => ({
  type: ISSTypes.FETCH_ISS_FAILURE,
  payload,
});
