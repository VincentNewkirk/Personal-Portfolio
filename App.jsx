'use strict';
import React from 'react';
import { Link } from 'react-router';
import SideButtons from './portfolioPages/sideButtons.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class MainButtonBox extends React.Component {
  render(){
    return (
      <div id='main-button-container'>
        <SideButtons />
      </div>
    )
  }
}

export default MainButtonBox;