import axios from "axios";

import { FETCH_PODCASTS } from "../actions/podcasts";

const options = {
  method: 'GET',
  url: 'https://spotify-scraper.p.rapidapi.com/v1/show/episodes',
  params: {showId: '2E7iYlOhn2AfzTXQuiZMdU'},
  headers: {
    'X-RapidAPI-Key': '6a93d7396fmshb2fdee5d455b53fp1d8ae4jsn34d4c6350f90',
    'X-RapidAPI-Host': 'spotify-scraper.p.rapidapi.com'
  }
};

const podcastsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PODCASTS:
      {
      axios.request(options)
      .then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default podcastsMiddleware;