import NavBar from './components/NavBar/NavBar';
import './App.css';
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Menu from './pages/Menu/Menu'
import Delivery from './pages/Delivery/Delivery';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';


function App() {
  return (
    <div>
      <NavBar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;

