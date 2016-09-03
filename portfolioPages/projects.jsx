'use strict';
import React from 'react';
import { Link } from 'react-router';
import Header from './header.jsx';

class projects extends React.Component {
  render(){
    return(
      <div id='projects-page'>
        <Header />
        <h1>Projects</h1>
      <div className='back-button'><Link to='/'>Back</Link></div>
      </div>
    )
  }
}

export default projects;