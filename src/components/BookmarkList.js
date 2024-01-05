// src/components/BookmarkList.js
import React from 'react';

const BookmarkList = ({ bookmarks }) => {
  return (
    <div>
      <h2>Bookmarks</h2>
      {bookmarks.map((bookmark) => (
        <div key={bookmark.id}>
          <p>{bookmark.text}</p>
          <button>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default BookmarkList;
