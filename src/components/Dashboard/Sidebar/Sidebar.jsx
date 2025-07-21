import React from 'react'
import './Sidebar.css'
function Sidebar() {
  return (
    <div className="sidebar-container">
        <h2>Admin Dashboard</h2>
        <div className="user-profile">

        </div>
        <div className="navigation">
            <button>Dashboard</button>
            <button>Quries</button>
            <button>Employees</button>
            <button>Attendance</button>
            <button>Salaries</button>
        </div>

        <div className="bottom">
            <button>Sign Out</button>
        </div>
    </div>
  )
}

export default Sidebar