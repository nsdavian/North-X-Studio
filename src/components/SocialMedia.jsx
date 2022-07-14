import React from 'react'
import { BsTwitter, BsInstagram, BsTelegram } from 'react-icons/bs'
// import { FaFacebook } from 'react-icons/Fa'

const SocialMedia = () => {
  return (
    <div className='app__social' >
        <div>
            <BsTwitter />
        </div>
        <div>
            <BsInstagram />
        </div>
        {/* <div>
            <BsTelegram />
        </div> */}
    </div>
  )
}

export default SocialMedia