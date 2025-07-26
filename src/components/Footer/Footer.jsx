import React from 'react'
import './Footer.css'
import { useNavigate } from 'react-router-dom'

function Footer() {
  const navigate = useNavigate()
  return (
    <>
        <div className="footer">
      
      <div className="logo"><span>ASWE</span> CONSTRUCTIONS</div>
      <div className="footer-middle">
        <h4>Contact Details</h4>
        <div>
          <h5>Address</h5>
          <p>#618, 2nd Floor, Vinayaka Layout, BDA 80ft, Main Road, Nagarbhavi, Banglore-560072</p>
        </div>
        <div>
          <h5>Call us</h5>
          <p>99019 30183</p>
          <p>aswemailers@gmail.com</p>
        </div>
      </div>
      <div className="footer-right">
        <h4>Quick Links</h4>
        <ul>
          <li onClick={() => navigate('/')}>Home</li>
          <li onClick={() => navigate('projects')} >Projects</li>
          <li onClick={() => navigate('/')}>Services</li>
          <li onClick={() => navigate('/about-us')}>About Us</li>
          <li onClick={() => navigate('/contact-us')}>Contact</li>
        </ul>
      </div>
    </div>
    <div className="copywright">
      &2025 ASWE CONSTRUCTIONS. All rights reserved.
    </div>
    </>
  )
}

export default Footer