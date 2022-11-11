import React from 'react'
import HeroImg from '../../assets/images/heroimg.jpg';
import './index.css'

const Home = (props) => {
  return (
    <div>
      <div className='hero'>
        <div className='mask'>
          <img className='hero-img' src={HeroImg} alt='HeroImg' />
        </div>
        <div className='content'>
          <p>Hi, I'm Tyler Rodgers</p>
          <h1>Full-Stack Developer.</h1>
        </div>
      </div>
    </div>
  )
}

export default Home;