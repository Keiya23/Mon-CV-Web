import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Knowledges from './pages/Knowledges';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Notfound from './pages/Notfound';


const App = () => {
  return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/competences" element={<Knowledges />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Notfound />} />      
        </Routes>
  );
};

export default App;