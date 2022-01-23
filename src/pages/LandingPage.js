import React from 'react';

import Hero from './heroComponents/Hero';
import PortfolioHero from './heroComponents/PortfolioHero';
import ExperienceHero from './heroComponents/ExperienceHero';
import Footer from '../components/Footer';

function LandingPage() {
  return (
    <>
      <div id='contact'>
        <Hero />
      </div>
      <div id='portfolio'>
        <PortfolioHero />
      </div>
      <div id='experience'>
        <ExperienceHero />
      </div>
      <Footer />
    </>
  )
}

export default LandingPage
