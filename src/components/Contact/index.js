import React from 'react'
import Hero from '../Hero'
import './index.css'

const Contact = () => {
  return (
    <div>
      <Hero heading='Contact.' text='Get in touch with me' />
      <div className='form'>
        <form>
          <label>Your Name</label>
          <input type='text'></input>
          <label>Email</label>
          <input type='email'></input>
          <label>Subject</label>
          <input type='text'></input>
          <label>Message</label>
          <textarea rows={6} placeholder='Type Your Message Here'></textarea>
          <button className='btn'>Submit</button>
        </form>

      </div>
    </div>
  )
}

export default Contact