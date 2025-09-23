import React from 'react'
import { Link } from 'react-router-dom';
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
          <h1>Enterprise BDR.</h1>
          <h6>Helping SaaS companies grow with outbound prospecting, pipeline generation, and multi-threaded engagement. Technical background in full-stack development helps me connect with developer buyers</h6>
          <div>
            <Link to='/experience' className='btn'>Experience</Link>
            <Link to='/contact' className='btn btn-alt'>Contact</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;