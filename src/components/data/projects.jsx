import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faHandshake, faLaptop, faMobileScreen, faPeopleArrows, faPeopleGroup, faRobot, faRocket, faSun, faUsers,  } from '@fortawesome/free-solid-svg-icons';
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import './projects.css';
import SlideShow from "../SlideShow";


const projects = [
    {
        id: 1,
        name: "Cultivating Skills for Brighter Future",
        description: "Read more",
        image: "Cultivating skills.jpg",
        path: "/project-one", // Added path for navigation
        details: (
            <div className="project-container">

              <div className="project-description">
              <p>From February 7 to 15, 2024, CET Bulgaria hosted the Erasmus+ program "Cultivating Skills for a Brighter Future" in Youthopia, Stara Zagora. This personal development initiative brought together 27 participants from Bulgaria, Greece, Romania, Italy, and Serbia, aiming to empower young people with self-discovery techniques, goal-setting skills, and mindfulness practices. Facilitated by the experienced Tihomira, the program combined engaging activities with a supportive environment, enabling participants to uncover their potential and create actionable strategies for their futures.</p>
              <div> <SlideShow /></div>
              </div>

              <div className="project-goals-container">
               
                <div className="project-goals">
                <h2>Project Goals:</h2>
                <p>The training course aimed to equip participants with essential skills and knowledge to thrive in the digital landscape. Here are the key goals that guided this transformative learning experience.</p>
                </div>

                <div className="goals-container">
                <div>
                <FontAwesomeIcon icon={faHtml5} className="icon" aria-hidden="true"/>
                  <h4>Facilitate Self-Discovery</h4>
                  <p>Empower participants to identify their strengths, values, and aspirations, fostering informed personal and professional decision-making.</p>
                  </div>

                  <div>
                <FontAwesomeIcon icon={faBolt} className="icon" aria-hidden="true" />
                <h4>Enhance Goal-Setting Proficiency</h4>
                <p>Equip participants with techniques to define clear objectives and actionable steps to achieve them effectively.</p>
                </div>

                <div>
                <FontAwesomeIcon icon={faSun}  className="icon" aria-hidden="true" />
                <h4>Strengthen Mental Well-Being</h4>
                <p>Promote mindfulness and meditation practices to build resilience, reduce stress, and foster emotional stability.</p>
                </div>

                <div>
                <FontAwesomeIcon icon={faRocket}  className="icon" aria-hidden="true"/>
                <h4>Boost Employability Skills</h4>
                <p>Develop critical soft skills such as adaptability, collaboration, and communication, preparing participants for success in the job market.</p>
                </div>
                </div>
              </div>
              <div className="project-imgs">
  <img src="/p1-1.jpg" alt="" />
  <img src="/p1-2.jpg" alt="" />
  <img src="/p1-3.jpg" alt="" />
  <img src="/p1-4.jpg" alt="" />
  <img src="/p1-5.jpg" alt="" />
  <img src="/p1-6.jpg" alt="" />
 
</div>
               {/*images  */}

            </div>
          )
    },
    {
        id: 2,
        name: "Digital Creativity for Youth Workers",
        description: "Read more",
        image: "Digital-creativity.png",
        path: "/project-2",
        details:(
          <div className="project-container">

            <div className="project-description">
            
            <p>From April 8-16, 2024, Stara Zagora, Bulgaria, hosted Digital Creativity for Youth Workers: Exploration, Mastery, Impact!, a transformative training course under KA153. The program equipped youth workers with advanced digital skills, including photography, video editing, and digital marketing. Participants explored emerging technologies like artificial intelligence and learned to create engaging content in various formats, such as PDF books and audio files. Emphasizing ethical practices, the training empowered participants to craft impactful digital content, connect effectively with their audiences, and adapt to the fast-evolving digital landscape. The course was conducted entirely in English and provided hands-on, practical learning experiences.</p>
            <div> <SlideShow /></div>
            
            </div>

            <div className="project-goals-container">
             
              <div className="project-goals">
              <h2>Project Goals:</h2>
              <p>The training course aimed to equip participants with essential skills and knowledge to thrive in the digital landscape. Here are the key goals that guided this transformative learning experience.</p>
              </div>

              <div className="goals-container">
              <div>
              <FontAwesomeIcon icon={faLaptop}  className="icon" aria-hidden="true"/>
                <h4>Mastery of Digital Tools</h4>
                <p>Participants gained hands-on experience using advanced tools to create compelling digital content.</p>
                </div>

                <div>
                <FontAwesomeIcon icon={faPeopleArrows} className="icon" aria-hidden="true" />
              <h4>Creative Storytelling</h4>
              <p>The program enhanced participants' abilities in photography, video editing, and montage, empowering them to effectively share ideas and stories.</p>
              </div>

              <div>
              <FontAwesomeIcon icon={faMobileScreen} className="icon" aria-hidden="true" />
              <h4>Ethical and Impactful Marketing</h4>
              <p>Youth workers developed strategies for engaging target audiences ethically through innovative digital marketing techniques.</p>
              </div>

              <div>
              <FontAwesomeIcon icon={faRocket}  className="icon" aria-hidden="true"/>
              <h4>Exploration of Emerging Technologies</h4>
              <p>The course introduced artificial intelligence and other cutting-edge technologies, inspiring participants to integrate them into content creation and marketing.</p>
              </div>
              </div>
            </div>

<div className="project-imgs">
  <img src="/p2-1.png" alt="" />
  <img src="/p2-2.jpg" alt="" />
  <img src="/p2-3.jpg" alt="" />
  <img src="/p2-4.jpg" alt="" />
  <img src="/p2-5.jpg" alt="" />
  <img src="/p2-6.jpg" alt="" />
 
</div>
             {/*images  */}

          </div>
        )

    },
    {
        id: 3,
        name: "Our Stories - Our Stage",
        description: "Read more",
        image: "Our Stories - Our Stage.jpg",
        path: "/project-3",
        details: (
          <div className="project-container">

            <div className="project-description">
          
            <p>From June 11-19, 2024, Stara Zagora, Bulgaria, hosted Our Stories, Our Stage, a transformative youth exchange designed to foster civic sensitivity toward human rights and democracy among European youth. Through informal educational methods such as storytelling, theater, and political simulations, participants explored their potential while gaining valuable skills not typically addressed in traditional education. A highlight of the program was the creation of a state-like simulation game, which encouraged participants to think critically, collaborate, and engage creatively with civic concepts.</p>
            <div> <SlideShow /></div>
            
            </div>

            <div className="project-goals-container">
             
              <div className="project-goals">
              <h2>Project Goals:</h2>
              <p>This project was guided by several key objectives designed to inspire participants and help them grow as informed and engaged citizens.</p>
              </div>

              <div className="goals-container">
              <div>
              <FontAwesomeIcon icon={faUsers} className="icon" aria-hidden="true"/>
                <h4>Promoting Civic Awareness</h4>
                <p>The project deepened participants’ understanding of human rights and democracy, fostering greater responsibility as European citizens.</p>
                </div>

                <div>
              <FontAwesomeIcon icon={faBolt} className="icon" aria-hidden="true" />
              <h4>Innovative Learning Methods</h4>
              <p>Storytelling, theater, and political simulations provided engaging and impactful ways to learn and connect with complex civic concepts.</p>
              </div>

              <div>
              <FontAwesomeIcon icon={faMobileScreen} className="icon" aria-hidden="true" />
              <h4>Creative Civic Engagement</h4>
              <p>Storytelling, theater, and political simulations provided engaging and impactful ways to learn and connect with complex civic concepts.</p>
              </div>

              <div>
              <FontAwesomeIcon icon={faPeopleGroup} className="icon" aria-hidden="true"/>
              <h4>Developing Active Citizenship Skills</h4>
              <p>Participants enhanced critical thinking, teamwork, and public speaking abilities, preparing them for active roles in their communities.</p>
              </div>
              </div>
            </div>
            <div className="project-imgs">
  <img src="/p3-1.jpg" alt="" />
  <img src="/p3-2.jpg" alt="" />
  <img src="/p3-3.jpg" alt="" />
  <img src="/p3-4.jpg" alt="" />
  <img src="/p3-5.jpg" alt="" />
  <img src="/p3-6.jpg" alt="" />
 
</div>
             {/*images  */}

          </div>
        )

    },
    {
        id: 4,
        name: "The State of Mind",
        description: "Read more ",
        image: "the-state-of-mind.png",
        path: "/project-4",
        details: (
          <div className="project-container">

            <div className="project-description">
        
            <p>"The State of Mind" is an Erasmus+ training course that took place from 20th to 27th November 2024 in Bulgaria. This innovative program focused on designing interactive political games, where participants explored the complexities of navigating political systems. The course incorporated the power of artificial intelligence to fuel creativity in youth work, blending traditional art with modern technology. Through hands-on workshops, participants created engaging, dynamic experiences, including digital art, animations, and original music compositions, showcasing the potential of AI in fostering creativity and developing new tools for youth work.</p>
          <div> <SlideShow /></div>
           
            </div>

            <div className="project-goals-container">
             
              <div className="project-four-goals">
              <h2>Project Goals:</h2>
              <p>This project was guided by several key objectives designed to inspire participants and help them grow as informed and engaged citizens.</p>
              </div>

              <div className="goals-four-container">
              <div>
              <FontAwesomeIcon icon={faRobot} className="icon" aria-hidden="true"/>
                <h4>Fostering Creativity through AI</h4>
                <p>This goal focused on utilizing artificial intelligence to inspire and enhance creativity in youth work. Participants explored how AI tools like ChatGPT, LeonardoAI, and Dream Machine could be integrated into hands-on workshops to develop innovative art and content. The aim was to show how technology can be a catalyst for creative expression and engagement among young people.</p>
                </div>

                <div>
                <FontAwesomeIcon icon={faHandshake} className="icon" aria-hidden="true" />
              <h4>Designing Interactive Political Games</h4>
              <p>The project aimed to design and test interactive political games that simulate the challenges of navigating complex political systems. By experiencing these games, participants gained a deeper understanding of political processes and learned how to apply these simulations in youth work, making political education more engaging and accessible for young audiences.</p>
              </div>

              <div>
              <FontAwesomeIcon icon={faMobileScreen} className="icon" aria-hidden="true" />
              <h4>Developing New Tools for Youth Work</h4>
              <p>A key objective was to equip participants with new tools and methods for youth work, particularly focusing on the integration of digital and interactive media. Through workshops and collaborative activities, participants learned how to combine traditional methods with new technologies to create impactful learning experiences for young people.</p>
              </div>

              <div>
              <FontAwesomeIcon icon={faUsers}   className="icon" aria-hidden="true"/>
              <h4>Building International Collaboration</h4>
              <p>The project aimed to foster international collaboration among youth workers and participants from various backgrounds. By working together in teams, participants exchanged ideas, shared best practices, and built strong connections across cultures, ultimately enriching their professional development and expanding their networks in the youth work community.</p>
              </div>
              </div>
            </div>

            <div className="project-imgs">
  <img src="/p4-1.jpg" alt="" />
  <img src="/p4-2.jpg" alt="" />
  <img src="/p4-3.jpg" alt="" />
  <img src="/p4-4.jpg" alt="" />
  <img src="/p4-5.jpg" alt="" />
  
 
</div>      {/*images  */}

          </div>
        )

    }
];

export default projects;
