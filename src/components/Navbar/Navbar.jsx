import React, { useState } from 'react'
import './Navbar.css'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import menu from './menu.svg'
import close_icon from './close.svg'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../store/loginStore'
import authService from '../../appwrite/auth'


function Navbar() {
  const navigate = useNavigate()
  const [display, setDisplay] = useState(true)
  const authStatus = useSelector(state => state.auth.status)
  const dispatch = useDispatch();

  const handleLogout= () => {
      // setDisplay(true)
      authService.logout()
      dispatch(logout())
      // console.log('here')
  }
  return (
    <div className="navbar">

    <div className="navbar-container">
        <div className="nav-logo" onClick={() => navigate('/')}>ASWE</div>
        <div className="nav-middle">
            <ul>
                <li ><Link to={'/'}>Home</Link></li>
                <li ><Link to={'/projects'}>Projects</Link></li>
                <li ><Link to={'/about-us'}>About Us</Link></li>
                {!authStatus? <li ><Link to={'/login'}>Login</Link></li> : null}
                {!authStatus? <li><Link to={'/register'}>Register</Link></li> : null}
                {!authStatus? null : (<li><Link onClick={handleLogout}>Logout</Link></li>)}
                {!authStatus? null : (<li><Link to={'/dashboard'}>Dashboard</Link></li>)}
                
            </ul>

        </div>
            <button className='contactus-button' onClick={() => navigate('/contact-us')}>Contact Us</button>
            <button className='dropdown'><img src={menu} alt="" onClick={() => setDisplay(false)} /></button>
    </div>
    <div className={`mobile-menu ${display? 'd-none': ''}`}>
      <h1 className='title'>ASWE <img src={close_icon} alt="" onClick={() => setDisplay(true)}/></h1>
              <ul>
                <li ><Link to={'/'} onClick={() => setDisplay(true)}>Home</Link></li>
                <li ><Link to={'/projects'} onClick={() => setDisplay(true)}>Projects</Link></li>
                <li ><Link to={'/about-us'} onClick={() => setDisplay(true)}>About Us</Link></li>
                <li><Link to={'/contact-us'} onClick={() => setDisplay(true)}>Contact Us</Link></li>
                {authStatus? null : (<li ><Link to={'/login'} onClick={() => setDisplay(true)}>Login</Link></li>)}
                {authStatus? null : (<li ><Link to={'/register'} onClick={() => setDisplay(true)}>Register</Link></li>)}
                {authStatus? (<li><Link onClick={handleLogout}>Logout</Link></li>) : null}
                {authStatus? (<li><Link to={'/dashboard'}>Dashboard</Link></li>) : null}
                
               
            </ul>
    </div>
    </div>
  )
}

export default Navbar