import React from 'react';

import Hero from './heroComponents/Hero';
import PortfolioHero from './heroComponents/PortfolioHero';
import ContactMeHero from './heroComponents/ContactMeHero';
import ExperienceHero from './heroComponents/ExperienceHero';

function LandingPage() {
  return (
    <>
      <Hero />
      <PortfolioHero />
      <ExperienceHero />
      <ContactMeHero />
    </>
  )
}

export default LandingPage
