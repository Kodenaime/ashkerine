import React from 'react'

import './help.css'
import help from '../../Assets/help.png'

const Help = () => {
  return (
    <section className="help">
      <div className="container help-container grid">
          <div className="help-left">
              <img src={help} alt="" />
          </div>
          <div className="help-right">
              <h2 className="help-header">
                  Helping Those in Need and putting smiles on ther faces!.
              </h2>
              <p className="help-text">
                  Using the bleessings God has given me to touch lives and help those in need, making lives better and sharing Joy.
              </p>
          </div>
      </div>
    </section>
  )
}

export default Help