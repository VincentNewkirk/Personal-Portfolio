'use strict'
import React from 'react';
import SkillsContent from './skills-content.jsx';
import SideButtons from './sideButtons.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Header from './headerPicture.jsx';



const Skills = () => (
  <div id='skills'>
    <SideButtons />
    <div id='skills-container'>
    <Header title='Techincal Skills'/>
    <ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={500} transitionLeaveTimeout={300}>
      <SkillsContent />
     </ReactCSSTransitionGroup>
    </div>
  </div>
)

export default Skills;