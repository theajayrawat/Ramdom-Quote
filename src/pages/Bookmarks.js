// src/pages/Bookmarks.js
import React from 'react';
import { useSelector } from 'react-redux';
import BookmarkList from '../components/BookmarkList';

const Bookmarks = () => {
  const bookmarks = useSelector((state) => state.bookmark.bookmarks);

  return (
    <div>
      <h1>Bookmarks</h1>
      <BookmarkList bookmarks={bookmarks} />
    </div>
  );
};

export default Bookmarks;
