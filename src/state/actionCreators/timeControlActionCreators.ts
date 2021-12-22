import {
  TimeControlBackwardAction,
  TimeControlBackwardPayload,
  TimeControlForwardAction,
  TimeControlForwardPayload,
  TimeControlResetAction,
  TimeControlSetAction,
  TimeControlSetPayload,
  TimeControlTypes,
} from "../types";

export const timeControlForward = (
  payload: TimeControlForwardPayload
): TimeControlForwardAction => ({
  type: TimeControlTypes.TIME_FORWARD,
  payload,
});

export const timeControlBackward = (
  payload: TimeControlBackwardPayload
): TimeControlBackwardAction => ({
  type: TimeControlTypes.TIME_BACKWARD,
  payload,
});

export const timeControlReset = (): TimeControlResetAction => ({
  type: TimeControlTypes.TIME_RESET,
});

export const timeControlSet = (
  payload: TimeControlSetPayload
): TimeControlSetAction => ({
  type: TimeControlTypes.TIME_SET,
  payload,
});
