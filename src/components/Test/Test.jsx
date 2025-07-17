


import React from 'react';

const project = {
    id: "01.",
    title: "Aditya Birla",
    description: "Design and detail of entire structures of pipe rack of 260mtr.",
    imageUrl: "https://images.unsplash.com/photo-1632398461186-37c76a70062f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVuZGVyJTIwY29uc3RydWN0aW9ufGVufDB8MnwwfHx8MA%3D%3D", // Replace with actual image URL or import
};

const cardStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '24px',
    border: '1px solid #d3d3d3',
    borderRadius: '6px',
    margin: '30px 0',
    background: '#fff',
};

const imageStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginRight: '24px',
    border: '3px solid #f0f0f0',
};

const infoStyle = {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
};

const titleStyle = {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    margin: 0,
};

const descriptionStyle = {
    color: '#757575',
    fontSize: '1rem',
    marginLeft: '32px',
    flex: 1,
    textAlign: 'right',
};

function ProjectCard() {
  return (
    <div>
      <h2 style={{ color: "#4973AF", fontWeight: 600 }}>Projects</h2>
      <div style={cardStyle}>
        <img src={project.imageUrl} alt={project.title} style={imageStyle} />
        <div style={infoStyle}>
          <span style={{ fontWeight: '600', color: '#757575', marginRight: '16px' }}>{project.id}</span>
          <span style={titleStyle}>{project.title}</span>
          <span style={descriptionStyle}>{project.description}</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
