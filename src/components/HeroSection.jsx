import React from 'react'
import {Button} from './Button';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

function HeroSection( {onHide}) {

  const navigate =  useNavigate();

  const handleClick = () => {
    if (onHide) onHide();  
    navigate ('/about');
  };

  
  return (
    <div className='hero-container'>

        <h1>Welcome to CET Platform</h1>
        <p>What are you waiting for?</p>
        <div className="hero-btns">
            <Button className='btns' buttonStyle='btn--outline' butttonSize='btn--large'
            onClick={handleClick}>
                Get started
            </Button>
          
        </div>
    </div>
  )
}

export default HeroSection;
