'use strict';
import React from 'react';
import SideButtons from './sideButtons.jsx';
import Header from './headerPicture.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const contact = () => (
  <div id='contact-page'>
    <SideButtons />
    <div id='contact-container'>
    <Header />
    <ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={500} transitionLeaveTimeout={300}>
      <h1>Contact Info</h1>
    </ReactCSSTransitionGroup>
    </div>
  </div>
)

export default contact;