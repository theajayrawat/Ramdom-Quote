import React from 'react';
import { useDispatch} from "react-redux";
import { removeBookmark } from '../redux/bookmarkSlice';

const Card = ({index, content, author}) => {
    const dispatch = useDispatch();

    const remove = () =>{
        dispatch(removeBookmark(index));
    }
        
  return (
    <div className="product-container bg-white p-4 rounded-lg shadow-md transition duration-300 hover:shadow-lg" style={{display:"inline-block"}}>
    {/* Product implementation */}
    <div className="product-content">
      <h2 className="text-xl font-bold mb-2">{content}</h2>
       <p>{author}</p>
       {/* <button onClick={remove(index)}>Delete</button> */}
    </div>
  </div>
  )
}

export default Card