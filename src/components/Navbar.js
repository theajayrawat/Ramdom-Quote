import React from 'react'
import { Link } from 'react-router-dom';


export const Navbar = () => {
  return (
    <div className="items-stretch self-center flex justify-between gap-5 my-auto max-md:max-w-full max-md:flex-wrap max-md:justify-center">
            <Link to='/random' key="1">
              <div  className="text-white text-opacity-80 text-base">
                Home
              </div>
            </Link>
            <Link to='/bookmarks' key="2">
              <div  className="text-white text-opacity-80 text-base">
                Bookmark
              </div>
            </Link>
    </div>
  )
    
}

export default Navbar;

