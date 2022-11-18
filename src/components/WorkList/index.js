import React, { useState } from 'react';
import jate from '../../assets/images/jate.png';
import hospitium from '../../assets/images/hospitium.png';
import bart from '../../assets/images/diy-bartender.png';
import tracker from '../../assets/images/employee-tracker.png';
import social from '../../assets/images/social-network-api.png';
import grimes from '../../assets/images/grimes.jpg'
import Modal from '../Modal';
import './index.scss';
import { FaDesktop, FaGithub } from 'react-icons/fa';

const WorkList = () => {
  const workData = [
    {
      name: 'USS Grimes',
      img: grimes,
      description: "Full-Stack MERN application, used to display various photos from ww2 and allow users to comment on them.",
      view: 'https://pacific-hollows-15654.herokuapp.com/',
      source: 'https://github.com/TSRodgers/uss-grimes',
      tech: 'Node.js, Express.js, React.js, MongoDB, GraphQL, Bootstrap'
    },
    {
      name: 'Hospitium',
      img: hospitium,
      description: 'An application that shows you hospitals in a specific area and offers forum style reviews where users can comment on previous reviews.',
      view: 'https://hospitium.herokuapp.com/',
      source: 'https://github.com/megharpx/hospitium',
      tech: 'Node.js, Express.js, Handlebars, MySQL, APIs, Materialize'
    },
    {
      name: 'DIY Bartender',
      img: bart,
      description: 'An application that provides recipes and youtube tutorials for cocktails based on searched ingredient or name.',
      view: 'https://parariot.github.io/DIY-Bartender/',
      source: 'https://github.com/ParaRiot/DIY-Bartender',
      tech: 'HTML, CSS, JS, APIs, Tailwind'
    },
    {
      name: 'Employee Tracker',
      img: tracker,
      description: 'Command Line application to manage employees using MySQL.',
      view: 'https://drive.google.com/file/d/1k57OTagjivkR9_yS1f-v4Xx7Tpn17I0M/view',
      source: 'https://github.com/TSRodgers/employee-tracker',
      tech: 'MySQL'
    },
    {
      name: 'Social Network API',
      img: social,
      description: "A Restful API for a social network where users can share their thoughts, create a friends list and react to friends' thoughts.",
      view: 'https://drive.google.com/file/d/19vimNWJViKpjrfIpnSoUEs_6Zip3qHZ3/view',
      source: 'https://github.com/TSRodgers/social-network-api',
      tech: 'MongoDB, REST APIs'
    },
    {
      name: 'Just Another Text Editor',
      img: jate,
      description: 'A functional PWA text editor, with offline capabilites',
      view: 'https://salty-castle-85709.herokuapp.com/',
      source: 'https://github.com/TSRodgers/text-editor',
      tech: 'Node.js, Express.js, Webpack, SWA'
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
                      <span className='card-rect'></span>
                      <span className='card-tri'></span>
                      <p className='transition'>{image.name}</p>
                      <ul className='card-links'>
                        <li>
                          <a href={image.view}><FaDesktop/></a>
                          <a href={image.source}><FaGithub/></a> 
                        </li>
                      </ul>
                    </div>
              ))}
        </div>
      </div>
    </div>
  )
}

export default WorkList;