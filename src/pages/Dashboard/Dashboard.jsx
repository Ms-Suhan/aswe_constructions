import React from 'react'
import './Dashboard.css'
import Sidebar from '../../components/Dashboard/Sidebar/Sidebar'
import Queries from '../../components/Dashboard/Queries/Queries'
function Dashboard() {
  return (
    <div className="dashboard-container">
        <div className="sidebar">

        <Sidebar/>
        </div>
       

        <Queries/>
        
    </div>
  )
}

export default Dashboard