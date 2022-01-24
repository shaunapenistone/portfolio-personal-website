import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi'
import { BsFillTriangleFill } from 'react-icons/bs';
import { HashLink } from 'react-router-hash-link';
import './Navbar.css';

function Navbar() {
  const [ click, setClick ] = useState(false);

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div class="menu-icon" onClick={handleClick}>
            {click ? 
              <BsFillTriangleFill color='pink' size='35px'/> 
              : <FiMenu color='pink' size='35px'/> 
            }
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <HashLink smooth to={"/#portfolio"} className='nav-links' >
                Portfolio
              </HashLink>
            </li>
            <li className='nav-item'>
              <HashLink smooth to={"/#contact"} className='nav-links' onClick={closeMobileMenu}>
                Contact Me
              </HashLink>
            </li>
            <li className='nav-item'>
              <HashLink smooth to={"/#experience"} className='nav-links' onClick={closeMobileMenu}>
                Experience
              </HashLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
