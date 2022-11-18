import React from 'react';
import './index.css';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
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
          <div className='name'>
            <p>Tyler Rodgers©</p>
          </div>
        </div>
      </div>
  ) 
}

export default Footer;