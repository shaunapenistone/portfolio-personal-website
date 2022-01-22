import React from 'react';
import styled from 'styled-components';
import TypeAnimation from 'react-type-animation';

import './Hero.css';
import Avatar from '../../assets/images/avatar.jpg'

const View = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex; 
  align-items: center;
`


function Hero() {
  return (
    <View>
      <div className='all-of-text'>
        <img src={Avatar} className='avatar-image' alt='avatar of me'/>
        {/* <h1 className='title'>Welcome</h1> */}
        <div className='sub-header-container'>
          <h2 className='sub-header-text'>I am a  
            {<div className='typing-container'>
                <TypeAnimation
                cursor={false}
                sequence={[
                  ' JavaScript ', 
                  3000,
                  ' Frontend ',
                  3000,
                  ' React Native ',
                  3000,
                ]}
                style={{width: '10em'}}
                // wrapper="h2"
                repeat={Infinity}
                />
              </div>
              }
            Developer
          </h2>
        </div>
      </div>
    </View>
  )
}

export default Hero
