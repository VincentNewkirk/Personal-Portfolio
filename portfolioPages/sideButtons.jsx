'use strict';
import React from 'react';
import { Link } from 'react-router';
import HeaderButton from './header-buttons.jsx';
import Radium from 'radium';
const Menu = require('react-burger-menu').bubble;

let RadiumLink = Radium(Link);


const SideButtons = React.createClass({
  // showSettings: function(event) {
  //   event.preventDefault();
  //   .
  //   .
  //   .
  // },
  render: function() {
    return (
      <Menu width={200} isOpen >
        <RadiumLink id="about" className="menu-item" to="/about">About</RadiumLink>
        <RadiumLink id="projects" className="menu-item" to="/projects">Projects</RadiumLink>
        <RadiumLink id='skills' className="menu-item" to="/skills">Skills</RadiumLink>
        <RadiumLink id="contact" className="menu-item" to="/contact">Contact</RadiumLink>
      </Menu>
    );
  }
});

// class SideButtons extends React.Component{
//   render () {
//     return (
//       <div id='main-header'>
//         <HeaderButton linkPath='/about' title='About' />
//         <HeaderButton linkPath='/projects' title='Projects' />
//         <HeaderButton linkPath='/skills' title='Skills' />
//         <HeaderButton linkPath='/contact' title='Contact' />
//       </div>
//     )
//   }
// }

export default SideButtons;