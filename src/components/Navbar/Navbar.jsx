import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div className="navbar">

    <div className="navbar-container">
        <div className="nav-logo">ASWE</div>
        <div className="nav-middle">
            <ul>
                <li>Home</li>
                <li>Projects</li>
                <li>About Us</li>
                <li>join</li>
                <li>more</li>
            </ul>

        </div>
            <button>Contact Us</button>
    </div>
    </div>
  )
}

export default Navbar