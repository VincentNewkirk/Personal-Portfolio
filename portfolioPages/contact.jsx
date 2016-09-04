'use strict';
import React from 'react';
import Header from './header.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const contact = () => (
  <div id='contact-page'>
    <Header />
    <ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={500}>
      <h1>Contact Info</h1>
    </ReactCSSTransitionGroup>
  </div>
)

export default contact;