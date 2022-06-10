import { createStore, compose, applyMiddleware } from 'redux';

import reducer from '../reducers';
import episodesMiddleware from '../middlewares/api';


const middlewares = [
  episodesMiddleware,
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middlewares)),
);

export default store;