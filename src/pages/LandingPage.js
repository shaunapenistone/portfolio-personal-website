import React from 'react';
import styled from 'styled-components';

import Hero from './heroComponents/Hero';
import PortfolioHero from './heroComponents/PortfolioHero';

function LandingPage() {
  return (
    <div>
      <Hero />
      <PortfolioHero />
    </div>
  )
}

export default LandingPage
