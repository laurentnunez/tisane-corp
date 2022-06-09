//import { FETCH_PODCASTS } from "../actions/podcasts";

export const initialState = {
  
};

const reducer = (state= initialState, action = {}) => {
  switch (action.type) {
    //case FETCH_PODCASTS:
      //return{
        //...state,
        //episodes: action.data,
      //};
    default:
      return state;
  }
};

export default reducer;