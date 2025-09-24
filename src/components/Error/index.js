import React from 'react';
import Hero from '../Hero';
import './index.scss';

const Error = () => {
  return (
   <div>
    <Hero heading='These are not the droids you are looking for.' text='Oops'/>
      <div className='about'>
          <div className='about-content'>
            <h1>Error</h1>
              <p>
                If you're seeing this you have clicked on a link that no longer works. My Heroku servers and video hosting to see these projects in action have all expired. Feel free to check out the full repo through the other link :)
              </p>
            <a href='https://www.dropbox.com/scl/fi/ct7h9chea58pd9isb0wte/Tyler-Rodgers-Resume-2025.docx?rlkey=m6mhydtcdbsbvqg9tqa00eriq&st=nxncmese&dl=00' target='_blank' rel='noreferrer' className='btn'>Download Resume</a>
          </div>
      </div> 
   </div>
  )
}

export default Error