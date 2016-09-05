'use strict';
import React from 'react';
import { Link } from 'react-router';
import SideButtons from './sideButtons.jsx';
import Header from './headerPicture.jsx';
import AboutContent from './aboutContent.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const about = () => (
  <div id='about-page'>
    <SideButtons />
    <div id='about-container'>
      <Header />
      <ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={500} transitionLeaveTimeout={300}>
        <AboutContent />
      </ReactCSSTransitionGroup>
    </div>
  </div>
)

export default about;