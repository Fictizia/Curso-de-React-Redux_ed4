import initialState from "./initialState";
import { PICKED_ELEMENTS } from "./action-creators";

export default (state = initialState, action) => {
  switch (action.type) {
    case PICKED_ELEMENTS: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
};
