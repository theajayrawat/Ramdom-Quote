// src/redux/reducers/bookmarkReducer.js
const initialState = {
  bookmarks: [],
};

const bookmarkReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOKMARK':
      return { ...state, bookmarks: [...state.bookmarks, action.payload] };
    case 'REMOVE_BOOKMARK':
      return {
        ...state,
        bookmarks: state.bookmarks.filter((bookmark) => bookmark.id !== action.payload),
      };
    default:
      return state;
  }
};

export default bookmarkReducer;
