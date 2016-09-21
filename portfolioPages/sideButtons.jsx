'use strict';
import React from 'react';
import { Link } from 'react-router';
import HeaderButton from './header-buttons.jsx';
import Radium from 'radium';
const Menu = require('react-burger-menu').bubble;

let RadiumLink = Radium(Link);


class SideButtons extends React.Component{
  render() {
    return (
      <Menu width={150} noOverlay >
        <span id='menu-name'>Vince</span>
        <RadiumLink id="about" className="menu-item" to="/about">About</RadiumLink>
        <RadiumLink id="projects" className="menu-item" to="/projects">Projects</RadiumLink>
        <RadiumLink id='skills' className="menu-item" to="/skills">Skills</RadiumLink>
        <RadiumLink id="contact" className="menu-item" to="/contact">Contact</RadiumLink>
      </Menu>
    );
  }
};

export default SideButtons;