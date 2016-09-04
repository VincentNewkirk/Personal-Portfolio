'use strict'
import React from 'react';
import SideButtons from './sideButtons.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Header from './headerPicture.jsx';



const Skills = () => (
  <div id='skills'>
    <SideButtons />
    <div id='skills-container'>
    <Header />
    <ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={500} transitionLeaveTimeout={300}>
      <h1>Techincal Skills</h1>
      <div>
        List of Proficiencies:
      </div>
     </ReactCSSTransitionGroup>
    </div>
  </div>
)

export default Skills;