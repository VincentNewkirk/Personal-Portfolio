'use strict';
import React from 'react';
import { Link } from 'react-router';

class about extends React.Component {
  render(){
    return (
      <div id='about-page'>
        <h1> Vincent Newkirk </h1>
        <p>Hello Hello</p>
        <div className='back-button'><Link to='/'>Back</Link></div>
      </div>
    )
  }
}

export default about;