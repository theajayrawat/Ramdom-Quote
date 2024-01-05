// src/components/BookmarkList.js
import React from 'react';
import { useSelector} from "react-redux";
import Card from './Card';

const BookmarkList = () => {
  const bookmarks=useSelector((store) => store.bookmark?.bookmarquote)
  
  return (
    <div>
      <h2>Bookmarks</h2>
      {bookmarks ? (
        bookmarks.map((element) => (
            <Card
            key={element._id} 
            i={element._id}
            content={element.content}
            author={element.author}
          />
        ))
      ) : (
        <p>No Bookmark</p>
      )}
    </div>
  );
};

export default BookmarkList;
