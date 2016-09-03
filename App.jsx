'use strict';
import React from 'react';
import { Link } from 'react-router';
import Header from './portfolioPages/header.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class MainButtonBox extends React.Component {
  render(){
    return (
      <div id='main-button-container'>
        <Header />
      </div>
    )
  }
}

export default MainButtonBox;