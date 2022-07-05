import { SAVE_EPISODES } from "../actions/episodes";

export const initialState = {
  //rss : [
    //{
     // items:[]
     //},
  //],
   
  
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_EPISODES:
      return {
        ...state,
        episodes:action.data,
        };
    default:
      return state;
  }
};

export default reducer;