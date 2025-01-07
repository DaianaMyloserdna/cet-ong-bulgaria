import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';




function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  // Toggle the click state
  const handleClick = () => setClick(!click);
  
  // Close the menu on mobile when clicking a link
  const closeMobileMenu = () => setClick(false);

  // Handle window resizing and toggle button visibility
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);  // Hide button on small screens
    } else {
      setButton(true);   // Show button on larger screens
    }
  };

  // Add event listener for resizing the window
  useEffect(() => {
    showButton();  // Check window size on mount

    window.addEventListener('resize', showButton);  // Add resize event listener

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', showButton);
    };
  }, []);  // Empty dependency array ensures this runs only once when component mounts

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
      {/* <img className='navbar-img' src="logo-removebg.png" alt="logo" /> */}
        <Link to='/' className='navbar-logo'>
        {/* C:E:T Platform Bulgaria  */}
        <img className='navbar-img' src="logo-removebg.png" alt="logo" />
        </Link>
        
        {/* Menu icon */}
        <div className='menu-icon' onClick={handleClick}>
          <FontAwesomeIcon icon={click ? faTimes : faBars} />
        </div>

        {/* Navigation links */}
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
              Projects
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/pictures' className='nav-links' onClick={closeMobileMenu}>
             Gallery
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/projectlocation' className='nav-links' onClick={closeMobileMenu}>
         Location
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
        
     
        
      </div>
    </nav>
  );
}

export default Navbar;
