import axios from "axios";

import { FETCH_EPISODES, saveEpisodes } from "../actions/episodes";

const options = {
  method: 'GET',
  url: 'https://spotify-scraper.p.rapidapi.com/v1/show/episodes',
  params: {showId: '2E7iYlOhn2AfzTXQuiZMdU', limit: '5'},
  headers: {
    'X-RapidAPI-Key': '6a93d7396fmshb2fdee5d455b53fp1d8ae4jsn34d4c6350f90',
    'X-RapidAPI-Host': 'spotify-scraper.p.rapidapi.com'
  }
};

const episodesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_EPISODES:
      
      axios.request(options)
      .then(
        (response) => {
        console.log(response.data);
        store.dispatch(saveEpisodes(response.data));
        },
      )
      .catch(
        () => console.log('Problème API EPISODES'),
      );
      next(action);
      break;
    default:
      next(action);
  }
};

export default episodesMiddleware;