'use strict';
import React from 'react';
import {connect} from 'react-redux';
import Immutable from 'immutable';

import style from "./scss/styles.scss";

class TestBox extends React.Component {
  render(){
    return (
      <div id='main-button-container'>
        <div id='about-button'>About</div>
        <div id='projects-button'>Projects</div>
        <div id='contact-button'>Contact</div>
      </div>
    )
  }
}

export default TestBox;