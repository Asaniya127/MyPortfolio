import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Service from './Components/Services/Service';
import MyWork from './Components/MyWork/MyWork';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Service />} />
        <Route path='/work' element={<MyWork />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
