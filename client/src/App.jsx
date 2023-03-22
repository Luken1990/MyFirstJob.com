import { useEffect, useState, createContext } from 'react';
import { Navbar } from './components/navbar/Navbar';
import { Home } from './page/HomePage/Home';
import { About } from './page/About/About';
import { Footer } from './components/footer/Footer';
import { Career } from './page/Career_Advice/Career';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<Career />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
