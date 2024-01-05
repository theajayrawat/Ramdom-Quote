// src/redux/rootReducer.js
import { combineReducers } from 'redux';
import bookmarkReducer from './bookmarkReducer';
import quoteReducer from './quoteReducer';

const rootReducer = combineReducers({
  bookmark: bookmarkReducer,
  quote: quoteReducer,
});

export default rootReducer;
