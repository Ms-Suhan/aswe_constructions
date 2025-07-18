import React, { useState } from 'react'
import './Navbar.css'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'

import menu from './menu.svg'
import close_icon from './close.svg'


function Navbar() {
  const navigate = useNavigate()
  const [display, setDisplay] = useState(true)

  const handleClose = () => {

  }
  return (
    <div className="navbar">

    <div className="navbar-container">
        <div className="nav-logo">ASWE</div>
        <div className="nav-middle">
            <ul>
                <li ><Link to={'/'}>Home</Link></li>
                <li ><Link to={'/projects'}>Projects</Link></li>
                <li ><Link to={'/about-us'}>About Us</Link></li>
                <li ><Link to={'/join'}>Join</Link></li>
                <li><Link to={'/more'}>More</Link></li>
            </ul>

        </div>
            <button className='contactus-button'>Contact Us</button>
            <button className='dropdown'><img src={menu} alt="" onClick={() => setDisplay(false)} /></button>
    </div>
    <div className={`mobile-menu ${display? 'd-none': ''}`}>
      <h1 className='title'>ASWE <img src={close_icon} alt="" onClick={() => setDisplay(true)}/></h1>
              <ul>
                <li ><Link to={'/'}>Home</Link></li>
                <li ><Link to={'/projects'}>Projects</Link></li>
                <li ><Link to={'/about-us'}>About Us</Link></li>
                <li ><Link to={'/join'}>Join</Link></li>
                <li><Link to={'/more'}>More</Link></li>
            </ul>
    </div>
    </div>
  )
}

export default Navbar