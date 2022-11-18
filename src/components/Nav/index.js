import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './index.css'
import { FaBars, FaTimes } from 'react-icons/fa'

const Nav = () => {
  const [state, setState] = useState(false);
  const handleClick = () => setState(!state);

  return (
    <div className='nav'>
      <Link to='/'>
        <h1>Tyler Rodgers</h1>
      </Link>
      <ul className={state ? 'nav-links active' : 'nav-links'}>
        <li>
          <NavLink to='/' onClick={handleClick}>Home</NavLink>
        </li>
        <li>
          <NavLink to='/projects' onClick={handleClick}>Projects</NavLink>
        </li>
        <li>
          <NavLink to='/about' onClick={handleClick}>About</NavLink>
        </li>
        <li>
          <NavLink to='/contact' onClick={handleClick}>Contact</NavLink>
        </li>
      </ul>
      <div className='bars' onClick={handleClick}>
        {state ? (
          <FaTimes size={20} style={{color: '#fff1d0'}}/>
        ) : (
          <FaBars size={20} style={{color: '#fff1d0'}}/>
        )}
      </div>
    </div>
  )
}

export default Nav