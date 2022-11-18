import React from "react";
import { Routes, Route } from "react-router-dom";
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
        <Nav/> 
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/projects' element={<Project/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
        <Footer/>
    </div>
  );
}

export default App;
