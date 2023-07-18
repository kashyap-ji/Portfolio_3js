import React from 'react'
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Raj Kashyap</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Protfolio</a></li>
        <li><a href="#contact">Contact</a></li>
        
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/raj-kashyap-15385a228/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/kashyap-ji" target="_blank"><FaGithubSquare/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; RK. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer