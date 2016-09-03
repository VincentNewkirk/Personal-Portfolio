'use strict';
import React from 'react';
import { Link } from 'react-router';

class MainButtonBox extends React.Component {
  render(){
    return (
      <div id='main-button-container'>
        <div id='about-button'><Link to='/about'>About</Link></div>
        <div id='projects-button'>Projects</div>
        <div id='contact-button'>Contact</div>
      </div>
    )
  }
}

export default MainButtonBox;