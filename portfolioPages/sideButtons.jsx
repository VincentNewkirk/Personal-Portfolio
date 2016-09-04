'use strict';
import React from 'react';
import { Link } from 'react-router';
import HeaderButton from './header-buttons.jsx';

class SideButtons extends React.Component{
  render () {
    return (
      <div id='main-header'>
        <HeaderButton linkPath='/about' title='About' />
        <HeaderButton linkPath='/projects' title='Projects' />
        <HeaderButton linkPath='/skills' title='Skills' />
        <HeaderButton linkPath='/contact' title='Contact' />
      </div>
    )
  }
}

export default SideButtons;