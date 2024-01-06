import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addBookmark } from '../redux/bookmarkSlice';
import Quote from './Quote';
import TagDropdown from './TagDropdown';

function Home() {
  const [quote, setQuote] = useState(null);
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.quotable.io/quotes/random');
      const result = await response.json();
      setQuote(result[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const bookmark = () =>{
    dispatch(addBookmark(quote));
  }

  useEffect(() => {
    fetchData();
  }, []); 

  return (
    <div>
      <div>Quote Generator</div>
      <div>
        <div>{quote!=null ? <Quote
           key={quote._id} 
           text={quote.content}
           author={quote.author}
            />
        :""}</div>
        <button onClick={bookmark}>Bookmark</button>
        <button onClick={fetchData}>Fetch New Quote</button>
      </div>
      <TagDropdown/>
    </div>
  );
}

export default Home;