import React from 'react';
import { useParams } from 'react-router-dom';
import projects from './data/projects';
import { Link } from 'react-router-dom';
// import { Button } from '@mui/material';
import FooterProjects from './FooterProjetcs';
import {Button} from './Button';






function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <h2>Project not found!</h2>;
  }

  return (
    <>
    <div className="project-details">
      <h1>{project.name}</h1>
      <p>{project.details}</p>
   


                 <Button className='btns' buttonStyle='btn--outline' butttonSize='btn--large'
                      component={Link} to="/projects"      >
                                Back
                            </Button>
                            </div>
    <FooterProjects /> 

    </>
  );
}

export default ProjectDetails;
