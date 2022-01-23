import React from 'react';
import styled from 'styled-components';
import TypeAnimation from 'react-type-animation';

import './Hero.css';
import Avatar from '../../assets/images/avatar.jpg'

const View = styled.div`
  display: flex;
  width: 100%;
  min-height: 95vh;
  height: 100%;
  display: flex; 
  align-items: center;
`

function Hero() {
  return (
    <View>
      <div className='all-of-text'>
        <img src={Avatar} className='avatar-image' alt='avatar of me'/>
        <h2 className='title'>Hi, I'm Shauna! </h2>
        <div className='sub-header-container'>
          <h2 className='sub-header-text'>I'm a  
            {<div className='typing-container'>
                <TypeAnimation
                  cursor={false}
                  sequence={[
                    'JavaScript', 
                    3000,
                    'Frontend',
                    3000,
                    'React Native',
                    3000,
                  ]}
                  repeat={Infinity}
                />
              </div>
              }
            Developer
          </h2>
          <div className='location-text-container'>
            <h2 className='sub-header-text'>based in </h2>
            <h2 className='emphasis-text'>Manchester</h2>
          </div>
        </div>
      </div>
    </View>
  )
}

export default Hero
