import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import Home from './pages/Home';
import Eating from './pages/Eating/Eating';
import Wearing from './pages/Wearing/Wearing';
import Links from './pages/Links/Links';
import Contact from './pages/Contact/Contact';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> <br/> 
        <Link to="/eating">Eating</Link> <br/> 
        <Link to="/wearing">Wearing</Link> <br/> 
        <Link to="/links">Links</Link> <br/> 
        <Link to="/contact">Contact</Link> <br/> 

      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eating" element={<Eating />} />
        <Route path="/wearing" element={<Wearing />} />
        <Route path="/links" element={<Links />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />

      </Routes>
    </Router>
  );
}

export default App;
