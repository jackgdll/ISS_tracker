import {
  TimeControlAction,
  TimeControlState,
  TimeControlTypes,
} from "../types";

const initialState: TimeControlState = {
  live: true,
  data: null,
};

const timeControlReducer = (
  state = initialState,
  action: TimeControlAction
) => {
  switch (action.type) {
    case TimeControlTypes.TIME_RESET:
      return initialState;

    case TimeControlTypes.TIME_FORWARD:
      if (state.live) {
        return initialState;
      } else {
        const data = action.payload.data;
        const idx = data.findIndex(
          (elem) => elem.timestamp === state.data?.timestamp
        );

        if (data[idx + 1].timestamp === state.data?.timestamp) {
          return {
            live: true,
            data: null,
          };
        } else {
          return {
            live: false,
            data: data[idx + 1],
          };
        }
      }

    case TimeControlTypes.TIME_BACKWARD:
      const data = action.payload.data;
      const idx = state.data
        ? data.findIndex((elem) => elem.timestamp === state.data?.timestamp)
        : data.length - 1;

      console.log("live: " + state.live);

      if (idx === -1) {
        return state;
      }
      return {
        live: false,
        data: idx === 0 ? state.data : data[idx - 1],
      };

    default:
      return state;
  }
};

export default timeControlReducer;
