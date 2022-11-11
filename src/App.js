import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Project from "./components/Project";
import './index.css'

function App() {
  
  return (
    <div>
      <Router>
      <Nav/> 
        <Routes>
          <Route path='react-portfolio/' element={<Home/>}/>
          <Route path='react-portfolio/projects' element={<Project/>}/>
          <Route path='react-portfolio/about' element={<About/>}/>
          <Route path='react-portfolio/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
    
  );
}

export default App;
