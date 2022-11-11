import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

const Nav = () => {
  return (
    <div className='nav'>
      <Link to='/'>
        <h1>Tyler Rodgers</h1>
      </Link>
      <ul className='nav-links'>
      <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/projects'>Projects</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav