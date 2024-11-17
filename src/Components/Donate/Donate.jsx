import React from 'react'

import './donate.css'

const Donate = () => {
  return (
    <section className="help">
    <div className="container help-container grid">
        <div className="help-left">
            <img src={help} alt="" />
        </div>
        <div className="help-right">
            <h2 className="help-header">
                Want to be a part of the movement of touching lives?
            </h2>
            <p className="help-text">
                Be part of something good today
            </p>
        </div>
    </div>
  </section>
  )
}

export default Donate