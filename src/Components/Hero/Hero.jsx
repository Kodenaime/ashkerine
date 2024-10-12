import React from 'react'

import './hero.css'
import Navbar from '../Navbar/Navbar';
import Cross from '../Cross/Cross'
import hero1 from '../../Assets/hero1.png'
import hero2 from '../../Assets/hero2.png'

const Hero = () => {



  return (
    <div className="wrapper">
      <Navbar />
      <section className="container hero-container">
        <div className="hero-left">

          <h2 className="hero-header">
            Putting Smiles on <br /> people’s faces and <br /> touching lives!
          </h2>
          <p className="hero-text">
            At Asherkine Foundation, we are dedicated to uplifting lives and spreading joy.
          </p>
          <div className="btn">Donate</div>
        </div>

        <div className="hero-right">
          <img src={hero1} alt="" />
          <img src={hero2} alt="" />
        </div>

      </section>
      <Cross />
    </div>
  )
}

export default Hero