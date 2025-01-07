import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faHandshake, faRecycle, faUsers, faMinus } from '@fortawesome/free-solid-svg-icons';
import './About.css'; 

function About() {
  const images = [
    '1_n.jpg', 
    '2_n.jpg',
    '4_n.jpg',
    '5_n.jpg',
    '6_n.jpg',
    '7_n.jpg',
    '8_n.jpg',
    '9_n.jpg',
    '10_n.jpg',
    '11_n.jpg',
    '12_n.jpg',
    '13_n.jpg',
    '14_n.jpg',
    '15_n.jpg',
    '16_n.jpg',
    '17_n.jpg',
    '18_n.jpg',
    '19_n.jpg',
    '20_n.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []); 
  return (
    <>
      <div className="about-container">
        <div>
        <h1>CET PLATFORM BULGARIA</h1>
        <p>
          CET Platform Bulgaria is a dedicated non-profit organization committed to fostering the development of civil society,
          promoting democratic values, and empowering youth through non-formal education. Established with the mission to provide
          support, services, and expert knowledge, we focus on civic education, advocacy, and community engagement. With over 40
          successful Erasmus+ projects to our name, we have become a trusted partner in inspiring and equipping young people to
          actively participate in shaping their communities and futures.
        </p>
        </div>
        <img
          className="images-slideshow"
          src={images[currentIndex]}
          alt={`Slide showing CET Platform project ${currentIndex + 1}`}
        />
      </div>

{/* values */}
      <div className="content-container">
        <div className="text-content">
        <h2>Guiding Principles That Define Us</h2>
        <FontAwesomeIcon icon={faMinus} className='icon'/>
        <p>
          At CET Platform Bulgaria, we are driven by core values that inspire and guide our work with youth and communities.
        </p>
        </div>
        <div className="values-container">
          <div>
            <FontAwesomeIcon icon={faGraduationCap} className="icon" aria-hidden="true" />
            <h4>Youth Empowerment</h4>
            <p>
              We equip young people with the knowledge, skills, and confidence to create positive change in their communities.
            </p>
          </div>

          <div>
            <FontAwesomeIcon icon={faHandshake} className="icon" aria-hidden="true" />
            <h4>Inclusivity and Equality</h4>
            <p>
              We promote diversity, equal opportunities, and respect for human rights in all our initiatives. We give to
              everyone, no matter their background.
            </p>
          </div>

          <div>
            <FontAwesomeIcon icon={faRecycle} className="icon" aria-hidden="true" />
            <h4>Sustainability and Innovation</h4>
            <p>
              We foster creative solutions to societal challenges, emphasizing sustainable development and responsible
              practices.
            </p>
          </div>

          <div>
            <FontAwesomeIcon icon={faUsers} className="icon" aria-hidden="true" />
            <h4>Collaboration and Partnership</h4>
            <p>
              We build strong local, regional, and international alliances to maximize impact and create lasting change.
            </p>
          </div>
        </div>
      </div>


{/* feedback */}
<div className="feedback-container">
  <h2>What our participants are saying</h2>

  <div className="users-feedback">

    {/* every user separately */}
    <div className='user-feedback-item'>
      <img src="user-1.jpg" alt="" />
      <p>"These projects are open doors to innovation, connecting with life in new ways, new cultures, new people, new knowledge, and much more that brings you closer to reality and growth. Great organizational team and project venue"</p>
      <FontAwesomeIcon icon={faMinus} className='icon'/>

     <p><b>Andra - Participant on three projects</b></p>
    </div>

    <div className='user-feedback-item'>
      <img src="user-2.jpg" alt="" />
      <p>"Being part of CET Platform Bulgaria’s projects has been incredible! The organization truly empowers youth by providing opportunities to grow, learn, and connect with like-minded individuals from around the world"</p>
      <FontAwesomeIcon icon={faMinus} className='icon'/>

      <p><b>Teresa - Polish Participant</b></p>
    </div>

<div className='user-feedback-item'>
  <img src="user-3.jpg" alt="" />
  <p>"I participated in 2 exchanges of CET. As a person having wide experience with Erasmus+ I can swear that you won’t find higher quality of Erasmus projects. Organisation with due diligence care about participants and Amazing venue."</p>
  <FontAwesomeIcon icon={faMinus} className='icon'/>

  <p><b>Dawid - Participant on two projects</b></p>
</div>

  </div>
</div>

    </>
  );
}

export default About;
