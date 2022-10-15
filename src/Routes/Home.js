import React from 'react'
import Header from '../components/Header';
import HeroImg from '../assets/images/heroimg.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Header />
      <div className='hero'>
        <div className='mask'>
          <img className='hero-img' src={HeroImg} alt='HeroImg' />
        </div>
        <div className='content'>
          <p>Hi, I'm Tyler Rodgers</p>
          <h1>Full-Stack Developer.</h1>
          <div>
            <Link to='/projects' className='btn'>Projects</Link>
            <Link to='/contact' className='btn'>Contact</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;