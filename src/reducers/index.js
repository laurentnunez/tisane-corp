import { combineReducers } from 'redux';
import episodesReducer from './episodes';

const rootReducer = combineReducers({
  episodes: episodesReducer,
});

export default rootReducer;
