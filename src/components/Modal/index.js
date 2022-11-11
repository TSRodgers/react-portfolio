import React from 'react'
import { FaDesktop, FaGithub } from 'react-icons/fa'

const Modal = ({ onClose, currentProject }) => {
  const {name, img, description, view, source, tech} = currentProject;

  return (
    <div className='modalBackdrop'>
      <div className='modalContainer'>
        <h3 className='modalTitle'>{name}</h3>
        <img src={img} alt={name} />
        <p>
          {description}
        </p>
        <p>
          Technologies used: {tech}
        </p>
        <div className='btn-container'>
          <div className='close-btn'>
            <button className='btn' onClick={onClose} type='button'>
              Close
            </button>
          </div>
          <div className='link-btn'>
            <a href={view}><FaDesktop className='view-link'  size={40} style={{marginRight: '2rem'}}/></a>
            <a href={source}><FaGithub className='source-link' size={40} style={{marginRight: '2rem'}}/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;