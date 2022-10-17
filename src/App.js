import React, { useState, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Project from "./components/Project";
import './index.css'

function App() {
  const [pages] = useState([
    { name: 'Home' },
    { name: 'Projects' },
    { name: 'About' },
    { name: 'Contact' },
  ]);
  
  const [currentPage, setCurrentPage] = useState(pages[1]);

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
          <Home
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
        ) : (
          <Home/>
        )}
      </main>
      <Footer/>
    </div>
    
  );
}

export default App;
