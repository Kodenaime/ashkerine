import React from 'react'

import about1 from '../../Assets/about1.png'
import about2 from '../../Assets/about2.png'
import about3 from '../../Assets/about3.png'


import './about.css'
import Cross from '../Cross/Cross'

const About = () => {
  return (
    <section className="about">
      <div className="container grid">

        <div className="about-left">
          <h2>About Asherkine</h2>
          <p>Akinyemi Oluwaseun Omotayo (born 1998; Age: 26 years) is a famous Nigerian social media celebrity known professionally as Asherkine. He has garnered widespread acclaim on Instagram for his content, where he goes around exhibiting his generous act by giving and helping the masses. Asher Kine initiated his journey driven by a profound aspiration to inject positivity into a world often inundated with negativity. Motivated by the transformative power of social media, he set out on a mission to craft content that not only captivates audiences but also elevates their spirits.</p>
        </div>

        <div className="about-right">
          <div className="imagetop">
            <img src={about1} alt="An image of Asherkine" className='image-top' />
          </div>
          <div className="image-down">
            <img src={about2} alt="An image of Asherkine" className='image-left' />
            <img src={about3} alt="An image of Asherkine" className='image-right' />
          </div>        
          
        </div>

      </div>
      <Cross />
    </section>
  )
}

export default About