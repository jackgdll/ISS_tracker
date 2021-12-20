export enum ISSTypes {
  FETCH_ISS_REQUEST = "FETCH_ISS_REQUEST",
  FETCH_ISS_SUCCESS = "FETCH_ISS_SUCCESS",
  FETCH_ISS_FAILURE = "FETCH_ISS_FAILURE",
}

export interface ISSState {
  loading: boolean,
  data: IISSData[],
  error: string | null,
}

export interface FetchISSSuccessPayload {
  data: IISSData,
}

export interface FetchISSFailurePayload {
  error: string,
}

export interface FetchISSRequest {
  type: typeof ISSTypes.FETCH_ISS_REQUEST,
}

export interface FetchISSSuccess {
  type: typeof ISSTypes.FETCH_ISS_SUCCESS,
  payload: FetchISSSuccessPayload,
}

export interface FetchISSFailure {
  type: typeof ISSTypes.FETCH_ISS_FAILURE,
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

//////////////////////////////////////////

export enum PolyLineTypes {
  POLYLINE_APPEND = 'POLYLINE_APPEND',
  POLYLINE_CLEAR = 'POLYLINE_CLEAR',
}

export type PolyLineState = number[][][];

export interface PolyLineAppendPayload {
  latitude: number;
  longitude: number;
}

export interface PolyLineAppendAction {
  type: typeof PolyLineTypes.POLYLINE_APPEND;
  payload: PolyLineAppendPayload;
}

export interface PolyLineClearAction {
  type: typeof PolyLineTypes.POLYLINE_CLEAR;
}

export type PolyLineAction =
    PolyLineAppendAction
  | PolyLineClearAction;
