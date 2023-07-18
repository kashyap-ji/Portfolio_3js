import React from 'react'
import './Contact.css'
import {MdEmail} from 'react-icons/md'
import {BsPhoneFill} from 'react-icons/bs'
import {RiWhatsappFill} from 'react-icons/ri'
import { useRef } from 'react';

const Contact = () => {
  
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            
            <div>
              <MdEmail className="contact__option-icon"/>
              <h4>Email</h4>
              <h5>kashyapraj2954@gmail.com</h5>
              <a href="mailto:kashyapraj2954@gmail.com" target="_blank">Send A Message</a>
            </div>
          </article>
          <article className="contact__option">
            
            <div>
              <RiWhatsappFill className="contact__option-icon"/>
              <h4>Whatsapp</h4>
              <h5>(+91)9555069012</h5>
              <a href="https://api.whatsapp.com/send?phone=+919555069012" target="_blank">Send A Message</a>
            </div>
          </article>
          <article className="contact__option">
            
            <div>
              <BsPhoneFill className="contact__option-icon"/>
              <h4>Phone</h4>
              <h5>(+91)9555069012</h5>
              < a href="tel:+919555069012">Give A Call</a>
            </div>
          </article>
          
        </div>
      </div>
    </section>
  )
}

export default Contact