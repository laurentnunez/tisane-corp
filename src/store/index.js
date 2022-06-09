import { createStore, compose, applyMiddleware } from 'redux';

import reducer from '../reducers';
import podcastsMiddleware from '../middlewares/podcasts';


const middlewares = [
  podcastsMiddleware,
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middlewares)),
);

export default store;