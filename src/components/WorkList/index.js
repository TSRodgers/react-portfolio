import React from 'react';
import jate from '../../assets/images/jate.png';
import hospitium from '../../assets/images/hospitium.png';
import bart from '../../assets/images/diy-bartender.png';
import tracker from '../../assets/images/employee-tracker.png';
import social from '../../assets/images/social-network-api.png';
import quiz from '../../assets/images/codequiz.png';

const WorkList = () => {
  const workData = [
    {
      name: 'Hospitium',
      img: hospitium,
      description: 'An application that shows you hospitals in a specific area and offers forum style reviews where users can comment on previous reviews.'
    },
    {
      name: 'DIY Bartender',
      img: bart,
      description: 'An application that provides recipes and youtube tutorials for cocktails based on searched ingredient or name.'
    },
    {
      name: 'Employee Tracker',
      img: tracker,
      description: 'Command Line application to manage employees using MySQL.'
    },
    {
      name: 'Social Network API',
      img: social,
      description: "A Restful API for a social network where users can share their thoughts, create a friends list and react to friends' thoughts."
    },
    {
      name: 'Just Another Text Editor',
      img: jate,
      description: 'A function PWA text editor, with offline capabilites'
    },
    {
      name: 'Code Quiz',
      img: quiz,
      description: "A quiz application where the user is presented 6 coding questions and timed. A score is given based on their preformance, user's can see how their score compares to previous highscores"
    }
  ]
  return (
    <div>
      <div className='project'>
        <div className='project-container'> 
              {workData.map((image, i) => (
                <div className='project-card'>
                  <img src={image.img} alt={image.name} key={i}/>
                  <h2 className='project-title'>{image.name}</h2>
                </div>
              ))}
        </div>
      </div>
    </div>
  )
}

export default WorkList;