import React, { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import './PortfolioItem.css';

const PortfolioItem = props => {
  const [ learnMoreActive, setLearnMoreActive ] = useState(false);

  return (
    <div>
      {learnMoreActive && (<div className='pop-up'>
      <button onClick={() => setLearnMoreActive(false)} className='popup-button'>
        <GrClose color='white' size='40px'/> 
      </button>
        <h2 className='popup-title'>About this Project</h2>
        <p className='popup-description'>{props.popupDescription}</p>
      </div>)}
      <div className='portfolio-group'>
        <img 
          src={props.pictureFilepath}
          className='image'
          alt='image of website/app'
        />
        <h2 className='title'> {props.title} </h2>
        <p className='languages'> Built with: {props.languages}</p>
        <button onClick={() => setLearnMoreActive(true)} className='button'>Learn More!</button>
      </div>
      
    </div>
  )
}

export default PortfolioItem
