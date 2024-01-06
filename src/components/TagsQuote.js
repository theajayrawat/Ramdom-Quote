import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function TagsQuote() {
  const [tagquote, setTagQuote] = useState(null);
  const { query } = useParams();

  const fetchData = async (tag) => {
    try {
      const response = await fetch(`https://api.quotable.io/quotes/random?tags=${tag}`);
      const result = await response.json();
      setTagQuote(result[0]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    console.log('Query parameter:', query);
    if (query) {
      fetchData(query);
    }
  }, [query]);

  return (
    <div>
      {tagquote ? (
        <div>
          <h2>Tags Quote</h2>
          <p>{tagquote.content}</p>
          <p>Author: {tagquote.author}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default TagsQuote;
