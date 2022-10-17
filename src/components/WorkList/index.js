import React, { useState } from 'react';
import jate from '../../assets/images/jate.png';
import hospitium from '../../assets/images/hospitium.png';
import bart from '../../assets/images/diy-bartender.png';
import tracker from '../../assets/images/employee-tracker.png';
import social from '../../assets/images/social-network-api.png';
import quiz from '../../assets/images/codequiz.png';
import Modal from '../Modal';

const WorkList = () => {
  const workData = [
    {
      name: 'Hospitium',
      img: hospitium,
      description: 'An application that shows you hospitals in a specific area and offers forum style reviews where users can comment on previous reviews.',
      view: 'https://hospitium.herokuapp.com/',
      source: 'https://github.com/megharpx/hospitium'
    },
    {
      name: 'DIY Bartender',
      img: bart,
      description: 'An application that provides recipes and youtube tutorials for cocktails based on searched ingredient or name.',
      view: 'https://parariot.github.io/DIY-Bartender/',
      source: 'https://github.com/ParaRiot/DIY-Bartender'
    },
    {
      name: 'Employee Tracker',
      img: tracker,
      description: 'Command Line application to manage employees using MySQL.',
      view: 'https://drive.google.com/file/d/1k57OTagjivkR9_yS1f-v4Xx7Tpn17I0M/view',
      source: 'https://github.com/TSRodgers/employee-tracker'
    },
    {
      name: 'Social Network API',
      img: social,
      description: "A Restful API for a social network where users can share their thoughts, create a friends list and react to friends' thoughts.",
      view: 'https://drive.google.com/file/d/19vimNWJViKpjrfIpnSoUEs_6Zip3qHZ3/view',
      source: 'https://github.com/TSRodgers/social-network-api'
    },
    {
      name: 'Just Another Text Editor',
      img: jate,
      description: 'A function PWA text editor, with offline capabilites',
      view: 'https://salty-castle-85709.herokuapp.com/',
      source: 'https://github.com/TSRodgers/text-editor'
    },
    {
      name: 'Code Quiz',
      img: quiz,
      description: "A quiz application where the user is presented 6 coding questions and timed. A score is given based on their preformance, user's can see how their score compares to previous highscores",
      view: 'https://tsrodgers.github.io/code-quiz/',
      source: 'https://github.com/TSRodgers/code-quiz'
    }
  ]
  const [currentProject, setCurrentProject] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = (image, i) => {
    setCurrentProject({...image, index: i});
    setIsModalOpen(!isModalOpen);
  }
  return (
    <div>
      {isModalOpen && <Modal currentProject={currentProject} onClose={toggleModal} />}
      <div className='project'>
        <div className='project-container'> 
              {workData.map((image, i) => (
                <div className='project-card' onClick={() => toggleModal(image, i)}>
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