import React from 'react';
import '../styles/navbar.css';

import avi from '../assets/images/Ellipse 6.png';
function Navbar() {
  return (
    <div>
      <div className='navbar'>
        <div className='img-blck'>
        <img className='avi' src={avi} alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Navbar