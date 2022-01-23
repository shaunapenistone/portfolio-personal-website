import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import './PortfolioHero.css';

import PortfolioItem from '../../components/PortfolioItem';
import ApstroApp from '../../assets/images/appMockup.png';
import ApstroWebsite from '../../assets/images/computerMockup.png';
import PortfolioWebsite from '../../assets/images/portfolioWebsite.png';

const View = styled.div`
  display: flex;
  width: 100%;
  min-height: 120vh;
  height: 100%;
  display: flex; 
  align-items: center;
  flex-direction: column;
`

function PortfolioHero() {
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
    <View>
      <motion.h1 
        className='section-header'
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        My Personal Projects
      </motion.h1>
      <div className='portfolio-container'>
        <PortfolioItem 
          title='Portfolio Website'
          languages='React, JavaScript, CSS, Github' 
          popupDescription='This project includes the following: React Hooks; React Router; Framer Motion; dynamic, reusable custom components; React Icons and GitHub. This website has been mobile optimised'
          pictureFilepath={PortfolioWebsite}
          portfolioName='portfolio'
        />
        <PortfolioItem 
          title='Apstro App'
          languages='React Native, JavaScript, Redux, NPM, Expo, REST APIs, Firebase, 
          Firestore, CSS, Github' 
          popupDescription='To consolidate my React Native knowledge, I have created an Astrology powered social media app that is pending approval in the app store. This project contains the following digital features: user authenticiation using Firebase and Redux; a form that uses Redux to post user data to a RESTFUL API; NPM and Expo; Firebase and Firestore to store user images and data; custom reusable components; React Native Navigation; Async Storage; Image Picker and Firestore Security rules.'
          pictureFilepath={ApstroApp}
          portfolioName='apstroApp'
        />
        <PortfolioItem 
          title='Apstro Website'
          languages='React, JavaScript, CSS, Github' 
          popupDescription='This project includes the following: React Hooks; React Router; Framer Motion; dynamic, reusable custom components; interactive planets; React Icons and GitHub. This website has been mobile and SEO optimised. '
          pictureFilepath={ApstroWebsite}
          portfolioName='apstroWebsite'
        />
      </div>
    </View>
  )
}

export default PortfolioHero
