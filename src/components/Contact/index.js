import React, { useState } from 'react'
import Hero from '../Hero'
import './index.css'
import { validateEmail } from '../../utils/helpers';
import { send } from 'emailjs-com';

const Contact = () => {
  const [toSend, setToSend] = useState([{ name: '', email: '', message: ''}]);
  const {name, email, message} = toSend;
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    //targets email input
    if (e.target.name === email) {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);

      if (!isValid) {
        setErrorMessage('Please enter a valid email!');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`Please enter your ${e.target.name}!`)
      } else {
        setErrorMessage('');
      }
    };

    if (!errorMessage) {
      setToSend({...toSend, [e.target.name]: e.target.value});
    };
  };

  function handleSubmit(e) {
    e.preventDefault();

    send(
      'service_cjahg9r',
      'template_nbkuopf',
      toSend,
      'cyGGyiI31DFacdHl5'
    )
      .then((response) => {
        console.log('Success!', response.status, response.text);
      })
      .catch((err) => {
        console.log('Failed...', err);
      });
      
      setErrorMessage('Success! Email sent.')
  };

  return (
    <div>
      <Hero heading='Contact.' text='Get in touch with me' />
      <div className='form'>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Your Name</label>
            <input type='text' name='name' defaultValue={name} onBlur={handleChange}/>       
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' defaultValue={email} onBlur={handleChange}/>
            <label htmlFor='message'>Message</label>
            <textarea rows={6} placeholder='Type Your Message Here' name='message' defaultValue={message} onBlur={handleChange}/>
          {errorMessage && (
            <div>
              <p className='error-text'>{errorMessage}</p>
            </div>
          )}
          <button className='btn'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact