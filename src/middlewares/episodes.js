import axios from "axios";
//import * as rssParser from 'react-native-rss-parser';

import { FETCH_EPISODES, saveEpisodes } from "../actions/episodes";

const episodesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_EPISODES:
      axios
      .get('https://anchor.fm/s/722f8e84/podcast/rss')   
      .then((response) => {
        console.log(response.data);
        store.dispatch(saveEpisodes(response.data));
        },
      )
      .catch(
        () => console.log('Problème avec le flux rss'),
      );
      next(action);
      break;
    default:
      next(action);
  }
};

export default episodesMiddleware;