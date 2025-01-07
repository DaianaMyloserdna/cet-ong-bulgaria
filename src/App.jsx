import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import Home from './components/pages/Home';
import './App.css';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Pictures from './components/pages/Pictures';
import ProjectDetails from './components/ProjectDetailes';
import Cards from './components/Cards';
import ProjectLocation from './components/pages/ProjectLocation';


function App() {


  return (
    <>
    
      <Router>
        <Navbar />
        <Routes>
         
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/projects" element={<Projects />} />
          <Route path='/projects' element={<Navigate to='/projects'/>} />
          <Route path="/pictures" element={<Pictures />} />
          <Route path='/pictures' element={<Navigate to='/pictures'/>} />
          <Route path="/projectlocation" element={<ProjectLocation />} />
          <Route path='/projectlocation' element={<Navigate to='/projectlocation'/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/contact' element={<Navigate to='/contact'/>} />
          <Route path="/" element={<Cards />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

