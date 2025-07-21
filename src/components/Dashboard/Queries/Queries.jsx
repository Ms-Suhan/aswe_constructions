import React, { useEffect, useState } from 'react'
import './Queries.css'
import authService from '../../../appwrite/auth'
import service from '../../../appwrite/config'


function Queries() {

  const [queries, setQueries] = useState([])

  const getQuery = async () => {
     service.getQueries().then((data) => setQueries(data.documents))
  }
  // console.log(queries)
  useEffect(() => {
    // await service.getQueries()
    getQuery()
  },[])
  return (
    <div className="query-container">
      <h2>Query</h2>
      <div className="queries">
        <table>
          <thead>
            <tr>
              
              <th scope='col'>No</th>
              <th scope='col'>Name</th>
              <th scope='col'>email</th>
              <th scope='col'>Phone</th>
              <th scope='col'>Message</th>
              <th scope='col'>Date</th>
            </tr>
          </thead>
          <tbody>
            {queries.map((item, index) => (
          <tr key={item.$id}>
              <td scope='row'>{index+1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone_number}</td>
              <td>{item.message}</td>
              <td>{Date.now()}</td>
            </tr>

            ))}
            
            
            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Queries