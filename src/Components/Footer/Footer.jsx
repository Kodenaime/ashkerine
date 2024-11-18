import React from 'react'

import './footer.css'

const Footer = () => {
  return (
    <section className="footer">
      <div className="container footer-container">
        <a href='/home' className="footer-logo">
          <h2>Asherkine <br /> Foundation</h2>
        </a>
        <div className="news">
          <h3>Subscribe to Our Newsletter to stay updated on our activities</h3>
          <form action="">
            <input type="text" placeholder='Enter your email' />
            <button>Subscribe</button>
          </form>
        </div>
        <div className="footer-nav">
          <a href="">About Me</a>
          <a href="">Careers</a>
          <a href="">Blog</a>
        </div>
      </div>
    </section>
  )
}

export default Footer