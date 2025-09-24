import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Error from "./components/Error"
import './index.css'

function App() {
  
  return (
    <div>
        <Nav/> 
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/experience' element={<Experience/>}/>
            <Route path='/projects' element={<Project/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/error' element={<Error/>}/>
          </Routes>
        <Footer/>
    </div>
  );
}

export default App;
