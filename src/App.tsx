import React from 'react';
import { Route, Routes } from 'react-router';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
    <Header />
    <Navbar />
    <Routes>
        <Route index path='/' element={<Main />}/>
        <Route path='about' element={<About />}/>
        <Route path='contact' element={<Contact />}/>
      </Routes>
    <Footer />
    </>
  );
}

export default App;
