import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
          <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Discover, order, and savor. Your journey to culinary delight starts here with Tomato. Explore a world of flavors, anytime, anywhere.</p>
            <div className="footer-social-icons">
              <img src={assets.facebook_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" />
            </div>
          </div>
          <div className="footer-content-center">
              <h2>COMPANY</h2>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>privacy policy</li>
              </ul>
          </div>
          <div className="footer-content-right">
            <h2>Get in Touch</h2>
            <ul>
              <li>+91 8265656626</li>
              <li>contact@tomato.com</li>
            </ul>
          </div>
      </div>
      <hr/>
      <p className="footer-copy-right">
      © 2024 Tomato. All rights reserved. Designed with love for food lovers.
      </p>
    </div>
  )
}

export default Footer
