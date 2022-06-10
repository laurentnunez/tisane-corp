import { combineReducers } from 'redux';
import episodesReducer from './episodes';
import podcastsReducer from './podcasts';

const rootReducer = combineReducers({
  episodes: episodesReducer,
  podcasts: podcastsReducer,
});

export default rootReducer;
