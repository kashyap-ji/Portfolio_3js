import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'

const HeaderSocials
 = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/raj-kashyap-15385a228/" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/kashyap-ji" target="_blank"><FaGithubSquare/></a>
    </div>
  )
}

export default HeaderSocials
