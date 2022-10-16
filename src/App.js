import React, { useState, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Project from "./components/Project";
import Resume from "./components/Resume";
import './index.css'

function App() {
  const [pages] = useState([
    { name: 'Home' },
    { name: 'Projects' },
    { name: 'About' },
    { name: 'Contact' },
    { name: 'Resume'}
  ]);
  
  const [currentPage, setCurrentPage] = useState(pages[2]);

  useEffect(() => {
    document.title = currentPage.name
  });

  return (
    <div>
      <Nav 
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      /> 
      <main>
        {currentPage.name === 'Home' ? (
          <Hero
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
        ) : currentPage.name === 'Projects' ? (
          <Project/>
        ) : currentPage.name === 'About' ? (
          <About/>
        ) : currentPage.name === 'Contact' ? (
          <Contact/>
        ) : currentPage.name === 'Resume' ? (
          <Resume/>
        ) : (
          <Hero/>
        )}
      </main>
      <Footer/>
    </div>
    
  );
}

export default App;
