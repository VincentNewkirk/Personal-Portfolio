'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import MainButtonBox from './App.jsx';
import about from './portfolioPages/about.jsx';
import projects from './portfolioPages/projects.jsx';
import Contact from './portfolioPages/contact.jsx';
import style from "./scss/styles.scss";
import Skills from './portfolioPages/skills.jsx'
import { Router, Route, hasHistory } from 'react-router';
import XtinctPage from './portfolioPages/xtinct.jsx';
import KanbanPage from './portfolioPages/projects/kanban.jsx';
import ExpressPage from './portfolioPages/projects/express.jsx';

ReactDOM.render(
  <Router history={hasHistory}>
    <Router path='/' component={about} />
    <Router path='/about' component={about} />
    <Router path='/projects' component={projects} />
    <Router path='/contact' component={Contact} />
    <Router path='/skills' component={Skills} />
    <Router path='/xtinct' component={XtinctPage} />
    <Router path='/kanban' component={KanbanPage} />
    <Router path='/express' component={ExpressPage} />
  </Router>,
  document.getElementById('content')
);