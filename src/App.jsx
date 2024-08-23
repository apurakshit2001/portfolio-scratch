// App.js
import React from 'react';
import './App.css'
import 'animate.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavPage from './Components/Special/Navbar/NavPage';
import Home from './Components/Special/Home/Home';
import About from './Components/Special/About/About';
import OtherWorks from './Components/Special/OtherWorks/OtherWorks';
import Contacts from './Components/Special/Contacts/Contacts';
import Acknowledgement from './Components/Special/Acknowledgement/Acknowledgement';


const App = () => {
  return (
    <Router>
      <NavPage />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/other-works" element={<OtherWorks />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/acknowledgement" element={<Acknowledgement />} />
      </Routes>
    </Router>
  );
};

export default App;
