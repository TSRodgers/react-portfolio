import React from 'react';
import './index.css';
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaStackOverflow } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
       <div className='contact'>
          <div className='address'>
            <FaHome size={20} style={{color: '#f0c808', marginRight: '2rem'}}/>
            Raleigh, NC
          </div>
          <div className='phone'>
            <FaPhone size={20} style={{color: '#f0c808', marginRight: '2rem'}}/>
            1-919-413-3545
          </div>
          <div className='mail'>
            <FaMailBulk size={20} style={{color: '#f0c808', marginRight: '2rem'}}/>
            tyler.rodgers74@gmail.com
          </div>
       </div>
        <div className='info'>
          <h4>About me</h4>
          <p>My name is Tyler Rodgers, and I am a student attending the UNC Coding Bootcamp.
            This portfolio is a current work in progress, created for a class assignment.</p>
          <div className='icons'>
            <a className='icons-link' href='https://github.com/TSRodgers' target='_blank' rel='noreferrer'>
              <FaGithub size={30} style={{marginRight: '1rem'}}/>
            </a>
            <a className='icons-link' href='https://www.linkedin.com/in/tyler-rodgers-8a6259237/' target='_blank' rel='noreferrer'>
              <FaLinkedin size={30} style={{marginRight: '1rem'}}/>
            </a>
            <a className='icons-link' href='https://stackoverflow.com/users/18741594/tyler-rodgers' target='_blank' rel='noreferrer'>
              <FaStackOverflow size={30} style={{marginRight: '1rem'}}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  ) 
}

export default Footer;