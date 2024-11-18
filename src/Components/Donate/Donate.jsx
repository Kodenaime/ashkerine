import React from 'react'
import donateimage from '../../Assets/donate.png'

import './donate.css'

const Donate = () => {
  return (
    <section className="help">
    <div className="container help-container grid">
        <div className="help-left">
            <img src={donateimage} alt="" />
        </div>
        <div className="donate-right">
            <h2 className="donate-header">
                Want to be a part of the movement of touching lives?
            </h2>
            <p className="donate-text">
                Be part of something good today
            </p>
            <a href="" className='btn new'>Donate</a>
        </div>
    </div>
  </section>
  )
}

export default Donate