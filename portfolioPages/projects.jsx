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
      <Header title='Projects'/>
      <ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={500}>
      </ReactCSSTransitionGroup>
    </div>
  </div>
)

export default projects;