// src/actions/bookActions.js
import axios from 'axios';

export const fetchBooks = () => {
  // Use Axios to fetch books from the Open Library API
  return async (dispatch) => {
    try {
      const response = await axios.get('https://openlibrary.org/subjects/fantasy.json');
      const books = response.data.works;
      dispatch({ type: 'FETCH_BOOKS', payload: books });
    } catch (error) {
      console.error(error);
    }
  };
};
