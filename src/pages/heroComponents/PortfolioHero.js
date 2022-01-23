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
  min-height: 100vh;
  height: 100%;
  display: flex; 
  align-items: center;
  flex-direction: column;
  margin: auto
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
          popupDescription='Blah blah blah'
          pictureFilepath={PortfolioWebsite}
        />
        <PortfolioItem 
          title='Apstro App'
          languages='React Native, JavaScript, Redux, REST Api, Firebase, 
          Firestore, CSS, Github' 
          popupDescription='Blah blah blah'
          pictureFilepath={ApstroApp}
        />
        <PortfolioItem 
          title='Apstro Website'
          languages='React, JavaScript, CSS, Github' 
          popupDescription='Blah blah blah'
          pictureFilepath={ApstroWebsite}
        />
      </div>
    </View>
  )
}

export default PortfolioHero
