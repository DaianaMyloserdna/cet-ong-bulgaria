import React from "react";
import '../../App.css';
import Footer from "../Footer";
import './Contact.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function Contact(){
    return(
        <>
        
        <div className="contact-container">
        <h1>Contact Us</h1>
      <p>
        <FontAwesomeIcon icon={faEnvelope} /> Email us at: 
        <a href="mailto:bulgaria@cetplatform.org"> bulgaria@cetplatform.org</a>
      </p>
   
      <p>
        <FontAwesomeIcon icon={faPhone} /> Call us at:
        <a href="tel:+359887928282"> +359 88 792 8282</a>
      </p>
    </div>
        <Footer />
        </>
    )
}

export default  Contact; 
