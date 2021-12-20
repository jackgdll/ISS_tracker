import {
  PolyLineAppendAction,
  PolyLineAppendPayload,
  PolyLineClearAction,
  PolyLineTypes,
} from "../types";

export const appendToPolyLine = (
  payload: PolyLineAppendPayload
): PolyLineAppendAction => ({
  type: PolyLineTypes.POLYLINE_APPEND,
  payload,
});

export const clearPolyLine = (): PolyLineClearAction => ({
  type: PolyLineTypes.POLYLINE_CLEAR,
});
