// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Bookmarks';
import Bookmarks from './pages/Bookmarks';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/bookmarks" component={Bookmarks} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
