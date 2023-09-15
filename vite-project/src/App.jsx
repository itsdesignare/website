import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';
import '../src/styles/home.css';

// Import the Home component from the specified location
import Home from '../src/pages/home';
import OurServices from '../src/pages/services';
import Location from '../src/pages/location';
function App() {
  return (
    <Router>
      <div>
      

        <Routes>
          <Route path="/services" element={<OurServices />} />
          <Route path="/location" element={<Location />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
