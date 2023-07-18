import React from 'react'
import './Experience.css'
import {HiBadgeCheck} from 'react-icons/hi'

const Experience = () => {
  return (
    <section id='experience'>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>3s Groomers</h3>
          <div className="experience__content">
            
            <artical className='experience__details'>
              <HiBadgeCheck/>
              <div>
               <h4>Virtual Reality</h4>
               <small className='text-light'>Developed immersive VR experiences in Unity using C# to enhance user engagement and interactivity,including the creation of multiple scenes.</small>
              </div>
              
            </artical>

            <artical className='experience__details'>
              <br></br>
              <HiBadgeCheck/>
              <div>
               <h4>Meta Humans</h4>
               <small className='text-light'>Collaborated with a team to create cutting-edge VR applications, leveraging expertise in Unity to develop Meta Human avatars and animations for realistic and immersive experiences.</small>
              </div>
            </artical>

            {/* <artical className='experience__details'>
              <br></br>
              <HiBadgeCheck/>
              <div>
               <h4>something3</h4>
               <small className='text-light'>Experienced</small>
              </div>
            </artical> */}

            <artical className='experience__details'>
              <br></br>
              <HiBadgeCheck/>
              <div>
               <h4>Unity and Flutter</h4>
               <small className='text-light'>Resolved technical issues and ensured seamless functionality, bridging the gap between VR and Flutter for optimized user experiences.</small>
              </div>
            </artical>

          </div>
        
        </div>
      </div>
    </section>
  )
}

export default Experience