import React from 'react';
import { useParams } from 'react-router-dom';
import projects from './data/projects';
import { Link } from 'react-router-dom';
// import { Button } from '@mui/material';
import Footer from './Footer';
import {Button} from './Button';
import SlideShow from './SlideShow';






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
   

    {/* to think about the right location of this button */}
    {/* <Button sx={{
                        color: '#dcdcdc',
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        marginTop:'30px',
                        marginBottom:'30px',
                        marginLeft:'40px',
                        '&:hover': {
                            backgroundColor: '#ded4ca',
                            color: 'rgba(0, 0, 0, 0.9)'
                        }
                    }} className="button-back"
      component={Link} to="/projects" variant="contained">
                    Back
                </Button> */}

                 <Button className='btns' buttonStyle='btn--outline' butttonSize='btn--large'
                      component={Link} to="/projects"      >
                                Back
                            </Button>
                            </div>
    <Footer /> 

    </>
  );
}

export default ProjectDetails;
