import React from 'react';
import styled from 'styled-components';

import Hero from './heroComponents/Hero';
import PortfolioHero from './heroComponents/PortfolioHero';
import SkillsHero from './heroComponents/SkillsHero';
import ExperienceHero from './heroComponents/ExperienceHero';

function LandingPage() {
  return (
    <div>
      <Hero />
      <PortfolioHero />
      {/* <SkillsHero /> */}
      <ExperienceHero />
    </div>
  )
}

export default LandingPage
