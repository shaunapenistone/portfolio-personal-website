import React from 'react';
import styled from 'styled-components';

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

`

function PortfolioHero() {
  return (
    <View>
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
