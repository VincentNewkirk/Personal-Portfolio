'use strict';
import React from 'react';
import { Link } from 'react-router';
import SideButtons from './sideButtons.jsx';
import Header from './headerPicture.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const projects = () => (
  <div id='projects-page'>
    <SideButtons />
    <div id='projects-container'>
      <Header />
      <ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={500}>
        <h1>Projects</h1>
      </ReactCSSTransitionGroup>
    </div>
  </div>
)

export default projects;