'use strict';
import React from 'react';
import { Link } from 'react-router';

const Header = () => (
  <div id='main-header'>
    <div id='about-button'><Link to='/about'>About</Link></div>
    <div id='projects-button'><Link to='/projects'>Projects</Link></div>
    <div id='contact-button'><Link to='/contact'>Contact</Link></div>
  </div>
)

export default Header;