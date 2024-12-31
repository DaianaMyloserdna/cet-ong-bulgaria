import React, { useState } from "react";
import '../../App.css';
import Footer from "../Footer";
import './Pictures.css';

function Pictures() {
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
        'p1-1.jpg',
        'p1-2.jpg',
        'p1-3.jpg',
        'p1-4.jpg',
        'p1-5.jpg',
        'p1-6.jpg',
        'p2-1.png',
        'p2-2.jpg',
        'p2-3.jpg',
        'p2-4.jpg',
        'p2-5.jpg',
        'p2-6.jpg',
        'p3-1.jpg',
        'p3-2.jpg',
        'p3-3.jpg',
        'p3-4.jpg',
        'p3-6.jpg',
        'p3-5.jpg',
        'p4-1.jpg',
        'p4-2.jpg',
        'p4-3.jpg',
        'p4-4.jpg',
        'p4-5.jpg',

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
            <h1 className="pictures">PICTURES</h1>
            
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
    );
}

export default Pictures;
