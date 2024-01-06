import { createSlice } from "@reduxjs/toolkit";

const loadBookmarksFromLocalStorage = () => {
  const storedBookmarks = localStorage.getItem("bookmarks");
  return storedBookmarks ? JSON.parse(storedBookmarks) : [];
};

const saveBookmarksToLocalStorage = (bookmarks) => {
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
};

const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState: {
    bookmarquote: loadBookmarksFromLocalStorage(),
  },
  reducers: {
    addBookmark: (state, action) => {
      state.bookmarquote.push(action.payload);
      saveBookmarksToLocalStorage(state.bookmarquote);
    },
    removeBookmark: (state, action) => {
      state.bookmarquote = state.bookmarquote.filter(
        (quote) => quote._id !== action.payload
      );
      saveBookmarksToLocalStorage(state.bookmarquote);
    },
  },
});

export const { addBookmark, removeBookmark } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;
