import React from 'react';
import styled from 'styled-components';

import { TiSocialLinkedin } from 'react-icons/ti';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';

import './Footer.css'

const View = styled.div`
  display: flex;
  width: 100%;
  display: flex; 
  align-items: center;
  margin-top: 100px
`

function Footer() {
  return (
    <View>
      <div className='footer-container'>
        <h2 className='copyright'>coded by Shauna</h2>
        <div className='social-logo-container'>
          <a target="_blank" href="https://www.linkedin.com/in/shauna-penistone-aa3437174/" rel="noreferrer">
            <TiSocialLinkedin color='white' className='social-icons' size={25}/>
          </a>
          <a target="_blank" href="https://github.com/shaunapenistone" rel="noreferrer">
            <AiFillGithub color='white' className='social-icons' size={25}/>
          </a>
          <a target="_blank" href="mailto:shauna.penistone@hotmail.com" rel="noreferrer">
            <AiOutlineMail color='white' className='social-icons' size={25}/>
          </a>
        </div>
      </div>
    </View>
  )
}

export default Footer
