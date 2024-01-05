// src/redux/actions/quoteActions.js
import { fetchQuote, fetchTags as fetchTagsApi } from '../../services/quoteService';

export const fetchRandomQuote = () => async (dispatch) => {
  try {
    const quote = await fetchQuote('/random');
    dispatch({ type: 'FETCH_QUOTE_SUCCESS', payload: quote });
  } catch (error) {
    dispatch({ type: 'FETCH_QUOTE_FAILURE', payload: error.message });
  }
};

export const fetchTags = () => async (dispatch) => {
  try {
    const tags = await fetchTagsApi();
    dispatch({ type: 'FETCH_TAGS_SUCCESS', payload: tags });
  } catch (error) {
    dispatch({ type: 'FETCH_TAGS_FAILURE', payload: error.message });
  }
};
