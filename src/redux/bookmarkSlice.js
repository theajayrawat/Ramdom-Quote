import { createSlice } from "@reduxjs/toolkit";

const bookmarkSlice = createSlice({
  name: "product",
  initialState: {
    bookmarquote:[],
  },
  reducers: {
    addBookmark: (state, action) =>{
        state.bookmarquote.push(action.payload);
    },
    removeBookmark :(state,action)=>{
      state.bookmarquote= state.bookmarquote.filter(quote => quote._id !== action.payload);
    }
  },
});

export const {  addBookmark,removeBookmark } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;
