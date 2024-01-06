// src/components/BookmarkCard.js
import React from 'react';

const BookmarkCard = ({ id, content, author, onRemove }) => {
  return (
    <div
      className="product-container bg-white p-4 rounded-lg shadow-md transition duration-300 hover:shadow-lg"
      style={{ display: 'inline-block' }}
    >
      <div className="product-content">
        <h2 className="text-xl font-bold mb-2">{content}</h2>
        <p>{author}</p>
        <button onClick={() => onRemove(id)}>Delete</button>
      </div>
    </div>
  );
};

export default BookmarkCard;
