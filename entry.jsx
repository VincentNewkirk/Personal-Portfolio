'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import MainButtonBox from './App.jsx';
import about from './portfolioPages/about.jsx';
import projects from './portfolioPages/projects.jsx';
import contact from './portfolioPages/contact.jsx';
import style from "./scss/styles.scss";
import Skills from './portfolioPages/skills.jsx'
import { Router, Route, hasHistory } from 'react-router';

ReactDOM.render(
  <Router history={hasHistory}>
    <Router path='/' component={about} />
    <Router path='/about' component={about} />
    <Router path='/projects' component={projects} />
    <Router path='/contact' component={contact} />
    <Router path='/skills' component={Skills} />
  </Router>,
  document.getElementById('content')
);