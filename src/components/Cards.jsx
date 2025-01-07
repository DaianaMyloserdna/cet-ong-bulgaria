


import React, { useState } from 'react';
import CardItem from './CardItem';
import './Cards.css';
import projects from './data/projects';

function Cards() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (projectId) => {
    setSelectedProject(selectedProject === projectId ? null : projectId);
  };

  const selectedProjectDetails = projects.find((p) => p.id === selectedProject);

  return (
    <div className="cards">
      <h1>OUR PROJECTS</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          {!selectedProject ? (
            <ul className="cards__items">
              {projects.map((project) => (
                <CardItem
                  key={project.id}
                  id={project.id}
                  src={project.image}
                  text={project.description}
                  path={project.path}
                  onClick={() => handleCardClick(project.id)} // Attach the click handler
                />
              ))}
            </ul>
          ) : (
            <div className="project-details">
              <h3>{selectedProjectDetails.name}</h3>
              <p>{selectedProjectDetails.details}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cards;
