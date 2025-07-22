import React from 'react'
import './Projects.css'
import Test from '../Test/Test'
function Project() {

  const projectsData = [
    {
      img: 'https://images.unsplash.com/photo-1611893208029-8bae3dd78bff?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      client: "somercet",
      projectDetails: "joint measurment certification third party checking",
      status: 'completed',
      scopeOfWork: "Design and detailing of entire structures mentioned above"
    },
    {
      img: "https://images.unsplash.com/photo-1645106718022-a6dcba953b51?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      client: "Aditya Birla Retail Limited",
      status: "completed",
      projectDetails: "Joint Measurement Certification, Third Party Bill Checking",
      scopeOfWork: "Civil Consultation Services to open new stores "
    },
    {
      img: "https://images.unsplash.com/photo-1671782322878-67358c43ca31?q=80&w=673&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      client: 'Balaji Technical Consultants',
      status: 'completed',
      projectDetails: 'Skywalk Bridge at Lakkasandra Near 16th Cross, Jakkasandra',
      scopeOfWork: ' Architectural, Structural, Survey Drawings & Soil testing. '
    },
    {
      img: 'https://images.unsplash.com/photo-1653711441374-e2aefdd36572?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      client: 'Sindoora Builders',
      status: 'completed',
      projectDetails: 'Foot Over Bridge At Madivala Junction ',
      scopeOfWork: 'Super structure is in Steel & sub structure in concrete'
    },
    {
      img: 'https://images.unsplash.com/photo-1636367393690-1f07c7413851?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      client: 'H. M. V School Group',
      status: 'completed',
      projectDetails: 'Orchid International School, Nagarabhavi, Bangalore.',
      scopeOfWork: 'Design and detailing of entire structures'
    },
    {
      img: 'https://images.unsplash.com/photo-1700376228506-c08c9fc790ee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      client: 'Rites',
      status: 'completed',
      projectDetails: 'Govt. Engineering College Hovinahadagahli, Bellary',
      scopeOfWork: 'Design and detailing of entire structures.'
    },
    {
      img: 'https://images.unsplash.com/photo-1613353557237-2baa9d271861?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      client: 'Karnataka Housing Board',
      status: 'completed',
      projectDetails: 'Office Complex, Yelahanka New Town, Bangalore ',
      scopeOfWork: 'Design and detailing of entire structures'
    },
    {
      img: 'https://images.unsplash.com/photo-1671782322878-67358c43ca31?q=80&w=673&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      client: 'Karnataka Power Corporation,',
      status: 'completed',
      projectDetails: 'Office Complex (Kali hydro electric Project). Ambhikanagar ',
      scopeOfWork: 'Design and detailing of entire structures'
    },
    {
      img: '',
      client: 'Karnataka Residential Educational Institutions',
      status: 'completed',
      projectDetails: 'Morarji Desai Residencial Scheme Projects ',
      scopeOfWork: 'Design and detailing of entire structures'
    },
    {
      img: '',
      client: 'Masjid Committees',
      status: 'completed',
      projectDetails: 'Chanpatan, Sakleshpur, Jamia Masjids, and other 12 Masjids.',
      scopeOfWork: 'Super structure in RCC & sub structure in concrete. '
    },
    {
      img: '',
      client: 'TCE TATA CONSULTING ENGINEERS',
      status: 'completed',
      projectDetails: ' INDIRA GANDHI CENTRE FOR ATOMIC RESEARCH',
      scopeOfWork: 'Fast Reactor Fuel Cycle Facility',
    },
   
  ]
  return (
    <>
    <h1 className='heading'>PROJECTS</h1>

    <div className="projects-container">
      {
        projectsData.map((project,index) => (
          <div className="card" key={index}>
          <div className="card-left-img">
            <img src={project.img} alt="" />
          </div>
          <div className="right-info">
            <p className='completed'>&bull; {project.status}</p>
            <div className="ele">
            <span>Client  </span>
            <p>{project.client}</p>
            </div>
            <div className="ele">
            <span>Project  </span>
            <p>{project.projectDetails}</p>
            </div>
            <div className="ele">
            <span>Scope of work </span>
            <p> {project.scopeOfWork}</p>
            </div>
          </div>
        </div>
        ))
      }
      
      
      
      
      
    </div>
    </>

    // <Test/>
  )
}

export default Project