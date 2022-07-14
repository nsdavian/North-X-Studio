import React, { useState } from 'react'

import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client'
import './Footer.scss'

const Footer = () => {
  const [formData, setFormData] = useState({ name : '', email : '', message : ''})
  const [isFormSubmitted, setisFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value} = e.target

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
    setLoading(true)

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }

    client.create(contact).then(() => {
      setLoading(false)
      setisFormSubmitted(true)
    })
  }

  return (
    <>
      <h2 className='head-text foot-head' >chat with me </h2>

      <div className='app__footer-cards' >
        <div className='app__footer-card' >
          <img src={images.email} alt='email' />
          <a href='mailto:nsdavenorth@gmail.com' >nsdavenorth@gmail.com</a>
        </div>  
      </div>

    {!isFormSubmitted ?
      <div className='app__footer-form app__flex' >
        <div className='app__flex' >
          <input 
          className='p-text' 
          type={'text'} 
          placeholder='Your Name' 
          name='name' 
          value={name} 
          onChange={handleChangeInput} 
          />
        </div>
        <div className='app__flex' >
          <input 
          className='p-text' 
          type={'email'} 
          placeholder='your Email'
          name='email' 
          value={email} 
          onChange={handleChangeInput} 
          />
        </div>
        <div>
          <textarea 
          className='p-text'
          placeholder='Your Message'
          value={message}
          name="message"
          onChange={handleChangeInput}
          />
        </div>
        <button type='button' className='p-text' 
        onClick={handleSubmit} >{ loading ? 'Sending' : 'Send Message' }
        </button>
      </div> 
      :
      <div>
        <h3 className='head-text' >Thank you for getting in touch </h3>
      </div>
      }

      <div className='app__footer-bottom' >
        <div className='app__footer-line1' />
        <p className='p-text' >© 2022 North X Studio</p>
        <p className='p-text' >All rights reserved</p>
        <div className='app__footer-line2' />
      </div>

    </>
  )
}

export default AppWrap( MotionWrap(Footer, 'app__footer'), 'contact', 'app__darkbg'  )