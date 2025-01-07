import React, {useState} from 'react';
import '../../App.css';
import Footer from '../Footer';
import './ProjectLocation.css';

function ProjectLocation() {

const images = [
'loc-1.jpg',
'loc-2.jpg',
'loc-3.jpg',
'loc-4.jpg',
'loc-5.jpg',
'loc-6.jpg',
'loc-7.jpg',
'loc-8.jpg',
'loc-9.jpg',
'loc-10.jpg',
];

 const [selectedIndex, setSelectedIndex] = useState(null);

    const openModal = (index) => {
        setSelectedIndex(index);
    };

    const closeModal = () => {
        setSelectedIndex(null);
    };

    const showNext = () => {
        setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const showPrev = () => {
        setSelectedIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

  return (
    <>
    <h1 className="project-location-container">PROJECT LOCATION</h1>
    <p className='location-description'>Youtopia Riverside, just outside Stara Zagora, Bulgaria, is a cozy and recently renovated space that’s perfect for group projects and events. It has plenty of clean, comfortable rooms with towels provided, a fully equipped kitchen, and a big activity room where workshops are held. The house is surrounded by nature, offering peace and quiet, but it’s still close to the city for convenience.

For meals, Salt and Pepper Restaurant in Stara Zagora is the daily caterer for our projects, serving delicious and varied dishes. On some days, we mix things up with Chinese food or pizza. There’s also a pool and a jacuzzi, so don’t forget to bring your swimsuits for some fun and relaxation during your stay!</p>
    
    {/* Display all images */}
    <div className="image-gallery">
                {images.map((image, index) => (
                    <div key={index} className="image-item">
                        <img 
                            src={`/public/${image}`} // Retained custom path
                            alt={`CET Platform project ${index + 1}`} 
                            className="gallery-image"
                            onClick={() => openModal(index)} // Open modal on click
                        />
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedIndex !== null && (
                <div className="modal" onClick={closeModal}>
                    <span className="close">&times;</span>
                    <img 
                        className="modal-content" 
                        src={`/public/${images[selectedIndex]}`} 
                        alt={`CET Platform project ${selectedIndex + 1}`} 
                    />
                    <div className="modal-navigation">
                        <button className="prev-button" onClick={(e) => { e.stopPropagation(); showPrev(); }}>❮</button>
                        <button className="next-button" onClick={(e) => { e.stopPropagation(); showNext(); }}>❯</button>
                    </div>
                </div>
            )}

    <Footer />
    </>
  )
}

export default ProjectLocation;