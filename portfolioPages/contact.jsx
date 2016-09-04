'use strict';
import React from 'react';
import SideButtons from './sideButtons.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const contact = () => (
  <div id='contact-page'>
    <SideButtons />
    <ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={500} transitionLeaveTimeout={300}>
      <h1>Contact Info</h1>
    </ReactCSSTransitionGroup>
  </div>
)

export default contact;