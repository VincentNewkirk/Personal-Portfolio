'use strict';
import React from 'react';
import { Link } from 'react-router';
import SideButtons from './sideButtons.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const about = () => (
  <div id='about-page'>
    <SideButtons />
    <div id='about-container'>
      <ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={500} transitionLeaveTimeout={300}>
        <h1> Vincent Newkirk </h1>
        <p>Hello there! <br />
        I am a full stack-developer from Honolulu, Hawaii!
        </p>
      </ReactCSSTransitionGroup>
    </div>
  </div>
)

export default about;