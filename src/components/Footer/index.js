import React from 'react';
import './index.css';
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaStackOverflow } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <FaHome/>
        <p>Raleigh, NC</p>
        <FaPhone />
        <p>1-919-413-3545</p>
        <FaMailBulk />
        <p>tyler.rodgers74@gmail.com</p>
        <h4>About me</h4>
        <p>My name is Tyler Rodgers, and I am a student attending the UNC Coding Bootcamp. This portfolio is a current work in progress, created for a class assignment.</p>
        <FaGithub/>
        <FaLinkedin/>
        <FaStackOverflow />
      </div>
    </div>
  )
}

export default Footer;