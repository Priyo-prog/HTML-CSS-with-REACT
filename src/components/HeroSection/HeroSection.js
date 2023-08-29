import React from 'react';
import hero from '../images/hero.png';
import './HeroSection.css';
import ImageSection from "./ImageSection";
import HowSection from './HowSection';

function HeroSection() {
    return(
        <main>
        <section className='section-hero'>
        <div className='hero'>    
        <div className='hero-text-box'>
         <h1 className='heading-primary'>A healthy meal delivered to your door, every single day</h1>
         <p className='hero-description'>
         The smart 365-days-per-year food subscription that will make you eat healty again. 
         Tailored to your personal tastes and nutritional needs. 
         We have delivered 250,000+ meals last year
         </p>
         <a href="#" className='btn btn--full margin-right-sm'>Start eating</a>
         <a href="#" className='btn btn--outline'>Learn more &darr;</a>

         <ImageSection/>

        </div>

        <div className='hero-image-box'>
         <img src={hero} className='hero-img'alt="Woman enjoying Food" />         
        </div>
        </div>
       </section> 

       <HowSection />

       </main>
    )

}

export default HeroSection;