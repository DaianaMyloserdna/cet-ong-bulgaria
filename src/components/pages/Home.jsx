import '../../App.css';
import HeroSection from '../HeroSection';
import About from '../About';
import Cards from '../Cards';
import Footer from '../Footer';
import { useState, useEffect } from 'react';

function Home(){

    const [IsHeroVisible, setIsHeroVisible] = useState(
        sessionStorage.getItem('isHeroVisible') !== 'false'
    ); //  Im making the HeroSection to be displayed just once per browser session
    
    useEffect(() => {
        sessionStorage.setItem('isHeroVisible', IsHeroVisible);
    }, [IsHeroVisible]);

    const handleHideHero = () => {
      setIsHeroVisible (false);
      // Here i set visibility to false when i click the button
    };



    return(
        <>
        <div>
              {IsHeroVisible && <HeroSection onHide ={handleHideHero} />}
            </div>
            {/* {!IsHeroVisible && <About />} */}
{/* 
        <HeroSection/> */}
        <About/>
        <Cards />
        <Footer />
        </>
    )
}
export default Home;