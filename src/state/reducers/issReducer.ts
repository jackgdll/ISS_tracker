import { ISSAction, ISSState, ISSTypes } from "../types";

const initialState: ISSState = {
  loading: false,
  data: [],
  error: null,
};

const issReducer = (state = initialState, action: ISSAction): ISSState => {
  switch (action.type) {
    case ISSTypes.FETCH_ISS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ISSTypes.FETCH_ISS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: state.data.concat(action.payload.data),
        error: null,
      };

    case ISSTypes.FETCH_ISS_FAILURE:
      return {
        ...state,
        loading: false,
        data: state.data,
        error: action.payload.error,
      }

    default:
      return {
        ...state
      };
  }
};

export default issReducer;
