import React from 'react';
import SideButtons from '../sideButtons.jsx';
import Header from '../headerPicture.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const XtinctPage = () => (
  <div id='xtinct-page'>
    <SideButtons />
    <Header title='Xtinct.Online'/>
    <div className='content-box'>
      <ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={500}>
          <span>We made a map of extinct animals. Live at <a href='www.xtinct.online'>xtinct.online</a>
          </span>
      </ReactCSSTransitionGroup>
    </div>
  </div>
)

export default XtinctPage