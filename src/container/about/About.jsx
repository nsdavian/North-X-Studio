import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './About.scss'

import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'
import { images } from '../../constants'

// const abouts = [
//   {title: 'Web Development', description: 'i am a good web developer', imgURL: images.about01 },
//   {title: 'Mobile Development', description: 'i am a good web developer', imgURL: images.about04 },
//   {title: 'Front End Development', description: 'i am a good web developer', imgURL: images.about02 },
// ]

const About = () => {
  const [abouts, setAbouts] = useState([])

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data)
    })
  }, [])
  
  return (
    <>
      <h2 className='head-text' >
        At
        <span> North X Studio</span>
        <br />
        We know that 
        <span> Good Development</span>
        <br />
        means 
        <span> Good Business</span>
      </h2>

      <div className='app__profiles' >
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }} >{about.title}</h2>
            <p className='p-text' style={{ marginTop: 10 }} >{about.description}</p>
          </motion.div>
        ))}
      </div>

      <h2 className='head-text' style={{ marginTop: 20 }} >
        So we provide you 
        <br />
        with the
        <span> stable </span>
        and
        <span> reliable </span>
        <br />
        Web/Mobile dev
        <br />
        <span>you deserve</span>
      </h2>
    </>
  )
}

export default AppWrap( MotionWrap(About, 'app__about'), 'about', "app__darkbg" )