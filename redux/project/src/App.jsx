import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './components/Login';
// import Signup from './components/Signup';
import HomePage from './components/HomePage';
// import SingleProductPage from './components/SingleProductPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/signup" element={<Signup />} /> */}
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/product/:id" element={<SingleProductPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
