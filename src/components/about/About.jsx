import React from 'react'
import './About.css'
import ME from '../../images/i.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h4 className="gettoknow">Get to know</h4>
      <h2 style={{textSize:50}}>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>Intern at 3S Groomers</small>
            </article>
            {/* <article className="about__card">
              <FiUsers className="about__icon"/>
              <h5>Clients</h5>
              <small>None</small>
            </article> */}
            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>6+ completed</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About