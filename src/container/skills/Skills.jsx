import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'
import './Skills.scss'

const Skills = () => {
  const [skills, setSkills] = useState([])

  useEffect(() => {
    const query = '*[_type == "skills"]'

    client.fetch(query).then((data) => {
      setSkills(data)
    })
  }, [])

  return (
    <>
      <h2 className='head-text head-tit' >Skills</h2>

      <div className='app__skills-container' >

      <motion.div className='app__skills-exp' >
          <motion.div
          whileInView={{ opacity: [ 0, 1] }}
          transition={{ duration: 0.5 }}
          className='app__skills-exp-work'
          >
            <img src={images.present} />
          </motion.div>
        </motion.div>

        <motion.div className='app__skills-list' >
          {skills.map((skill) => (
            <motion.div
            whileInView={{ opacity: [ 0, 1] }}
            transition={{ duration: 0.5 }}
            key={skill.name}
            className='app__skills-item app__flex'
            >
              <div className='app__flex' style={{ backgroundColor : skill.bgColor }} >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className='p-text' >{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>


      </div>

    </>
  )
}

export default AppWrap(Skills, 'skills')