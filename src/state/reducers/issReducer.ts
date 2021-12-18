import { ISSAction, ISSState, issTypes } from "../types";

const initialState: ISSState = {
  loading: false,
  data: null,
  error: null,
};

export default (state = initialState, action: ISSAction): ISSState => {
  switch (action.type) {
    case issTypes.FETCH_ISS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case issTypes.FETCH_ISS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        error: null,
      };

    case issTypes.FETCH_ISS_FAILURE:
      return {
        ...state,
        loading: false,
        data: null,
        error: action.payload.error,
      }

    default:
      return {
        ...state
      };
  }
};
