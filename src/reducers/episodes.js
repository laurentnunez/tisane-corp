import { SAVE_EPISODES } from "../actions/episodes";

export const initialState = {
 // episodes : [
  //  {
      items:[]
  //   },
 // ],
   
  
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_EPISODES:
      return {
        ...state,
        items:action.data,
        };
    default:
      return state;
  }
};

export default reducer;