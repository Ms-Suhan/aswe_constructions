import React from 'react'
import './Contact_us.css'
function Contact_us() {
  return (
    <div className="contactus-container">
        <div className="top">
            <div className="left-img">
                <img src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHdoaXRlJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D" alt="" />
            </div>
            <div className="contact-form">
                <h1>Let's Get In Touch</h1>
                <p>or just reach out manually to <span>aswemailers@gmail.com</span></p>
                <div className="form">
                    <form action="">

                    <div className="name-lastname">
                    <div className="input-container">
                    <label htmlFor="name">Enter Your Name</label>
                    <input type="text" placeholder='Name' id='name' />
                    </div>
                    <div className="input-container">
                    <label htmlFor="last-name">Enter Your Last Name</label>
                    <input type="text" name="name" id="name" placeholder='Last Name' />

                    </div>
                    
                    </div>
                    <div className="input-container">
                    <label htmlFor="email">Enter Your Email Address</label>
                    <input type="email" placeholder='Email Address' id='email' />

                    </div>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" placeholder='Enter your phone number' />
                    <div className="input-container"></div>
                    <button type='submit'>Submit Form</button>

                    </form>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Contact_us