// src/reducers/rootReducer.js
import { combineReducers } from 'redux';
import bookReducer from './bookReducer';
import cartReducer from './cartReducer';
import orderReducer from './orderReducer';

const rootReducer = combineReducers({
  books: bookReducer,
  cart: cartReducer,
  orders: orderReducer,
});

export default rootReducer;
