import React from 'react';

import Hero from './heroComponents/Hero';
import PortfolioHero from './heroComponents/PortfolioHero';
import ExperienceHero from './heroComponents/ExperienceHero';
import Footer from '../components/Footer';

function LandingPage() {
  return (
    <>
      <Hero />
      <PortfolioHero />
      <ExperienceHero />
      <Footer />
    </>
  )
}

export default LandingPage
