import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <Link to="/contact">
              <h2>Contact Us</h2>
            </Link>
          </div>

          <div className="footer-link-items">
            <Link to="/pictures">
              <h2>Check Out Our Photos</h2>
            </Link>
          </div>

          <div className="footer-link-items">
            <h2>Social Media</h2>
            <div className="footer-link-icons">
            <a
              className="social-icon-link facebook"
              href="https://www.facebook.com/cetplatformbg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              className="social-icon-link instagram"
              href="https://www.instagram.com/cetplatform_bg/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          </div>
        </div>
      </div>

      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <img src="/output-onlinepngtools.png" alt="C:E:T Platform Logo" />
            </Link>
          </div>
        
          <small className="website-rights">CET Platform © 2024</small>
          <div className="european-logo">
          <img src="/EN_Co-fundedbytheEU_RGB_WHITE.png" alt="european logo" />
        </div>
        
        </div>
      </section>
    </div>
  );
}

export default Footer;
