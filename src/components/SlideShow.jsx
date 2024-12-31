import React, { useEffect, useState } from 'react';

function SlideShow() {
    const images = [
        // '1_n.jpg', 
        // '2_n.jpg',
        // '4_n.jpg',
        // '5_n.jpg',
        // '6_n.jpg',
        // '7_n.jpg',
        // '8_n.jpg',
        // '9_n.jpg',
        // '10_n.jpg',
        // '11_n.jpg',
        // '12_n.jpg',
        // '13_n.jpg',
        // '14_n.jpg',
        // '15_n.jpg',
        // '16_n.jpg',
        // '17_n.jpg',
        // '18_n.jpg',
        // '19_n.jpg',
        // '20_n.jpg',
        // 'p1-1.jpg',
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

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    const currentImage = `/public/${images[currentIndex]}`;

    // Debugging output for the src path
    console.log('Current image source:', currentImage);

    return (
        <>
            <img
                className="images-slideshow"
                src={currentImage} // Ensure the path is correct
                alt={`Slide showing ${images[currentIndex]}`} // More descriptive alt text
            />
        </>
    );
}

export default SlideShow;
