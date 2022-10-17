import React from 'react';
import Hero from '../Hero';
import test from '../../assets/images/hospitium.png';
import './index.css';

const Project = () => {
  return (
    <div>
      <Hero heading='Projects.' text='Recent works'/>
      <div className='project'>
        <div className='project-container'>
            <div className='project-card'>
              <img src={test} alt='text' />
              <h2 className='project-title'>Project Title</h2>
            </div>
            <div className='project-card'>
              <img src={test} alt='text' />
              <h2 className='project-title'>Project Title</h2>
            </div>
            <div className='project-card'>
              <img src={test} alt='text' />
              <h2 className='project-title'>Project Title</h2>
            </div>
            <div className='project-card'>
              <img src={test} alt='text' />
              <h2 className='project-title'>Project Title</h2>
            </div>
            <div className='project-card'>
              <img src={test} alt='text' />
              <h2 className='project-title'>Project Title</h2>
            </div>
            <div className='project-card'>
              <img src={test} alt='text' />
              <h2 className='project-title'>Project Title</h2>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Project