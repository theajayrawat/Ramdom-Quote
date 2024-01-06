// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookmarkList from './components/BookmarkList';
import Home from './components/Home'
import Navbar from './components/Navbar'
import TagsQuote from './components/TagsQuote'


const App = () => {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/random" element={<Home />} />
          <Route path="/bookmarks" element={<BookmarkList />} />
          <Route path="/tags" element={<TagsQuote/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
