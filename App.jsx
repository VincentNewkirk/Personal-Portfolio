'use strict';
import React from 'react';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class MainButtonBox extends React.Component {
  render(){
    return (
      <div id='main-button-container'>
        <ReactCSSTransitionGroup transitionName="main-button-animation" transitionAppear={true} transitionAppearTimeout={500}>
          <div id='about-button'><Link to='/about'>About</Link></div>
          <div id='projects-button'><Link to='/projects'>Projects</Link></div>
          <div id='contact-button'><Link to='/contact'>Contact</Link></div>
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default MainButtonBox;