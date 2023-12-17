// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import
import Home from './components/Home';
import Catalog from './components/Catalog';
import BookDetail from './components/BookDetail';
import ShoppingCart from './components/ShoppingCart';
import Orders from './components/Orders';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes> {/* Updated */}
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/orders" element={<Orders />} />
        </Routes> {/* Updated */}
      </div>
    </Router>
  );
}

export default App;
