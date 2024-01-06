// src/components/BookmarkList.js
import React from 'react';
import { useSelector,useDispatch} from 'react-redux';
import { removeBookmark } from '../redux/bookmarkSlice';
import Card from './Card';

const BookmarkList = () => {
  const bookmarks = useSelector((store) => store.bookmark?.bookmarquote);
  const dispatch = useDispatch();

  const remove = (id) => {
    dispatch(removeBookmark(id));
  };

  return (
    <div>
      <h2>Bookmarks</h2>
      {bookmarks ? (
        bookmarks.map((element) => (
          <Card
            key={element._id}
            id={element._id}
            content={element.content}
            author={element.author}
            onRemove={remove}
          />
        ))
      ) : (
        <p>No Bookmark</p>
      )}
    </div>
  );
};

export default BookmarkList;
