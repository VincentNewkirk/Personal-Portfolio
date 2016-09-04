'use strict';
import React from 'react';
import { Link } from 'react-router';
import HeaderButton from './header-buttons.jsx';

class SideButtons extends React.Component{
  render () {
    return (
      <div id='main-header'>
        <HeaderButton linkPath='/about' title='About' />
        <HeaderButton linkPath='/contact' title='Contact' />
        <HeaderButton linkPath='/projects' title='Projects' />
      </div>
    )
  }
}

export default SideButtons;