import { FetchISSFailure, FetchISSFailurePayload, FetchISSRequest, FetchISSSuccess, FetchISSSuccessPayload, issTypes } from "../types";

export const fetchISSRequest = (): FetchISSRequest => ({
  type: issTypes.FETCH_ISS_REQUEST,
});

export const fetchISSSuccess = (
  payload: FetchISSSuccessPayload,
): FetchISSSuccess => ({
  type: issTypes.FETCH_ISS_SUCCESS,
  payload,
});

export const fetchISSFailure = (
  payload: FetchISSFailurePayload,
): FetchISSFailure => ({
  type: issTypes.FETCH_ISS_FAILURE,
  payload,
})
