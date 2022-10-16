import React, { useEffect } from 'react'
import './index.css'

const Nav = (props) => {
  const {
    pages = [],
    setCurrentPage,
    currentPage,
  } = props;
  
  useEffect(() => {
    document.title = currentPage.name
  });

  return (
    <div className='nav'>
      <a href='/'>
        <h1>Tyler Rodgers</h1>
      </a>
      <ul className='nav-links'>
        {pages.map((page) => (
          <li 
            className={`${
              currentPage.name === page.name
            }`}
            key={page.name}
          >
            <span 
              onClick={() => {
                setCurrentPage(page);
              }}
            >
              {page.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Nav