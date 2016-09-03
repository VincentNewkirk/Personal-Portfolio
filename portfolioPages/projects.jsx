'use strict';
import React from 'react';
import { Link } from 'react-router';

class projects extends React.Component {
  render(){
    return(
      <div id='projects-page'>
        <h1>Projects</h1>
      <div className='back-button'><Link to='/'>Back</Link></div>
      </div>
    )
  }
}

export default projects;