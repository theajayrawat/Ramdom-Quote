// src/redux/reducers/quoteReducer.js
const initialState = {
  quote: {},
  tags: [],
  error: null,
};

const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_QUOTE_SUCCESS':
      return { ...state, quote: action.payload, error: null };
    case 'FETCH_TAGS_SUCCESS':
      return { ...state, tags: action.payload, error: null };
    case 'FETCH_QUOTE_FAILURE':
    case 'FETCH_TAGS_FAILURE':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default quoteReducer;
