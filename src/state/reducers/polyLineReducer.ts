import { last, pythag } from "../../utils";
import { PolyLineAction, PolyLineState, PolyLineTypes } from "../types";

const DISTANCE_LIMIT = 1000;

const initialState: PolyLineState = [];

const polyLineReducer = (state = initialState, action: PolyLineAction) => {
  switch (action.type) {
    case PolyLineTypes.POLYLINE_APPEND:
      let lastLine: number[][] = last(state);
      const lastPoint: number[] = last(lastLine);

      // Starts a new line if the ISS wrap arround the map
      if (state.length === 0) {
        return [[[action.payload.latitude, action.payload.longitude]]];
      }
      if (
        state.length > 0 &&
        lastPoint.length === 2 &&
        pythag(
          lastPoint[0],
          action.payload.latitude,
          lastPoint[1],
          action.payload.longitude
        ) > DISTANCE_LIMIT
      ) {
        return state.concat([
          [[action.payload.latitude, action.payload.longitude]],
        ]);
      } else {
        lastLine.push([action.payload.latitude, action.payload.longitude]);
        state[state.length - 1] = lastLine;
        return state;
      }

    case PolyLineTypes.POLYLINE_CLEAR:
      return initialState;

    default:
      return state;
  }
};

export default polyLineReducer;
