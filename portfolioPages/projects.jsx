'use strict';
import React from 'react';
import { Link } from 'react-router';
import Header from './header.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const projects = () => (
  <div id='projects-page'>
    <Header />
    <ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={500}>
      <h1>Projects</h1>
    </ReactCSSTransitionGroup>
  </div>
)

export default projects;