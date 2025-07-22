import React from 'react'
import './About_us.css'
import mission_icon from './mission.svg'
import vision_icon from './vision.svg'
import { useNavigate } from 'react-router-dom'

function About_us() {
  const navigate = useNavigate();
  return (
    <div className="aboutus-container">
        <div className="top">
            <h1>About Us</h1>
            <p>We are an construction company with entusiatic team of builders and thought leaders base in banglore. providing services since 2015</p>
        </div>
        <div className="img-section">
            <div className="left"><img src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
            <div className="right">
              <p>At ASWE Construction & LLP, we are your trusted partner in construction and civil consultancy, renowned for delivering exceptional quality services—on time and within budget. Our team of skilled professionals brings years of hands-on experience in every facet of civil construction and engineering, backed by deep insights into the local market to ensure your project's success.</p>

              <p>From intimate private developments to expansive government initiatives, we handle a diverse array of projects with the same dedication and precision. Our innovative, adaptable project management approach guarantees outstanding results, no matter the scale or complexity—turning your vision into reality with minimal stress and maximum efficiency.
              Ready to build something extraordinary? Contact us today to discover how ASWE can exceed your expectations and deliver the results you deserve.</p>
                <button onClick={() => navigate('/contact-us')}>Get in Touch</button>

            </div>
        </div>

        <div className="vision-container">
          <div className="mission">
            <img src={mission_icon} alt="" />
            <h2>Our Mission</h2>
            <p>Our mission is to deliver promises with strong adherence to ethical business. practices. Our Agenda is “Serving to Gain, Gaining to Serve” </p>
          </div>
          <div className="vision">
            <img src={vision_icon} alt="" />
            <h2>Our Vision</h2>
            <p>Our well thought vision, motivates us to reach up the customers’ expectations and ensure their delight at all
            times.</p>
            
          </div>
        </div>

          {/* <div className="team-title">
          <h3>Our Team</h3>
          </div>
        <div className="team">
          <div className="card">
            <img src="" alt="" />
            <h2>Neman Sharif</h2>
            <p>Founder</p>
            <div className="role"><h5>15 years +</h5></div>
          </div>
          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHfw0ak6xDF6MYl6CPMcbscQ4Z4WmBOMoraw&s" alt="" />
            <h2>Neman Sharif</h2>
            <p>Founder</p>
            <div className="role"><h5>15 years +</h5></div>
          </div>
          <div className="card">
            <img src="" alt="" />
            <h2>Neman Sharif</h2>
            <p>Founder</p>
            <div className="role"><h5>15 years +</h5></div>
          </div>
          
          
          
        </div> */}
    </div>
  )
}

export default About_us