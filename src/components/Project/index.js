import React from 'react';
import Hero from '../Hero';
import './index.scss';
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