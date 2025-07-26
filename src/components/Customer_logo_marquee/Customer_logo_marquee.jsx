import React from 'react'
import './Customer_logo_marquee.css'

function Customer_logo_marquee() {
  return (
    <div className="scroll-wrapper">
        <h2>Trusted Customers</h2>
        <div className="slider">
            <div className="logo logo1">
              <img src="https://somersetlimited.com/wp-content/uploads/2024/05/STL-Web01.png" alt="" />
            </div>
            <div className="logo logo2">
              <img src="https://bricknearth.in/images/brand/p2.jpg" alt="" />
            </div>
            <div className="logo logo3">
              <img src="https://emcogroup.com/wp-content/uploads/2025/02/emco-group-logo.png" alt="" />
            </div>
            <div className="logo logo4">
              <img src="https://www.johncrane.com/media/t01ncbpm/logo-john-crane.svg" alt="" />
            </div>
            <div className="logo logo5">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFB7Ryz9BRDBRFEdrTxetYi18n0nEeuNnneTMurtvC8Od3nlZDc-u-gBOvZhtdbTlnld4&usqp=CAU" alt="" />
            </div>
            <div className="logo logo6">
              <img src="https://funworld-blr.s3.ap-south-1.amazonaws.com/public/logo2.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Customer_logo_marquee