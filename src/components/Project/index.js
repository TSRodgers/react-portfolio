import React from 'react';
import Hero from '../Hero';
import './index.css';
import WorkList from '../WorkList';

const Project = () => {
  return (
    <div>
      <Hero heading='Projects.' text='Recent works'/>
      <WorkList />
    </div>
  )
}

export default Project