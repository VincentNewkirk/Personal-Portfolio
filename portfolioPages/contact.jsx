'use strict';
import React from 'react';
import SideButtons from './sideButtons.jsx';
import Header from './headerPicture.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const contact = () => (
  <div id='contact-page'>
    <SideButtons />
    <div id='contact-container'>
    <Header title='Contact Info'/>
    <ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={500} transitionLeaveTimeout={300}>
      <div className='content-box'>
        <a href='https://github.com/VincentNewkirk'><span class='contact-link'>Github</span></a><br/>
        <a href='https://www.linkedin.com/in/vincent-newkirk-2052a236'><span class='contact-link'>LinkedIn</span></a><br/>
        <a href='https://docs.google.com/document/d/1uOyhbbj9y1PRkShbVcgpuIUsg565g8hK5fgapx9XYAo/edit?usp=sharing'>
        <span>Resume</span></a><br/>
        <a href='mailto:vincentnewkrik@gmail.com'>E-mail</a>
      </div>
    </ReactCSSTransitionGroup>
    </div>
  </div>
)

export default contact;