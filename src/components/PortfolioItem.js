import React, { useState, useEffect } from 'react';
import { GrClose } from 'react-icons/gr';
import './PortfolioItem.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PortfolioItem = props => {
  const [ learnMoreActive, setLearnMoreActive ] = useState(false);
  const controls = useAnimation();
  const { ref, inView } = useInView();

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

  return (
    <div>
      {learnMoreActive && (<div className='pop-up'>
      <button onClick={() => setLearnMoreActive(false)} className='popup-button'>
        <GrClose size='40px'/> 
      </button>
        <h2 className='popup-title'>About this Project</h2>
        {/* <AliceCarousel autoPlay autoPlayInterval={3000}>
          <img src={} className='carousel-image' />
          <img src={} className='carousel-image' />
          <img src={} className='carousel-image' />
          <img src={} className='carousel-image' />
        </AliceCarousel> */}
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
