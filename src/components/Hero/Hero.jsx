import React from 'react'
import './Hero.css'
import arrow_icon from './top_arrow.svg'
import { useNavigate } from 'react-router-dom'
import fatory_img from './factory-img.jpg'
import location_on from './location_on.svg'
import Scroll from '../../components/Scroll/Scroll'
import Customer_logo_marquee from '../Customer_logo_marquee/Customer_logo_marquee'


function Hero() {
  const navigate = useNavigate()
  
  return (
    <div className='hero'>
    <div className="hero-container">
        <h1>Masters of <span>consistency </span> <br/> and quality. </h1>
        {/* <h1> and quality</h1> */}
        <p>Construciton made simple.</p>
    </div>
    {/* <div className="stats">
    <div className="col1">
        <h3>Request a Call</h3>
        <div className="col-bottom" onClick={() => navigate('/contact-us')}>
          <p>Book Now</p>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="col1">
        <h3>Call us directly</h3>
        <div className="col-bottom">
          <p>9632620908</p>
         
        </div>
      </div>
      <div className="col1">
        <h3>business hours</h3>
        <div className="col-bottom">
          <p>Monday-Friday 9:30am-6:00pm</p>
          
        </div>
      </div>
      
    </div> */}

<div className="numbers">
    <div className="numb-card">
          <h2>15<span>+</span></h2>
          <h3>Years of Experience</h3>
        </div>
        <div className="numb-card">
          <h2>150+</h2>
          <h3>Projects Completed</h3>
        </div>
        <div className="numb-card">
          <h2>200+</h2>
          <h3>Satisfied Customers</h3>
        </div>
        <div className="numb-card">
          <h2>150+</h2>
          <h3>Customers</h3>
        </div>
    </div>
    <Customer_logo_marquee/>

<div className="ongoing-works-container">

    <div className="ongoing-projects">
      <div className="top">
        <div className="left">

          <h1>Ongoing Projects</h1>
          <p>We specialize in a wide range of construction services, including residential, commercial, and industrial projects. From initial design to final inspection, we work closely with our clients to understand their unique needs and vision.</p>
          {/* <h3>Our core design idea's.</h3> */}
          {/* <ul>
            <li>Site senitive architecture</li>
            <li>Integrated Design  + Building approach</li>
            <li>Comnteprary, Yet timeless Asthetics</li>
            <li>User centric spaces</li>
            <li>Substanitally at the Core</li>
          </ul> */}
        </div>
        <div className="right"></div>
      </div>

      <div className="projects-cards">
      <div className="card">
          <div className="img"><img src="https://images.unsplash.com/photo-1611893208029-8bae3dd78bff?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
          <div className="info">
            <h1>Aditya Birla Limited</h1>
            <div className="location">
              <span><img src={location_on} alt="" />Banglore</span>
              <button>Details</button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="img"><img src="https://plus.unsplash.com/premium_photo-1677522805495-20700faf5802?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
          <div className="info">
            <h1>Somerset Limited</h1>
            <div className="location">
              <span><img src={location_on} alt="" />Banglore</span>
              <button>Details</button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="img"><img src="https://images.unsplash.com/photo-1693064203616-2e78760f5df7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
          <div className="info">
            <h1>Wintec Limited</h1>
            <div className="location">
              <span><img src={location_on} alt="" />Banglore</span>
              <button>Details</button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="img"><img src="https://images.unsplash.com/photo-1565086858328-032489ebd45a?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
          <div className="info">
            <h1>Wintec Limited</h1>
            <div className="location">
              <span><img src={location_on} alt="" />Banglore</span>
              <button>Details</button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="img"><img src="https://plus.unsplash.com/premium_photo-1674043992234-2107f7de6ab5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
          <div className="info">
            <h1>Wintec Limited</h1>
            <div className="location">
              <span><img src={location_on} alt="" />Banglore</span>
              <button>Details</button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="img"><img src="https://images.unsplash.com/photo-1632398535774-b95738ddff68?q=80&w=1062&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
          <div className="info">
            <h1>Wintec Limited</h1>
            <div className="location">
              <span><img src={location_on} alt="" />Banglore</span>
              <button>Details</button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
</div>

<div className="recent-works-container">

    <div className="recent-works">
      <div className="top">
        <div className="left">

          <h1>Recent Works</h1>
          <p>We specialize in a wide range of construction services, including residential, commercial, and industrial projects. From initial design to final inspection, we work closely with our clients to understand their unique needs and vision.</p>
          {/* <h3>Our core design idea's.</h3>
          <ul>
            <li>Site senitive architecture</li>
            <li>Integrated Design  + Building approach</li>
            <li>Comnteprary, Yet timeless Asthetics</li>
            <li>User centric spaces</li>
            <li>Substanitally at the Core</li>
          </ul> */}
        </div>
        <div className="right"></div>
      </div>

      <div className="projects-cards">
      <div className="card">
          <div className="img"><img src="https://images.unsplash.com/photo-1611893208029-8bae3dd78bff?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
          <div className="info">
            <h1>Aditya Birla Limited</h1>
            <div className="location">
              <span><img src={location_on} alt="" />Banglore</span>
              <button>Details</button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="img"><img src="https://plus.unsplash.com/premium_photo-1677522805495-20700faf5802?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
          <div className="info">
            <h1>Somerset Limited</h1>
            <div className="location">
              <span><img src={location_on} alt="" />Banglore</span>
              <button>Details</button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="img"><img src="https://images.unsplash.com/photo-1693064203616-2e78760f5df7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
          <div className="info">
            <h1>Emco Energy Ltd</h1>
            <div className="location">
              <span><img src={location_on} alt="" />Banglore</span>
              <button>Details</button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="img"><img src="https://images.unsplash.com/photo-1565086858328-032489ebd45a?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
          <div className="info">
            <h1>John Crane Sealing System</h1>
            <div className="location">
              <span><img src={location_on} alt="" />Banglore</span>
              <button>Details</button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="img"><img src="https://plus.unsplash.com/premium_photo-1674043992234-2107f7de6ab5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
          <div className="info">
            <h1>Tce Tata Consulting Engineers Ltd.</h1>
            <div className="location">
              <span><img src={location_on} alt="" />Banglore</span>
              <button>Details</button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
</div>
    <div className="why-section">
      <div className="left">
        <img src="https://images.unsplash.com/photo-1712567604499-08f207054260?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGRhcmslMjBidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
      </div>
      <div className="right">
        <div className="row1"><h2>Why Clients choose <span>ASWE</span></h2></div>
        <div className="row2">
          <div className="reason">
            <span>01</span>
            <h4>Quality</h4>
            <p>Every project is managed with precision by certified consultants.</p>
          </div>
          <div className="reason">
            <span>02</span>
            <h4>Clarity</h4>
            <p>Our expert team ensures your path forward is always clear and compliant.</p>
          </div>
          <div className="reason">
            <span>03</span>
            <h4>Complexity</h4>
            <p>We partner closely with you to navigate complex aprroval process.</p>
          </div>
          <div className="reason">
            <span>04</span>
            <h4>Speed</h4>
            <p>With fast turnaroud time, we help keep your project moving.</p>
          </div>
        </div>
        <div className="row3">
          <p>We bring deep knowledge and proactive mindset to every job. At aswe, compliance isn't just a service - it's our commitment to your service.</p>
        </div>
      </div>
    </div>

    <div className="services">
      <span className='heading '>Services</span>
      <div className="grid">
        <div className="grid-ele">
          <img src="https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div>
        <h3>Structrual Engineering</h3>
        <p>We provide sturctural Engineering services </p>
        </div>
        </div>
        <div className="grid-ele">
        <img src="https://images.unsplash.com/photo-1481026469463-66327c86e544?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D" alt="" />
        <div>
        <h3>Design Engineering</h3>
        <p>We provide sturctural Engineering services </p>
        </div>
        </div>
        <div className="grid-ele">
        <img src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJ1aWxkaW5nfGVufDB8fDB8fHww" alt="" />
        <div>
          <h3>Detailing </h3>
          <p>We provide sturctural Engineering services </p>
        </div>
        </div>
        <div className="grid-ele four">
        <img src="https://images.unsplash.com/photo-1576225410873-a28b2a79fd93?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div>
        <h3>Structrual steel fabrication drawings</h3>
        <p>We provide sturctural Engineering services </p>
        </div>
        </div>
        <div className="grid-ele">
        <img src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJ1aWxkaW5nfGVufDB8fDB8fHww" alt="" />
        <div>
        <h3>Estimation and consting</h3>
        <p>We provide sturctural Engineering services </p>
        </div>
        </div>
        <div className="grid-ele">
        <img src="https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div>
        <h3>Architectural design.</h3>
        <p>We provide sturctural Engineering services </p>
        </div>
        </div>
        <div className="grid-ele six">
        <img src="https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div>
        <h3>MEP Services</h3>
        <p>We provide sturctural Engineering services </p> 
        </div>
        </div>
      </div>
    </div>

    {/* <div className="about-container">
      <div className="about">

        <h2>Helping you move forward with clarity and confidence</h2>
        <h6>At Aswe, We take complexity out of the construction.</h6>
        <p>We are a banglore based construction comapny supporting industries, develpers. Expertise in residential, industrial, commericial and mix-use projects. Our Goal? To provide seamless and conssistant timely delivery of serive,.</p>
        <p>From design to delivery we are every step of the way - offering expert advice, fast solutions. and a clear path through every stage of compliance.</p>
        <button onClick={() => navigate('/about-us')}>Learn More</button>
      </div>
    </div> */}
  <Scroll/>
    
   <div className="testimonials"></div>


    </div>
  )
}

export default Hero