export enum issTypes {
  FETCH_ISS_REQUEST = "FETCH_ISS_REQUEST",
  FETCH_ISS_SUCCESS = "FETCH_ISS_SUCCESS",
  FETCH_ISS_FAILURE = "FETCH_ISS_FAILURE",
}

export interface ISSState {
  loading: boolean,
  data: IISSData | null,
  error: string | null,
}

export interface FetchISSSuccessPayload {
  data: IISSData,
}

export interface FetchISSFailurePayload {
  error: string,
}

export interface FetchISSRequest {
  type: typeof issTypes.FETCH_ISS_REQUEST,
}

export interface FetchISSSuccess {
  type: typeof issTypes.FETCH_ISS_SUCCESS,
  payload: FetchISSSuccessPayload,
}

export interface FetchISSFailure {
  type: typeof issTypes.FETCH_ISS_FAILURE,
  payload: FetchISSFailurePayload,
}

export type ISSAction =
    FetchISSRequest
  | FetchISSSuccess
  | FetchISSFailure;

export interface IISSData {
  message: string;
  iss_position: { longitude: number; latitude: number };
  timestamp: number;
}
