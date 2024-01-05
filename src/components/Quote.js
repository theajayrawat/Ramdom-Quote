// src/components/Quote.js
import React from 'react';

const Quote = ({ text, author }) => {
  return (
    <div>
      <blockquote>
        <p>{text}</p>
        <footer>{author}</footer>
      </blockquote>
    </div>
  );
};

export default Quote;
