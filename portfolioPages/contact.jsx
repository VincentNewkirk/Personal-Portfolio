'use strict';
import React from 'react';
import SideButtons from './sideButtons.jsx';
import Header from './headerPicture.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Contact extends React.Component{
  render(){
    return(
      <div id='contact-page'>
        <SideButtons />
        <div id='contact-container'>
        <Header title='Contact Info'/>
        <ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={500} transitionLeaveTimeout={300}>
          <div className='content-box'>
            <a target='_blank' href='https://github.com/VincentNewkirk'><span class='contact-link'>Github</span></a><br/>
            <a target='_blank' href='https://www.linkedin.com/in/vincent-newkirk-2052a236'><span class='contact-link'>LinkedIn</span></a><br/>
            <a target='_blank' href='https://docs.google.com/document/d/1uOyhbbj9y1PRkShbVcgpuIUsg565g8hK5fgapx9XYAo/edit?usp=sharing'>
            <span>Resume</span></a><br/>
            <a target='_blank' href='mailto:vincentnewkrik@gmail.com'>E-mail</a>
          </div>
        </ReactCSSTransitionGroup>
        </div>
      </div>
    )
  }
}

export default Contact;