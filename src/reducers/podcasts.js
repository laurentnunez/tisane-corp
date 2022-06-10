import { SAVE_PODCASTS } from "../actions/podcasts";

export const initialState = {
  
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PODCASTS:
      return {
        ...state,
        podcasts: action.data,
      };
    default:
      return state;
  }
};

export default reducer;