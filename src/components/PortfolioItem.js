import React, { useState, useEffect } from 'react';
import { GrClose } from 'react-icons/gr';
import './PortfolioItem.css';
import "react-alice-carousel/lib/alice-carousel.css";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import ApstroApp1 from '../assets/images/apstroApp1.png';
import ApstroApp2 from '../assets/images/apstroApp2.png';
import ApstroApp3 from '../assets/images/apstroApp3.PNG';
import ApstroWebsite1 from '../assets/images/apstroWebsite1.png';
import ApstroWebsite2 from '../assets/images/apstroWebsite2.png';
import ApstroWebsite3 from '../assets/images/apstroWebsite3.png';
import Portfolio1 from '../assets/images/portfolio1.png';
import Portfolio2 from '../assets/images/portfolio2.png';
import Portfolio3 from '../assets/images/portfolio3.png';

const PortfolioItem = props => {
  const [ learnMoreActive, setLearnMoreActive ] = useState(false);
  const { ref, inView } = useInView();  
  const controls = useAnimation();

  const fadeUp = {
    hidden: { opacity: 0, y: 100},
    visible: { opacity: 1, y: 0 }
  }

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);

  let carouselImages = [];

  if (props.portfolioName === 'apstroApp') {
    carouselImages = [ApstroApp1, ApstroApp2, ApstroApp3]
  } else if (props.portfolioName === 'apstroWebsite') {
    carouselImages = [ApstroWebsite1, ApstroWebsite2, ApstroWebsite3]
  } else if (props.portfolioName === 'portfolio') {
    carouselImages = [Portfolio1, Portfolio2, Portfolio3]
  }

  return (
    <div>
      {learnMoreActive && (<div className='pop-up'>
      <button onClick={() => setLearnMoreActive(false)} className='popup-button'>
        <GrClose size='40px'/> 
      </button>
        <h2 className='popup-title'>About this Project</h2>
        <div className='screenshots'>
          <img src={carouselImages[0]} className='carousel-image' />
          <img src={carouselImages[1]} className='carousel-image' />
          <img src={carouselImages[2]} className='carousel-image' />
        </div>
        <div>
          <button 
            onClick={() => window.open('https://github.com/shaunapenistone', "_blank")} 
            className='popup-github-button'
          >
            Github Repo
          </button>
          {props.portfolioName === 'apstroWebsite' && (
            <button 
              onClick={() => window.open('http://apstro.co.uk/', "_blank")} 
              className='popup-github-button'
            >
              Live Here
            </button>
          )}
        </div>
        <p className='popup-description'>{props.popupDescription}</p>
      </div>)}
      <motion.div 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className='portfolio-group'
      >
        <img 
          src={props.pictureFilepath}
          className='image'
          alt='image of website/app'
        />
        <h2 className='portfolio-title'> {props.title} </h2>
        <p className='languages'> Built with: {props.languages}</p>
        <button onClick={() => setLearnMoreActive(true)} className='button'>Learn More!</button>
      </motion.div>
      
    </div>
  )
}

export default PortfolioItem
